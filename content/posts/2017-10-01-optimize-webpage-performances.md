---
title: "Optimize Webpage Performance"
date: 2017-10-01T12:45:00+07:00
tags: ["web", "optimization"]
---
>Webpage performance is one of important keys for its accessibility. Slow response webpage will be more likely to be abandoned by users immediately. Hence, why you need to optimize it as much as you can. Here's tips and tricks I found based on website.grader.com.
<!--more-->

# Optimize Webpage Performances
from: [Website Grader](https://website.grader.com)

## **Reducing Page Size**
- Resize and/or Compress image content in web page
  - Image size should same or smaller than size of container. 
  - Use lossless compression method to avoid losing quality of image
  - Create hyperlink for image if user download/share it.


- Image Sprite and Image Scaling
  Use image sprite by combining multiple images to avoid multiple requests. By combining multiple images, this will show only part needed to show to reduce.
  Use image scaling to proportionally size the image needed.


- Remove Unnecessary links in CSS
  - Remove unnecessary fonts CDN in CSS to avoid it loads unnecessary fonts/libraries/plugins.
  - Remove unnecessary links in any files.


- Minify Resources
  - Removes unnecessary code, variables, comments, etc.
  - Removes unnecessary JS libraries or plugins being used(usually included by templates/framework)
  - Minify or compress CSS, JS, and HTML.(compress js: https://jscompress.com/)


- Use CDN(Content Delivery Network)

source: https://blog.hubspot.com/marketing/reducing-page-size



## **Reduce HTTP Requests**
- See how many requests requested everytime page loads. How to Check: Developer tools(F12) → Network Panel.


- Remove unnecessary links or image


- Make JavaScript asynchronous
  Everytime browser loads page, it load every resources(js) one by one. Make it asyncs.
  How to:
  - https://css-tricks.com/thinking-async/
  - https://vwo.com/blog/asynchronous-code/
  - https://www.fastly.com/blog/steve-souders-on-high-performance-web-components/
  
- Combine multiple CSS files together.
  Combine some CSS files to reduce multiple requests load.


- Use Nginx Webserver.
  When userbase is so high that can cause high number of requests, this can slow the response because of the limit of os server, cpu, ram, and also other factor contribute in response time from server. By using Nginx, it solves C10K problem using its single threaded architecture. User’s requests are dedicated to each worker process tied to single thread. So, when loads are so high, there’ll be non-blocking process accepting and responsing user’s response.

source: 

  https://blog.hubspot.com/marketing/reduce-http-requests
  https://code.tutsplus.com/id/tutorials/apache-vs-nginx-pros-cons-for-wordpress--cms-28540
  https://www.upguard.com/articles/apache-vs-nginx
  


## **Optimizing Page Speed** 
- Correctly place any render-blocking javascript in the header.
  Javascript that block the render process of page should be eliminated in the header. Mostly javascript files that are not needed for page load process. Use [Google Page Insight](https://developers.google.com/speed/pagespeed/insights/?hl=id) to detect render-blocking javascript. 


- Browser Chaching
  Setup serverside caching time.
  https://www.liquidweb.com/kb/how-to-configure-apache-2-to-control-browser-caching/


- Compress Response
  Compress responses sent from server side to reduce size and fasten response speed.
  https://gtmetrix.com/enable-gzip-compression.html
  https://examples.javacodegeeks.com/enterprise-java/tomcat/enable-gzip-compression-apache-tomcat/
  https://tomcat.apache.org/tomcat-6.0-doc/config/http.html


- Efficiently order stylesheets and scripts.
  - Put the most priority css and javascript loads at top of page and least priority in bottom of page
  - Use `Async` and `Defer` in Javascript load:
    - `Async` to loads javascript simultaneously with other page loads. Consider thinking other JS that need some dependencies from other JS files.
      example: `<script src="demo_async.js" async></script>`
    - `Defer` to delay javascript load for certain time after other page component loaded.
      example: `<script src="demo_defer.js" defer></script>`


- Use In-Memory database for Caching
  - In-memory caching caches the data into memory using some data structure(list,hash,etc) and can persist them in disk(persistence) if needed. Speed up page loading because every data requested frequently will be resided in memory(RAM). 
  - Options: [Redis](https://redis.io/topics/introduction), [Memcached](https://memcached.org/about), [Cassandra](http://cassandra.apache.org/), etc.

source: 

  - https://blog.hubspot.com/marketing/how-to-reduce-your-websites-page-speed
  - https://www.objectrocket.com/blog/how-to/top-5-redis-use-cases
  - https://blog.hubspot.com/marketing/remove-javascript-rendering-block



## **SEO**
- Use Sitemap
  - https://www.michael-bull.com/blog/2016/05/22/generating-sitemaps-with-spring-boot-and-sitemapgen4j
  - https://pramodeandc.wordpress.com/2013/03/04/create-sitemap-in-spring-mvc-seo/
  - https://blog.hubspot.com/marketing/build-sitemap-website

