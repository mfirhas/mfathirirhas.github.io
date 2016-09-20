---
layout: page
title: Tags
permalink: /tags/
sitemap: true
---

<div>
    {% assign tags = site.tags | sort %}
    {% for tag in tags %}
     <span class="site-tag">
        <a class="tagBtn" href="#{{ tag | first | slugify }}"><i class="fa fa-tag">
                {{ tag[0] | replace:'-', ' ' }} ({{ tag | last | size }})
        </i></a>
    </span>
    {% endfor %}
</div>
<hr>

<div id="index">

    {% for tag in tags %}
    <a name="{{ tag[0] }}"></a><h2>{{ tag[0] | replace:'-', ' ' }} ({{ tag | last | size }}) </h2>
    <!-- <hr> -->
    {% assign sorted_posts = site.posts | sort: 'title' %}
    {% for post in sorted_posts %}
    {%if post.tags contains tag[0]%}

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