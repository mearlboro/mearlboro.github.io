---
layout: post
title: "In support of Z-Library"
subtitle: Z-Library has been taken down by the feds.
description: Knowledge to everyone. Knowledge must be free. To open science. Everyone is a pirate, even scientists.
hidetitle: "display:block"
categories: [blog]
permalink: "in-support-of-zlib"
sections:
- title: About Z-library
  url: '#about-z-library'
- title: Investigation
  url: '#investigation'
- title: What's up?
  url: '#what-s-up'
  nested:
  - title: Z-Library
    url: '#z-library'
  - title: Library Genesis
    url: '#library-genesis'
  - title: Sci-Hub
    url: '#sci-hub'
- title: Why is this important?
  url: '#why-is-this-important'
  nested:
  - title: Knowledge and poverty
    url: '#Knowledge and poverty'
  - title: Knowledge and censorship
    url: '#Knowledge and censorship'
  - title: Knowledge and power
    url: '#Knowledge and power'
- title: How can you help?
  url: '#how-can-you-help'
---

It's been a while since I've written here, and it is with great sadness that I return, not with yet another long-form narrative at the intersection of science, art, and obscure memes, or a diss of Facebook losing millions, but with a desire to report on something I have recently discovered, to spread the word to like-minded people, and to add my voice to everyone else's in this movement: the movement of Open Access to Knowlegde.

