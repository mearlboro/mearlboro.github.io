---
layout: publication
title: "Random state comonads encode cellular automata evaluation"
authors: Madalina I Sas, Julian H J Sutherland 
img: /assets/img/pubs/2025-emergence-estimators.png
paper: "https://arxiv.org/pdf/2512.22067"
arxiv: "https://arxiv.org/abs/2512.22067"
arxiv_display: "abs/2512.22067"
journal: arXiv
#doi: "https://doi.org/10.31234/osf.io/e8j39"
#doi_display: "10.31234/osf.io/e8j39"
date: 5 May 2025 
permalink: /publications/2025-comonadic-ca
img: /assets/img/pub/hascell-comonadic-ca.png
abstract: "Cellular automata (CA) are quintessential ALife and ubiquitous in many studies of collective behaviour and emergence, from morphogenesis to social dynamics and even brain modelling. Recently, there has been an increased interest in formalising CA, theoretically through category theory and practically in terms of a functional programming paradigm. Unfortunately, these remain either in the realm of simple implementations lacking important practical features, or too abstract and conceptually inaccessible to be useful to the ALife community at large. In this paper, we present a brief and accessible introduction to a category-theoretical model of CA computation through a practical implementation in Haskell. We instantiate arrays as comonads with state and random generators, allowing stochastic behaviour not currently supported in other known implementations. We also emphasise the importance of functional implementations for complex systems: thanks to the Curry-Howard-Lambek isomorphism, functional programs facilitate a mapping between simulation, system rules or semantics, and categorical descriptions, which may advance our understanding and development of generalised theories of emergent behaviour. Using this implementation, we show case studies of four famous CA models: first Wolfram's CA in 1D, then Conway's game of life, Greenberg-Hasings excitable cells, and the stochastic Forest Fire model in 2D, and present directions for an extension to N dimensions. Finally, we suggest that the comonadic model can encode arbitrary topologies and propose future directions for a comonadic network."
---
