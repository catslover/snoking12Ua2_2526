---
layout: default
title: Home
---

<section class="card">
  <h1>Hockey Tournament Information</h1>
  <p class="kicker">Sharing event planning details for families and coaches.</p>
  <div class="quick-links">
    <a class="btn" href="{{ "/tournaments/" | relative_url }}">Browse Tournaments</a>
    <a class="btn" href="{{ "/events/" | relative_url }}">Team Events</a>
    <a class="btn" href="{{ "/about/" | relative_url }}">About & Editing</a>
  </div>
</section>

<section class="card">
  <h2>Upcoming Tournaments</h2>
  <div class="grid card-list">
    {% assign upcoming = site.tournaments | sort: "start_date" %}
    {% for t in upcoming %}
      {% if t.start_date and t.start_date >= site.time %}
      <article class="card" data-item data-index="{{ t.title }} {{ t.location }} {{ t.division }}">
        <h3 class="title"><a href="{{ t.url | relative_url }}">{{ t.title }}</a></h3>
        <p class="meta">
          {{ t.start_date | date: "%b %d" }}{% if t.end_date %}–{{ t.end_date | date: "%b %d" }}{% endif %} · {{ t.location }}
        </p>
        {% if t.status %}<span class="badge {{ t.status | downcase }}">{{ t.status }}</span>{% endif %}
      </article>
      {% endif %}
    {% endfor %}
  </div>
</section>

<section class="card">
  <h2>This Month's Events</h2>
  <div class="grid card-list">
    {% assign month = "now" | date: "%Y-%m" %}
    {% assign evs = site.events | sort: "date" %}
    {% for e in evs %}
      {% assign evmonth = e.date | date: "%Y-%m" %}
      {% if evmonth == month %}
      <article class="card" data-item data-index="{{ e.title }} {{ e.location }}">
        <h3 class="title"><a href="{{ e.url | relative_url }}">{{ e.title }}</a></h3>
        <p class="meta">{{ e.date | date: "%b %d" }}{% if e.time %} · {{ e.time }}{% endif %} · {{ e.location }}</p>
      </article>
      {% endif %}
    {% endfor %}
  </div>
</section>