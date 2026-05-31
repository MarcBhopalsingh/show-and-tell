---
title: I made this website for show and tell
description: I wanted a central place to talk about all the cool things I build.
date: 2026-05-30
category: project
repo: https://github.com/MarcBhopalsingh/show-and-tell
---

I love designing systems to solve silly problems. I especially love when systems are designed to reduce
friction and incentivise desirable outcomes.

With that in mind, I decided to publish this website as a place to talk about my silly problems.
I also love writing, so it feels like a win-win.

##

## Tech stuff

[Astro](https://astro.build/)

Since this website is to showcase my projects, I'm trying out [Astro](https://astro.build/) as the framework
powering this website.
Astro is a framework designed for building content focused websites and I found that it fit my
needs quite well.

Firstly, I want this website to be easy to update, publish etc. Since Astro supports markdown files natively,
it significantly reduces the maintenance burden for adding new content.

[CI/CD](https://github.com/MarcBhopalsingh/show-and-tell/tree/main/.github/workflows)

I'm using Github Actions + Github Pages for:

- build, lint and test jobs
- hosting this website
