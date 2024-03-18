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


# Bonus: University projects
A list of my university coursework and projects:
### Group projects
- 2016 [Seek](https://github.com/mearlboro/seek-legacy){:target="_blank" rel="noopener noreferrer"}: An Information Retrieval tool written in Python for natural language processing on large corpora. Can extract, with good accuracy, topics, names, and summaries from unstructured text.
- 2016 [Scanalysis](https://github.com/mearlboro/srtool){:target="_blank" rel="noopener noreferrer": }: A static analysis tool written in Scala which parses a piece of code and transforms it into a logic statement, verifying against a set of pre and post-conditions whether the code is correct
- 2015 [Doodlr.js](https://github.com/mearlboro/doodlr.js){:target="_blank" rel="noopener noreferrer"}: A Javascript application with real-time collaborative digital painting features. It displays a wall of all canvases, where users can pick one and join in collaborative drawing. Built on top of Meteor and Parse, so unfortunately defunct.
- 2015 [PintOS](https://web.stanford.edu/class/cs140/projects/pintos/pintos_1.html){:target="_blank" rel="noopener noreferrer"}: a version of the Standford operating systems exercise in C. Contributed implementations of system calls, memory management, thread synchronisation and interruptions.
- 2014 [WHack](https://github.com/mearlboro/whack){:target="_blank" rel="noopener noreferrer"}: A compiler written from scratch in Haskell for a simplified C-like language called WACC.
- 2014 [RaspberryDots](https://github.com/mearlboro/ARM11){:target="_blank" rel="noopener noreferrer"}: An assembler and emulator for ARM architecture. Fully implemented in C, the system was then deployed on a Raspberry Pi and used to encode a sequence of characters into blinks of LEDs.
- 2013 [Computational Morality](): a research project on logic models for computational morality and their use for AI applied to decision-making for trolley problems.

### Individual Projects
- 2015 [Enigma](https://github.com/mearlboro/enigma){:target="_blank" rel="noopener noreferrer"}: an enigma machine simulation in C++.

<br/>
<br/>
<br/>
<br/>
