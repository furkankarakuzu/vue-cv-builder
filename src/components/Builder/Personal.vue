<script>
export default {
  methods: {
    selectImage(e) {
      const image = e.target.files[0];
      // const reader = new FileReader();
      // reader.readAsDataURL(image);
      // reader.onload((e) => {
      //   this.$store.state.image = e.target.result;
      // });
      this.$store.state.image = URL.createObjectURL(image);
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col-12 col-md-4">
      <img
        :src="
          $store.state.image
            ? $store.state.image
            : 'https://www.edmundsgovtech.com/wp-content/uploads/2020/01/default-picture_0_0.png'
        "
        class="img-fluid"
        :class="{ photo: !$store.state.image }"
      />
      <input
        type="file"
        accept="image/*"
        @change="selectImage"
        id="image"
        style="display:none"
      />
      <input
        type="button"
        value="Resim Seç"
        onclick="document.getElementById('image').click();"
      />
    </div>
    <div class="col-12 col-md-8">
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label for="first_name" class="form-label">İsim</label>
            <input
              type="text"
              class="form-control"
              id="first_name"
              v-model="$store.state.name"
              placeholder="İsminizi giriniz.."
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="last_name" class="form-label">Soyisim</label>
            <input
              type="text"
              class="form-control"
              id="last_name"
              v-model="$store.state.surname"
              placeholder="Soyisminizi giriniz.."
            />
          </div>
        </div>
        <div class="col-12">
          <div class="mb-3">
            <label for="job" class="form-label">Meslek</label>
            <input
              type="text"
              class="form-control"
              id="job"
              v-model="$store.state.job"
              placeholder="Mesleğinizi giriniz.."
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="birthday" class="form-label">Doğum Tarihiniz</label>
            <input
              type="date"
              class="form-control"
              id="birthday"
              v-model="$store.state.birthday"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <div class="mb-3">
              <label for="birthday" class="form-label">Yaşadığınız Şehir</label>
              <input
                type="text"
                class="form-control"
                id="birthday"
                v-model="$store.state.city"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 mt-3">
      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Detayları girin.."
          v-model="$store.state.details"
          id="details"
          style="height: 100px"
        ></textarea>
        <label for="details">Detaylar</label>
      </div>
    </div>
  </div>
</template>

<style>
.photo {
  border: 2px dashed black;
  cursor: pointer;
  max-height: 250px;
}
</style>
