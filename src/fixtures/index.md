---
title: Fixtures
layout: default.html
date: git Last Modified
---

# Fixtures

* To get an automatically updated view of all our fixtures, subscribe to our fixtures calendar with your mobile or desktop calendar application:
	* [macOS/iOS/Outlook](webcal://calendar.google.com/calendar/ical/ravensbasketballuk%40gmail.com/public/basic.ics)
	* [Google Calendar](https://calendar.google.com/calendar/?cid=https://calendar.google.com/calendar/ical/ravensbasketballuk%40gmail.com/public/basic.ics)

<details>
	<summary>Google Calendar</summary>
	<iframe src="https://calendar.google.com/calendar/embed?src=ravensbasketballuk%40gmail.com&ctz=Europe%2FLondon" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
</details>

## Upcoming Games

{% assign upcomingFixturesGroupedByYearMonth = fixtures | upcomingFixtures | sort: 'datetime' | group_by_exp: 'item', 'item.datetime | truncate: 7, ""' %}

<figure>
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Tipoff</th>
				<th>Home vs Away</th>
				<!-- <th>Squad</th> -->
			</tr>
		</thead>
		<tbody>
			{% for yearMonth in upcomingFixturesGroupedByYearMonth -%}
				<tr><td colspan="3"><b>{{ yearMonth.name | date: '%B %Y' }}</b></td></tr>
				{% for fixture in yearMonth.items %}
					{%- include 'fixture.html' -%}
				{% endfor %}
			{% endfor %}
		</tbody>
	</table>
</figure>

## Past Games

{% assign pastFixturesGroupedByYearMonth = fixtures | pastFixtures | sort: 'datetime' | reverse  | group_by_exp: 'item', 'item.datetime | truncate: 7, ""' %}

<figure>
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Tipoff</th>
				<th>Home vs Away</th>
				<!-- <th>Squad</th> -->
			</tr>
		</thead>
		<tbody>
			{% for yearMonth in pastFixturesGroupedByYearMonth -%}
				<tr><td colspan="3"><b>{{ yearMonth.name | date: '%B %Y' }}</b></td></tr>
				{% for fixture in yearMonth.items %}
					{%- include 'fixture.html' -%}
				{% endfor %}
			{% endfor %}
		</tbody>
	</table>
</figure>
