<script>
import Builder from "@/views/Builder/Index.vue";
import Result from "@/views/Result.vue";
export default {
  name: "App",
  components: {
    Builder,
    Result,
  },
};
</script>

<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6">
          <Builder />
        </div>
        <div class="col-12 col-md-6">
          <Result />
        </div>
      </div>
    </div>
  </div>
</template>
