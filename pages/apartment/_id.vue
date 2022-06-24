<template>
  <div class="apartment">

    <!-- header -->
    <div class="apartment__header">

      <div class="apartment__info">

        <div class="apartment__info__nav-bar">
            Главная <span class="opacity05">/</span> Выбор квартиры <span class="opacity05">/</span> <span class="opacity05">2 комнатная #489</span>
        </div>

        <div class="apartment__info__price">

          <div class="apartment__info__price_box-name">
            <div class="apartment__info__price_name">2 комнатная #489</div>
            <Favorites :favorite="{count: 1}" class="color-base_bg select-item " />
          </div>

          <MultiElement :selectors="[{name: 'Два санузла'},{name: 'Лоджия'},{name: 'Чистовая отделка'}]" />

          <div>
            <div class="apartment__info__price_crossed">
              15 000 000 ₽
            </div>
            <div class="apartment__info__price_per-meter">
              <div>
                <b>15 000 000 ₽</b>
              </div>

              <div class="opacity05"> 2 222 / M<sup>2</sup></div>
            </div>
          </div>

          <div class="splitter opacity05"></div>
        </div>

      </div>

      <div class="apartment__card text-dark">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores autem, doloribus earum eveniet impedit iusto laborum qui quia quod rem rerum, sed, tempore vel veritatis vitae voluptate voluptatibus voluptatum.
      </div>

    </div>

    <!-- footer -->
    <div class="apartment__footer">
      <div class="pb-5 justify-content-between">
        <div>Похожие квартиры</div>
          arrows
      </div>

      <div class="apartment__footer_card-box">
        <div v-for="(item,index) in cardInfo">
          <CardVertical
            :card-info="item"
            class="apartment__footer_card"
            @click.native="$router.push(index)"
          />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Favorites from "@/components/UI/basic/Favorites";
import MultiElement from "@/components/UI/basic/MultiElement";
import CardVertical from "@/components/UI/multiComponenets/CardVertical";
export default {
  name: "_id",
  components: {CardVertical, MultiElement, Favorites},
  layout: ctx => 'empty',

  data(){
    return{
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
  }
}
</script>

<style scoped lang="scss">
@import "assets/style/variables";

.apartment{
  display: flex;
  flex-direction: column;
  background: $one-base-color;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;


  //разметка

  &__header{
    display: flex;
    flex-direction: row;
  }

  &__footer{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 60px;
  }

  //компоненты

  &__info{
    flex: 1;

    padding: 60px;

    &__nav-bar{
      display: flex;
      flex-direction: row;
      justify-content: left;
      gap: 7px;

      cursor: pointer;
      padding-bottom: 40px;
    }

    &__price{
      display: flex;
      flex-direction: column;
      gap: 20px;

      &_box-name{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        gap: 20px;
      }

      &_name{
        font-size: 40px;
        font-weight: 500;
      }

      &_crossed{
        text-decoration: line-through;

        color: $gray-blue;
      }

      &_per-meter{
        display: flex;
        flex-direction: row;
        gap: 20px;
      }
    }
  }

  &__card{
    flex: 1;

    padding: 60px;

    background: $white-color;
  }

  &__footer{

    &_card{
      height: 100%;
      &-box{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;

      }
    }
  }

}
</style>
