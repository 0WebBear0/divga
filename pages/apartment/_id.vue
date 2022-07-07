<template>
  <div class="apartment" v-if="!loading">

    <!-- header -->
    <div class="apartment__header">

      <div class="apartment__info">

        <!-- Верхняя часть с ценой  -->
        <div class="apartment__info__nav-bar">
          <nuxt-link class="text-select" :to="'/'">Главная</nuxt-link>
          <span class="opacity05">/</span>
          <span @click="$router.back()" class="text-select">Выбор квартиры</span>
          <span class="opacity05">/</span>
          <span class="opacity05">2 комнатная #489</span>
        </div>

        <div class="apartment__info__price">

          <div class="apartment__info__price_box-name">
            <div class="apartment__info__price_name">2 комнатная #489</div>
            <Favorites :favorite="{count: 0}" class="color-base_bg select-item" />
          </div>

          <MultiElement class="apartment__multi-selector" :selectors="[{name: 'Два санузла'},{name: 'Лоджия'},{name: 'Чистовая отделка'}]" />

          <div class="mt-3 font-gilroy">
            <div class="apartment__info__price_crossed">
              15 000 000 ₽
            </div>
            <div class="apartment__info__price_per-meter">
              <div class="apartment__info__price_per-meter_price">
                15 000 000 ₽
              </div>

              <div class="opacity05 pb-1" style="font-size: 16px; margin-bottom: 2px"> 2 222 / м<sup>2</sup></div>
            </div>
          </div>
        </div>

        <!--  карта при мобиле  -->
        <div class="apartment__card unshow-item text-dark">
          <ApartmentCard/>
        </div>

        <div class="splitter mt-4 mb-1 opacity05"></div>

        <!-- Площадь и этажи  -->
        <div class="apartment__info__floor font-gilroy">

          <div class="apartment__info__floor_item">
            <div class="apartment__info__price_per-meter_price">35.25м<sup>2</sup></div>
            <div class="opacity05 text-uppercase">Общая площадь</div>
          </div>

          <div class="apartment__info__floor_item">
            <div class="apartment__info__price_per-meter_price">5</div>
            <div class="opacity05 text-uppercase">Этаж</div>
          </div>

          <div class="apartment__info__floor_item">
            <div class="apartment__info__price_per-meter_price">1</div>
            <div class="opacity05 text-uppercase">Комната</div>
          </div>

          <div class="apartment__info__floor_item">
            <div class="apartment__info__price_per-meter_price">II кв. 2022</div>
            <div class="opacity05 text-uppercase">сроки сдачи</div>
          </div>

        </div>

        <div class="splitter mb-5 mt-1 opacity05"></div>

        <!-- Заказ звонка и акции  -->
        <div class="apartment__info__call">

          <div class="apartment__info__call-container">
            <div class="apartment__info__call_btns">
              <Button :params="{name: 'Заказать звонок', icon: null}" class="p-3 show-item-mobile" />
              <Button empty-inside :params="{name: 'План квартиры.pdf', icon: null}" class="p-3" />
              <Button empty-inside :params="{name: null, icon: 'IconFax'}" class="p-3" />
            </div>
          </div>

          <div class="apartment__info__call_text font-gilroy">
            Цены на сайте представлены для предварительного ознакомления и могут быть неактуальными.
            Используется динамическое ценообразование, в связи с чем цены на квартиры могут меняться в течение дня.
            Пожалуйста, уточняйте актуальные цены у менеджеров отдела продаж.
          </div>

          <div class="apartment__info__call_stock">

            <div class="apartment__info__price_name mt-5">Aкции с этой квартирой</div>
            <div class="splitter opacity05"></div>

            <div class="apartment__info__call_stock-item">
              <div class="align-items-center">Льготная ставка по ипотеке — 8%</div>
              <div class="color-accent underline select-any text-uppercase text-little">Подробнее</div>
            </div>
            <div class="splitter opacity05"></div>

            <div class="apartment__info__call_stock-item">
              <div class="align-items-center">Скидка 100 000₽ до 25.08</div>
              <div class="color-accent underline select-any text-uppercase text-little">Подробнее</div>
            </div>
            <div class="splitter opacity05"></div>

          </div>
        </div>

      </div>

      <div class="apartment__card show-item text-dark">
        <ApartmentCard/>
      </div>

    </div>

    <!-- footer -->
    <div class="apartment__footer">
      <div class="apartment__footer_header">
        <div class="apartment__info__price_name">Похожие квартиры</div>
        <div class="apartment__footer_icon">
          <IconArrowCircle class="apartment__footer_icon-right"/>
          <IconArrowCircle class="apartment__footer_icon-left"/>
        </div>
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
    <Button :params="{name: 'Заказать звонок', icon: null}" class="p-3 unshow-item-mobile apartment_call-to-as" />
  </div>
</template>

