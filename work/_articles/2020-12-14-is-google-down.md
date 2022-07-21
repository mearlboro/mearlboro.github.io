---
layout: post
title: "Is Google down?"
subtitle: When all your eggs are in the Google basket
description: "Thank Google it's not friday"
hidetitle: "display:block"
categories: [blog]
permalink: "is-google-down"
sections:
 - title: investigation
   url: '#investigation'
 - title: alternatives
   url: '#alternatives'
   nested:
    - title: Protonmail
      url: 'https://protonmail.com'
    - title: Tutanota
      url: 'https://tutanota.de'
    - title: Metager
      url: 'https://metager.org'
    - title: Searx
      url: 'https://searx.me'
    - title: DuckDuckGo
      url: 'https://duckduckgo.com'
    - title: OnlyOffice
      url: 'https://onlyoffice.com'
---

### Investigation
Looks like we are witnessing a long unprecedented downtime from Mr. Dontbeevil. I was listening to youtube this morning when I am suddenly put before a sad monkey.

![](assets/img/posts/sad-monkey.png)

Moreover, Gmail was down too!

![](assets/img/posts/gmail-down.png)

I refreshed several times to no success, changed my browser to Chromium and hit Youtube from there. I am not logged in on Chromium which made me suspect it's the authentication that is broken.

A quick search on [Metager](https://metager.org/) for 'is google down' got me to a few classic status pages, which when visited also threw a 503 or other errors. Ominous.

Meanwhile my Telegram started blaring with friends noticing Gmail, Gdocs and everything are not working.

I finally found a good [downtime map](https://downdetector.com/status/google/map/), showing that most likely Google Europe is down. I confirmed this by using my ProtonVPN to connect to the US, Australia, and Japan, and indeed, I was able to hit Gmail again when authenticated.

![](assets/img/posts/down-detector.png)

### Alternatives

So what to do, what to do? In case you are based in Europe and have all your eggs in the Google basket, run and get a VPN. I use [ProtonVPN](https://protonvpn.com), but I would actually recommend [Mullvad](https://mullvad.net/) even more, as they are supporting a new VPN protocol, Wireguard, which is more fast and more secure than the currently most popular VPN protocol, OpenVPN. Fwiw, Protonmail also economically supports Wireguard, but their VPN still does not implement it.

Otherwise, here are a few alternatives I use...

* for email, [Protonmail](https://protonmail.com). Some people would say also [Tutanota](https://tutanota.de), but they're based in Germany, so beware the [dreaded German law](https://news.ycombinator.com/item?id=25337507) and [govware](https://en.wikipedia.org/wiki/Chaos_Computer_Club#Staatstrojaner_affair)
* for search, [Metager](https://metager.org/), [Searx](https://searx.me), and [DuckDuckGo](https://duckduckgo.com) - the first two are meta-search engines, so they use anonymised API calls to known engines, and thus are less chances to fail to provide a result since they get their data from multiple places. DuckDuckGo is closer to what people usually expect of a search engine, with less tracking than Google- but probably not the most private thing as they are based in the US
* for documents, spreadsheets, and presentations that work in the browser, can be collaborative, and shared with anyone, [OnlyOffice](https://onlyoffice.com) - and no account is needed to access a doc, only to create it! It also has a nice URL shortener for share links.

So are we witnessing the end of the dreaded Google? Most likely not, but it was quite cathartic to see they are not omnipotent today, just like in the old days of the world-wide-wild-west.

Stay tuned, for now I'm keen to research more funky downtime stories, but I have deadlines to meet now!

### Updates

This continued escalating in a crazy fashion. Later on Dec 16, at 2AM GMT, I received an email from Protonmail:

```
Starting at around 4:30PM New York (10:30PM Zurich), Gmail suffered a global outage.

A catastrophic failure at Gmail is causing emails sent to Gmail to permanently fail and bounce back. The error message from Gmail is the following:
550-5.1.1 The email account that you tried to reach does not exist.

This is a global issue, and it impacts all email providers trying to send email to Gmail, not just ProtonMail.
```
Later the emails started working again, but this was quite shocking nontheless. An email provider to get such a big issue that is causing cascading errors to other providers.

The incidents are documented in the [Google status updates](https://www.google.com/appsstatus#hl=en&v=issue&sid=1&iid=a8b67908fadee664c68c240ff9f529ab).


### Alternatives part 2


