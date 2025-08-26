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
					<td>{%- if fixture.homeTeam != "" %}{{ fixture.homeTeam }} vs {{ fixture.awayTeam }}<br>{% endif %}
					<a href="{{ fixture.mapLink }}" target="_blank">{{ fixture.venue }}</a></td>
					<td>
						{%- if players %}
							<details>
								<summary>Players</summary>
								<ul>
									{%- for player in players -%}
										<li>{{ player.number }} - {{ player.name }} ({{ player.licence }})</li>
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

## Past Games
Date | Home vs Away Team
-- | --
{% for fixture in fixtures -%}
{{ fixture.datetime | date: "%a, %d%q %b %Y" }} | {{ fixture.homeTeam }} 55 vs 23 {{ fixture.awayTeam }}
{% endfor %}
