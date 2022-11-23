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


# Science
{% for proj in site.projects %}
{% if proj.tags contains "science" %}
<div class="col-1-of-3">
<img src="{{ proj.img }}">
<h3><a href="{{ proj.permalink }}">{{ proj.title }}</a></h3>
<p>{{ proj.subtitle }}</p>
</div>
{% endif %}
{% endfor %}


# Hacking
{% for proj in site.projects %}
{% if proj.tags contains "security" or proj.tags contains "privacy" or proj.tags contains "hardware" %}
<div class="col-1-of-3">
<img src="{{ proj.img }}">
<h3><a href="{{ proj.permalink }}">{{ proj.title }}</a></h3>
<p>{{ proj.subtitle }}</p>
</div>
{% endif %}
{% endfor %}

{% for p in site.posts %}
{% if p.tags contains "security" or p.tags contains "privacy" or p.tags contains "hardware" %}
<div class="col-1-of-3">
<img src="{{ p.img }}">
<h3><a href="{{ p.permalink }}">{{ p.title }}</a></h3>
<p>{{ p.subtitle }}</p>
</div>
{% endif %}
{% endfor %}

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
	<p><a href="http://andreisas.com" target="_blank">andreisas.com</a></p>
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

<br/>
<br/>

# List of articles

{% assign sorted = site.posts | sort: 'title' | reverse %}
{% for p in sorted %}
<h3 style="{{ p.hidetitle }}"><br/><a>{{ p.title }}</a></h3>
<p><a href="{{ p.url }}" target="_blank">{{ p.subtitle }}</a><br/></p>
<p>{{ p.description }}</p>
{% endfor %}
<br/>



