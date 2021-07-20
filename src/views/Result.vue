<script>
export default {};
</script>

<template>
  <main class="resumeCanvas">
    <div class="row justify-content-between">
      <div class="col-6 text-center">
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
        <span
          >Doğum Tarihi :
          <em class="fw-bold">{{ $store.state.birthday }}</em></span
        >
        <span
          >Yaşadığı Şehir :
          <em class="fw-bold">{{ $store.state.city }}</em></span
        >
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-12">
        <i style="font-size:30px">Hakkımda</i>
        <p class="mt-2">{{ $store.state.details }}</p>
      </div>
    </div>
    <hr />
    <div class="row">
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
    <hr />
    <div class="row">
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
    <hr />
    <div class="row">
      <div class="col-12"><i style="font-size:30px">İletişim Bilgileri</i></div>
      <div class="col-6 mt-2">E Posta : {{ $store.state.eposta }}</div>
      <div class="col-6 mt-2">Telefon Numarası : {{ $store.state.phone }}</div>
      <div class="col-6 mt-2">
        Linkedin :
        <a target="_blank" :href="$store.state.linkedin">{{
          $store.state.name + " " + $store.state.surname
        }}</a>
      </div>
      <div class="col-6 mt-2">
        Github :
        <a target="_blank" :href="$store.state.github">{{
          $store.state.name + " " + $store.state.surname
        }}</a>
      </div>
      <div class="col-6 mt-2">
        Youtube :
        <a target="_blank" :href="$store.state.youtube">{{
          $store.state.name + " " + $store.state.surname
        }}</a>
      </div>
      <div class="col-6 mt-2">
        Twitter :
        <a target="_blank" :href="$store.state.twitter">{{
          $store.state.name + " " + $store.state.surname
        }}</a>
      </div>
    </div>
  </main>
</template>

<style>
.resumeCanvas {
  margin: 0 auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0.3in;
  width: 8.5in;
  height: 12in;
  background-color: #faffff;
  -webkit-box-shadow: 0 3px 8px -3px rgba(0, 0, 0, 0.7);
  box-shadow: 0 3px 8px -3px rgba(0, 0, 0, 0.7);
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
