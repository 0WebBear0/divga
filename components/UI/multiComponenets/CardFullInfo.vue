<template>
  <div class="card_base">
    <div class="card">

      <!-- header -->
      <div class="card__header">
        <div class="card__header_box">
          <div class="card__header_box-free color-green_bg" v-if="cardInfo.free !== undefined">{{cardInfo.free}}</div>
          <div class="card__header-name">
            {{ cardInfo.name }}, <span v-if="cardInfo.number !== undefined">{{ cardInfo.number }}</span>
          </div>
          <div v-if="cardInfo.tagPosition === 'top'">
            <MultiElement :selectors="cardInfo.tags" style="text-transform: uppercase"/>
          </div>
        </div>
        <div v-if="cardInfo.icon !== undefined" class="mt-1">
          <IconHearth class="card__icon_hearth" v-if="cardInfo.icon === 'hearth'"/>
          <IconCross class="svg-dark" v-if="cardInfo.icon === 'exit'"/>
          <IconHearthEmpty class="card__icon" v-if="cardInfo.icon === 'hearthEmpty'"/>
        </div>
      </div>
      <div class="splitter color-blue opacity05"></div>

      <!-- sub-header -->
      <div class="card__sub-header">
        <div v-if="cardInfo.square !== undefined">
          <b>{{ cardInfo.square }} M<sup>2</sup></b>
          <span class="card-text pl-1">Площадь</span>
        </div>

        <div v-if="cardInfo.floor !== undefined">
          {{ cardInfo.floor }}
          <span class="card-text">Этаж</span>
        </div>
      </div>
      <div class="splitter color-blue opacity05"></div>

      <!-- body -->
      <div class="card__body" v-if="cardInfo.imgSrc !== undefined">
        <img :src="cardInfo.imgSrc" alt="t">
      </div>
      <div class="splitter color-blue opacity05" v-if="cardInfo.imgSrc !== undefined"></div>

      <!-- footer -->
      <div class="card__footer" v-if="cardInfo.price !== undefined && cardInfo.priceForSquare !== undefined">
        <div class="card__footer-top">

          <div>
            <div class="card__footer-crossed card-text" v-if="cardInfo.oldPrice !== undefined">
              {{ cardInfo.oldPrice + '\u20BD'.normalize() }}
            </div>
            <div>
              <b>{{ cardInfo.price + '\u20BD'.normalize() }}</b>
            </div>
          </div>

          <div class="card-text" v-if="cardInfo.priceForSquare !== undefined">{{ cardInfo.priceForSquare }} / M<sup>2</sup></div>
        </div>

        <div class="card__footer-bottom" v-if="cardInfo.tagPosition === 'bottom'">
          <MultiElement :selectors="cardInfo.tags"/>
        </div>
      </div>

      <!-- helper text -->
      <div v-if="cardInfo.helperText !== undefined" class="text-uppercase font-weight-bold ">
        {{cardInfo.helperText}}
      </div>
      <div class="splitter opacity05" v-if="cardInfo.helperText !== undefined"></div>

      <!-- btn -->
      <div class="card-text_btn">
        {{cardInfo.btnText}}
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
  helperText: String | undefined ,
  priceForSquare: number | undefined,

  tags: Array<{ name: String }> | undefined,
  tagPosition: String | undefined,
  icon: String | undefined

  free: String | undefined,
  btnText: String | undefined,
}


export default Vue.extend({
  name: "CardFullInfo",
  components: {IconCross, IconHearthEmpty, MultiElement, IconHearth},
  props: {
    cardInfo: {
      required: false,

      type: Object as () => Card,

      default: {
        name: 'Название не определенно',
        number: '№ 0',

        square: 0,
        floor: 0,

        priceForSquare: 0,
      }
    }
  }
})
</script>

<style scoped lang="scss">
@import "../../../assets/style/variables";

.card {
  height: 100%;

  padding: clamp(10px, 2vw, 40px);

  border-radius: 0;

  background-color: $white-color;

  color: $one-base-color;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &_base{
    height: 100%;
    background-color: rgb($white-color,0) !important;
  }

  &__header {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;

    &_box{
      display: flex;
      flex-direction: column;
      justify-content: left;

      gap: 15px;

      &-free{
        width: max-content;

        padding: 5px 16px;
        display: flex;

        justify-content: left;
        text-transform: uppercase;
        color: $select-color;
        font-size: 14px;

        border-radius: 100px;
      }
    }

    &-name {
      flex-wrap: wrap;
      font-weight: bold;
      color: $one-base-color;

      font-size: 24px;

      display: flex;
      gap: 10px;
    }
  }

  &__sub-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__body {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__footer {
    display: flex;
    flex-direction: column;

    &-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &-bottom {
      padding-top: 15px;
    }

    &-crossed {
      text-decoration: line-through;
    }
  }

  &-text {
    font-size: 14px;
    color: $gray-blue;
    text-transform: uppercase;

    &_btn{
      color: $red;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 500;
    }
  }

  &__icon {
    fill: $one-base-color;
    cursor: pointer;

    &:hover {
      fill: $accent-color;
    }

    &_hearth{
      fill: $accent-color;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
}
</style>
