---
layout: project
title: Hascell
subtitle: Using comonadic computation to implement various cellular automata in Haskell.
authors: with Julian Sutherland
permalink: /hascell
talk: /talks/2020-comonadic-eca-haskell
img: /assets/img/proj/hascell.png
tags: science
---

Cellular automata (CA) is one of the prime examples of artificial life, as well as the emergence of complex structures at the systemic level from simple interactions between the individual parts of the system. Moreover, CA are defined iteratively over time, and manifest such complex properties even when their definition is fully deterministic.

Oftentimes CA are implemented using procedural or object-oriented programming. In this project, we explore functional implementations with the use of comonadic computations.

<br/>
<br/>

{% assign sorted = site.posts | sort: 'title' | reverse %}
{% for p in sorted %}
  {% if p.permalink contains "hascell" %}
<p><a href="{{ p.url }}" target="_blank">{{ p.subtitle }}</a><br/></p>
<p>{{ p.description }}</p>
  {% endif %}
{% endfor %}

