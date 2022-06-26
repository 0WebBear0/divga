<template>
  <div class="card">
    <!-- center place -->
    <div class="card__body">

      <div class="card__body-name">
        <component :is="cardInfo.icon" />
        {{cardInfo.name + ', ' + cardInfo.number}}
      </div>

    </div>

    <div class="splitter-vertical color-blue opacity05"></div>

    <!-- center -->
    <div class="card__body">

      <div class="card__body-floor">
        <div class="card__body-name_square">
          {{cardInfo.square}} M<sup>2</sup>
        </div>
        <div class="card-text">Площадь</div>
      </div>

      <div class="card__body-floor">
        <div class="card__body-name">
          {{cardInfo.floor}}
        </div>
        <div class="card-text">Этаж</div>
      </div>

    </div>
    <div class="splitter-vertical color-blue opacity05"></div>

    <!-- end -->
    <div class="card__body-end">
      <div class="card__body-end_price">Цена по запросу</div>
      <div class="card__body-end_book">Забронировать</div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue, {Component} from "vue";
import IconHearthEmpty from "~/components/icon/IconHearthEmpty.vue";
import IconAuto from "~/components/icon/IconAuto.vue";

interface Card {
  icon: Component | undefined,
  name: String | undefined,
  number: String | undefined,

  square: number | undefined,
  floor: number | undefined,

  helperText: String | undefined ,
  btnText: String | undefined,
}

export default Vue.extend({
  name: "CardHorizontalService",
  components: {IconHearthEmpty},
  props:{
    cardInfo:{
      required: false,

      type: Object as () => Card,

      default: {
        icon: IconAuto,
        name: 'Название не определенно',
        number: '№ 0',

        square: 0,
        floor: 0,

        helperText: 'none' ,
        btnText: 'none',
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
  text-transform: uppercase;

  &__body{

    display: flex;
    flex-direction: row;

    gap: 20px;

    &-name{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      font-weight: bold;
      fill: $one-base-darker-color;

      gap: 15px;
      color: $one-base-color;

      &_square{
        display: flex;
        flex-direction: row;

        font-weight: bold;
        color: $one-base-color;
      }
      &_helper{
        padding: 4px;
        display: flex;
        align-items: flex-start;
        text-decoration: none;

        font-family: 'Jost', serif ;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 100%;

        text-transform: uppercase;
        color: $lines-color;

        &:hover{
          border-radius: 3px;
          background-color: rgb($black-color, 0.1);
        }

        &:active{
          border-radius: 3px;
          background-color: rgb($black-color, 0.05);
        }
      }
    }

    &-floor{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &-end{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 15px;

      &_price{
        font-weight: 600;
        font-size: 18px;
        line-height: 100%;

      }

      &_book{
        color: $red;
      }
    }

    &-square{
      display: flex;
      gap: 10px;
    }
  }

  &__crossed{
    text-decoration: line-through;
  }

  &__favorite{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-text{
    font-size: 14px;
    color: $gray-blue;
    text-transform: uppercase;
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
    &__body{
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
