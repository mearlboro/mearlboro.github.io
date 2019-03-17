---
layout: page
title: blog
permalink: /blog/
---


<br/>
{% for p in site.posts %}
<h3><a href="{{ p.url }}" target="_blank">{{ p.title }}</a></h3>
<p><a href="{{ p.url }}" target="_blank">{{ p.subtitle }}</a><br/>
{{ p.date  | date: "%-d %B %Y"}}</p>
<p>{{ p.description }}</p>
<br/>
{% endfor %}



