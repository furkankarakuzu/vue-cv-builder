<script>
import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";
export default {
  methods: {
    saveResume(type) {
      if (type == "pdf") {
        const el = document.getElementById("resume");
        let opt = {
          margin: 0,
          filename: "resume.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: {
            unit: "mm",
            format: [280, 350],
            orientation: "portrait",
          },
        };
        html2pdf()
          .set(opt)
          .from(el)
          .save();
      } else {
        html2canvas(this.$refs.resume, {}).then((canvas) => {
          const img = canvas.toDataURL("image/jpeg");
          this.download(img);
        });
      }
    },
    download(url) {
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.download = "resume.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<template>
  <div>
    <div class="text-center my-2">
      <a
        class="btn btn-success dropdown-toggle"
        href="#"
        id="download_resume"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        CV İndir
      </a>
      <ul class="dropdown-menu" aria-labelledby="download_resume">
        <li>
          <button class="dropdown-item" @click="saveResume('pdf')">
            PDF Olarak İndir
          </button>
        </li>
        <li>
          <button class="dropdown-item" @click="saveResume('png')">
            PNG Olarak İndir
          </button>
        </li>
      </ul>
    </div>
    <main class="resumeCanvas" id="resume" ref="resume">
      <div class="row justify-content-between">
        <div
          class="col-6 text-center"
          v-if="$store.state.name || $store.state.surname"
        >
          <h1 class="title">
            {{ $store.state.name + " " + $store.state.surname }}
          </h1>
          <span class="mt-auto role">{{ $store.state.job }}</span>
        </div>
        <div class="col-4" v-if="$store.state.image">
          <img :src="$store.state.image" class="img-fluid" />
        </div>
      </div>
      <div class="row">
        <div class="col-7 d-flex justify-content-between">
          <span v-if="$store.state.birthday"
            >Doğum Tarihi :
            <em class="fw-bold">{{ $store.state.birthday }}</em></span
          >
          <span v-if="$store.state.city"
            >Yaşadığı Şehir :
            <em class="fw-bold">{{ $store.state.city }}</em></span
          >
        </div>
      </div>
      <hr v-if="$store.state.name" />
      <div class="row" v-if="$store.state.details">
        <div class="col-12">
          <i style="font-size:30px">Hakkımda</i>
          <p class="mt-2">{{ $store.state.details }}</p>
        </div>
      </div>
      <hr v-if="$store.state.details" />
      <div class="row" v-if="$store.state.company.name">
        <div class="col-12"><i style="font-size:30px">Deneyim</i></div>
        <div class="col-9 mt-2">
          <h6>
            {{ $store.state.company.name + " - " + $store.state.company.role }}
          </h6>
        </div>
        <div class="col-3 mt-2">
          {{ $store.state.company.start + " - " + $store.state.company.finish }}
        </div>
      </div>
      <hr v-if="$store.state.company.name" />
      <div class="row" v-if="$store.state.school.name">
        <div class="col-12"><i style="font-size:30px">Eğitim</i></div>
        <div class="col-9 mt-2">
          <h6>
            {{ $store.state.school.name + " - " + $store.state.school.depart }}
          </h6>
        </div>
        <div class="col-3 mt-2">
          {{ $store.state.school.start + " - " + $store.state.school.finish }}
        </div>
      </div>
      <hr v-if="$store.state.company.name" />
      <div
        class="row"
        v-if="
          $store.state.eposta ||
            $store.state.phone ||
            $store.state.linkedin ||
            $store.state.github ||
            $store.state.youtube ||
            $store.state.twitter
        "
      >
        <div class="col-12">
          <i style="font-size:30px">İletişim Bilgileri</i>
        </div>
        <div class="col-6 mt-2" v-if="$store.state.eposta">
          E Posta : {{ $store.state.eposta }}
        </div>
        <div class="col-6 mt-2" v-if="$store.state.phone">
          Telefon Numarası : {{ $store.state.phone }}
        </div>
        <div class="col-6 mt-2" v-if="$store.state.linkedin">
          Linkedin :
          <a target="_blank" :href="$store.state.linkedin">{{
            $store.state.name + " " + $store.state.surname
          }}</a>
        </div>
        <div class="col-6 mt-2" v-if="$store.state.github">
          Github :
          <a target="_blank" :href="$store.state.github">{{
            $store.state.name + " " + $store.state.surname
          }}</a>
        </div>
        <div class="col-6 mt-2" v-if="$store.state.youtube">
          Youtube :
          <a target="_blank" :href="$store.state.youtube">{{
            $store.state.name + " " + $store.state.surname
          }}</a>
        </div>
        <div class="col-6 mt-2" v-if="$store.state.twitter">
          Twitter :
          <a target="_blank" :href="$store.state.twitter">{{
            $store.state.name + " " + $store.state.surname
          }}</a>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
.resumeCanvas {
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.3in;
  width: 8.5in;
  height: 12in;
  background-color: #ffff;
}

.title {
  font-size: 40px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.role {
  font-size: 30px;
  color: rgb(133, 133, 133);
}
</style>
