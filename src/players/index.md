---
title: Players
layout: default.html
date: git Last Modified
---

# Players

Kit | Name
-- | --
{% for player in players -%}
	{{ player.kit}} | {{ player.givenName }} {{ player.familyName | first }}
{% endfor %}

{% comment %}
Kit | Name | Licence
-- | -- | --
{% for player in players -%}
	{{ player.kit}} | {{ player.givenName }} {{ player.familyName | first }} | {{ player.licence}}
{% endfor %}
{% endcomment %}
