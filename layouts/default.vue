<template>
  <div class="default-layout">
    <Nuxt/>
  </div>
</template>

<script>
export default {
  name: "default",
}
</script>

<style scoped lang="scss">
@import "assets/style/variables";

.default-layout{
  background-color: $one-base-color;
  min-height: 100vh;
  height: 100%;
  padding: 50px 70px 60px 70px;

}
</style>
