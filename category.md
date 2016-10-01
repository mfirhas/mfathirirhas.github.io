---
layout: page
title: Categories
permalink: /categories/
sitemap: true
---


<!-- <hr> -->
<div>
    {% assign categories = site.categories | sort %}
    {% for category in categories %}
     <span class="site-tag">
        <a class="tagBtn" href="#{{ category | first | slugify }}"><i class="fa fa-list-alt">
                {{ category[0] | replace:'-', ' ' }} ({{ category | last | size }})
        </i></a>
    </span>
    {% endfor %}
</div>
<hr>

<div id="index">

    {% for category in categories %}
    <a name="{{ category[0] }}"></a><h2>{{ category[0] | replace:'-', ' ' }} ({{ category | last | size }}) </h2>
    <!-- <hr> -->
    {% assign sorted_posts = site.posts | sort: 'title' %}
    {% for post in sorted_posts %}
    {%if post.categories contains category[0]%}

    <!-- <ul style="list-style-type:square">
    <li> -->
      <small><a href="{{ site.url }}{{site.baseurl}}{{ post.url }}" title="{{ post.title }}">&#9632; {{ post.title }} </a> 
      <small>{{ post.date |  date: "%B %e, %Y" }}</small> </small> <br>
      <!-- <p class="date">{{ post.date |  date: "%B %e, %Y" }}</p> -->
        <!-- <p>{{ post.excerpt | strip_html | truncate: 160 }}</p> -->
    <!-- </li>
    </ul> -->

    {%endif%}
    {% endfor %}
    <hr>
    {% endfor %}
</div>

<a class="readMoreBtn readMoreBtn1" href="{{ site.baseurl }}/">Home</a>
<a class="readMoreBtn readMoreBtn1" href="{{ site.baseurl }}/blog">Blog</a>