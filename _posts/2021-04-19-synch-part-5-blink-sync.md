---
layout: post
title: "Synch.Live"
subtitle: "Part 5: In Search of Lost Time"
description: We use Network Time Protocol and chronyd to synchronise our 10 Raspberry Pi Zero W wearables to blink in sync
hidetitle: "display:none"
categories: numbers
tags: raspberrypi, linux, orchestration
permalink: "synch-live-part-5"
sections:
 - title: In search of lost time
   url: '#in-search-of-lost-time'
   nested:
    - title: Instructions
      url: '#instructions'
 - title: A tale of two clocks
   url: '#a-tale-of-two-clocks'
   nested:
    - title: The DS1307 RTC module
      url: '#the-ds1307-rtc-module'
 - title: Synchronising clocks
   url: '#synchronising-clocks'
   nested:
    - title: Time protocols
      url: '#time-protocols'
    - title: The Daemons of Time
      url: '#the-daemons-of-time'
    - title: The Time Server
      url: '#the-time-server'
 - title: Scheduling
   url: '#scheduling'
 - title: Bibliography
   url: '#bibliography'
---

### In search of lost time

Synchronisation in nature: a strange and magnificent phenomenon. Synchronisation in tech: a strange and debilitating nightmare. We have built 10 headsets equipped with LED lights and our goal is to trigger the lights perfectly in sync.

The real-time clock (RTC) hardware module we installed on our headsets in [part 3](/synch-live-part-3) now comes seriously into play...

![](/assets/img/posts/synch/clock-headset.webp)

The hardware clock will help us maintain the date and time correctly for our headsets, so that they can be perfectly synchronised when they are told to start blinking at the same time. At least, in theory?

So then why are the blinking LEDs on the hats not synchronised?

Are we entering the stormy seas of distributed systems? Do we need to look into Leslie Lamport's distributed clock synchronisation algorithm? Dive into another textbook by Tanenbaum? Or even worse, do we have to modify and recompile the Linux kernel on Raspberry Pi to make it a real-time kernel?

