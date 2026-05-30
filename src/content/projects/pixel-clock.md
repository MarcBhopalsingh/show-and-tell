---
title: Pixel Clock
summary: A Raspberry Pi-driven LED matrix that shows the time, weather, and now-playing track on a desk display.
category: pi
tags: ["Raspberry Pi", "Python", "LED matrix"]
date: 2026-04-18
featured: true
repo: https://github.com/example/pixel-clock
---

Pixel Clock started as a weekend experiment with a 64x32 RGB LED matrix and a
Raspberry Pi Zero 2 W. It has since grown into the centerpiece of my desk.

## What it does

- Renders the time with a custom bitmap font
- Pulls hourly weather from a local cache to avoid hammering the API
- Shows the currently playing track from my music service

## How it works

A small Python service drives the panel over the
[rpi-rgb-led-matrix](https://github.com/hzeller/rpi-rgb-led-matrix) library. A
scheduler rotates between "faces" (clock, weather, now-playing), and each face
is just a class that knows how to draw itself onto a frame buffer.

The trickiest part was getting smooth scrolling without flicker — the answer was
double buffering and pinning the render loop to an isolated CPU core.
