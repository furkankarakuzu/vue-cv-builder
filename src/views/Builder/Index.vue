<script>
import PersonalInfo from "../../components/Builder/Personal.vue";
import Contact from "../../components/Builder/Contact.vue";
import Education from "../../components/Builder/Education.vue";
import Experience from "../../components/Builder/Experience.vue";
export default {
  name: "Builder",
  components: {
    PersonalInfo,
    Contact,
    Education,
    Experience,
  },
};
</script>

<template>
  <div>
    <h2>Kişisel Bilgiler</h2>
    <hr />
    <PersonalInfo />
    <br />
    <h2>Deneyim Bilgileri</h2>
    <hr />
    <Experience />
    <br />
    <h2>Eğitim Bilgileri</h2>
    <hr />
    <Education />
    <br />
    <h2>İletişim Bilgileri</h2>
    <hr />
    <Contact />
    <br />
  </div>
</template>
