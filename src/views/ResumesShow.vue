<template>
  <div class="resumes-show">
    <div class="wrapper">
      <div class="sidebar-wrapper">
        <div class="profile-container">
          <img width="150" height="150" :src="student.photo" class="rounded-circle" alt="" />
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
            <div class="time">
              {{ formattedDate(student.educations[0]["start_date"]) }} -
              {{ formattedDate(student.educations[0]["end_date"]) }}
            </div>
          </div>
        </div>
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
                  {{ formattedDate(student.experiences[0]["start_date"]) }} -
                  {{ formattedDate(student.experiences[0]["end_date"]) }}
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
        </section>
        <!--//section-->

        <section class="section projects-section">
          <h2 class="section-title">
            <span class="icon-holder"><i class="fas fa-archive"></i></span>
            Projects
          </h2>
          <div class="intro"></div>
          <!--//intro-->
          <div class="item">
            <span class="project-title">
              <a href="#hook">Capstone - {{ student.capstones[0]["name"] }}</a>
            </span>
            -
            <span class="project-tagline">
              {{ student.capstones[0]["description"] }} ({{ student.capstones[0]["url"] }})
            </span>
          </div>
        </section>

        <section class="skills-section section">
          <h2 class="section-title">
            <span class="icon-holder"><i class="fas fa-rocket"></i></span>
            Skills &amp; Proficiency
          </h2>
          <div class="skillset">
            <div class="item">
              <h3 class="level-title">{{ student.skills[0]["name"] }}</h3>
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
              <h3 class="level-title">{{ student.skills[1]["name"] }}</h3>
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
              <h3 class="level-title">{{ student.skills[2]["name"] }}</h3>
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
              <h3 class="level-title">{{ student.skills[3]["name"] }}</h3>
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
              <h3 class="level-title">{{ student.skills[4]["name"] }}</h3>
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
              <h3 class="level-title">{{ student.skills[5]["name"] }}</h3>
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

            <div class="item">
              <h3 class="level-title">{{ student.skills[6]["name"] }}</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style="width: 50%"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="item">
              <h3 class="level-title">{{ student.skills[7]["name"] }}</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style="width: 40%"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="item">
              <h3 class="level-title">{{ student.skills[8]["name"] }}</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style="width: 30%"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="item">
              <h3 class="level-title">{{ student.skills[9]["name"] }}</h3>
              <div class="progress level-bar">
                <div
                  class="progress-bar theme-progress-bar"
                  role="progressbar"
                  style="width: 20%"
                  aria-valuenow="20"
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
import moment from "moment";

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
  methods: {
    formattedDate: function(date) {
      return moment(date).format("MMMM YYYY");
    }
  }
};
</script>
