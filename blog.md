---
layout: page
title: blog
permalink: /blog/
---

<br/>
<br/>
{% for p in site.posts %}
<h3><a href="{{ p.url }}" target="_blank" style="{{ p.hidetitle }}">{{ p.title }}</a></h3>
<p><a href="{{ p.url }}" target="_blank">{{ p.subtitle }}</a><br/>
{{ p.date  | date: "%-d %B %Y"}}</p>
<p>{{ p.description }}</p>
{% endfor %}



