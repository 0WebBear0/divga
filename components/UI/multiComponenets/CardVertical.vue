<template>
  <div>
    <div class="card">

      <!-- header -->
      <div class="card__header" style="align-items: end">
        <div class="card__header-name">
            {{cardInfo.name + ', ' + cardInfo.number}}
        </div>
        <div v-if="cardInfo.icon !== undefined">
          <IconHearth class="card__icon" v-if="cardInfo.icon === 'hearth'" />
          <IconCross class="svg-dark" style="width: 13px" v-if="cardInfo.icon === 'exit'" />
        </div>
        <IconHearthEmpty class="card__icon" v-else />
      </div>
      <div class="splitter color-blue opacity05"></div>

      <!-- sub-header -->
      <div class="card__sub-header">
        <div>
          <b style="font-size: 14px">{{cardInfo.square}} M<sup>2</sup></b>
          <span class="card-text">Площадь</span>
        </div>

        <div>
          <b style="font-size: 14px">{{cardInfo.floor}}</b>
          <span class="card-text">Этаж</span>
        </div>
      </div>
      <div class="splitter color-blue opacity05"></div>

      <!-- body -->
      <div class="card__body">
        <img :src="cardInfo.imgSrc" alt="t">
      </div>
      <div class="splitter color-blue opacity05"></div>

      <!-- footer -->
      <div class="card__footer">
        <div class="card__footer-top" style="align-items: flex-end">

          <div>
            <div class="card__footer-crossed card-text" v-if="cardInfo.oldPrice !== undefined">
              {{cardInfo.oldPrice + '\u20BD'.normalize()}}
            </div>
            <div style="font-size: 16px">
              <b>{{cardInfo.price + '\u20BD'.normalize()}}</b>
            </div>
          </div>

          <div class="card-text" style="font-size: 13px">{{cardInfo.priceForSquare}} / M<sup>2</sup></div>
        </div>

        <div class="card__footer-bottom">
          <MultiElement :selectors="cardInfo.tags" />
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IconHearth from "~/components/icon/IconHearth.vue";
import MultiElement from "~/components/UI/basic/MultiElement.vue";
import IconHearthEmpty from "~/components/icon/IconHearthEmpty.vue";
import IconCross from "~/components/icon/IconCross.vue";

interface Card {
  name: String | undefined,
  number: String | undefined,

  square: number | undefined,
  floor: number | undefined,

  imgSrc: String | undefined,

  oldPrice: number | undefined,
  price: number | undefined,
  priceForSquare: number | undefined,

  tags: Array<{name: String }> | undefined,
  icon: String | undefined
}


export default Vue.extend({
  name: "CardVertical",
  components: {IconCross, IconHearthEmpty, MultiElement, IconHearth},
  props:{
    cardInfo:{
      required: false,

      type: Object as () => Card,

      default: {
        name: 'Название не определенно',
        number: '№ 0',

        square: 0,
        floor: 0,

        imgSrc: 'testCard.png',

        price: 0,
        priceForSquare: 0,
      }
    }
  }
})
</script>

<style scoped lang="scss">
@import "../../../assets/style/variables";
.card{

  font-family: 'Jost', sans-serif;

  width: 10vw;
  min-width: 280px;
  height: 100%;

  padding: clamp(25px, 2vw ,40px);

  border-radius: 0;

  background-color: $whiteF3-color;

  color: $one-base-color;
  display: flex;
  flex-direction: column;
  gap: 15px;

  cursor: pointer;

  &__header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &-name{
      flex-wrap: wrap;
      font-weight: bold;
      color: $one-base-color;
      text-transform: uppercase;

      display: flex;
      gap: 10px;
    }
  }

  &__sub-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__body{
    display: flex;
    padding-top: 35px;
    padding-bottom: 30px;
    align-items: center;
    justify-content: center;
  }

  &__footer{
    display: flex;
    flex-direction: column;

    &-top{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    &-bottom{
      padding-top: 15px;
    }

    &-crossed{
      text-decoration: line-through;
    }
  }

  &-text{
    font-size: 14px;
    color: $gray-blue;
    text-transform: uppercase;
  }

  &__icon{
    width: 15px;
    fill: $gray-blue;
    cursor: pointer;

    &:hover{
    fill: $accent-color;
    }
  }

  &:hover{
    transform: scale(1.03);
  }
}
</style>
