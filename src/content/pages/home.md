---
layout: 'base.njk.html'
permalink: '/'
label: home
---

# Salut

{% for post in collections.all %}

- {{post.url}}
  {% endfor %}
