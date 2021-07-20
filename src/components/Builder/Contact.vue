<script>
export default {};
</script>

<template>
  <div class="row">
    <div class="col-12">
      <!-- İLETİŞİM BİLGİLERİ EKLEME -->
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label for="email" class="form-label">E Posta Adresiniz</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="$store.state.eposta"
              placeholder="E posta adresinizi giriniz.."
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="phone_number" class="form-label"
              >Telefon Numarası</label
            >
            <input
              type="text"
              class="form-control"
              id="phone_number"
              v-model="$store.state.phone"
              placeholder="Telefon numaranızı giriniz.."
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="linkedin" class="form-label">Linkedin</label>
            <input
              type="text"
              class="form-control"
              id="linkedin"
              v-model="$store.state.linkedin"
              placeholder="www.linkedin.com"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="github" class="form-label">Github</label>
            <input
              type="text"
              class="form-control"
              id="github"
              v-model="$store.state.github"
              placeholder="www.github.com"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="youtube" class="form-label">Youtube</label>
            <input
              type="text"
              class="form-control"
              id="youtube"
              v-model="$store.state.youtube"
              placeholder="www.youtube.com"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label for="twitter" class="form-label">Twitter</label>
            <input
              type="text"
              class="form-control"
              id="twitter"
              v-model="$store.state.twitter"
              placeholder="www.twitter.com"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
