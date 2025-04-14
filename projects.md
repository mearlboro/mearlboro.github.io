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


# List of articles

{% assign sorted = site.posts | sort: 'title' | reverse %}
{% for p in sorted %}
<h3 style="{{ p.hidetitle }}"><br/><a>{{ p.title }}</a></h3>
<p><a href="{{ p.url }}" target="_blank">{{ p.subtitle }}</a><br/></p>
<p>{{ p.description }}</p>
{% endfor %}
<br/>


<br/>
<br/>
<br/>
<br/>
