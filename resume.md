---
layout: page
title: Resume
---

<div class="demo-card-wide mdl-card mdl-shadow--2dp">

  <!-- name -->
  <div class="mdl-card__title">
    <h2 class="mdl-card__title-text">{{ site.data.profile.name }}</h2>
  </div>

  <!-- summary -->
  <div class="mdl-card__supporting-text supporting-text-wide resume-font-summary">
    <p align="center"><small>{{ site.data.profile.summary }}</small></p>
    <p align="center"><small><small><b>Tech stacks:</b> {{ site.data.profile.stacks }} </small></small></p>
  </div>

  <!-- contacts -->
  <div class="mdl-card__actions mdl-card--border">
    <a href="{{ site.data.contacts.email_link }}" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      <i class="fa fa-envelope" aria-hidden="true"></i> {{ site.data.contacts.email }}
    </a>
    <a href="{{ site.data.contacts.linkedin_link }}" target="_blank" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      <i class="fa fa-linkedin-square" aria-hidden="true"></i> {{ site.data.contacts.linkedin }}
    </a>
    <a href="{{ site.data.contacts.github_link }}" target="_blank" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      <i class="fa fa-github" aria-hidden="true"></i> {{ site.data.contacts.github }}
    </a>
    <a href="{{ site.data.contacts.blog_link }}" target="_blank" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      <i class="fa fa-file-text" aria-hidden="true"></i> {{ site.data.contacts.blog }}
    </a>
    <a href="{{ site.data.contacts.portfolio_link }}" target="_blank" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      <i class="fa fa-code" aria-hidden="true"></i> {{ site.data.contacts.portfolio }}
    </a>
  </div>

  <!-- About me -->
  <div class="mdl-card__supporting-text mdl-card__actions mdl-card--border">
    <h2 class="mdl-card__title-text supporting-text-sub-title">About Me</h2>
  </div>
  <div class="mdl-card__supporting-text mdl-card__actions sub-section-top-border resume-font-content">
    <ul>
      <li><i class="fa fa-user" aria-hidden="true"></i> {{ site.data.profile.name }}</li>
      <li><i class="fa fa-calendar" aria-hidden="true"></i> {{ site.data.profile.born }} </li>
      <li><i class="fa fa-home" aria-hidden="true"></i> {{ site.data.profile.address }}</li>
      <li><i class="fa fa-envelope" aria-hidden="true"></i> {{ site.data.contacts.email }}</li>
      <li><i class="fa fa-whatsapp" aria-hidden="true"></i> {{ site.data.contacts.phone }} </li>
    </ul>
  </div>

  <!-- experiences -->
  <div class="mdl-card__supporting-text mdl-card__actions mdl-card--border">
    <h2 class="mdl-card__title-text supporting-text-sub-title">Experiences</h2>
  </div>
  <div class="mdl-card__supporting-text mdl-card__actions sub-section-top-border resume-font-content2">
    <ul>
    {% for exp in site.data.experiences %}
      <li>{{ exp.position }} <small><i class="fa fa-at" aria-hidden="true"></i> {{ exp.company }}</small></li>
      <span><small><i>{{ exp.date }}</i><br>
      {{ exp.desc }}
      <br>
      <i>Details:</i>
      <ul>
      {% for task in exp.tasks %}
        <li>{{ task }}</li>
      {% endfor %}
      </ul> 
      </small></span>
    {% endfor %}
    </ul>
  </div>

  <!-- educations -->
  <div class="mdl-card__supporting-text mdl-card__actions mdl-card--border">
    <h2 class="mdl-card__title-text supporting-text-sub-title">Educations</h2>
  </div>
  <div class="mdl-card__supporting-text mdl-card__actions sub-section-top-border resume-font-content">
    {% for education in site.data.educations %}
      <p><i class="fa fa-graduation-cap" aria-hidden="true"></i> {{ education.school }}, <small><b>{{ education.date }}</b></small></p>
    {% endfor %}
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
  <div class="mdl-card__supporting-text mdl-card__actions sub-section-top-border resume-font-content2">
    <ul>
      {% for org in site.data.organizations %}
        <li>{{ org.name }}</li>
        <span><small>{{ org.desc }}</small></span>
      {% endfor %}
    </ul>
  </div>

  <!-- Other Activities -->
  <!-- <div class="mdl-card__supporting-text mdl-card__actions mdl-card--border">
    <h2 class="mdl-card__title-text supporting-text-sub-title">Other Activities</h2>
  </div>
  <div class="mdl-card__supporting-text mdl-card__actions sub-section-top-border resume-font-content3">
    <p>What I did in my spare time:</p>
    <ul>
      <li>Tinkering with programming languages, tools, libraries, frameworks, including the new ones.</li>
      <li>Solving programming problems in Hackerrank, OpenKattis, and sometime wasting time solving Euler problems.</li>
      <li>Exploring Github, opening issues, exploring new and cool libraries, stalking people in github, sometime experimenting with some open project(vscode editor, editor theme, friend's final project, reacts examples, etc).</li>
      <li>Blogging</li>
    </ul>
  </div> -->

  <!-- Other Interests -->
  <!-- <div class="mdl-card__supporting-text mdl-card__actions mdl-card--border">
    <h2 class="mdl-card__title-text supporting-text-sub-title">Other Interests</h2>
  </div>
  <div class="mdl-card__supporting-text mdl-card__actions sub-section-top-border resume-font-content3">
    <p>What topics I mostly think of it:</p>
    <ul>
      <li>Science and Technology</li>
      <li>Image Processing and Machine Learning</li>
      <li>Movies and sometime Anime</li>
      <li>Religion</li>
      <li>Sport, mostly footbal</li>
      <li>Video Game</li>
    </ul>
  </div> -->

  <!-- contacts bottom -->
  <div class="mdl-card__actions mdl-card--border">
    <a href="{{ site.data.contacts.email_link }}" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      <i class="fa fa-envelope" aria-hidden="true"></i> {{ site.data.contacts.email }}
    </a>
    <a href="{{ site.data.contacts.linkedin_link }}" target="_blank" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      <i class="fa fa-linkedin-square" aria-hidden="true"></i> {{ site.data.contacts.linkedin }}
    </a>
    <a href="{{ site.data.contacts.github_link }}" target="_blank" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      <i class="fa fa-github" aria-hidden="true"></i> {{ site.data.contacts.github }}
    </a>
    <a href="{{ site.data.contacts.blog_link }}" target="_blank" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      <i class="fa fa-file-text" aria-hidden="true"></i> {{ site.data.contacts.blog }}
    </a>
    <a href="{{ site.data.contacts.portfolio_link }}" target="_blank" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      <i class="fa fa-code" aria-hidden="true"></i> {{ site.data.contacts.portfolio }}
    </a>
  </div>

  <!-- last -->
  <div class="mdl-card__actions mdl-card--border resume-font-content3 sub-section-bottom-border">
    <p align="center" style="margin:10px 40px 20px 40px;"><i>~Thank you for the consideration~</i></p>
  </div>

  <!-- <div class="mdl-card__menu">
    <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
      <i class="material-icons">share</i>
    </button>
  </div> -->

</div>

