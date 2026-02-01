---
title: Players
layout: default.html
date: git Last Modified
---

# Players

Kit | Name
-- | --
{% for player in players2 -%}
	{{ player.kit }} | {{ player.givenName }} {{ player.familyName | first }}
{% endfor %}
