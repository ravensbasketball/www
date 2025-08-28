---
layout: default.html
title: Players
---

Kit | Name | Licence
-- | -- | --
{% for player in players -%}
	{{ player.kit}} | {{ player.givenName }} {{ player.familyName | first }} | {{ player.licence}}
{% endfor %}
