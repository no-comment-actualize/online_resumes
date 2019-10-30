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
    <p>{{ experience.start_date }}</p>
    <p>{{ experience.end_date }}</p>
    <p>{{ experience.job_title }}</p>
    <p>{{ experience.company }}</p>
    <p>{{ experience.details }}</p>

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
export default {
  data: function() {
    return {
      message: "SHOW PAGE",
      student: {
        first_name: "Noob", 
        last_name: "Noob",
        email: "noob@gmail.com",
        phone_number: "123456",
        bio: "my favorite video game is super smash bros ultimate",
        linkedin: "linkedin.com/in/noob/",
        twitter: "twitter.com/noob",
        website: "www.noob.com",
        resume: "www.noobresume.com",
        github: "github.com/noob/",
        photo: "www.noobphoto.com",
      },
      experience: {
        start_date: "July 26, 2019",
        end_date: "November 15, 2019",
        job_title: "Noob",
        company: "Noob LLC",
        details: "I worked as a noob",
      },
      education: {
        start_date: "July 26, 2019",
        end_date: "November 15, 2019",
        degree: "Bachelor of Science in Noob",
        university: "University of Noobs",
        details: "I studied being a noob",
      },
      skill: {
        name: "Being a noob",
      },
      capstone: {
        name: "Noob",
        description: "Project showcasing how much of a noob I am",
        URL: "www.capstone.com/noob",
        screenshot: "picture of noob project here",
      }
    };
  },
  created: function() {},
  methods: {}
};
</script>
