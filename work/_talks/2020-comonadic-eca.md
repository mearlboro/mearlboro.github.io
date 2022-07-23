---
layout: project
title: "Comonadic evaluation: applications in cellular automata"
subtitle: Implementing Wolfram's Elementary Cellular Automata in Haskell usign comonadic computations!
location: Department of Computing, Imperial College London (online)
date: 14 Apr 2020, 14:00
slides: /assets/files/mis.pm-comonadic-eca.pdf
permalink: /talks/2020-comonadic-eca-haskell
img: /assets/img/talks/2020-comonadic-eca.png
---

_Abstract._ Cellular automata (CA) is one of the prime examples of artificial life, as well as the emergence of complex structures at the systemic level from simple interactions between the individual parts of the system. Moreover, CA are defined iteratively over time, and manifest such complex properties even when their definition is fully deterministic. Elementary CA (ECA), introduced by Stephen Wolfram in [[1]](#1), provide the most simple, uni-dimensional example of CA which still manifest complex patterns and are fully defined through bitwise operations. In spite of popular appeal and large bodies of work on the behaviour of CA, there is little research on computational primitives that can be used to implement CA intuitively, by abstracting away the procedural or object-oriented implementation details. In this talk, I present how to use comonadic computations in Haskell to define iterative computations on infinite lists.

