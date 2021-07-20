<script>
export default {};
</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="mb-3">
        <label for="school" class="form-label">Okul</label>
        <input
          type="text"
          class="form-control"
          id="school"
          v-model="$store.state.school.name"
          placeholder="Okul adını giriniz.."
        />
      </div>
    </div>
    <div class="col-12">
      <div class="mb-3">
        <label for="depart" class="form-label">Bölüm</label>
        <input
          type="text"
          class="form-control"
          id="depart"
          v-model="$store.state.school.depart"
          placeholder="Bölüm adını giriniz.."
        />
      </div>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-md-6 col-6">
          <div class="mb-3">
            <label for="starting" class="form-label">Başlangıç Yılı</label>
            <input
              type="text"
              class="form-control"
              id="starting"
              v-model="$store.state.school.start"
              placeholder="2021"
            />
          </div>
        </div>
        <div class="col-md-6 col-6">
          <div class="mb-3">
            <label for="finishing" class="form-label">Bitiş Yılı</label>
            <input
              type="text"
              class="form-control"
              id="finishing"
              v-model="$store.state.school.finish"
              placeholder="2025"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
