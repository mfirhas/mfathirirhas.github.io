---
layout: page
title: Resume
---

<div class="demo-card-wide mdl-card mdl-shadow--2dp">

  <!-- name -->
  <div class="mdl-card__title">
    <h2 class="mdl-card__title-text">Muhammad Fathir Irhas</h2>
  </div>

  <!-- summary -->
  <div class="mdl-card__supporting-text supporting-text-wide resume-font-summary">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris sagittis pellentesque lacus eleifend lacinia...
  </div>

  <!-- contacts -->
  <div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      Get Started
    </a>
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      contact me
    </a>
  </div>

  <!-- experiences -->
  <div class="mdl-card__supporting-text mdl-card__actions mdl-card--border">
    <h2 class="mdl-card__title-text supporting-text-sub-title">Experiences</h2>
  </div>
  <div class="mdl-card__supporting-text mdl-card__actions sub-section-top-border resume-font-content2">
    <ul>
      <li>Software Engineer <small><i class="fa fa-at" aria-hidden="true"></i> Emporia Digital Raya, Anabatic Tech.</small></li>
      <span><small><i>Nov 2016 - Present</i><br>
      Anabatic is one of Indonesia's leading IT company found in 2002. It provides IT solutions in form of many kinds from software, hardware, servers, implementations, maintenance, human resources, etc. Its main clients are mostly banks and some public sectors. Anabatic has a alot of business handled by its subsidiaries. One of its new subsidiary provide ecommerce service is Emporia Digital Raya. 
      <br><br>
      Emporia Digital Raya became partner with Alibaba since its first establishment. Through partnership with Alibaba, Emporia became Alibaba's hand to connects SME in Indonesia to global export market through subscribtion to Alibaba <a target="_blank" href="http://ggs.alibaba.com/index.html">Global Gold Supplier</a>(GGS) membership. This membership will grant you access to your customers/buyers globally worldwide. By joining GGS You will also get informations, data and statistics about possible interest in certain region and demands measurement per your customers/buyers. 
      <br><br>
      Emporia provide ecommerce platform in form of web app and services. Our first product <a target="_blank" href="https://eksporaja.com">eksporaja.com</a> became interface for Indonesia SME to subscribe Alibaba GGS membership. Our service will connect the GGS subscriber(SME) to Alibaba premium membership GGS through <a target="_blank" href="https://eksporaja.com/alibaba-ggs">eksporaja GGS registration</a>.
      <br><br>
      Beside partnership with Alibaba, Emporia also provides ecommerce service and solutions for other customers. Another product is <a href="https://www.bacapibo.com/">bacapibo.com</a>, an ecommerce platform in form of web app/services and mobile app. Another in progress product is InfoDaily(<i>codename: udaily</i>), a mobile app provide places directories, foods online store(B2C), payment gateway, and many other services that might be added for future needs. Udaily use REST API for all of its web services and android for mobile client(iOS coming soon) consuming APIs provided by web services written in PHP.
      <br><br>
      <i>Responsibilities:</i> 
        <ul>
          <li>Agile Scrum</li>
          <span>Follow Scrum process of development and deliver progress every 2 weeks(sometime 1 week).</span>
          <li>Front-end development</li>
          <span>Develop and Fix some UI elements for Eksporaja. Create layout responsiveness for mobile view.</span>
          <li>Main site maintenance</li>
          <span>Add, fix, and delete some features or web contents/layouts in <a target="_blank" href="http://emporiadigital.com/id">Emporia</a> main site  </span>
          <li>Back-end development</li>
          <span>Develop and fix some web services(APIs) for eksporaja.com using Spring Java and InfoDaily(udaily) using PHP</span>
          <li>Versioning and Deployment</li>
          <span>Keep track on development progress through git and note every version and related features. Deploy codebase and database at anytime needed for testing.</span>
        </ul>
      <br>
      </small></span>
      <!-- --- -->
      <li>Web Developer <small><i class="fa fa-at" aria-hidden="true"></i> Chevron</small></li>
      <span><small><i>2015</i><br>
      Internship Project UTC-POD Team in IT Departement. Creating a simple web app using ASP.Net(C#) for helping the Field Engineer in interacting with Wells especially in surveying the Wells. 
      <br><br>
      </small></span>
      <!-- --- -->
      <li>Practicum Asistant <small><i class="fa fa-at" aria-hidden="true"></i> Informatics Lab, Telkom University</small></li>
      <span><small><i>2013 - 2015</i>
      <br>
      In College, I participate as Practicum Assistant in spare time for Algorithm and Data Structure subject. 
      <br>
      <i>Responsibilities:</i>
      <ul>
        <li>Held and leaded the Practicum Class</li>
        <li>Helped organize and control the practicum.</li>
        <li>Taught and mentor students.</li>
        <li>Helped students in debugging the problems they found in their code.</li> 
        <li>Evaluate works and results of every students at the end of practicum.</li>
      </ul>
      </small></span>
    </ul>
  </div>

  <!-- educations -->
  <div class="mdl-card__supporting-text mdl-card__actions mdl-card--border">
    <h2 class="mdl-card__title-text supporting-text-sub-title">Educations</h2>
  </div>
  <div class="mdl-card__supporting-text mdl-card__actions sub-section-top-border resume-font-content">
    <p><i class="fa fa-graduation-cap" aria-hidden="true"></i> SMAN 1 Bukittinggi, <small><b>2009 - 2012</b></small></p>
    <p><i class="fa fa-graduation-cap" aria-hidden="true"></i> Telkom University, <small>S1 Informatics Engineering(S.Kom)</small>, <small><b>2012 - 2016</b></small></p>
    <span></span>
  </div>

  <!-- skills -->
  <div class="mdl-card__supporting-text mdl-card__actions mdl-card--border">
    <h2 class="mdl-card__title-text supporting-text-sub-title">Skills</h2>
  </div>
  <div class="mdl-card__supporting-text mdl-card__actions sub-section-top-border progress-bar-size">

  <div class="skillset">
    {% for skill in site.data.skills %}
      <div class="item">
        <h3 class="level-title">{{ skill.name }}</h3>
        <div class="level-bar">
          <div class="level-bar-inner" data-level="{{ skill.level }}">
          </div>
        </div>
      </div>
    {% endfor %}
  </div>

  </div>

  <!-- Organizations and Events -->
  <div class="mdl-card__supporting-text mdl-card__actions mdl-card--border">
    <h2 class="mdl-card__title-text supporting-text-sub-title">Organizations and Events</h2>
  </div>
  <div class="mdl-card__supporting-text mdl-card__actions sub-section-top-border">
  </div>

  <!-- <div class="mdl-card__menu">
    <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
      <i class="material-icons">share</i>
    </button>
  </div> -->

</div>

