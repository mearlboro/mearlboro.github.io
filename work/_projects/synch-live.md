---
layout: project
title: Synch.Live
subtitle: Building and using an open technology framework to explore collective emergent behaviour in humans.
authors: with Hillary Leone, Dr. Pedro Mediano, Dr. Fernando Rosas, Dr. Daniel Bor, Andrei Sas
talk: /talks/2022-synchlive
paper: "https://osf.io/preprints/psyarxiv/e8j39"
web: "https://synch.live"
permalink: /synch-live
img: /assets/img/talks/2022-synchlive.png
tags: science , hardware , art
---

Synch.Live is an experimental in-person game designed to spark human connection in this time of profound disconnection and poised to deliver stunning new science. Informed by cognitive science, physics, data science, and art, and powered by a breakthrough algorithm, Synch.Live promises to change our understanding of how humans interact ...

<br/>
<br/>

{% assign sorted = site.posts | sort: 'title' | reverse %}
{% for p in sorted %}
  {% if p.permalink contains "synch" %}
<p><a href="{{ p.url }}" target="_blank">{{ p.subtitle }}</a><br/></p>
<p>{{ p.description }}</p>
  {% endif %}
{% endfor %}

<br/>
<br/>
<br/>


# Events
<br/>
<div class="row">
<div class="col-1-of-3"><img src="assets/img/proj/gerf.svg"></div>
<div class="col-2-of-3">
<h3><a href="https://www.greatexhibitionroadfestival.co.uk" target="_blank" rel="noopener noreferrer">Great Exhibition Road Festival</a></h3>
<h4> 18-19 Jun 2022 ⚪ Great Hall, Imperial College London</h4>
<p>This year's Great Exhibition Road Festival offers a chance to join the unique experience that is Synch.Live.</p>
<p><a href="https://www.greatexhibitionroadfestival.co.uk/event/synchlive/" target="_blank">[website]</a> <a href="https://www.eventbrite.co.uk/e/synchlive-tickets-342615571397" target="_blank">[tickets]</a></p>
</div>
</div>

<div class="row">
<div class="col-1-of-3"><img src="assets/img/proj/qmul-foc.png"></div>
<div class="col-2-of-3">
<h3><a href="https://www.qmul.ac.uk/festival/about/" target="_blank" rel="noopener noreferrer">Festival of Communities</a></h3>
<h4>12 Jun 2022 ⚪ People's Palace, Queen Mary University of London</h4>
<p>Come don a hat and play Synch.Live - an art experience and brain science experiment.</p>
<p><a href="https://www.qmul.ac.uk/festival/festival-programme-2022/sunday-12-june--queen-mary-mile-end-campus/">[website]</a> [drop-in]</p>
</div>
</div>

