<template>
  <div class="apartment-card">

    <div class="apartment-card__header">

      <div class="apartment-card__header_subheader">
        <!--   Селектор   -->
        <div class="apartment-card__header_switcher">
          <SwitcherTab
            class="apartment-card_switcher"
            type="dark"
            :switch-object="switcher"
            @tabSelect="selectTab"
          />
        </div>

        <!--   Вид из окон   -->
        <div class="apartment-card__header_window" @click="$bvModal.show('window')">
          <IconEye class="apartment-card__header_window-view_eye" />
          <b class="color-base apartment-card__header_window-view" >Вид из окон</b>
        </div>
        <!--   Icon   -->
        <div class="apartment-card__header_window-unshow">
          <IconCompass class="apartment-card_icon-compass"/>
        </div>
      </div>

      <!--   Icon   -->
      <div class="apartment-card__header_window-show">
        <IconCompass class="apartment-card_icon-compass"/>
      </div>

    </div>

    <!--  База с картинаками  -->
    <div class="apartment-card__body-content__header">
      <div class="splitter color-blue opacity025"></div>
      <div class="apartment-card__body-content__header_text opacity05">ул. Уборевича</div>
      <div class="splitter color-blue opacity025"></div>
    </div>

    <div class="apartment-card__body-content__body">

      <div class="apartment-card__body-content__body_img" v-if="switcher[0].TabSelected">

        <div>
          <IconArrowCircle class="apartment-card_icon-right"/>
        </div>

        <div class="apartment-card__body-content__body_img-box">
          <IconZoom class="apartment-card_icon-zoom"/>
          <img :src="'Scheme_Apartment.png'" alt="t" class="apartment-card__body-content__body_img-picture">
        </div>

        <div>
          <IconArrowCircle class="apartment-card_icon-left"/>
        </div>
      </div>

      <div v-else-if="switcher[1].TabSelected">
        <img :src="'Floor_Scheme.png'" alt="t" class="apartment-card__body-content__body_img-picture">
      </div>

      <div v-else>
        <img :src="'Floor_Scheme.png'" alt="t" class="apartment-card__body-content__body_img-picture">
      </div>
    </div>

    <div class="apartment-card__footer">
      <div class="splitter color-blue opacity025"></div>
      <div class="apartment-card__body-content__footer_text opacity05">океанский проспект</div>
      <div class="splitter color-blue opacity025"></div>
    </div>


    <!--  Modal window  -->
    <b-modal id="window" size="xl" hide-footer hide-header content-class="apartment-card_window">
      <img :src="'Window.png'" alt="t" class="apartment-card_window_img">
      <div class="text-dark apartment-card_window_text">Видовые характеристики указаны приблизительно для предварительного ознакомления.</div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IconCompass from "~/components/icon/IconCompass.vue";
import IconArrowCircle from "~/components/icon/IconArrowCircle.vue";
import IconEye from "~/components/icon/IconEye.vue";
import SwitcherTab from "~/components/UI/basic/SwitcherTab.vue";
import IconZoom from "~/components/icon/IconZoom.vue";

// interface Test{
//
// }

export default Vue.extend({
  name: "ApartmentCard",
  components: {IconZoom, SwitcherTab, IconEye, IconArrowCircle, IconCompass},

  data(){
    return {
      switcher: [
        {TabSelected: true, TabName: 'Планировка'},
        {TabSelected: false, TabName: 'На плане этажа'},
        {TabSelected: false, TabName: 'На генплане'},
      ]
    }
  },

  methods:{
    selectTab(index: number){
      for (let i = 0; i < this.switcher.length; i++) {
        this.switcher[i].TabSelected = false
      }
      this.switcher[index].TabSelected = true

      if (index === 0){
        this.$emit('selected', true)
      }
      else this.$emit('selected', false)
    }
  }
})
</script>


<style scoped lang="scss">
@import "assets/style/variables";

.apartment-card {

  text-transform: uppercase;

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20px;

    &_subheader{
      flex: 3;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 20px;
      padding-right: 10px;
    }

    &_window{
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      white-space: nowrap;

      font-size: 14px;
      gap: 10px;
      text-decoration: underline;

      &-view{
        font-size: 15.5px;

        &_eye{
          min-width: 20px !important;
          min-height: 20px !important;
        }
      }

      &-unshow{
        display: none;
      }

      &:hover{
        opacity: 0.7;
      }
      &:active{
        opacity: 0.9;
      }
    }

    &_switcher{
      display: flex;
      align-items: center;
      width: 100%;
    }
  }

  &__body {
    display: flex;
    flex-direction: row;
    gap: 10px;

    &-content {
      display: flex;
      flex-direction: column;
      padding-left: 60px;
      color: $gray-blue;
      width: 100%;
      justify-content: space-between;

      &__header {
        display: flex;
        flex-direction: column;

        &_text {
          padding: 10px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      &__body {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 30px;
        padding-bottom: 30px;

        &_img {
          width: 100%;

          display: flex;
          justify-content: space-between;
          align-items: center;

          gap: 20px;

          &-box{
            display: flex;
            justify-content: center;
          }

          &-picture {
            width: 80%;
            padding-left: 5%;
            height: auto;
            max-height: 700px;
            max-width: 600px;

          }
        }
      }

      &__footer {
        display: flex;
        flex-direction: column;

        &_text {
          padding: 10px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  &_icon {

    &-compass {
      height: 4vw;
      min-height: 80px;
      width: 4vw;
      min-width: 80px;
    }

    &-right {
      fill: $gray-blue !important;
      height: 30px;
      width: 30px;
      transform: rotate(270deg);

      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }

      &:active {
        fill: $white-color !important;
      }
    }

    &-left {
      display: flex;
      fill: $gray-blue!important;
      height: 30px;
      width: 30px;
      transform: rotate(90deg);

      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }

      &:active {
        fill: $white-color !important;
      }
    }

    &-zoom{
      position: relative;
      top: 200px;
      left: 50%;
      fill: $red;
      width: 40px;
      height: 40px;
      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }

      &:active {
        opacity: 0.7;
      }
    }
  }

  &_switcher{

    font-family: 'Jost', sans-serif, serif;
    font-weight: 500;
    font-size: clamp(8px, 3vw, 14px);
  }

  &_window{
    display: flex;
    flex-direction: column;

    &_img{
      width: 100%;
    }

    &_text{
      padding-top: 25px;
      padding-bottom: 15px;
    }
  }
}

@media (max-width: 1280px) {
  .apartment-card__header_subheader{
    display: flex;
    flex-wrap: wrap;
  }
}

@media (max-width: 700px) {
  .apartment-card__header_subheader{
    flex: 3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;

    padding-right: 10px;
  }
}

@media (max-width: 460px) {
  .apartment {

    &-card {
      padding-bottom: 30px;

      &_icon-zoom{
        min-height: 40px;
        min-width: 40px;
        left: 45%;
        top: 100px;
      }

      &__header_window {

        &-view {
          font-size: 12px;
        }

        &-unshow {
          display: block;
        }

        &-show {
          display: none;
        }
      }

      &__header_switcher {
        display: flex;
        justify-content: center;
      }

      &__body-content__body {

        padding-top: 50px;
        padding-bottom: 50px;

        &_img {
          display: flex;
          justify-content: center;
          width: 100%;

          &-picture {
            margin-left: -40px;
            width: 100%;
          }
        }
      }
    }
  }
}

</style>
