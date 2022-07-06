<template>
  <div class="parameters">
    <Header :underline="false">
      <div class="parameters__header">
        <TextWithLabel text="Найдено:" :text-body="['27 квартир']" />
        <TextWithLabel item-id="sort" text="Сортировка:" :popup-item="popup" :text-body="['Цена по возрастанию']" />
        <UsersView text="Вид" @clicked="(data) => this.typeRender = data" />
        <nuxt-link to="favorites" class="style-none show-item-mobile"><Favorites :favorite="{count: 1}"/></nuxt-link>
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
          <PaginatorHorizontal :params="[{name: 1, selected: false},{name: 2, selected: true},{name: 3, selected: false},]"/>
        </div>
        <div v-else class="parameters__body__cards__horizontal">
          <div v-for="(item, index) in cardInfo">
            <CardHorizontal
              :card-info="item"
              @click.native="$router.push('apartment/' + index)"
            />
          </div>
          <PaginatorHorizontal :params="[{name: 1, selected: false},{name: 2, selected: true},{name: 3, selected: false},]"/>
        </div>
      </div>
    </div>
    <nuxt-link to="favorites" class="style-none">
      <Favorites class="unshow-item-mobile parameters__favorite_absolute" :favorite="{count: 2}" helper-text=""/>
    </nuxt-link>
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
import PaginatorHorizontal from "@/components/UI/basic/PaginatorHorizontal";


export default {
  name: "parameters",

  components: {
    PaginatorHorizontal,
    CardHorizontal, CardVertical, FilterPicker, UsersView, TextWithLabel, Favorites, LinkedList, Header},

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
  },
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
      max-width: 25%;
      height: 100%;
      z-index: 1;
    }
  }
}
.show-item-mobile{
  display: block;
}
.unshow-item-mobile{
  display: none !important;
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

    &__body{
      &__filter{
        width: max-content;
        max-width: max-content;
        height: 100%;
      }
    }
  }
}

@media (max-width: 960px) {
  .parameters {

    &__body{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &__filter{
        display: flex;
        justify-content: center;
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

  .header__selection{
    display: none !important;
  }

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
    justify-content: start !important;
  }

  .show-item-mobile{
    display: none;
  }
  .unshow-item-mobile{
    display: flex !important;
  }
  .parameters__favorite_absolute{
    display: flex;
    flex-direction: row;
    position: fixed;

    right: 0;
    bottom: 0;
    min-width: 10px !important;
    padding: 10px !important;

    margin-bottom: 10px;
    margin-right: 10px;
  }
}
</style>
