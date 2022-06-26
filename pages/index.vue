<template>
  <div class="picker">
    <Header>
      <div class="picker__header">
        <TextWithLabel text="Вид:" :text-body="['3D план', '2D план']" />
        <nuxt-link to="favorites" class="style-none"><Favorites :favorite="{count: 1}"/></nuxt-link>
      </div>
    </Header>

    <div class="picker__body">
      <div class="font-gilroy pb-4">Наведите на этаж, чтобы увидеть доступные квартиры</div>

      <div class="picker__body-label">
        <div class="text-select m-3">test</div>
        <nuxt-link to="service-premises" class="style-none">
          <Button
            class="svg-dark svg-dark-over m-3 p-3"
            :params="{name: 'Выбрать парковочное место', icon: iconAuto }"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
import Header from "~/components/UI/multiComponenets/Header.vue";
import Favorites from "~/components/UI/basic/Favorites.vue";
import Button from "~/components/UI/basic/Button.vue";
import IconAuto from "~/components/icon/IconAuto.vue";
import TextWithLabel from "~/components/UI/basic/TextWithLabel.vue";


export default Vue.extend({
  name: 'IndexPage',
  components: {TextWithLabel, Button, Favorites,  Header},
  data(){
    return{
      iconAuto : IconAuto,
    }
  },

  methods: {
    redirect(){
      if (window.screen.width < 960){
        this.$router.push('/parameters')
      }
    }
  },

  beforeMount() {
    this.redirect()
  }
})
</script>

<style lang="scss">
@import "../assets/style/variables";

.picker{

  display: flex;
  flex-direction: column;

  &__header{
    display: flex;
    justify-content: space-between;
    gap: clamp(10px, 3vw, 30px);
  }

  &__body{
    display: flex;
    flex-direction: column;

    height: 100%;

    &-label{
      background: url("static/Build1.png");

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      padding-top: 30px;
      width: 100%;
      height: max-content;
      min-height: 100vh;
    }
  }
}
</style>