The section [what's up](#what-s-up) has links to open library websites  which are still accessible, if that's what you came here for.

<p class='caution-box'>
<b>Caution: Sharing copyrighted written material is illegal.</b> Whatever you do, <b>DO NOT</b> use the websites I link, <b>DO NOT</b> read this article, and <b>DO NOT</b> listen to me.
</p>

<br/>

## Z-library has been taken down by the feds.

This all started when I hit one of my browser key combinations to do a search for a physics textbook not in my university's library, only to see the dreaded badge:

![](/assets/img/posts/zlib-down.png)

Since the beginning of this month (Nov 2022), many Z-Library domains were seized by the U.S. Department of Justice and FBI. And yesterday, November 16, U.S. Attorneys charged two Russians for operating the site.

### About Z-library

If you don't know about Library Genesis, or its most popular mirror today, Z-library, hopefully it is not too late to be introduced to it now.
It is the largest open digital library in the world, since, unlike the [Internet Archive](archive.org) or [Project Gutenberg](https://www.gutenberg.org/), it also contains titles that are protected by copyright or owned by publishers, most importantly recent titles, especially relevant in academia and journalism.

It has a great history too, linked to the [_samizdat_](https://wikiless.org/wiki/Samizdat?lang=en) culture in the Soviet Union, which consisted in illegal underground networks of homebrewn publishing and information sharing. These people didn't have access to printers or typewriters without official registration, and would go through great risks to find, hide, and share these banned books, these censored ideas.
An archive which was later to become LibGen/ZLib started as an expression of this culture on RuNet, the early 90s Russian internet.

When LibGen was first taken down, people created a new mirror in the form of Z-Library. Versions of LibGen are still available, as well as other open access platforms like SciHub, the latter being started in particular to combat predatory academic publishers.

Lumped in with torrent websites, these sites have accumulated bad rep in the public forum, but regardless of the attempts to shut them down (which have been successful in the case of many torrent hubs, music and film sharing sites etc), they are still going strong, allowing millions of people all around the world to learn for free.

Well, a few Mickey Mouses later (or a few Elseviers later, depending on your favourite unit of copyright opression), we find ourselves with yet another cease-and-desist against an open library, and, even worse, with [two of the people who started the site arrested](https://www.justice.gov/usao-edny/pr/two-russian-nationals-charged-running-massive-e-book-piracy-website) less than 10 hours ago in Argentina, at the request of the FBI.

<p class='caution-box'>
If you do know what Z-Library is, and have been using it without VPN or (well-configured) Tor, don't worry. In most countries, <b>distribution of copyrighted content</b> is what is illegal, and <b>not its use</b>. Moreover, ZLib has millions of users, and it would be unfeasible for the FBI to go after every user. Even if you're a donor (like me), in their view, we are victims - for giving our money to these thieving Russians. So even though you may lose sleep over another defeat in the war for internet freedom, I hope you don't lose sleep over them coming after you.
</p>


<br/>

### Investigation

And now, a classic internet investigation. Let's see how we can use free tools to query the internet infrastructure about what happened, but also to check which aliases and mirrors of the sites that are left (if any) are actually good to use.

The tools I refer to are terminal utilities `whois`, `nslookup` and `host`, for looking at DNS records and autonomous systems mostly, as well as some IP geolocation online. Online alternatives exist for each tool: [who.is](https://who.is), [nslookup.io](https://www.nslookup.io/), as well as the oldskool website [network-tools.com](https://network-tools.com/).

But first, let's see what happened to the domains, and if there is any left, and any IP address where we can still find the site.

The results shown below are the same for all the defunkt sites, [z-lib.org](https://z-lib.org), <u>b-ok.cc</u>, <u>booksc.org</u>, <u>3lib.net</u>, and <u>b-ok.org</u>.

```sh
$ whois z-lib.org | grep -i 'name server'
    Name Server: NS1.SEIZEDSERVERS.COM
    Name Server: NS2.SEIZEDSERVERS.COM
Name Server: ns1.seizedservers.com
Name Server: ns2.seizedservers.com

$ host z-lib.org
b-ok.cc has address 66.212.148.115
Host b-ok.cc not found: 2(SERVFAIL)
Host b-ok.cc not found: 2(SERVFAIL)
```

All the domains now point at the IP address `66.212.148.115`, wich has been used before to shut down sites (for example, see [this article](https://torrentfreak.com/u-s-government-seizes-bittorrent-search-engine-domain-and-more-101126/) about the seizure of torrent-finder.com in 2010)

But there is one official Z-Library domain I didn't see in the news: [singlelogin.me](http://singlelogin.me), the webpage for logging in to various ZLib mirrors and aliases, is still up and going, with the homepage urging users to use Tor or I2P.

> Z-Library website is currently available only in Tor and I2P network. You can find out more and download Tor or I2P browser.

There is still two clearnet ZLib-like sites mentioned in online discussions, [zlib.ink](https://zlib.ink) and [1lib.ink](https://1lib.ink), though it isn't clear for how long, and some of the ZLib specific catalogue (i.e. not on LibGen or SciHub) seems to be missing.
I downloaded a few books to test them, and the files are uncorrupted and what they claim to be, at least in my small sample. Both use Cloudflare IPs, which means they'll be harder to take down, but it's hard to check how are they related to the official mirrors.

You may stumble online over <u>libcats.org</u>, but unfortunately it looks like is only an index without any of the books.

Unfortunately, the Z-Library Telegram bot was already shut down.

<br/>

### What's up?

Below is a list of online libraries with working aliases and mirrors, all checked by me today.

<p class='caution-box'>
<b>Unsponsored Ad</b>: If you live in a place without freedom of speech, of if you are worried that your government or university may be cracking down on illegal downloads, you should <b>use a VPN</b>. <a href='https://mullvad.net/' target='_blank'>Mullvad VPN</a> are amazing.
They use the newer, seamless, Wireguard VPN protocol, so it won't fail when you change network, you won't even notice it's on.
It's the best VPN for privacy asking for 0 contact information, it's open source, it's 5 euro a month for 5 devices, and you can pay in Bitcoin or even <b>cash</b> by sending them an envelope with money in it.
</p>

<br/>

#### Z-Library
The only official clearnet Zlib site online is [singlelogin.me](https://singlelogin.me) which links to Tor and I2P instances.

I won't link the sites because they **should not be accessed via clearnet**. Before using any of these sites, please inform yourself about [Tor](https://www.torproject.org/) or [I2P](https://github.com/PurpleI2P/i2pdbrowser/releases/tag/1.3.2).

<p class='caution-box'>
Sometimes clones of ebook sites are used by malicious actors. For example, they may invite you to install browser extensions, or to download Tor from an unofficial source. It's likely that this takedown of ZLib may cause a lot of these sites to mushroom so be careful and only use verified links.
</p>

So **do not use** <u>z-lib.is</u>, it's broken and it asks you to download a browser extension.

<br/>

#### Library Genesis
LibGen is a great alternative to ZLib. It has a non-fiction library, a fiction library, and a scientific articles and magazine library. Unfortunately, their fiction/non-fiction library is not as extensive as Z-Library's. Fortunately, in the last couple of years the LibGen community have been working on using the epically-named [Interplanetary File System](https://ipfs.tech), a distributed means of information storage. Hopefully this will make the library more resilient to takedowns.

Official mirrors:

- [gen.lib.rus.ec](http://gen.lib.rus.ec), and alias [www.ec.library.bz](http://www.ec.library.bz). Been using this site since I was, don't know, in middle school, and it still works.
- [libgen.rs](http://libgen.rs/), with aliases [libgen.is](http://libgen.is/) and [libgen.st](http://libgen.st/).
- listed on the subreddit is also [libgen.fun](http://libgen.fun)

There seem to be a few alternative domains: \*.ee, \.li, \*.gs, \*.lc, \*.pw, \*.rocks. I've checked all of these today, and they work, but they seem to be a separate ecosystem from the domains and mirrors I listed above.

A great resource is the [LibGen wiki](https://www.teddit.net/r/libgen/wiki/index/) hosted by the Reddit community.

<br/>

#### SciHub
SciHub, the youngest of these sites, focuses mostly on scientific articles, and it's extremely useful to many academics. I checked all the official mirrors and they work:

* [sci-hub.ru](http://sci-hub.ru)
* [sci-hub.st](http://sci-hub.st)
* [sci-hub.se](http://sci-hub.se)


You may be interested to find out (like I did!) they have a Telegram bot too! [t.me/scihubot](https://telegram.me/scihubot) and a [Zotero plugin!](https://github.com/ethanwillis/zotero-scihub/) [](https://twitter.com/Protohedgehog/status/1030248351470563328), and a [Reddit community](https://www.teddit.net/r/scihub/).

<br/>


### Why is this important?
I am not going to launch myself into a philosophical tirade as to why information piracy increases exposure and engagement with the paid material aswell (just look at Photoshop and Windows), and just limit myself to saying that ZLib was a crucial resource for the development of our, humanity's, shared body of knowledge, and show it with specific, quantifiable examples:

#### Knowledge and poverty
First, for students attending universities that do not have contracts with the publishers, who don't have $40 to spend on an article or $100 to spend on a textbook.
[An article](https://slate.com/technology/2022/11/z-library-pirated-books-papers-school-tor.html) about the takedown mentions stories of students and academics from Africa and India who need to spend their monthly stipend to buy a single book and who were entirely dependent on Zlib to study or research.

For a visual aid, here's a screenshot of a student poverty rate map\*, in the US, in 2016, taken from an [interactive dataviz](http://viz.edbuild.org/maps/2016/cola/resource-inequality/natl-average.html) by a research company called EdBuild.

![](/assets/img/posts/us-poverty-map.png)

And here's a screenshot of a [global poverty map](https://worldpopulationreview.com/country-rankings/median-income-by-country)\*, based on data by the [World Bank](). If I wasn't so in a rush to write this, I'd actually make a data visualisation, trying to see how many journal articles fit in a country's monthly median household salary (since [coffins per White House](https://preview.redd.it/nmmzecrzfs661.jpg?width=960&crop=smart&auto=webp&s=0bb144611f761ea35c442511d3c94d652a167313) can be a valid unit of measurement, then why not meals per Elsevier article?).

![](/assets/img/posts/poverty-map.png)

Maybe some academics think that institutions like universities, research institutes and hospitals should have contracts with publishers. But academics still often change jobs; they need something to keep in touch with research between jobs, when they don't have institutional access anymore. And since they are _between jobs_ they likely don't afford to pay, even in the first world.

I don't want to dwelve in the discussion on academic publishers, their outrageous fees, the lack of pay for peer reviewers, but you can find relevant information, with references, in this [Open Letter](https://custodians.online/).

#### Knowledge and censorship
My Mum, who grew up in the totalitarian Socialist Republic of Romania, tells me how there used to be books that you'd be arrested for owning, and that you could hardly trust anyone with that knowledge, as anyone you shared the book with, or even the knowledge of its existence with, could be a secret police informer. Nonetheless, even with the huge risks involved, people still shared knowledge. This culture was very real, and these websites come from a good place: a desire to be free to think in a world that is too controlling.

But today, anyone living in a country with authoritarian or totalitarian rulers, or living under censorship, who can get to a computer and use VPN or Tor, can have unlimited access to knowledge.

To get a perspective for how important that is to the world, here's another of my favourite maps, accompanied by the [2022 Internet Censorship report](https://www.globalresearch.ca/internet-censorship-2022-global-map-internet-restrictions/5799413) data, and available to explore interactively at [FreedomHouse](https://freedomhouse.org/explore-the-map?type=fotn&year=2022):

![](/assets/img/posts/internet-censorship-map.png)


#### Knowledge and power
I'll finish with a sad but extremely important internet story.

In 2010, Aaron Swartz, Internet legend, co-creator of RSS, Markdown, and Creative Commons, was driven to suicide follwoing a harsh prison sentence at the age of 26.

The synopsis below is from his [wiki page](https://wikiless.org/wiki/Aaron_Swartz?lang=en):

> In 2011, Swartz was arrested by Massachusetts Institute of Technology (MIT) police on state breaking-and-entering charges, after connecting a computer to the MIT network in an unmarked and unlocked closet, and setting it to download academic journal articles systematically from JSTOR using a guest user account issued to him by MIT. Federal prosecutors, led by Carmen Ortiz, later charged him with two counts of wire fraud and eleven violations of the Computer Fraud and Abuse Act, carrying a cumulative maximum penalty of $1 million in fines, 35 years in prison, asset forfeiture, restitution, and supervised release. Swartz declined a plea bargain under which he would have served six months in federal prison. Two days after the prosecution rejected a counter-offer by Swartz, he was found dead in his Brooklyn apartment.

![](/assets/img/posts/look-how-they-massacred-my-boy.gif)

What the Wiki synopsis doesn't say, is that the closet was already setup with cameras and bugs, to catch him in the act, and that the MIT campus police itself was involved. Last but not least, he never uploaded any of the articlies anyplace else or distributed them in any way.
It was a conspiracy if I've ever seen one, to teach him and people like him a lesson, to make an example of him.

Why was it necessary to "make an example out of" someone like Aaron? Because knowledge is power, and offering free access to knowledge terrifies the power structures who want to control it.

(and if you want to learn more, you can watch the documentary [The internet's own boy](https://archive.org/details/TheInternetsOwnBoyTheStoryOfAaronSwartz) which is available for free on the Internet Archive or on Youtube).



### How can you help?

Don't be complacent, be angry. Spread the word to the world. If you're American, contact your local authorities and express support for ZLib, LibGen, or SciHub.

Talk to your grandma about information freedom. The next jury member in a trial condemning internet freedom may be someone who has learned why open access to knowledge is so important, may be someone who has heard of Aaron Swartz, may be someone who understands the absurd costs of knowledge development.

Vote Pirate! If you can't, start a pirate party in your constituency! Sweden was first, founding it in 2006, the US have one founded in the same year, now most EU contries have them, and there's a [European Pirate Party](https://european-pirateparty.eu/), and Pirates without borders!

(That being said, I live in the UK, where the Pirate party est 2009 was dissolved in 2020. Work always begins in one's back yard.)

I am looking into a way to help the actual founders and community, but can't see anything. Unfortunately, the Reddit discussion about how to help immediately turned to people attacking ZLib founders for 'stealing'. We have a long way yet to sail...

Finally, I invite you to read and share the open letter "In solidarity with library genesi and Sci-Hub", available currently at [custodians.online](http://custodians.online).

I'll leave you with their closing paragraph:

> We find ourselves at a decisive moment. This is the time to recognize that the very existence of our massive knowledge commons is an act of collective civil disobedience. It is the time to emerge from hiding and put our names behind this act of resistance. You may feel isolated, but there are many of us. The anger, desperation and fear of losing our library infrastructures, voiced across the internet, tell us that. This is the time for us custodians, being dogs, humans or cyborgs, with our names, nicknames and pseudonyms, to raise our voices.
> Share this letter - read it in public - leave it in the printer. Share your writing - digitize a book - upload your files. Don't let our knowledge be crushed. Care for the libraries - care for the metadata - care for the backup. Water the flowers - clean the volcanoes.


### References
The student poverty rate map is taken from an [interactive dataviz](http://viz.edbuild.org/maps/2016/cola/resource-inequality/natl-average.html) by a research company called EdBuild.
Census.gov page on [median household income](https://www.census.gov/quickfacts/fact/note/US/INC110220).

The worldwide median income map is from an [interactive dataviz](https://worldpopulationreview.com/country-rankings/median-income-by-country) by the website WorldPopulationReview.com and based on [data from the World Bank](https://data.worldbank.org/country/XP).

The World Bank also has an interesting article and dataset regarding the relationship between [poverty and education](https://datatopics.worldbank.org/sdgatlas/goal-4-quality-education/). They observe that in recent years the gap between school enrollment rates between lower and higher-income countries has been reducing, which only further supports the need of free educational resources to actually support all these children going to school in economically challenged places.

\* I am, of course, aware that it isn't easy to construct these maps, and that there are plenty statistics that can go wrong. I am not claiming to put numbers to someone's human condition, but rather to show how much of a spread there is in income, and how it is easy to forget in the first world how many people still need free access to knowledge because they simply _cannot afford it otherwise_.


