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
  padding: clamp(5px,5vw,50px) clamp(7px,4vw,70px) clamp(6px,6vw,60px) clamp(7px,4vw,70px);

}
</style>
