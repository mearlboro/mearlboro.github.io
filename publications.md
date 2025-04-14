---
layout: page
title: publications
permalink: /publications
conferences:
  - name: 5th Conference on Autonomous Computing and Self-Organising Systems (ACSOS2024)
    description: The IEEE international conference on Autonomic Computing and Self-Organising Systems is the leading forum to share the latest research results, ideas and experiences in autonomic computing, self-adaptation and self-organization. 
    date: 16-20 Sep 2024 
    where: Aarhus, Denmark 
    url: "https://2024.acsos.org/"
    paper: /publications/2024-megabike
    programme: "https://2024.acsos.org/track/acsos-2024-papers"

  - name: 6th Workshop on Agent-Based Modelling of Human Behaviour (ABMHuB'24) 
    description: The International Workshop on Agent-Based Modelling of Human Behaviour is a combination of computational modelling, social science and behavioural science, aimed at improving our understanding of collective human behaviour and addressing significant issues affecting society. Held in conjuction with ALife 2024.
    date: 25 Jul 2024
    where: UCL, London, UK
    url: "https://2024.alife.org/"
    paper: "http://abmhub.cs.ucl.ac.uk/2024/camera_ready/Mertzani_etal.pdf"
    programme: "http://abmhub.cs.ucl.ac.uk/2024/"

  - name: The Future of the Classical Concert symposium
    description: An interdisciplinary conference about the study of the concert experience addressing cultural studies scholars, psychologists, musicologists, sociologists, and concert organizers.
    date: 29-30 Nov 2023
    where: Zeppelin University, Friedrichshaven, Germany
    url: "https://future-of-the-concert.org/?lang=en"
    poster: /assets/img/pub/poster_Sync_Improv_FoC23.png
    programme: "https://future-of-the-concert.org/programm/?lang=en"

  - name: Conference of the Association for the Scientific Study of Consciousness (ASSC26)
    description: The 26th annual meeting of the ASSC, revolving around topics such as the neural correlates of consciousness, the nature of subjective experience and the implications of consciousness research for our understanding animals, AI, and our own mind-brain-body relationships.
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

  - name: Conference of Complex Systems (CCS2022)
    where: IFISC, Palma de Mallorca, Spain
    date: 17-21 Oct 2022
    url: "https://ccs2022.org"
    description: The CCS is the largest and most important annual meeting of the international complex systems community. It comes under the auspices of the Complex Systems Society.
    talk: /talks/2022-synchlive
    programme: "https://ccs2022.org/index.php/programme/programme-at-a-glance"

  - name: IEEE Computing in Cardiology (CinC), 2020 
    where: Rimini, Italy 
    date: 13-16 Sept 2020
    url: "https://cinc.org"
    description:  Computing in Cardiology (CinC) provides a forum for scientists and professionals from the fields of medicine, physics, engineering and computer science to discuss their current research in topics pertaining to computing in clinical cardiology and cardiovascular physiology. 
    paper: /publications/2020-ecg
---

<br/>
**academia**<br/>
**/ˌæk.əˈdiː.mi.ə/**<br/>
n.<br/>
the part of society, especially universities, that is connected with studying and thinking, or the activity or job of studying.
<br/>
<br/>
<br/>


# Selected Publications

{% for pub in site.publications reversed %}
{% if pub.layout == "publication" %}
<div class="row">
  <div class="col-1-of-3"><img src="{{ pub.img }}" class="white-bg"></div>
  <div class="col-2-of-3">
    <h3><a href="{{ pub.permalink }}">{{ pub.title }}</a></h3>
    <p>{{ pub.authors }}</p>
    <p class="grey">{{ pub.date | date_to_long_string }}
    {% if pub.journal %} ⚪ {{ pub.journal }}
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
{% if conf.paper     %}<a href="{{ conf.paper }}    " target="_blank">PAPER</a>    &nbsp;{% endif %}
{% if conf.poster    %}<a href="{{ conf.poster }}   " target="_blank">POSTER</a>    &nbsp;{% endif %}
{% if conf.talk      %}<a href="{{ conf.talk }}     " target="_blank">TALK</a>      &nbsp;{% endif %}
{% if conf.programme %}<a href="{{ conf.programme }}" target="_blank">PROGRAMME</a> &nbsp;{% endif %}
</p>

<br/>
{% endfor %}



