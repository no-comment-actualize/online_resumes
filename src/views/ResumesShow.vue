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
    <p>{{ student.capstones[0]["screenshot"] }}</p>
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
      capstone: [],
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
