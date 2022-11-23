---
layout: post
title: "Defacebook"
subtitle: Is facebook really down?
description: "We interrupt this programme to bring you... the collapse of society as we know it"
hidetitle: "display:block"
categories: [blog, internet-tales]
permalink: "is-facebook-down"
---

### Investigation

Let's jump straight into it. Facebook is down. This I was told by my flatmate who was due to have a Whatsapp call at 5PM. As soon as I heard this, I started noticing Telegram lighting up like a Xmas tree - all those people who have it but are never online, came online now.

A very brief investigation shows that the domain doesn't even resolve.

```shell
$ host facebook.com
;; connection timed out; no servers could be reached
```

The same for WhatsApp and Messenger, but not Instagram.

Nonetheless, in the browser none of them resolve, but it seems that for different reasons.

When doing a `whois`, it doesn't look like the domain has expired (it won't until 2030, and it got renewed in September) and the Facebook nameservers (`A-D.NS.FACEBOOK.COM`) are listed. The same for Messenger.

At the end of the query, my terminal hanged a little; then this message was printed

    getaddrinfo(whois.registrarsafe.com): Temporary failure in name resolution

I also ran a nameserver lookup for any available records on Facebook, who after a long and unusual wait returned an IP address, which turned out to be the nameserver used by Mullvad VPN I was using, but no nameservers on its own. Just to see if there's an issue with my VPN, I queried without it, and the nameserver returned was simply my local NS...

```shell
$ nslookup -type=ANY facebook.com
Server:		192.168.0.1
Address:	192.188.0.1#53

** server can't find facebook.com: SERVFAIL
```

The exact same for Whatsapp, with their nameservers `A-D.NS.WHATSAPP.NET` not listed. And Messenger.

But Instagram does show a bunch records when queried:

```shell
$ nslookup -type=ALL instagram.com
Server:		193.138.218.74
Address:	193.138.218.74#53

Non-authoritative answer:
Name:	instagram.com
Address: 2a03:2880:f211:e5:face:b00c:0:4420
instagram.com	text = "nEXgIFIbDifAKlSMQvAhly5SA-vpsAkm5wiOdwdkrzY"
instagram.com	text = "ms=ms86975275"
instagram.com	text = "adobe-idp-site-verification=367fda82-a8bb-46cf-9cff-0062d452d229"
instagram.com	text = "v=spf1 include:facebookmail.com include:spf.thefacebook.com include:spf-00082601.pphosted.com -all"
instagram.com	text = "google-site-verification=GGtId51KFyq0hqX2xNvt1u0P9Xp0C7k6pp9do49fCNw"
instagram.com	text = "4cbb1b68-601f-4801-8e7f-e8f68a4a41dd"
instagram.com	text = "hyWdekepiNsp/V9b1JCR+wZDdzbESurl4GqY+FLMfiN+7aeFaway0Art+kNDHeL5OnGZipNeV/iIC+lOONSQVQ=="
instagram.com	mail exchanger = 10 mxa-00082601.gslb.pphosted.com.
instagram.com	mail exchanger = 10 mxb-00082601.gslb.pphosted.com.
instagram.com
	origin = ns-384.awsdns-48.com
	mail addr = awsdns-hostmaster.amazon.com
	serial = 3
	refresh = 7200
	retry = 900
	expire = 1209600
	minimum = 3600
Name:	instagram.com
Address: 157.240.229.174
instagram.com	nameserver = ns-1349.awsdns-40.org.
instagram.com	nameserver = ns-2016.awsdns-60.co.uk.
instagram.com	nameserver = ns-868.awsdns-44.net.
instagram.com	nameserver = ns-384.awsdns-48.com.
```

Including an IPv6 address, exciting! So I tried to visit it by going to `http://[2a03:2880:f211:e5:face:b00c:0:4420]`. It resolves, but nothing is really there, not even an SSL cert.

The IPv4 address also responds to `ping` probes, and resolves in the browser but also nothing is there.

The nameservers themselves look oddly non big-tech for facebook. Is Facebook grabbing nameservers from AWS for this one? But not from Whatsapp or Facebook? Is this some ongoing migration?

Another oddity I have not noticed before, querying Instagram.
Anyone heard of `pphosted.com`? I hadn't, but they seem to be handling Instagram's mailservers.

What about a reverse DNS lookup for this IP address? Well, it ain't workin:

```shell
$ host 157.240.229.174
;; connection timed out; no servers could be reached
```

#### After some time
By the time I was done trying things out with various VPN servers, just to see if there are some local issues (there aren't) I noticed that the Instagram records have changed:

```shell
$ nslookup -type=ANY instagram.com
Server:		193.138.218.74
Address:	193.138.218.74#53

Non-authoritative answer:
Name:	instagram.com
Address: 2a03:2880:f203:e5:face:b00c:0:4420
Name:	instagram.com
Address: 31.13.66.174
instagram.com	nameserver = ns-2016.awsdns-60.co.uk.
instagram.com	nameserver = ns-868.awsdns-44.net.
instagram.com	nameserver = ns-1349.awsdns-40.org.
instagram.com	nameserver = ns-384.awsdns-48.com.

Authoritative answers can be found from:
```

So now it's another pingable IPv4 with nothing on it, while the IPv6 is the same. The IPv4 still doesn't resolve over reverse DNS so that's that.

I also went and used one of these online traceroute tools to put in the IPv6 address,`tools.tracemyip.org`, which claims that it is Whatsapp, but that the records were last updated 4 months ago...


We also learned that it's an Irish IPv6 address, but I actually have no idea is IPv6 geolocation is any similar to IPv4, so don't take my word on that.

So is it getting more broken, or is it getting fixed? Who the hell knows.

But the good news is: they aren't everything. They aren't undistructable. And they shouldn't be the backbone of your life. Let this be a sweet lesson in why centralising power can fail.

Enjoy your distraction free evening, everyone!


