---
layout: default
title: Tournaments
permalink: /tournaments/
---

<section class="card">
  <h1>Tournaments</h1>
  <div class="searchbar">
    <input id="tournament-search" type="search" placeholder="Search by name, city, division...">
  </div>
  <div id="tournament-list" class="grid card-list">
    {% assign sorted = site.tournaments | sort: "start_date" %}
    {% for t in sorted %}
    <article class="card" data-item data-index="{{ t.title }} {{ t.location }} {{ t.division }} {{ t.status }}">
      <h3 class="title"><a href="{{ t.url | relative_url }}">{{ t.title }}</a></h3>
      <p class="meta">{{ t.start_date | date: "%b %d, %Y" }}{% if t.end_date %}–{{ t.end_date | date: "%b %d, %Y" }}{% endif %} · {{ t.location }}</p>
      <div class="pills">
        {% if t.division %}<span class="pill">{{ t.division }}</span>{% endif %}
        {% if t.status %}<span class="pill">{{ t.status }}</span>{% endif %}
      </div>
    </article>
    {% endfor %}
  </div>
</section>