Thankfully not, thanks to a good [system design](/synch-live-part-1#system-design). We can use a central time server, since we know there will always be a central node which all headsets communicate with, as well as one router to rule, I mean, route them all.

Our system lives at the strange boundary between real-time systems and non-real time systems. We define two lights as synchronised if they blink more-or-less within the same frame in a 24fps video. This is the equivalent of a ~40ms accuracy.
With a deeper understanding of how Linux handles clocks, time protocols and time daemons, indeed we can achieve synchronisation within tens-of-miliseconds. Now what remained is achieving similar precision in scheduling, and generally at the software level.

This article is part of a series describing my collaboration with [Hillary Leone](https://hillaryleone.com) on [Synch.Live](https://www.synch.live).
To summarise, Synch.Live is a _game in which of groups of strangers try to solve a group challenge, without using words.  We will use a specially-designed headlamp, simple rules and a just-published algorithm to create the conditions for human emergence._
A discussion about emergence and the goals of the project is in a [previous article](/synch-live-part-1).

<br/>

#### Instructions


1. Build the player hat based on the prototype designed in [the previous post](/synch-live-part-3).
2. Set up the OS on the card - [instructions & code](https://github.com/mearlboro/Synch.Live/blob/dev-setup/setup/)
3. Deploy configuration and software using Ansible - [instructions & code](https://github.com/mearlboro/Synch.Live/tree/dev-ansible/ansible)
4. Configure a time server on the router
5. Synchronise the clocks on the players using Ansible

If you would like to know more about how everything works, all the tools we've tried, and how we specifically configured the time server on the router, then continue reading. Otherwise, for a quick setup, see the README files in the code repository.

<br/>

### A tale of two clocks

As our headsets run Raspberry Pi OS, a Linux distribution, the first step is to get familiar with how timekeeping works on Linux.

Linux has two types of clocks: hardware clocks and software clocks. The former is a battery-powered device which which runs independently of the operating system, in our case the RTC module, and can be configured in local time or universal time. We choose to set it to universal time so we don't have issues with timezones.

As the hardware clock is normally battery-powered, it will keep time even when the RPi is shut down.

The software clock, on the other hand, also known as the system or kernel clock, keeps track of time at the software level independently from the hardware clock. The kernel clock is normally updated from the hardware clock at every boot. Note that many RPis do not use a hardware clock module, so the kernel instead reads from a "fake" hwclock. In [part 3](/synch-live-part-3) of this series, we have removed the lines from `/etc/udev/hwclock` which do that. (How this fake hwclock works is arcane and beyond the scope of this foray into clocks)

The kernel clock alwas shows universal time, and uses the timezone specified at the OS level. You can see this by running the command below

```
$ timedatectl status
               Local time: Sun 2021-04-11 23:06:43 BST
           Universal time: Sun 2021-04-11 22:06:43 UTC
                 RTC time: Sun 2021-04-11 22:06:43
                Time zone: Europe/London (BST, +0100)
System clock synchronized: yes
              NTP service: active
          RTC in local TZ: no
```
Local and universal time above come from the kernel clock, as you can see the RTC time matches the universal time, and the local time is correct with respect to the timezone.

To write or read the kernel clock, the command used in Linux is `date`, whilst for the hardware clock it's `hwclock`.

To copy the time from the hardware clock to the software clock, we use
```console
$ sudo hwclock -s
```

To copy the time from the software clock to the hardware clock, we use
```console
$ sudo hwclock -w
```

But why would we need to ever copy the time from the software clock to the hardware, you ask?

Because even accurate RTCs have some drift. The best way to understand drift is that every million seconds, the clock will lag behind a number of seconds, which need to be accounted for.
Unless one uses an [atomic clock](https://www.ebay.co.uk/itm/GPS-Disciplined-Clock-Rubidium-Clock-Atomic-Clock-10M-Output-SINE-WAVE-PCBA/363244244222), it is realistic to assume that our small, battery powered, quartz-crystal based clock module will at some point drift more than our setup allows. But how much will inform our implementation.


#### The DS1307 RTC module

The timekeeping module we use for the headsets, the RTC Pi, uses a [DS1307](https://www.abelectronics.co.uk/docs/pdf/maxim-ds1307.pdf) crystal-based circuit. The crystal, as specified by the [circuit diagram](https://www.abelectronics.co.uk/docs/pdf/schematic-rtcpi-v3.pdf), is CRYSTALTC26H.
The accuracy of the clock depends on that of the crystal. Moreover, environmental conditions, such as temprature, will also cause frequency drift.

Clock accuracy is usually defined in terms of ppm, or parts per million. if a day has 86400 seconds, an accuracy of 100ppm will mean a drift of 8.64 seconds in a day. The spec sheet states an accuracy of 20ppm, so we expect about +-1.782 seconds of drift per day. As each circuit has its own idiosyncracies, we cannot expect the exact same amount of drift in all 10 devices. Ergo, running the experiment in two consecutive days without resynchronising the clocks will definitely result in desynchronised behaviour.

Therefore, not only does the system clock need to get synchronised to the hardware clock, but before each experiment, the hardware clock needs to be synchronised to the system clock.

![](/assets/img/posts/synch/ouroboros.jpeg)

Before this becomes a terrifying circular problem, the local (or global) network will come to rescue. Each large infrastructure company has their own time servers powered by way more sentive clocks than our little DS1307, and than more computers. And most operating systems provide protocols to handle clock synchronisation whenever a computer connects to a network.


### Synchronising clocks

#### Time protocols
The most well-known time protocols are the Network Time Protocol (NTP), the Simple Network Time Protocol (SNTP) and the Precision Time Protocol (PTP). Each of them was created with different use-cases in mind, with NTP being the oldest and most generic.

NTP can usually maintain time to within tens of milliseconds over the public Internet, and can achieve better than one millisecond accuracy in local area networks under best conditions. NTP makes use of hierarchical strata of time servers, located in various areas in the world, and classified according to the network degree of separation from the clocks which are the source of time signals.

![](/assets/img/posts/synch/ntp-strata.jpg)

The first stratum 0 are normally hosted by countries or research institutes and powered by atomic clocks, national radio time broadcasts, or high-precision clock signals transmitted by GPS satellites. No stratum 0 packets are ever sent over the Internet; these super-high precision clocks are directly connected to stratum 1 devices via wired or satellite links, which then distribute the time to other clients over the Internet.

Stratum 1 devices are normally made by commercial companies and specifically designed to connect to stratum 0 with high accuracy. Therefore there are not many publicly available stratum 1 servers to synchronise to.

Several thousand stratum 2 servers are publicly available and the [NTP Pool Project](https://www.ntppool.org/en/) aggregates them in pools grouped by geography. A client can access a pool in a certain country and the system will refer the client to the NTP server that is closest. Stratum 2 clients become stratum 3 servers when used to distribute time to other clients; if those clients have clients, they become stratum 4 and so on. The protocol supports 15 strata.

Stratum 16 is normally used to indicate that the server is not currently reliably synchronised with a time source.

To synchronise the system clock on a Linux system, for example with the UK stratum 2 pool, we can use `ntpdate`
```console
$ sudo ntpdate 0.uk.pool.ntp.org
```

SNTP was created in the 90s as an lightweight alternative to NTP, but thankfully computers today no longer have the hardware limitations that once constrained the use of NTP. Both protocols can be used over wired or wireless networks and rely on the same hierarchical infrastructure.

PTP, introduced in 2002, relies on the same stratum 0 clocks and stratum 1 devices, but a separate hierarchy emerges. In contrast, PTP is a lot more precise than both NTP and SNTP, but normally requires a wired connection and is [not supported on RPi](https://www.raspberrypi.org/forums/viewtopic.php?p=1462916) even using ethernet, as the controller does not support hardware timestamping.

#### The daemons of time

The first thing to figure out was how exactly one controls the time on a Linux device, specifically one running Raspberry Pi OS.
As time is serious system business, it is handled by a daemon - a piece of software which runs in the background and manages operating system functions. There are several daemons that deal with both fetching and setting system time, dark and mysterious enough that reading about them competes with a treatise on daemonology.

![](/assets/img/posts/synch/timedaemons.png)

The canonical Linux implementation of NTP is `ntpd`.
There's also [`xntpd`](http://doc.ntp.org/3-5.93e/xntpd.html), and `timed`, which as far as I can tell are closed-source implementations of NTP by IBM.

`chronyd`, another open-source option, has replaced `ntpd` in both [Fedora 16](https://fedoraproject.org/wiki/Features/ChronyDefaultNTP) and [Ubuntu 18.04](https://bugs.launchpad.net/ubuntu/+source/chrony/+bug/1744072). Both `chronyd` and `ntpd` are available for RPi.

Aside from `chronyd`, a `timesyncd` daemon has been added in [systemd version 213](https://lists.freedesktop.org/archives/systemd-devel/2014-May/019537.html).  `timesyncd` is different from `chronyd` or `ntpd` insofar as it only implements the client side. This makes it lighter and less complex\*.

Since `timesyncd` is already included in `systemd`, and thus in the Linux kernel, and is advertised as very lightweight, it seemed like the most natural starting choice. But after spending a couple of days dissecting it and setting it up, and wondering why there are up to one second differences between each of the headsets, it finally sank in that `timesyncd` is a SNTP client.

This has two drawbacks: first, by virtue of it being a client only, it actually requires an underlying NTP implementation - which brings us back to either `ntpd` or `chronyd`.
The second is that it's an SNTP and not an NTP client. One of the practical outcomes of this is that it sets the time without disciplining it, and it lacks really important features, such as the ability to instantaneously correct the time, to choose the best server from a pool, or to talk to hardware clocks.
Last, but not least, based on my tests, `timesyncd` cannot achieve acuracy much higher than 200ms even on a local network.

With both `ptpd` and `timesyncd` out of the way, the choice was between `ntpd` and `chronyd`. Reading the notes of its inclusion into Fedora, it became clear that Chrony is superior to `ntpd` due to both features and speed.

Although the choice of NTP and `chronyd` seems obvious now, it was not so when I first started dwelling into the arts of time synchronisation. On average, `chronyd` can synchronise with the same time server faster than the old `ntpd` service. This is what the developers claim as well as what I have observed when timestamping before and after the synchronisation with both daemons.

The [Chrony](https://chrony.tuxfamily.org/) package contains two utilities: `chronyd`, to be run as a service, and `chronyc`, a command line interface that can be used to adjust the time and to fetch drifts between the current device's clock and chosen time servers.

Moreover, Chrony accounts and adjusts for unstable network connections and network latency, and is the recommended solution for devices that are not always online. Finally Chrony never ever stops the clock, and never 'jumps' in time. The adjustments are made gradually, which is very useful to maintain a steady clock and remove that daily drift incrementally.

Last, but not least, `chronyd` can be setup to periodically sync back-and-forth with the hardware clock.


#### The time server

After running a few tests with the UK pool, it became clear that the latency introduced by the network may reduce precision below our desired ~50ms. Therefore, I started investigating how to run a Chrony server locally.

We are not interested in the clocks being accurate with respect to stratum 0, but more in how close the clocks of all the headsets are to each-other. Therefore, as our local server synchronised to the UK stratum 2 pool becomes a stratum 3 server, the headsets become stratum 4. From a global perspective they may be less accurate overall, but the fact that they synchronise to a server in the same network allows them to be more synchronised with each-other.

After playing with a Chrony server on my laptop, in preparation for installing a time server on the RPi 4 we will be using as a control centre and observer for the experment, it dawned on me that [the router](/synch-live-part-4#router-model) can be used as a time server. This will also allow the headsets and the observer to be on the same stratum.

The Netgear router runs its own NTP server and synchronises the time with a Netgear NTP server (not sure if its stratum 1 or 2, but it doesn't matter) [every time it connects to the Internet successfully](https://raspberrypi.stackexchange.com/questions/33247/is-it-possible-to-trigger-10-or-100-raspberries-to-take-photos-at-the-same-tim)

TODO:
![](/assets/img/posts/synch/netgear-timeserver.png)

I heard the community complain a lot about the firmware of this router, and apparently changing the timeserver causes issues. I don't care what timeserver is used, as long as the same time is set on all my devices. Problematically, though, sometimes when the router is unplugged (which is likely with a system like this, which will be moved around to wherever we run the experiment), the time seems to be set to 1 Jan 1970. I haven't had a chance to find a workaround, nor to reproduce this consistently. So far it remains a Heisenbug.

That aside, let's say the NTP server on the router is enabled and running at the router's IP address, `192.168.100.1`. We can now install `chrony` on the headsets

```console
$ sudo apt install chrony
```

and use `chronyc` from one of our headsets to check some information about this time server as well as how close the local time is to the server's time:

```console
$ chronyc -n tracking -h 192.168.100.1
Reference ID    : 55C7D662 (85.199.214.98)
Stratum         : 2
Ref time (UTC)  : Tue Apr 13 14:06:57 2021
System time     : 0.000061683 seconds slow of NTP time
Last offset     : -0.000186714 seconds
RMS offset      : 0.006821306 seconds
Frequency       : 5.973 ppm fast
Residual freq   : -0.110 ppm
Skew            : 4.849 ppm
Root delay      : 0.014099105 seconds
Root dispersion : 0.011558208 seconds
Update interval : 130.2 seconds
Leap status     : Normal
```
We get a lot of information about the system time and how close the client's clock is running to the server's clock.

And from this we also find out the answer to an earlier question: if the router is a stratum 2 device, then the Netgear timeservers must be stratum 1. Nice.

#### Configuring the clients

To step closer towards the router's clock, we use the command `chronyc makestep`. Chrony can be configured using `/etc/chrony/chrony.conf`, which will look something like this:

```config
server 192.168.100.1 iburst

keyfile /etc/chrony/chrony.keys
driftfile /var/lib/chrony/chrony.drift

log tracking measurements statistics
logdir /var/log/chrony

rtcsync

makestep 1 -1
```

The most important lines here are the `server` line, which set the router's NTP server as the server for the Chrony client on the RPi, the `rtcsync` line, which enables kernel syncrhonisation, every 11 minutes, of the real-time clock, and `makestep 1 -1`, which allows us to make any number of adjustments to the system clock even if the adjustment is larger than a second. The latter configuration is useful because we have established to always sync the time before an experiment, and this may require 'jumps' or steps in time that are larger than a few miliseconds to be made at once.
The other settings are defaults.

We use Ansible to install `chrony`, copy off the `chrony.conf` file, and start the Chrony daemon on each headset. More on Ansible in [part 4](/synch-live-part-4#sensible-ansible) of this series.

```yaml
- name: Chrony setup
  become: true
  tasks:

  - name: Make sure the chrony package is installed
    apt:
      name: chrony
      state: latest

  - name: Copy chrony.conf
    copy:
      src: etc/chrony/chrony.conf
      dest: /etc/chrony/
      owner: root
      group: root
      mode: 0644

  - name: Start chrony service
    shell: "systemctl start chronyd"
```

Note that having multiple NTP implementations may be problematic so I have also included a play in Ansible to remove all the NTPd related packages, such as `ntpd`, `ntpdate` and `ntpstat`.

We can also use `systemctl` to check if `chronyd` is running on the clients:

```console
$ sudo systemctl status chronyd
```

Finally, we can also use Ansible to make calls to `chronyc` and `chronyd` to fetch time and correct any offsets, then to synch the hardware clock with the system clock.

```yaml
- name: Sync time
  become: true
  tasks:

  - name: Synchronise time with router's server
    shell: "chronyc -n tracking; chronyc makestep"

  - name: Synchronise hardware clock with system clock
    shell: "hwclock -w"

```

And ta-da! Now all clocks should be in sync!

How do we check?

My favourite little hack for this is a tool called [`clusterssh`](https://www.putorius.net/cluster-ssh.html). This tool allows opening simultaneous connections to multiple devices and typing in the same command into all of them at once. The tool can be preconfigured using a file `/etc/clusterssh/config` or locally, in the home folder in `.clusterssh/`. We are particularly interested in the `clusters` file where we can define a cluster called `players` for all our headsets using only their hostnames (assuming these are defined in `/etc/hosts`).

```shell
mkdir ~/.clusterssh
echo "players player1 player2 player3 player4 player5 player6 player7 player8 player9 player10" > ~/.clusterssh/clusters
```

Then we can simply run
```shell
$ cssh pi@players
```
and use the date command to fetch the date and check it is the same.

![](/assets/img/posts/synch/cssh.png)

We can get the exact date, for example by explicitly configuring the date format to include the miliseconds as well.
```shell
$ date +%Y-%m-%d%H-%M-%S.%2N
```

### Precision Scheduling

When I saw the `date` command spew out timestamps with less than 10ms variance, I thought I was done. I'm sure you thought you were done with this long-winded article with its ubertechnicalities and bad mythological humour. We were both dissapointed. Myself, by realising that the scheduling tool I know and love (to be read loathe), `cron`, is not accurate enough to actually start a task with second precision. This became more than obvious when I used Ansible to schedule a `cron` to start the `mockloop.py` routine from [part 3](synch-live-part-3#programming-the-headset) and it was clearly visible the lights were not even close to being in sync.

To my despair, I proceeded to hunt on Linux forums for a solution. Nothing obvious came my way; nobody has rewritten `cron` in Rust, nothing like that. `cron` seems to be doomed to be a minute-precision tool and for its intended purpose it makes most sense.

Python packages for scheduling showed up, but I won't even go through them now, as each had its own drawbacks and would have made the codebase heavier for no particular reason.
All along, a part of me kept denying the truth, and I told myself: there has to be a way of starting a damn task at a precise time in a single line of code in a Linux terminal.

In the end, I sorted it out with a little hack, using `date` and `sleep` and a `while` loop in `bash`. Every task is meant to start 10 seconds after the minute specified in the `cron`, and the loop fetches the system timestamp, checks if those 10 seconds have passed, and if not, sleeps for 50ms and tries again.

```bash
while [ "10" -gt "$(date +\%S)" ];
    do /bin/sleep 0.05;
done;
python3 /home/pi/synch/mockloop.py
```
And ta-da! It worked!

![](/assets/img/posts/synch/hats-in-sync.gif)



### Further reading

For more on clocks, see the [Linux sytem administrator's guide](https://tldp.org/LDP/sag/html/hw-sw-clocks.htm). For more on time daemons, see [this article](https://prog.world/linux-time-synchronization-ntp-chrony-and-systemd-timesyncd/).

Lamport's distributed clock sync algorithm is explained in his paper [Time, clocks, and the ordering of events in a distributed system](http://research.microsoft.com/en-us/um/people/lamport/pubs/time-clocks.pdf){:target="_blank" rel="noopener noreferrer"} (1978).

Tanenbaum [Distributed Systems: Principles and Paradigms](http://bedford-computing.co.uk/learning/wp-content/uploads/2016/03/Tannenbaum-distributed_systems_principles_and_paradigms_2nd_edition.pdf)

A discussion of clock quality is available on the NTP project's [website](http://www.ntp.org/ntpfaq/NTP-s-sw-clocks-quality.htm){:target="_blank" rel="noopener noreferrer"}

A group of researchers has implemented PTP on RPis and achieved milisecond accuracy, but the drawback is that kernel needs to be modified. See [Performance Evaluation of IEEE 1588 Protocol Using Raspberry Pi over WLAN](https://doi.org/10.1109/ICCS.2018.8689225)

A comparison of NTP implementations https://chrony.tuxfamily.org/comparison.html

A set of Ansible playbooks for time synchronisation is available on [github](https://doi.org/10.1109/ICCS.2018.8689225)

A [Stack Exchange question](https://raspberrypi.stackexchange.com/questions/33247/is-it-possible-to-trigger-10-or-100-raspberries-to-take-photos-at-the-same-tim) discussing a similar application to ours, in which a hacker tries to take pictures at the exact same time with multiple Raspberry Pi.
