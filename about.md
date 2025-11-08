---
layout: default
title: About
permalink: /about/
---

<section class="card">
  <h1>About & Editing</h1>
  <p>This site is built with Jekyll and GitHub Pages. Add or edit content by creating Markdown files in the <code>_tournaments</code> or <code>_events</code> folders. Use the front matter fields shown below.</p>

<pre><code>---
title: Example Cup
start_date: 2025-01-17
end_date: 2025-01-20
location: Blaine, MN
venue: NSC Super Rink
division: U12 A
status: Confirmed # or Watchlist
schedule_url: https://example.com/schedule
hotel:
  name: Renaissance Minneapolis Hotel, The Depot
  url: https://example.com/hotel
docs:
  - label: Rules PDF
    url: https://example.com/rules.pdf
notes: &gt;
  Short freeform notes here. You can write **Markdown**.
checklist:
  - text: Submit roster
    done: true
  - text: Collect medical forms
    done: false
---
</code></pre>

<p>Push changes to GitHub; Pages will rebuild automatically.</p>
</section>