<script>
export default {};
</script>

<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-12">
          <div class="mb-3">
            <label for="company" class="form-label">Şirket</label>
            <input
              type="text"
              class="form-control"
              id="company"
              v-model="$store.state.company.name"
              placeholder="Şirket adını giriniz.."
            />
          </div>
        </div>
        <div class="col-12">
          <div class="mb-3">
            <label for="role1" class="form-label">Rol</label>
            <input
              type="text"
              class="form-control"
              id="role1"
              v-model="$store.state.company.role"
              placeholder="Rolünüzü giriniz.."
            />
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-md-6 col-6">
              <div class="mb-3">
                <label for="starting_company" class="form-label"
                  >Başlangıç Yılı</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="starting_company"
                  v-model="$store.state.company.start"
                  placeholder="2021"
                />
              </div>
            </div>
            <div class="col-md-6 col-6">
              <div class="mb-3">
                <label for="finishing_company" class="form-label"
                  >Bitiş Yılı</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="finishing_company"
                  v-model="$store.state.company.finish"
                  placeholder="2025"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
