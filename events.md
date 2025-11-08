---
layout: default
title: Team Events
permalink: /events/
---

<section class="card">
  <h1>Team Events</h1>
  <div class="searchbar">
    <input id="event-search" type="search" placeholder="Search by name or place...">
  </div>
  <div id="event-list" class="grid card-list">
    {% assign sorted = site.events | sort: "date" %}
    {% for e in sorted %}
    <article class="card" data-item data-index="{{ e.title }} {{ e.location }}">
      <h3 class="title"><a href="{{ e.url | relative_url }}">{{ e.title }}</a></h3>
      <p class="meta">{{ e.date | date: "%b %d, %Y" }}{% if e.time %} · {{ e.time }}{% endif %} · {{ e.location }}</p>
    </article>
    {% endfor %}
  </div>
</section>