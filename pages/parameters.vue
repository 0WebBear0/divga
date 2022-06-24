<template>
  <div class="parameters">
    <Header>
      <div class="parameters__header">
        <TextWithLabel text="Найдено:" :text-body="['27 квартир']" />
        <TextWithLabel item-id="sort" text="Сортировка:" :popup-item="popup" :text-body="['Цена по возрастанию']" />

        <UsersView text="Вид" @clicked="(data) => this.typeRender = data" />

        <nuxt-link to="favorites" class="style-none"><Favorites :favorite="{count: 1}"/></nuxt-link>
      </div>
    </Header>

    <div class="parameters__body">
      <FilterPicker class="parameters__body__filter"/>
      <div class="font-gilroy w-100">
        <div v-if="typeRender" class="parameters__body__cards__vertical">
          <div v-for="item in cardInfo">
            <CardVertical :card-info="item" class="parameters__body__cards__vertical-card"/>
          </div>
        </div>
        <div v-else class="parameters__body__cards__horizontal">
          <div v-for="item in cardInfo">
            <CardHorizontal :card-info="item"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/UI/multiComponenets/Header";
import LinkedList from "@/components/UI/basic/LinkedList";
import Favorites from "@/components/UI/basic/Favorites";
import TextWithLabel from "@/components/UI/basic/TextWithLabel";
import UsersView from "@/components/UI/multiComponenets/UsersView";
import IconSortedUp from "@/components/icon/IconSortedUp";
import IconSortedDown from "@/components/icon/IconSortedDown";
import FilterPicker from "@/components/UI/multiComponenets/FilterPicker";
import CardVertical from "@/components/UI/multiComponenets/CardVertical";
import CardHorizontal from "@/components/UI/multiComponenets/CardHorizontal";


export default {
  name: "parameters",

  components: {CardHorizontal, CardVertical, FilterPicker, UsersView, TextWithLabel, Favorites, LinkedList, Header},

  data(){
    return{
      typeRender: true,
      found: [
        {ItemSelected: true, ItemName: '27 квартир', ItemLink: false},
      ],
      sorted: [
        {ItemSelected: true, ItemName: 'Цена по возрастанию', ItemLink: false},
      ],
      popup: [
        {name: 'Цена по возрастанию', icon: 'IconSortedUp' },
        {name: 'Цена по убыванию', icon: 'IconSortedDown' },
        {name: 'Площадь по возрастанию', icon: 'IconSortedUp' },
        {name: 'Площадь по убыванию', icon: 'IconSortedDown' },
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
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
        },{
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
        },
        {
          name: 'Название не ',
          number: '№ 11',

          square: 65,
          floor: 66,

          imgSrc: 'testCard.png',

          price: 586,
          priceForSquare: 786,
        }

      ]
    }
  },

  created() {
    for (let i = 0; i < this.found.length; i++) {
      if (this.found[i].ItemLink === this.$route.path.split('/')[1]){
        this.found[i].ItemSelected = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.parameters{
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
    gap: 30px;

    &__cards{

      &__horizontal{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      &__vertical{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;

        &-card{
          height: 100%;
        }
      }
    }

    &__filter{
      width: 33%;
      height: 100%;
    }
  }
}
</style>