<script>
import Favorites from "@/components/UI/basic/Favorites";
import MultiElement from "@/components/UI/basic/MultiElement";
import CardVertical from "@/components/UI/multiComponenets/CardVertical";
import Button from "@/components/UI/basic/Button";
import IconArrowCircle from "@/components/icon/IconArrowCircle";
import ApartmentCard from "@/components/UI/multiComponenets/ApartmentCard";
export default {
  name: "_id",
  components: {ApartmentCard, IconArrowCircle, Button, CardVertical, MultiElement, Favorites},
  layout: ctx => 'empty',

  data(){
    return{
      loading: true,
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

      ]
    }
  },
  created() {
    this.$nextTick(function() {
      this.loading = false
    })
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
  min-height: 100vh;
  color: $whiteF3-color;

  //разметка

  &__header{
    display: flex;
    flex-direction: row;
  }

  &__footer{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: clamp(20px,3vw,60px);
  }

  //компоненты

  &__info{
    flex: 1;
    padding: clamp(20px,2.7vw,60px) clamp(15px,2.7vw,60px) 0 clamp(20px,2.7vw,60px);

    display: flex;
    flex-direction: column;
    gap: 10px;

    &__nav-bar{
      display: flex;
      flex-direction: row;
      justify-content: left;
      gap: 7px;

      cursor: pointer;
      padding-bottom: 30px;

      text-transform: uppercase;
      font-family: 'Jost', sans-serif;
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
        white-space: nowrap;
        font-size: clamp(20px, 3vw ,35px);
        font-weight: 500;
        text-transform: uppercase;
      }

      &_crossed{
        text-decoration: line-through;
        color: $favorites-line;
      }

      &_per-meter{
        display: flex;
        flex-direction: row;
        align-items: end;
        gap: 20px;

        &_price{
          font-weight: 400;
          font-size: 30px;
        }
      }
    }

    &__floor{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: left;
      gap: 60px;

      font-size: 12px;

    }

    &__call{
      display: flex;
      flex-direction: column;
      gap: 40px;

      &-container{
        display: flex;
        flex-direction: column;
        justify-content: left;
        gap: 15px;

        flex-wrap: wrap;

      }

      &_btns{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: left;

        gap: 15px;
      }

      &_text{
        color: rgb($gray-blue,0.7);

        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
      }

      &_stock{
        display: flex;
        flex-direction: column;
        gap: 20px;

        &-item{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }
  }

  &__card{
    display: flex;
    flex: 1;

    padding: clamp(20px,2vw,60px);
    width: 100%;
    background: $white-color;

  }

  &__footer{

    width: 100%;

    &_header{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 40px;
      }

    &_icon{

      display: flex;
      gap: 10px;

      &-right{
        fill: $gray-blue !important;
        height: 30px;
        width: 30px;
        transform: rotate(270deg);

        cursor: pointer;

        &:hover{
          opacity: 0.5;
        }
        &:active{
          fill: $white-color !important;
        }
      }
      &-left{
        fill: $gray-blue !important;
        height: 30px;
        width: 30px;
        transform: rotate(90deg);

        cursor: pointer;

        &:hover{
          opacity: 0.5;
        }
        &:active{
          fill: $white-color !important;
        }
      }
    }

    &_card{
      height: 100%;
      &-box{
        display: flex;
        flex-direction: row;
        justify-content: left;
        gap: 10px;
        flex-wrap: wrap;

      }
    }
  }
  &__multi-selector{
    text-transform: uppercase;
    font-size: 14px;
    color: $whiteF3-color;
    font-weight: 300;
  }
}

.show-item{
  display: block;
}
.unshow-item{
  display: none;
}
.unshow-item-mobile{
  display: none !important;
}

@media (max-width: 988px) {
  .apartment{
    &__info{
      padding: 0;
    }
    &__header{
      display: flex;
      flex-direction: column;
    }
  }
  .show-item{
    display: none;
  }
  .unshow-item{
    display: block;
  }
}

@media (max-width: 460px) {
  .splitter{
    margin: 1px;
  }
  .apartment{
    &__info{
      padding: 0;

      &__nav-bar{
        padding: 30px 10px 30px 10px;
      }
      &__price{
        padding: 1px 10px 1px 10px;

        &_box-name{
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        &_per-meter{
          padding-bottom: 20px;
        }
      }
      &__floor{
        padding: 1px 11px 1px 11px;
      }
      &__call{
        padding: 1px 11px 1px 11px;

        &_stock-item{
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
      }
    }


    &__price_box-name{
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: start;
      flex-wrap: wrap;
      gap: 20px;
    }
    &_call-to-as{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 90%;

      margin-left: 5%;
      margin-bottom: 3%;
    }
    &__footer{
      padding-top: 50px;
      padding-bottom: 80px;
    }
  }
  .favorite-b__empty{
    padding-left: 0;
  }
  .show-item-mobile{
    display: none !important;
  }
  .unshow-item-mobile{
    display: block !important;
  }

}
</style>
