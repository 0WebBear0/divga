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

        <!--    Top text    -->
        <div class="text-select m-3 picker__body-label_text-top">
          II кв. 2022
          <div class="picker__body-label_text-bottom">
            сроки сдачи
          </div>
        </div>

        <!--    Parking place    -->
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

      padding-top: 20px;
      padding-left: 20px;

      width: 100%;
      height: max-content;
      min-height: 100vh;

      &_text{

        &-top{
          font-family: Gilroy, sans-serif, serif;
          font-size: 36px;
          font-weight: 600;
          line-height: 43px;
          letter-spacing: 0.02em;
          text-align: left;

        }

        &-bottom{
          font-family: Gilroy, sans-serif, serif;
          font-size: 18px;
          font-weight: 600;
          line-height: 29px;
          letter-spacing: 0.02em;
          text-align: left;
        }
      }

    }
  }
}
</style>
