<template>
  <div class="resumes-show">
    <div class="wrapper">
      <div class="sidebar-wrapper">
        <div class="profile-container">
          <img class="profile" src="" alt="" />
          <h1 class="name">{{ student.first_name }} {{ student.last_name }}</h1>
          <h3 class="tagline">Full Stack Developer</h3>
        </div>
        <!--//profile-container-->

        <div class="contact-container container-block">
          <ul class="list-unstyled contact-list">
            <li class="email">
              <i class="fas fa-envelope"></i>
              <a href="mailto: yourname@email.com">{{ student.email }}</a>
            </li>
            <li class="phone">
              <i class="fas fa-phone"></i>
              <a href="tel:0123 456 789">{{ student.phone_number }}</a>
            </li>
            <li class="website">
              <i class="fas fa-globe"></i>
              <a
                href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/"
                target="_blank"
              >
                {{ student.email }}
              </a>
            </li>
            <li class="linkedin">
              <i class="fab fa-linkedin-in"></i>
              <a href="#" target="_blank">{{ student.linkedin }}</a>
            </li>
            <li class="github">
              <i class="fab fa-github"></i>
              <a href="#" target="_blank">{{ student.github }}</a>
            </li>
            <li class="twitter">
              <i class="fab fa-twitter"></i>
              <a href="https://twitter.com/3rdwave_themes" target="_blank">{{ student.twitter }}</a>
            </li>
          </ul>
        </div>
        <!--//contact-container-->
        <div class="education-container container-block">
          <h2 class="container-block-title">Education</h2>
          <div class="item">
            <h4 class="degree">{{ student.educations[0]["degree"] }}</h4>
            <h5 class="meta">{{ student.educations[0]["university"] }}</h5>
            <div class="time">{{ student.educations[0]["start_date"] }} {{ student.educations[0]["end_date"] }}</div>
          </div>
        </div>
        <!--//education-container-->

        <div class="skills-container container-block">
          <h2 class="container-block-title">Skills</h2>
          <ul class="list-unstyled interests-list">
            <li>
              {{ student.skills[0]["name"] }}
              <span class="lang-desc"></span>
            </li>
            <li>
              {{ student.skills[1]["name"] }}
              <span class="lang-desc"></span>
            </li>
            <li>
              {{ student.skills[2]["name"] }}
              <span class="lang-desc"></span>
            </li>
            <li>
              {{ student.skills[3]["name"] }}
              <span class="lang-desc"></span>
            </li>
            <li>
              {{ student.skills[4]["name"] }}
              <span class="lang-desc"></span>
            </li>
            <li>
              {{ student.skills[5]["name"] }}
              <span class="lang-desc"></span>
            </li>
            <li>
              {{ student.skills[6]["name"] }}
              <span class="lang-desc"></span>
            </li>
            <li>
              {{ student.skills[7]["name"] }}
              <span class="lang-desc"></span>
            </li>
            <li>
              {{ student.skills[8]["name"] }}
              <span class="lang-desc"></span>
            </li>
            <li>
              {{ student.skills[9]["name"] }}
              <span class="lang-desc"></span>
            </li>
          </ul>
        </div>
        <!--//capstone-->

        <div class="capstone-container container-block">
          <h2 class="container-block-title">Capstone</h2>
          <ul class="list-unstyled capstone-list">
            <li>{{ student.capstones[0]["name"] }}</li>
            <li>{{ student.capstones[0]["description"] }}</li>
            <li>{{ student.capstones[0]["url"] }}</li>
            <li>{{ student.capstones[0]["screenshot"] }}</li>
          </ul>
        </div>
        <!--//capstone-->
      </div>
      <!--//sidebar-wrapper-->

      <div class="main-wrapper">
        <section class="section summary-section">
          <h2 class="section-title">
            <span class="icon-holder"><i class="fas fa-user"></i></span>
            Bio
          </h2>
          <div class="bio">
            <p>
              {{ student.bio }}
              <!-- <a
                href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/orbit-free-resume-cv-bootstrap-theme-for-developers/"
                target="_blank"
              >
                download this free resume/CV template here
              </a>
              . Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu. -->
            </p>
          </div>
          <!--//summary-->
        </section>
        <!--//section-->

        <section class="section experiences-section">
          <h2 class="section-title">
            <span class="icon-holder"><i class="fas fa-briefcase"></i></span>
            Experience
          </h2>

          <div class="item">
            <div class="meta">
              <div class="upper-row">
                <h3 class="job-title">{{ student.experiences[0]["job_title"] }}</h3>
                <div class="time">
                  {{ student.experiences[0]["start_date"] }} {{ student.experiences[0]["end_date"] }}
                </div>
              </div>
              <!--//upper-row-->
              <div class="company">{{ student.experiences[0]["company"] }}</div>
            </div>
            <!--//meta-->
            <div class="details">
              <p>
                {{ student.experiences[0]["details"] }}
              </p>
            </div>
          </div>
          <!--//item-->

          <div class="item">
            <div class="meta">
              <div class="upper-row">
                <h3 class="job-title">UI Developer</h3>
                <div class="time">2012 - 2014</div>
              </div>
              <!--//upper-row-->
              <div class="company">Amazon, London</div>
            </div>
            <!--//meta-->
            <div class="details">
              <p>
                Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
              </p>
            </div>
            <!--//details-->
          </div>
          <!--//item-->
        </section>
        <!--//section-->

        <section class="section projects-section">
          <h2 class="section-title">
            <span class="icon-holder"><i class="fas fa-archive"></i></span>
            Projects
          </h2>
          <div class="intro">
            <p>
              You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.
            </p>
          </div>
          <!--//intro-->
          <div class="item">
            <span class="project-title"><a href="#hook">Velocity</a></span>
            -
            <span class="project-tagline">
              A responsive website template designed to help startups promote, market and sell their products.
            </span>
          </div>
          <!--//item-->
          <div class="item">
            <span class="project-title">
              <a
                href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-web-development-agencies-devstudio/"
                target="_blank"
              >
                DevStudio
              </a>
            </span>
            -
            <span class="project-tagline">
              A responsive website template designed to help web developers/designers market their services.
            </span>
          </div>
          <!--//item-->
          <div class="item">
            <span class="project-title">
              <a
                href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-startups-tempo/"
                target="_blank"
              >
                Tempo
              </a>
            </span>
            -
            <span class="project-tagline">
              A responsive website template designed to help startups promote their products or services and to attract
              users &amp; investors
            </span>
          </div>
          <!--//item-->
          <div class="item">
            <span class="project-title">
              <a
                href="hhttp://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-mobile-apps-atom/"
                target="_blank"
              >
                Atom
              </a>
            </span>
            -
            <span class="project-tagline">
              A comprehensive website template solution for startups/developers to market their mobile apps.
            </span>
          </div>
          <!--//item-->
          <div class="item">
            <span class="project-title">
              <a
                href="http://themes.3rdwavemedia.com/website-templates/responsive-bootstrap-theme-for-mobile-apps-delta/"
                target="_blank"
              >
                Delta
              </a>
            </span>
            -
            <span class="project-tagline">
              A responsive Bootstrap one page theme designed to help app developers promote their mobile apps
            </span>
          </div>
          <!--//item-->
        </section>
        <!--//section-->

        <section class="skills-section section">
          <h2 class="section-title">
            <span class="icon-holder"><i class="fas fa-rocket"></i></span>
            Skills &amp; Proficiency
          </h2>
          <div class="skillset">
            <div class="item">
              <h3 class="level-title">Python &amp; Django</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style="width: 99%"
                  aria-valuenow="99"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <!--//item-->

            <div class="item">
              <h3 class="level-title">Javascript &amp; jQuery</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style="width: 98%"
                  aria-valuenow="98"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <!--//item-->

            <div class="item">
              <h3 class="level-title">Angular</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style="width: 98%"
                  aria-valuenow="98"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <!--//item-->

            <div class="item">
              <h3 class="level-title">HTML5 &amp; CSS</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style="width: 95%"
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <!--//item-->

            <div class="item">
              <h3 class="level-title">Ruby on Rails</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style="width: 85%"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <!--//item-->

            <div class="item">
              <h3 class="level-title">Sketch &amp; Photoshop</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style="width: 60%"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <!--//item-->
          </div>
        </section>
        <!--//skills-section-->
        <template>
          <twitter>
            <a class="twitter-timeline" v-bind:href="'https://www.' + student.twitter + '?ref_src=twsrc%5Etfw'">
              Tweets by {{ student.first_name }} {{ student.last_name }}
            </a>
          </twitter>
        </template>
      </div>
      <!--//main-body-->
    </div>
    <!--     <h1>{{ message }}</h1>
    <h2>{{ student.first_name }} {{ student.last_name }}</h2>
    <p>{{ student.email }}</p>
    <p>{{ student.phone_number }}</p>
    <p>{{ student.bio }}</p>
    <p>{{ student.linkedin }}</p>
    <p>{{ student.twitter }}</p>
    <p>{{ student.website }}</p>
    <p>{{ student.resume }}</p>
    <p>{{ student.github }}</p>
    <p>{{ student.photo }}</p>

    <h2>EXPERIENCE</h2>
    <p>{{ student.experiences[0]["start_date"] }}</p>
    <p>{{ student.experiences[0]["end_date"] }}</p>
    <p>{{ student.experiences[0]["job_title"] }}</p>
    <p>{{ student.experiences[0]["details"] }}</p>

    <h2>EDUCATION</h2>
    <p>{{ student.educations[0]["start_date"] }}</p>
    <p>{{ student.educations[0]["end_date"] }}</p>
    <p>{{ student.educations[0]["degree"] }}</p>
    <p>{{ student.educations[0]["university"] }}</p>
    <p>{{ student.educations[0]["details"] }}</p>

    <h2>SKILLS</h2>
    <p>{{ student.skills[0]["name"] }}</p>
    <p>{{ student.skills[1]["name"] }}</p>
    <p>{{ student.skills[2]["name"] }}</p>
    <p>{{ student.skills[3]["name"] }}</p>
    <p>{{ student.skills[4]["name"] }}</p>
    <p>{{ student.skills[5]["name"] }}</p>
    <p>{{ student.skills[6]["name"] }}</p>
    <p>{{ student.skills[7]["name"] }}</p>
    <p>{{ student.skills[8]["name"] }}</p>
    <p>{{ student.skills[9]["name"] }}</p>
    
    <h2>CAPSTONE</h2>
    <p>{{ student.capstones[0]["name"] }}</p>
    <p>{{ student.capstones[0]["description"] }}</p>
    <p>{{ student.capstones[0]["url"] }}</p>
    <p>{{ student.capstones[0]["screenshot"] }}</p> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "RESUMES",
      student: [],
      experience: [],
      education: [],
      skill: [],
      capstone: []
    };
  },
  created: function() {
    axios.get("/api/students/" + this.$route.params.id).then(response => {
      this.student = response.data;
      console.log(this.student);
    });
  },
  methods: {}
};
</script>
