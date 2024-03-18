---
layout: project
title: "SnowWall: The visual firewall for the surveillance society"
subtitle: MEng software project - building a front-end for investigating and blocking outbound connections and privacy invasion on MS Windows.
event: Distinguished MSc Talk
location: Huxley 311, Imperial College London
date: 1 July 2017, 14:00
slides: /assets/files/mis.pm-snowwall.pdf
web: https://snowwall.tech
thesis: /assets/files/mis.pm-snowwall-thesis.pdf
img: "/assets/img/talks/2017-snowwall.png"
permalink: /talks/2017-snowwall
---

*Abstract.* In the past two decades we have seen a steady increase in the adoption of various
technologies that fit into what can be described as a digital lifestyle. Sharing data,
experiences and our most intimate thoughts has become second nature to most people
connected to the Internet. And as market trends shift so did the approach that
companies and governments have in regards to each individual’s digital footprint.
The uncharted wild west that used to be the internet of yesteryear has become a
battleground where everyone is fighting over who knows the user better. Findings
such as the Snowden and the Vault7 leaks have deeply shaken the status quo in
privacy. This project revolves around giving the end user back insight and control
over what they involuntarily share with the world.

We present SnowWall: a networking tool designed to provide insights and control
into the networking activity on a Windows-based system. SnowWall interacts with
the operating system, intercepts every inbound and outbound connection, provides
information on the connection’s state, lifetime, owning process, and most importantly,
remote end point, such as geolocation and ownership information. SnowWall is a
powerful tool designed to be user-friendly, which allows anyone to block unwanted
connections with high-level firewall rules, such as blocking by country or by owning
organization name. With an intuitive visual interface, we strive to shake the public
apathy formed around the issue of user tracking. Furthermore, we have analysed the
nature of the data being leaked and we bring some intriguing results.

Running SnowWall on multiple hosts and analysing the data has brought up many
red flags. We have observed a regular user working on Windows 7, 8.1, and 10, and
we have learned that Microsoft collects data on all of these systems, with the amount
of connections which open in general growing exponentially as newer versions of Win-
dows are evaluated. It appears that system processes create TCP connections to both
Microsoft servers and advertisers, with a large amount of network bandwidth being
dedicated to such activities. Furthermore, many popular programs that ship with
Windows appear to send data to Microsoft, in the US as well as Ireland, Hong-Kong,
Singapore, and the Netherlands.
