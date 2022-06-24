<template>
  <div class="error-layout_base">
    <!-- base -->
    <div class="error-layout">
      <!-- 404 -->
      <h1 v-if="error.statusCode === 404" class="color-lines error-layout__404">404</h1>

      <!-- Another error -->
      <h1 class="color-lines" v-else>Непонятная ошибка, вернитесь назад</h1>

      <div class="error-layout__body">
        <div class="error-layout__body_header">
          <div class="error-layout__text">Вы искали</div>
          <div class="error-layout__text">Квартиру,</div>
        </div>
        <div class="error-layout__text">А нашли</div>
        <div class="error-layout__text">Несуществующую</div>
        <div class="error-layout__text">Страницу</div>
      </div>

      <!-- Go home -->
      <NuxtLink class="error-layout__back" to="/">Вернуться к подборщику</NuxtLink>
    </div>

    <!-- img -->
    <div class="error-layout_img">
      <img src="@/static/BuildFor404.png" alt="r" style="height: 100%; width: 100%;">
    </div>
  </div>
</template>

<script>
import Header from "@/components/UI/multiComponenets/Header";

export default {
  name: "error",
  components: {Header},
  props: ['error'],
}
</script>

<style scoped lang="scss">
@import "../assets/style/variables";

.error-layout {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: $one-base-color;

  &_base{
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }

  &_img{
    width: 100%;
    height: 100%;

  }

  &__404{
    font-weight: 300;
    font-size: 100px;
    font-family: Jost, sans-serif;
    font-style: normal;
    color: $accent-color;
  }

  &__body{
    margin-left: -83px;
    padding-top: clamp(15px,7vw,40px);
    padding-bottom: clamp(15px,7vw,40px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &_header{
      padding-left: clamp(35px,7vw,115px);
    }
  }

  &__back{

    margin-left: -40px;
    color: $accent-color;
    line-height: 110%;

    font-weight: 300;
    font-size: clamp(15px,7vw,20px);

    text-decoration-line: underline;
    text-transform: uppercase;

    &:hover{
      opacity: 0.8;
    }
  }

  //helper
  &__text{
    font-family: 'Jost',sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: clamp(15px,7vw,32px);
    line-height: 60px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
}

@media (max-width: 768px){
  .error-layout {

    &_img{
      display: none;
    }

    &__back{
      margin: 0;
    }

    &__body{
      margin: 0;
    }
  }
}
</style>
