---
layout: default.html
title: Fixtures
---

# Fixtures

## Upcoming Games
<figure>

Date | Tipoff | Home vs Away | Squad
-- | -- | -- | --
{% for fixture in fixtures -%}

{%- assign players = fixture.squad -%}

{{ fixture.datetime | date: "%a, %d%q %b %Y" }} | {{ fixture.datetime | date: "%l:%M%P" }} | {{ fixture.homeTeam }} vs {{ fixture.awayTeam }} <br> {{ fixture.venue }} | {%- for player in players -%}
* {{ player.name }} ({{ player.number }}) &nbsp;
{%- endfor %}
{% endfor %}
</figure>



### Squad
No | Name | Licence
-- | -- | --
{% for player in players -%}
{{ player.number }} | {{ player.name }} | {{ player.licence }} |
{% endfor %}


## Past Games
Date | Home Team | Score | Away Team | Venue
-- | -- | -- | -- | --
{%- for fixture in fixtures %}
{{ fixture.datetime | date: "%a, %d%q %b %Y" }} | {{ fixture.homeTeam }} |  | {{ fixture.awayTeam }} | {{ fixture.venue }}
{% endfor %}

No | Name | Licence
-- | -- | --
6 | Richard H |
xx | Simon JT |

