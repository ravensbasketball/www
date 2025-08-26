---
layout: default.html
title: Fixtures
---

# Fixtures

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
				<tr>
					<td>{{ fixture.datetime | date: "%a, %e%q %b %Y" }}</td>
					<td>{{ fixture.datetime | date: "%l:%M%P" }}</td>
					<td>{%- if fixture.homeTeam != "" %}{{ fixture.homeTeam }} vs {% if fixture.awayTeam == '' -%}TBC{%- else -%}{{ fixture.awayTeam }}{%- endif -%}<br>{% endif %}
					<a href="{{ fixture.mapLink }}" target="_blank">{{ fixture.venue }}</a></td>
					<td>
						{%- if players %}
							<details>
								<summary>Players ({{ players | size }})</summary>
								<ul>
									{%- for player in players -%}
										<li>{{ player.kit }} - {{ player.givenName }}, {{ player.familyName | first }} ({{ player.licence }})</li>
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
