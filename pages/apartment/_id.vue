<template>
  <div class="apartment">

    <!-- header -->
    <div class="apartment__header">

      <div class="apartment__info">

        <!-- Верхняя часть с ценой  -->
        <div class="apartment__info__nav-bar">
            Главная <span class="opacity05">/</span> Выбор квартиры <span class="opacity05">/</span> <span class="opacity05">2 комнатная #489</span>
        </div>

        <div class="apartment__info__price">

          <div class="apartment__info__price_box-name">
            <div class="apartment__info__price_name">2 комнатная #489</div>
            <Favorites :favorite="{count: 0}" class="color-base_bg select-item" />
          </div>

          <MultiElement :selectors="[{name: 'Два санузла'},{name: 'Лоджия'},{name: 'Чистовая отделка'}]" />

          <div>
            <div class="apartment__info__price_crossed">
              15 000 000 ₽
            </div>
            <div class="apartment__info__price_per-meter">
              <div class="apartment__info__price_per-meter_price">
                15 000 000 ₽
              </div>

              <div class="opacity05 pb-1"> 2 222 / M<sup>2</sup></div>
            </div>
          </div>
        </div>

        <div class="splitter opacity05"></div>

        <!-- Площадь и этажи  -->
        <div class="apartment__info__floor">

          <div class="apartment__info__floor_item">
            <div class="apartment__info__price_per-meter_price">35.25M<sup>2</sup></div>
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

        <div class="splitter opacity05"></div>

        <!-- Заказ звонка и акции  -->
        <div class="apartment__info__call">

          <div class="apartment__info__call-container">
            <div class="apartment__info__call_btns">
              <Button :params="{name: 'Заказать звонок', icon: null}" class="p-3" />
              <Button empty-inside :params="{name: 'Заказать звонок', icon: null}" class="p-3" />
              <Button empty-inside :params="{name: null, icon: 'IconFax'}" class="p-3" />
            </div>
          </div>

          <div class="apartment__info__call_text">
            Цены на сайте представлены для предварительного ознакомления и могут быть неактуальными.
            Используется динамическое ценообразование, в связи с чем цены на квартиры могут меняться в течение дня.
            Пожалуйста, уточняйте актуальные цены у менеджеров отдела продаж.
          </div>

          <div class="apartment__info__call_stock">

            <div class="apartment__info__price_name">Aкции с этой квартирой</div>
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

      <div class="apartment__card text-dark">
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
    padding: 60px 60px 0 60px;

    display: flex;
    flex-direction: column;
    gap: 20px;

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
    flex: 1;

    padding: 60px;

    background: $white-color;

  }

  &__footer{

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
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;

      }
    }
  }

}
</style>
