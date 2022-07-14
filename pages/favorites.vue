<template>
  <div class="favorite">
    <Header class="favorite__header_el" title-name="Избранное" :show-switcher="true" :switch-object-props="switchObjectFavorite" @selected="typeChange"/>

    <div class="favorite__body">
      <!-- body header -->
      <div class="favorite__body_nav-bar">
        <div class="favorite__text" @click="$router.back()">
          <IconArrow class="color-white"/>
          <div>Назад</div>
        </div>
       <div class="opacity05">/</div>

        <div class="favorite__text"> В избранном {{countApartment}} квартир{{endWordHelper()}}</div>
      </div>

      <!-- cards -->
      <div class="favorite__body_cards" v-if="typeView">
        <div v-for="item in cardInfo">
          <CardVertical :card-info="item" class="parameters__body__cards__vertical-card"/>
        </div>
        <PaginatorHorizontal :params="[{name: 1, selected: false},{name: 2, selected: true},{name: 3, selected: false},]" />
      </div>

      <!-- cards horizontal -->
      <div class="favorite__body_list" v-else>
        <div v-for="item in cardInfo">
          <CardHorizontalFavorite :card-info="item"/>
        </div>
        <PaginatorHorizontal :params="[{name: 1, selected: false},{name: 2, selected: true},{name: 3, selected: false},]" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/UI/multiComponenets/Header";
import IconArrow from "@/components/icon/IconArrow";
import {HelperWithEndWord} from "@/components/mixins/HelperWithEndWord";
import CardVertical from "@/components/UI/multiComponenets/CardVertical";
import CardHorizontalFavorite from "@/components/UI/multiComponenets/CardHorizontalFavorite";
import PaginatorHorizontal from "@/components/UI/basic/PaginatorHorizontal";

export default {
  name: "favorites",
  components: {PaginatorHorizontal, CardHorizontalFavorite, CardVertical, IconArrow, Header},

  data(){
    return {
      typeView: true,
      countApartment: 5,

      switchObjectFavorite: [
        {TabSelected: true, TabName: 'Квартиры'},
        {TabSelected: false, TabName: 'Параметры поиска'},
      ],

      cardInfo: [
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
          oldPrice: 555,
          icon: 'exit',
          tags: [{name: 'test2'},{name: 'test1'},{name: 'test3'},{name: 'test1'},{name: 'test3'},{name: '...'}]
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
          oldPrice: 555,
          icon: 'exit',
          tags: [{name: 'test2'},{name: 'test1'},{name: 'test3'},{name: 'test1'},{name: 'test3'}]
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
          oldPrice: 555,

          icon: 'exit',
          tags: [{name: 'test2'},{name: 'test1'},{name: 'test3'},{name: 'test1'},{name: 'test3'}]
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
          oldPrice: 555,

          icon: 'exit',
          tags: [{name: 'test2'},{name: 'test1'},{name: 'test3'},{name: 'test1'},{name: 'test3'},{name: '...'}]
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
          oldPrice: 555,

          icon: 'exit',
          tags: [{name: 'test2'},{name: 'test1'},{name: 'test3'},{name: 'test1'},{name: 'test3'},{name: '...'}]
        },
      ]
    }
  },

  methods:{
    typeChange(data){
      this.typeView = data
    },
    endWordHelper() {
      return HelperWithEndWord.endWord(this.countApartment)
    }
  },
}
</script>

<style scoped lang="scss">
@import "assets/style/variables";
.favorite{
  width: 100%;

  &__header{
    width: 100%;
  }

  &__body{
    display: flex;
    flex-direction: column;

    &_nav-bar{
      padding: 20px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: left;
      gap: 20px;

      cursor: pointer;
    }

    &_cards{
      width: 100%;

      display: flex;
      justify-content: left;

      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;

    }

    &_list{
      width: 100%;

      display: flex;
      justify-content: center;

      flex-direction: column;
      gap: 20px;

    }
  }
  &__text{
    display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    text-transform: uppercase;

    fill: rgb($white-color, 0.7);

    &:hover{
      opacity: 0.7;
    }

    &:active{
      opacity: 0.9;
    }

    svg{
      display: flex;
      align-items: center;
      height: 16px;
      width: 16px;
    }
  }
}

@media (max-width: 660px) {
  .favorite__body_cards{
    display: flex;
    justify-content: center;
  }
}
</style>
