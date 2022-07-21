---
layout: page
title: talks
permalink: /talks/
---

<br/>
**logorrhea**<br/>
**/&#716;l&#596;&#720;g&#602;'ri&#720;&#601;/**<br/>
n.<br/>
Excessive use of words. Incessant or compulsive talkativeness; wearisome volubility.<br/>
From Ancient Greek, _λόγος (logos)_, word + _ῥέω (rheo)_, to flow.
<br/>
<br/>
<br/>

{% for talk in site.talks reversed %}
<div class="row">
<div class="col-1-of-3"><img src="{{ talk.img }}"></div>
<div class="col-2-of-3">
    <h3><a href="{{ talk.permalink }}">{{ talk.title }}</a></h3>
    <p>{{ talk.subtitle }}</p>
    <p class="grey">{{ talk.date | date_to_long_string }} ⚪
		{% if talk.event %} {{ talk.event }} ⚪ {% endif %}
		{{ talk.location }}
	</p>
    {% if talk.slides %}
        <a href="{{ talk.slides }}" target="_blank">SLIDES</a>&nbsp;&nbsp;
    {% endif %}
    {% if talk.video %}
        <a href="{{ talk.video }}" target="_blank">VIDEO</a>&nbsp;&nbsp;
    {% endif %}
    {% if talk.web %}
        <a href="{{ talk.web }}" target="_blank">WEBSITE</a>&nbsp;&nbsp;
    {% endif %}
    {% if talk.paper %}
        <a href="{{ talk.paper }}" target="_blank">PAPER</a>&nbsp;&nbsp;
    {% endif %}
</div >
{% endfor %}



