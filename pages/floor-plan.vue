<template>
  <div class="floor-plan">
    <Header>
      <div class="floor-plan__header">
        <nuxt-link to="favorites" class="style-none"><Favorites :favorite="{count: 1}"/></nuxt-link>
      </div>
    </Header>

    <div class="floor-plan__body">

      <!-- План объекта и Пагинатор -->
      <div class="floor-plan__body-apartment" @click="cardShow = !cardShow">

        <!-- Пагинатор -->
        <div class="floor-plan__body-apartment_paginator">
          <div>
            ЭТАЖ
          </div>
          <PaginatorVertical :params="[{name: '1', selected: true}, {name: '2', selected: false}, {name: '3', selected: false},]"/>
        </div>

        <!-- План объекта -->
        <div class="floor-plan__body-content">

          <div class="floor-plan__body-content__header">
            <div class="splitter color-blue opacity025"></div>
              <div class="floor-plan__body-content__header_text">header</div>
            <div class="splitter color-blue opacity025"></div>
          </div>

          <div class="floor-plan__body-content__body">
            <div class="splitter-vertical color-blue opacity025"></div>
              <div class="floor-plan__body-content__body_text">body</div>
            <div class="splitter-vertical color-blue opacity025"></div>

            <div class="floor-plan__body-content__body_img">
              <img src="~/static/Apartment.png" alt="t" class="floor-plan__body-content__body_img-picture">
            </div>
            <div><IconCompass class="floor-plan_icon-compass"/></div>
          </div>

          <div class="floor-plan__body-content__footer">
            <div class="splitter color-blue opacity025"></div>
              <div class="floor-plan__body-content__footer_text">footer</div>
            <div class="splitter color-blue opacity025"></div>
          </div>
        </div>
      </div>

      <!-- Показ апартаментов на плане и карточка -->
      <div v-if="cardShow" class="floor-plan__body-card">
        <div class="floor-plan__body-card_text">Выберите апартаменты на плане этажа</div>

        <div class="d-flex">
          <div class="floor-plan__body-card_item color-green_bg">
              Свободны
          </div>
        </div>

        <div class="d-flex">
          <div class="floor-plan__body-card_item color-red_bg">
            Забронированы
          </div>
        </div>

        <div class="d-flex">
          <div class="floor-plan__body-card_item color-gray_bg">
            Проданы
          </div>
        </div>

      </div>
      <!-- Карта парковок -->
      <CardFullInfo
        class="floor-plan__body-card"
        v-else
        :card-info="cardInfo"
      />

    </div>
  </div>
</template>

<script>
import Header from "@/components/UI/multiComponenets/Header";
import LinkedList from "@/components/UI/basic/LinkedList";
import Favorites from "@/components/UI/basic/Favorites";
import PaginatorVertical from "@/components/UI/basic/PaginatorVertical";
import IconCompass from "@/components/icon/IconCompass";
import CardFullInfo from "@/components/UI/multiComponenets/CardFullInfo";
export default {
  name: "floor-plan",
  components: {CardFullInfo, IconCompass, PaginatorVertical, Favorites, LinkedList, Header},

  data(){
    return{
      cardShow: false,
      cardInfo: {
        name: '1 комнатная',
        number: '#489',

        square: 0,
        floor: 0,

        price: 2,
        priceForSquare: 3,

        tagPosition: 'top',
        tags: [{name: 'test,'}, {name: 'test,'}, {name: 'test,'},],

        imgSrc: 'testCard.png',

        free: 'Свободна',
        icon: 'hearth',
        btnText: 'testBtn',
      }
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
}
</script>

<style scoped lang="scss">
@import "assets/style/variables";

.floor-plan{
  display: flex;
  flex-direction: column;

  &__header{
    display: flex;
    justify-content: space-between;
    gap: clamp(10px, 3vw, 30px);
  }

  &__body{
    display: flex;
    flex-direction: row;
    gap: 10px;

    &-content{
      display: flex;
      flex-direction: column;
      padding-left: 60px;
      color: $gray-blue;
      width: 100%;
      justify-content: space-between;
      &__header{
        display: flex;
        flex-direction: column;

        &_text{
          padding: 10px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      &__body{
        display: flex;
        flex-direction: row;
        padding-top: 30px;
        padding-bottom: 30px;

        &_text{
          padding: 10px;
          transform: rotate(270deg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        &_img{
          width: 100%;

          display: flex;
          justify-content: center;
          align-items: center;

          margin-left: 30px;
          margin-top: 40px;
          margin-right: -4vw;

          &-picture{

            width: 100%;
            height: auto;
            max-height: 700px;
            max-width: 600px;

          }
        }
      }
      &__footer{
        display: flex;
        flex-direction: column;
        &_text{
          padding: 10px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    &-apartment{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 30px;
      width: 100%;
      background-color: $white-color;

      &_paginator{
        display: flex;
        flex-direction: column;
        font-weight: bold;
        color: $one-base-darker-color;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
    }

    &-card{
      width: 43%;
      background-color: $one-base-darker-color;
      display: flex;
      padding-bottom: 30px;
      flex-direction: column;
      justify-content: left;
      gap: 10px;

      &_text{
        padding: 30px;
        font-weight: 500;
        font-size: 24px;
        line-height: 35px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        text-transform: uppercase;
        color: $select-color;
      }
      &_item{
        margin-left: 30px;
        margin-right: 30px;

        padding: 7px;
        display: flex;
        align-items: center;

        justify-content: left;
        text-transform: uppercase;
        color: $select-color;

        border-radius: 100px;
      }
    }
  }
  &_icon-compass{
    margin-left: 40px;
    min-width: 40px;
    min-height: 40px;
    height: 4vw;
    width: 4vw;
  }
}
</style>
