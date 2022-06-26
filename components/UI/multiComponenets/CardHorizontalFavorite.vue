<template>
  <div class="card">
    <!-- 1 part -->
    <div class="card__first-part">
      <div class="card-big-text font-weight-bold">1, 2, 3 Комнатные</div>
      <div class="card-text">До 15 000 000{{'\u20BD'.normalize()}}</div>
    </div>
    <div class="splitter-vertical color-blue opacity05"></div>

    <!-- center place -->
    <div class="card__body">
      <div class="card__body_item">
        <div class="card-big-text font-weight-bold">от 46 до 64.2 м2</div>
        <div class="card-text">площадь</div>
      </div>

      <div class="card__body_item">
        <div class="card-big-text font-weight-bold">от 100 до 500</div>
        <div class="card-text">еще цифровой параметр</div>
      </div>
    </div>
    <div class="splitter-vertical color-blue opacity05"></div>

    <!-- center place -->
    <div class="card__multi-elements">
      <MultiElement :selectors="cardInfo.tags" class="justify-content-center" />
    </div>
    <div class="splitter-vertical color-blue opacity05"></div>

    <!-- center place -->
    <div class="card__favorite">
      <Button :params="{name:'Искать', icon: null}" class="card__favorite_search"/>
      <IconCross class="svg-dark card_exit"/>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IconHearthEmpty from "~/components/icon/IconHearthEmpty.vue";
import MultiElement from "~/components/UI/basic/MultiElement.vue";
import Button from "~/components/UI/basic/Button.vue";
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
}

export default Vue.extend({
  name: "CardHorizontalFavorite",
  components: {IconCross, Button, MultiElement, IconHearthEmpty},
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

  width: 100%;

  padding: clamp(10px, 2vw ,40px);

  border-radius: 0;

  background-color: $white-color;

  color: $one-base-color;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 15px;

  &__first-part{
    display: flex;
    flex-direction: column;
    justify-content: left;
  }

  &__body{
    display: flex;
    flex-direction: row;
    gap: 20px;

    &_item{
      display: flex;
      flex-direction: column;
      justify-content: left;
    }
  }

  &__multi-elements{
    padding: 0;
    margin: 0;
    max-width: 20%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

  }



  //helpers
  &-text{
    font-size: 14px;
    color: $gray-blue;
    text-transform: uppercase;
  }

  &-big-text{
    font-size: 16px;
    color: $one-base-color;
    text-transform: uppercase;
  }

  &__crossed{
    text-decoration: line-through;
  }

  &__favorite{
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;

    &_search{
      padding: clamp(0px,3vw,20px) clamp(0px,4vw,35px)
    }
  }

  &__icon{
    fill: $one-base-color;
    cursor: pointer;

    &:hover{
      fill: $accent-color;
    }
  }

  &:hover{
    opacity: 0.9;
    cursor: pointer;
  }
}

@media (max-width: 640px) {
  .card{
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    padding-left: 20px;

    &_exit{
      display: none;
    }

    &__body{
      display: flex;
      flex-direction: column;

      &-floor {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 7px;
      }
      &-end_price{
        font-size: 12px;
        font-weight: 500;
      }
    }
  }
  .splitter-vertical{
    display: none;
  }
}
</style>
