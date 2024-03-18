---
layout: page
title: publications
permalink: /publications
conferences:
  - name: The Future of the Classical Concert symposium
    description: A conference about the study of the concert experience addressing cultural studies scholars, psychologists, musicologists, sociologists, and concert organizers.
    date: 29-30 Nov 2023
    where: Zeppelin University, Friedrichshaven, Germany
    url: "https://future-of-the-concert.org/?lang=en"
    poster: /assets/img/pub/poster_Sync_Improv_FoC23.png
    programme: "https://future-of-the-concert.org/programm/?lang=en"
  - name: ASSC26
    description: The 26th annual meeting of the Association for the Scientific Study of Consciousness.
    date: 22-25 June 2023
    where: New York University, New York, USA
    url: "https://theassc.org/assc-26"
    poster: /assets/img/pub/poster_Synch_Live_ASSC26.jpg
    programme: "https://theassc.org/wp-content/uploads/2023/06/ASSC26-Abstract-List-Final.pdf"
  - name: Santa Fe Institute Collective Intelligence Symposium
    date: 19-21 June 2023
    where: Santa Fe, New Mexico, USA
    url: "https://www.santafe.edu/info/collective-intelligence-2023/"
    description: What is the nature of intelligence in social insect societies, adaptive matter, groups of cells like brains, sports teams, and AI, and how does it arise in these seemingly different kinds of collectives?
    poster: /assets/img/pub/poster_Synch_Live_SFICI23.jpg
    programme: https://web-prod.santafe.edu/news-center/news/sfi-hosts-conference-style-event-collective-intelligence
  - name: CCS2022
    where: Palma de Mallorca, Spain
    date: 17-21 Oct 2022
    url: "https://ccs2022.org"
    description: The Conference for Complex Systems is the largest and most important annual meeting of the international complex systems community. It comes under the auspices of the Complex Systems Society.
    talk: /talks/2022-synchlive
    programme: "https://ccs2022.org/index.php/programme/programme-at-a-glance"
---

<br/>
**academia**<br/>
**/ˌæk.əˈdiː.mi.ə/**<br/>
n.<br/>
the part of society, especially universities, that is connected with studying and thinking, or the activity or job of studying.
<br/>
<br/>
<br/>


# Publications

{% for pub in site.publications reversed %}
{% if pub.layout == "publication" %}
<div class="row">
  <div class="col-1-of-3"><img src="{{ pub.img }}" class="white-bg"></div>
  <div class="col-2-of-3">
    <h3><a href="{{ pub.permalink }}">{{ pub.title }}</a></h3>
    <p>{{ pub.authors }}</p>
    <p class="grey">{{ pub.date | date_to_long_string }}
    {% if pub.journal %} ⚪{{ pub.journal }}
    {% endif %}
	</p>
    {% if pub.paper %}
        <a href="{{ pub.paper }}" target="_blank">DOWNLOAD</a>&nbsp;&nbsp;
    {% endif %}
    {% if pub.arxiv %}
        <a href="{{ pub.arxiv }}" target="_blank">{{ pub.arxiv_display }}</a>&nbsp;&nbsp;
    {% endif %}
    {% if pub.doi %}
        <a href="{{ pub.doi }}" target="_blank">{{ pub.doi_display }}</a>&nbsp;&nbsp;
    {% endif %}
  </div>
</div>
{% endif %}
{% endfor %}


# Conferences
{% for conf in page.conferences %}
<h4><a href="{{ conf.url }}" target="_blank">{{ conf.name }}</a></h4>
<p class="justify">{{ conf.description }}</p>
<p class="grey">{{ conf.date }} ⚪ {{ conf.where }}</p>

<p>
{% if conf.poster    %}<a href="{{ conf.poster }}   " target="_blank">POSTER</a>    &nbsp;{% endif %}
{% if conf.talk      %}<a href="{{ conf.talk }}     " target="_blank">TALK</a>      &nbsp;{% endif %}
{% if conf.programme %}<a href="{{ conf.programme }}" target="_blank">PROGRAMME</a> &nbsp;{% endif %}
</p>

<br/>
{% endfor %}



