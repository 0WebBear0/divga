<template>
  <div class="filter">

    <div class="filter__header">
      <div class="">
        Фильтры
      </div>
      <div class="filter__header__rest">
        Сбросить
      </div>
    </div>

    <div class="splitter"></div>

    <!-- Количество комнат -->
    <div class="filter__count-rooms">
      <div class="filter__count-rooms-text">Уровень</div>

      <div class="filter__count-rooms-box">
        <div v-for="(count, index) in countRoom">
          <Button
            class="filter__count-rooms-btn"
            :params="{ name: count.name, icon: null }"
            :class="{ 'filter__count-rooms-btn-selected': count.selected }"
            @click.native="changeCountRoom(index)"
          />
        </div>
      </div>
    </div>


    <!-- Площадь -->
    <div class="filter__price">
      <div class="filter__price-text">Площадь</div>

      <div class="filter__price-box">
        <MultiSlider :slider="square" />
      </div>
    </div>


    <Button :params="{name: 'Применить', icon: null}"/>

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "~/components/UI/basic/Button.vue";
import MultiSlider from "~/components/UI/basic/MultiSlider.vue";
import MultiSelect from "~/components/UI/basic/MultiSelect.vue";


export default Vue.extend({

  name: "FilterPickerParking",

  components: {MultiSelect, MultiSlider, Button},

  data(){
    return{
      countRoom: [
        {name: 1, selected: true},
        {name: 2, selected: false},
        {name: 3, selected: false},
        {name: 4, selected: false},
      ],

      square: {
        min: 0,
        max: 100,
        step: 1,

        minNow: 0,
        maxNow: 100,

        helperText: ' м'
      },
    }
  },

  methods: {
    changeCountRoom(key: number){
      this.countRoom[key].selected = !this.countRoom[key].selected
    },
  }

})
</script>

<style scoped lang="scss">
@import "../../../assets/style/variables";
.filter{
  display: flex;
  flex-direction: column;

  padding: 50px 40px 50px 40px;
  gap: 25px;

  background-color: $one-base-darker-color;

  height: max-content;
  &__header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-transform: uppercase;

    &__rest{
      text-decoration-line: underline;
      text-transform: uppercase;
      color: rgb($select-color, 0.5);

      align-items: flex-end;
      font-size: 14px;

      &:hover{
        color: rgb($select-color, 0.7);
        cursor: pointer;
      }

      &:active{
        color: rgb($select-color, 1);
        cursor: pointer;
      }
    }
  }

  &__count-rooms{

    display: flex;
    flex-direction: column;

    gap: 10px;

    &-box{
      display: flex;
      flex-direction: row;
      gap: 10px;
    }

    &-text{
      text-transform: uppercase;
    }

    &-btn{

      width: clamp(40px, 5vw, 54px);
      height: clamp(40px, 5vw, 54px);

      background-color: rgb($white-color, 0);
      color: rgb($white-color, 1);
      border: 0.5px solid $lines-color;

      &-selected{

        width: clamp(40px, 5vw, 54px);
        height: clamp(40px, 5vw, 54px);
        color: rgb($one-base-color, 1);
        background-color: rgb($accent-color, 1);
      }
    }


  }

  &__price{
    display: flex;
    flex-direction: column;
    text-transform: uppercase;

    gap: 10px;

    &-box{
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    &__input{

      &-box{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      &-slider{

      }
    }
  }
}
</style>
