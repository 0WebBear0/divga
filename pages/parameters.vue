<template>
  <div class="parameters">
    <Header :underline="false" :switcher-none="!mobile">
      <div class="parameters__header">
        <TextWithLabel text="Найдено:" :text-body="['27 квартир']" />
        <TextWithLabel item-id="sort" text="Сортировка:" :popup-item="popup" :text-body="['Цена по возрастанию']" />
        <UsersView text="Вид" @clicked="(data) => this.typeRender = data" />
        <nuxt-link to="favorites" class="style-none"><Favorites :favorite="{count: 1}"/></nuxt-link>
      </div>

    <!--   для адаптива   -->
      <div class="parameters__header-adaptive">
        <nuxt-link to="favorites" class="style-none"><Favorites :favorite="{count: 1}"/></nuxt-link>
      </div>
    </Header>

    <div class="parameters__header-adaptive">
      <div class="parameters__header-adaptive_bottom">
        <div class="parameters__header-adaptive_labels">
          <TextWithLabel text="Найдено:" :text-body="['27 квартир']" />
          <TextWithLabel item-id="sort" text="Сортировка:" :popup-item="popup" :text-body="['Цена по возрастанию']" />
        </div>
        <UsersView text="Вид" @clicked="(data) => this.typeRender = data" class="parameters__header-adaptive_view" />
      </div>
    </div>

    <div class="splitter mt-4 mb-4"></div>

    <!--  Начало контента  -->
    <div class="parameters__body">
      <FilterPicker class="parameters__body__filter"/>
      <div class="font-gilroy w-100">
        <div v-if="typeRender" class="parameters__body__cards__vertical">
          <div v-for="(item,index) in cardInfo">
            <CardVertical
              :card-info="item"
              class="parameters__body__cards__vertical-card"
              @click.native="$router.push('apartment/' + index)"
            />
          </div>
        </div>
        <div v-else class="parameters__body__cards__horizontal">
          <div v-for="(item, index) in cardInfo">
            <CardHorizontal
              :card-info="item"
              @click.native="$router.push('apartment/' + index)"
            />
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
      mobile: false,
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
  },

  beforeMount() {
    if (window.screen.width < 480){
      this.mobile = true
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

    padding-left: 10px;
    &-adaptive{
      display: none;
    }
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
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;

        &-card{
          height: 100%;
        }
      }
    }

    &__filter{
      width: max-content;
      height: 100%;
    }
  }
}

@media (max-width: 1390px) {
  .parameters {

    &__header {
      display: none;
      &-adaptive {
        display: flex;
        flex-direction: column;

        &_bottom{
          padding-top: clamp(15px, 5vw, 25px);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        &_labels{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          gap: 20px;
        }

        &_view{
          width: max-content;
        }
      }
    }

  }
}

@media (max-width: 760px) {
  .parameters {

    &__body{
      display: flex;
      flex-direction: column;
      justify-content: center;

      &__filter{
        width: 100%;
      }
    }

  }
  .text-with-label{
    display: flex;
    justify-content: start;
  }
}

@media (max-width: 480px) {

  .parameters {
    &__header {
      display: none;

      &-adaptive {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        &_labels{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 20px;
        }

        &_view{
          display: flex;
          align-items: start;
        }
      }
    }

    &__body{
      display: flex;
      flex-direction: column;
      justify-content: center;

      &__filter{
        width: 100%;
      }
    }

  }

  .text-with-label{
    display: flex;
    justify-content: start;
  }

}
</style>
