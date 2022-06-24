<template>
  <div class="floor-plan">
    <!-- back -->
    <div class="floor-plan__backer" @click="$router.back()">
      <IconArrow class="color-white"/>
      <div>Назад к выбору апартаментов</div>
    </div>

    <Header title-name="Выберите парковку" :switch-object-props="tabs" @selected="typeChange">
      <div v-if="!tabName" class="floor-plan__padding">
        <TextWithLabel text="Найдено" :text-body="['5 мест']" />
      </div>
    </Header>

    <!-- Основной контент на плане этажа -->
    <div class="floor-plan__body" v-if="tabName">

      <!-- План объекта и Пагинатор -->
      <div class="floor-plan__body-apartment" @click="carInfo = !carInfo">

        <!-- Пагинатор -->
        <div class="floor-plan__body-apartment_paginator">
          <div>
            УРОВЕНЬ
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
      <div class="floor-plan__body-card" v-if="carInfo">
        <div class="floor-plan__body-card_text">Выберите парковочное место на плане этажа</div>

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

    <!-- Основной контент на плане этажа -->
    <div class="floor-plan__body" v-else>
      <FilterPickerParking class="parameters__body__filter"/>

      <div class="font-gilroy w-100">
        <div class="floor-plan__body-cards-horizontal">
          <div v-for="item in cardList">
            <CardHorizontalService :card-info="item"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/UI/multiComponenets/Header";
import Favorites from "@/components/UI/basic/Favorites";
import PaginatorVertical from "@/components/UI/basic/PaginatorVertical";
import IconCompass from "@/components/icon/IconCompass";
import IconArrow from "@/components/icon/IconArrow";
import CardFullInfo from "@/components/UI/multiComponenets/CardFullInfo";
import FilterPickerParking from "@/components/UI/multiComponenets/FilterPickerParking";
import CardHorizontalService from "@/components/UI/multiComponenets/CardHorizontalService";
import IconAuto from "@/components/icon/IconAuto";
import TextWithLabel from "@/components/UI/basic/TextWithLabel";

export default {
  name: "service-premises",

  components: {
    TextWithLabel,
    CardHorizontalService,
    FilterPickerParking,
    CardFullInfo,
    IconArrow,
    IconCompass,
    PaginatorVertical,
    Favorites,
    Header
  },

  data(){
    return{
      tabName: true,
      carInfo: false,
      tabs: [
        {TabName: 'На плане этажа', TabSelected: true},
        {TabName: 'По параметрам', TabSelected: false}
      ],
      cardInfo: {
        name: 'Машиноместо',
        number: '#17',

        square: 0,

        helperText: 'Цена по запросу',
        tagPosition: 'top',
        tags: [{name: 'test,'}, {name: 'test,'}, {name: 'test,'},],

        imgSrc: 'testCard.png',

        free: 'Свободна',
        icon: 'hearth',
        btnText: 'Забронировать',
      },

      cardList: [
        {
          icon: 'IconAuto',
          name: 'машиноместо',
          number: '#111',

          square: 18,
          floor: 1,

          helperText: 'цена по запросу' ,
          btnText: 'забронировать',
        },
        {
          icon: 'IconAuto',
          name: 'машиноместо',
          number: '#111',

          square: 18,
          floor: 1,

          helperText: 'цена по запросу' ,
          btnText: 'забронировать',
        },
        {
          icon: 'IconAuto',
          name: 'машиноместо',
          number: '#111',

          square: 18,
          floor: 1,

          helperText: 'цена по запросу' ,
          btnText: 'забронировать',
        },
        {
          icon: 'IconAuto',
          name: 'машиноместо',
          number: '#111',

          square: 18,
          floor: 1,

          helperText: 'цена по запросу' ,
          btnText: 'забронировать',
        },
      ]
    }
  },

  methods: {
    typeChange(data){
      this.tabName = data
    },
  },

  created() {
  }
}
</script>

<style scoped lang="scss">
@import "assets/style/variables";

.floor-plan{
  display: flex;
  flex-direction: column;


  &__backer{
    display: flex;
    flex-direction: row;
    gap: 10px;
    opacity: 0.5;
    padding-bottom: 15px;

    cursor: pointer;

    &:hover{
      opacity: 0.3;
    }
    &:active{
      opacity: 0.7;
    }
  }

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

    &-cards-horizontal{
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
  &_icon-compass{
    height: 4vw;
    width: 4vw;
  }

  &__padding{
    padding-right: 60%;
  }
}
</style>
