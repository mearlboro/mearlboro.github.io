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


# software engineering
<br/>

### SnowWall
#### privacy-oriented visual network monitoring
Motivated by privacy concerns and the lack of research on privacy on the Windows operating system, SnowWall is a networking tool designed to provide insights and control into the networking activity on a Windows-based system. SnowWall interacts with the operating system, intercepts every inbound and outbound connection, provides information on the connection’s state, lifetime, owning process, and most importantly, remote end point, such as geolocation and ownership information. SnowWall is a powerful tool designed to be user-friendly, which allows anyone to block unwanted connections with high-level firewall rules, such as blocking by country or by owning organization name. 

SnowWall is built on top of the Windows Firewall, using low-level networking APIs to gather the required information and interacting with the firewall to block unwanted outbound connections.  If you care about privacy, the layers of the internet, geolocation of internet hosts by IP or the internet topology, have a look at my [thesis](/assets/files/snowwall.pdf).

Currently SnowWall is aiming to become a distributed geolocation network which will be able to use the latest research in IP Geolocation and privacy preserving machine learning to provide the necessary information for implementing geographical security policies while anonymising private users.
<br/>
<br/>


### Seek
#### information extraction
Built in a group project, it's an information retrieval tool capable of analysis with statistical natural language processing techniques on large corpora. It uses latent semantic indexing, similar to many search engines, as well as latent Dirichlet allocation to extract topics from text. The tool is also able to extract relational information from text based on Noam Chomsky's work on transformational grammars. 

The tool has been trained on multiple corpora provided by the Stanford NLP team, the whole of English Wikipedia as well as the published papers repository of Imperial College. Furthermore, it supports information acquisition from multiple sources, including a general-purpose scraper written in Ruby, and a set of Python libraries that extract text from various formats such as .doc or .pdf. 

Check it out on [github](https://github.com/mearlboro/seek-legacy).
<br/>
<br/>

### Doodlr.js
#### real-time web application
A Javascript application with real-time collaborative digital painting features. Doodlr.js displays a gigantic board or wall of drawings where users can pick a specific canvas and join in collaborative drawing. Doodlr.js is run on top of Meteor streams, which allowed the users on the same canvas to pass messages in a peer-to-peer fashion to allow real-time drawing. The Parse database platform has been used due to its capacity to store images as objects. 

The drawing is done in HTML5 canvases and features supported are a pencil tool and textured brushes, selection with cutting, copying and pasting, drawing shapes, and colour picking in a very simple interface. It also supports colour manipulation and controls such as contrast, hue, saturation. Furthermore, it supports drawing with graphic tablets, which makes it suitable for all types of users: from artists who’d use it to brand their portfolio to friends scribbling during a video chat or a real-time maths tutorial. Drawing can be done either on the ’walls’ of a private ’room’ or on a public ‘metawall’, which allows great possibility for large artistic collaborations.

Check it out on [github](https://github.com/mearlboro/doodlr.js).

<br/>
<br/>


# design & web development
<br/>
<br/>


<div class="col-1-of-2 text-center">
	<a href="/assets/img/proj/shepherdtone.png" target="_blank"><img src="/assets/img/proj/shepherdtone.png"></a><br/>
	<p>&nbsp;</p>
	<h3 class="text-center">ShepherdTone</h3>
	<p><a href="http://shepherdtone.co.uk" target="_blank">shepherdtone.co.uk</a></p>
	<p>A a group of artists and media professionals banded together to tell the most compelling stories.</p>
	<p>&nbsp;</p>
</div>
<div class="col-1-of-2 text-center">
<a href="/assets/img/proj/ratstales.png" target="_blank"><img src="/assets/img/proj/ratstales.png"></a><br/>
	<p>&nbsp;</p>
	<h3 class="text-center">Rat's Tales</h3>
	<p><a href="http://ratstales.co.uk" target="_blank">ratstales.co.uk</a></p>
	<p>An indie publishing house with an ethical twist.</p>
	<p>&nbsp;</p>
</div>
<div class="col-1-of-2 text-center">
	<a href="/assets/img/proj/kctu.png" target="_blank"><img src="/assets/img/proj/kctu.png"></a><br/>
	<p>&nbsp;</p>
	<h3 class="text-center">KCTU</h3>
	<p><a href="http://ctu.co.uk" target="_blank">ctu.co.uk</a></p>
	<p>The King’s Clinical Trials Unit (KCTU) offers a range of services to support researchers conducting non-commercial trials</p>
	<p>&nbsp;</p>
</div>
<div class="col-1-of-2 text-center">
	<a href="/assets/img/proj/pureeros.png" target="_blank"><img src="/assets/img/proj/pureeros.png"></a><br/>
	<p>&nbsp;</p>
	<h3 class="text-center">Pureros</h3>
	<p><a href="http://pureeros.com" target="_blank">pureeros.com</a></p>
	<p>An e-boutique dedicated to the empowering of women and the expression of their sexuality.</p>
	<p>&nbsp;</p>
</div>