<template>
  <div class="card-base">
    <!-- img -->
    <div class="card__img">
      <img width="100px" :src="cardInfo.imgSrc" alt="t">
    </div>
    <div class="splitter-vertical color-blue opacity05"></div>

   <div class="card">

     <div class="card_content">
       <!-- center place -->
       <div class="card__body">
         <div class="card__body-name">
           {{cardInfo.name + ', ' + cardInfo.number}}
           <div class="card__body-name_helper">... Дополнительно</div>
         </div>
         <div class="card__body-square">
           <div>
             <div class="card__body-name_square">
               {{cardInfo.square}} M<sup>2</sup>
             </div>
             <div class="card-text">Площадь</div>
           </div>
         </div>
         <div class="card__body-floor">
           <div>
             <div class="card__body-name">
               {{cardInfo.floor}}
             </div>
             <div class="card-text">Этаж</div>
           </div>
         </div>
       </div>
       <div class="splitter-vertical color-blue opacity05 unshow-item-mobile"></div>

       <!-- center place -->
       <div class="card__price">
         <div class="card__crossed card-text" v-if="cardInfo.oldPrice !== undefined">
           {{cardInfo.oldPrice + '\u20BD'.normalize()}}
         </div>
         <div class="card__price_main">
           {{cardInfo.price + '\u20BD'.normalize()}}
         </div>
         <div class="card-text">{{cardInfo.priceForSquare}} / M<sup>2</sup></div>
       </div>
       <div class="splitter-vertical color-blue opacity05 unshow-item-mobile"></div>

     </div>

     <div class="card_content-table">
       <!-- center place -->
       <div class="card__body">
         <div class="card__body-name">
           {{cardInfo.name + ', ' + cardInfo.number}}
           <div class="card__body-name_helper">... Дополнительно</div>
         </div>
       </div>

       <!-- center place -->
       <div class="card_content-table_bottom">
         <div class="card__price">
           <div class="card__crossed card-text" v-if="cardInfo.oldPrice !== undefined">
             {{cardInfo.oldPrice + '\u20BD'.normalize()}}
           </div>
           <div class="card__price_main">
             {{cardInfo.price + '\u20BD'.normalize()}}
           </div>
           <div class="card-text">{{cardInfo.priceForSquare}} / M<sup>2</sup></div>
         </div>
         <div class="card__body-square">
           <div>
             <div class="card__body-name_square">
               {{cardInfo.square}} M<sup>2</sup>
             </div>
             <div class="card-text">Площадь</div>
           </div>
         </div>
         <div class="card__body-floor">
           <div>
             <div class="card__body-name">
               {{cardInfo.floor}}
             </div>
             <div class="card-text">Этаж</div>
           </div>
         </div>
       </div>
     </div>

     <!-- center place -->
     <div class="card__favorite align-items-start">
       <IconHearthEmpty class="card__icon"/>
     </div>
   </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IconHearthEmpty from "~/components/icon/IconHearthEmpty.vue";

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
  name: "CardHorizontal",
  components: {IconHearthEmpty},
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

  background-color: $white-color;

  color: $one-base-color;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  &-base{
    width: 100%;

    padding: clamp(18px, 2vw ,40px);

    border-radius: 0;

    background-color: $white-color;

    color: $one-base-color;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 15px;
  }

  &_content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &-table{
      display: none;
    }
  }

  &__body{

    display: flex;
    flex-direction: row;

    gap: 20px;

    &-name{
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      font-weight: bold;
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

  &__price{

    &_main{
      font-weight: bold;
      color: $one-base-color;
    }
  }

  &:hover{
    opacity: 0.9;
    cursor: pointer;
  }
}

@media (max-width: 1200px) {
  .unshow-item-mobile{
    display: none;
  }
  .card{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-between;

    &_content{
      display: none;

      &-table{
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;

        gap: 15px;

        &_bottom{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
}

@media (max-width: 680px) {
  .unshow-item-mobile{
    display: none;
  }
  .card{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}


@media (max-width: 480px) {
  .card__img{
    display: none;
  }
  .splitter-vertical{
    display: none;
  }
}
</style>
