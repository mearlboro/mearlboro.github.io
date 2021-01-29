---
layout: page
title: imaginarium
permalink: /projects/
---

<br/>
**imaginarium**<br/>
**/ˈ&#618;&#716;m&#230;d&#658;&#601;&#712;ne&#618;ri:&#601;m/**<br/>
n.<br/>
place devoted to the imagination. There are various types of imaginaria, centers largely devoted to stimulating and cultivating the imagination, towards scientific, artistic, commercial, recreational, or spiritual ends.
<br/>
<br/>
<br/>

# Ongoing projects

{% assign sorted = site.posts | sort: 'title' | reverse %}
{% for p in sorted %}
<h3 style="{{ p.hidetitle }}"><br/><a>{{ p.title }}</a></h3>
<p><a href="{{ p.url }}" target="_blank">{{ p.subtitle }}</a><br/></p>
<p>{{ p.description }}</p>
{% endfor %}
<br/>


### [SnowWall]()
#### privacy-oriented visual network monitoring
Motivated by privacy concerns and the lack of research on privacy on the Windows operating system, SnowWall is a networking tool designed to provide insights and control into the networking activity on a Windows-based system. SnowWall interacts with the operating system, intercepts every inbound and outbound connection, provides information on the connection’s state, lifetime, owning process, and most importantly, remote end point, such as geolocation and ownership information. SnowWall is a powerful tool designed to be user-friendly, which allows anyone to block unwanted connections with high-level firewall rules, such as blocking by country or by owning organization name.

SnowWall is built on top of the Windows Firewall, using low-level networking APIs to gather the required information and interacting with the firewall to block unwanted outbound connections.  If you care about privacy, the layers of the internet, geolocation of internet hosts by IP or the internet topology, have a look at my [thesis](/assets/files/snowwall.pdf).

Currently SnowWall is aiming to become a distributed geolocation network which will be able to use the latest research in IP Geolocation and privacy preserving machine learning to provide the necessary information for implementing geographical security policies while anonymising private users.
<br/>
<br/>


### [Seek]()
#### information extraction
Built in a group project, it's an information retrieval tool capable of analysis with statistical natural language processing techniques on large corpora. It uses latent semantic indexing, similar to many search engines, as well as latent Dirichlet allocation to extract topics from text. The tool is also able to extract relational information from text based on Noam Chomsky's work on transformational grammars.

The tool has been trained on multiple corpora provided by the Stanford NLP team, the whole of English Wikipedia as well as the published papers repository of Imperial College. Furthermore, it supports information acquisition from multiple sources, including a general-purpose scraper written in Ruby, and a set of Python libraries that extract text from various formats such as .doc or .pdf.

Check it out on [github](https://github.com/mearlboro/seek-legacy).
<br/>
<br/>
<br/>


# Web & Design projects
<br/>
<br/>
<div class="col-1-of-3">
	<a href="/assets/img/proj/netcraft.png" target="_blank"><img src="/assets/img/proj/netcraft.png"></a><br/>
</div>
<div class="col-2-of-3">
	<h3>Netcraft</h3>
	<p><a href="http://netcraft.com" target="_blank">netcraft.com</a></p>
	<p>During my employment with Netcraft, aside from the cyber-security work, I had the great opportunity to act as the graphics and web designer for the iconic rainbow brand.</p>
</div>

<div class="col-1-of-3">
	<a href="/assets/img/proj/apdop.png" target="_blank"><img src="/assets/img/proj/apdop.png"></a><br/>
</div>
<div class="col-2-of-3">
	<h3>Cinematographer portfolio</h3>
	<p><a href="http://andreipacuraru.com" target="_blank">andreipacuraru.com</a></p>
	<p>An uber-clean minimal Jekyll site to display cinematography work, be it stills, videos or show reels.</p>
</div>

<div class="col-1-of-3">
    <a href="/assets/img/proj/ratstales.png" target="_blank"><img src="/assets/img/proj/ratstales.png"></a><br/>
</div>
<div class="col-2-of-3">
	<h3>Rat's Tales</h3>
	<p><a href="http://ratstales.co.uk" target="_blank">ratstales.co.uk</a></p>
	<p>Did you know you’re never more than 10ft away from a rat, but more than 100ft away from a book? We want to rectify this by sellotaping books to rats. </p>
</div>

<div class="col-1-of-3">
	<a href="/assets/img/proj/shepherdtone.png" target="_blank"><img src="/assets/img/proj/shepherdtone.png"></a><br/>
</div>
<div class="col-2-of-3">
	<h3>ShepherdTone</h3>
	<p><a href="http://shepherdtone.co.uk" target="_blank">shepherdtone.co.uk</a></p>
	<p>A a group of artists and media professionals banded together to tell the most compelling stories.</p>
</div>

<div class="col-1-of-3">
	<a href="/assets/img/proj/kctu.png" target="_blank"><img src="/assets/img/proj/kctu.png"></a><br/>
</div>
<div class="col-2-of-3">
	<h3>KCTU</h3>
	<p><a href="http://ctu.co.uk" target="_blank">ctu.co.uk</a></p>
	<p>The King’s Clinical Trials Unit (KCTU) offers a range of services to support researchers conducting non-commercial trials</p>
</div>

<div class="col-1-of-3">
	<a href="/assets/img/proj/pureeros.png" target="_blank"><img src="/assets/img/proj/pureeros.png"></a><br/>
</div>
<div class="col-2-of-3">
    <h3>Pureros</h3>
	<p><a href="http://pureeros.com" target="_blank">pureeros.com</a></p>
	<p>An e-boutique dedicated to the empowering of women and the expression of their sexuality.</p>
</div>

