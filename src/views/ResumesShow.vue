<template>
  <div class="resumes-show">
    <h1>{{ message }}</h1>
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
    <p>{{ student.experiences.start_date }}</p>
    <p>{{ student.experiences.end_date }}</p>
    <p>{{ student.experiences.job_title }}</p>
    <p>{{ student.experiences.company }}</p>
    <p>{{ student.experiences.details }}</p>

    <h2>EDUCATION</h2>
    <p>{{ education.start_date }}</p>
    <p>{{ education.end_date }}</p>
    <p>{{ education.degree }}</p>
    <p>{{ education.university }}</p>
    <p>{{ education.details }}</p>

    <h2>SKILLS</h2>
    <p>{{ skill.name }}</p>

    <h2>CAPSTONE</h2>
    <p>{{ capstone.name }}</p>
    <p>{{ capstone.description }}</p>
    <p>{{ capstone.url }}</p>
    <p>{{ capstone.screenshot }}</p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "SHOW PAGE",
      student: {},

      experience: [],

      education: {
        start_date: "July 26, 2019",
        end_date: "November 15, 2019",
        degree: "Bachelor of Science in Noob",
        university: "University of Noobs",
        details: "I studied being a noob"
      },
      skill: {
        name: "Being a noob"
      },
      capstone: {
        name: "Noob",
        description: "Project showcasing how much of a noob I am",
        URL: "www.capstone.com/noob",
        screenshot: "picture of noob project here"
      }
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
