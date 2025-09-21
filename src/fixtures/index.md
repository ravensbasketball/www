---
layout: default.html
title: Fixtures
---

# Fixtures

* [Subscribe to fixtures calendar (macOS/iOS/Outlook)](webcal://calendar.google.com/calendar/ical/ravensbasketballuk%40gmail.com/public/basic.ics)
* [Subscribe to fixtures calendar (Google)](https://calendar.google.com/calendar/?cid=https://calendar.google.com/calendar/ical/ravensbasketballuk%40gmail.com/public/basic.ics)

<iframe src="https://calendar.google.com/calendar/embed?src=ravensbasketballuk%40gmail.com&ctz=Europe%2FLondon" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>

## Upcoming Games

<figure>
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Tipoff</th>
				<th>Home vs Away</th>
				<th>Squad</th>
			</tr>
		</thead>
		<tbody>
			{% for fixture in fixtures -%}
				{%- assign players = fixture.squad -%}
				{%- assign squadSize = players | size -%}
				<tr id="{{ fixture.datetime }}">
					<td style="vertical-align: top;">
						<a href="#{{ fixture.datetime }}">{{ fixture.datetime | date: "%a, %e%q %b %Y" }}</a>
					</td>
					<td style="vertical-align: top;">{{ fixture.datetime | date: "%l:%M%P" }}</td>
					<td style="vertical-align: top;">
						{%- if fixture.homeTeam != "" %}{{ fixture.homeTeam }} vs {% if fixture.awayTeam == '' -%}TBC{%- else -%}{{ fixture.awayTeam }}{%- endif -%}<br>{% endif %}
						<a href="{{ fixture.mapLink }}" target="_blank">{{ fixture.venue | replace: ",", "<br>" }}</a>
					</td>
					<td>
						{%- if squadSize > 0 %}
							<details>
								<summary>Players ({{ players | size }})</summary>
								<ul>
									{%- for player in players -%}
										<li>{{ player.kit }} - {{ player.givenName }}, {{ player.familyName | first }}</li>
									{% endfor %}
								</ul>
							</details>
						{% endif %}
					</td>
				</tr>
			{% endfor %}
		</tbody>
	</table>
</figure>

{% comment %}
{%- assign today = 'now' | date: '%s' %}
{%- assign pastGames = '' | split: '' %}

{%- for fixture in fixtures %}
	{%- assign date_timestamp = fixture.datetime | date: '%s' %}

	{%- if date_timestamp < today %}
		{% assign pastGames = pastGames | push: fixture %}
	{%- endif %}
{%- endfor %}

{%- if pastGames.size > 0 -%}
## Past Games
Date | Home vs Away Team
-- | --
{% for fixture in pastGames -%}
{{ fixture.datetime | date: "%a, %e%q %b %Y" }} | {{ fixture.homeTeam }} {{ fixture.homeScore }} vs {{ fixture.awayScore }} {{ fixture.awayTeam }}
{% endfor %}
{% endif %}
{% endcomment %}
