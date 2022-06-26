<template>
  <div class="filter-base">

    <div class="filter__header">
      <div>
        Фильтры <span v-if="!showFilter">(5)</span>
      </div>
      <div class="filter__header__rest show-item-mobile">
        Сбросить
      </div>
      <div v-if="showFilter" class="filter__header__rest-mobile unshow-item-mobile" @click="showFilter = !showFilter">
        Свернуть
        <DropdownArrow/>
      </div>
      <div v-if="!showFilter" class="filter__header__rest-mobile unshow-item-mobile" @click="showFilter = !showFilter">
        Развернуть
        <DropdownArrow style="transform: rotate(180deg)"/>
      </div>
    </div>

    <div class="filter" v-show="showFilter">
      <div class="splitter"></div>

      <!-- Количество комнат -->
      <div class="filter__count-rooms">
        <div class="filter__count-rooms-text">Количество комнат</div>

        <div class="filter__count-rooms-box">
          <div v-for="(count, index) in countRoom">
            <Button
              class="filter__count-rooms-btn"
              :params="{name: count.name, icon: null}"
              :class="{ 'filter__count-rooms-btn-selected': count.selected }"
              @click.native="changeCountRoom(index)"
            />
          </div>
        </div>
      </div>

      <!-- Стоимость -->
      <div class="filter__price">
        <div class="filter__price-text">Стоимость</div>

        <div class="filter__price-box">
          <MultiSlider :slider="price" />
        </div>
      </div>

      <!-- Площадь -->
      <div class="filter__price">
        <div class="filter__price-text">Площадь</div>

        <div class="filter__price-box">
          <MultiSlider :slider="square" />
        </div>
      </div>

      <!-- Особенность квартиры -->
      <MultiSelect :selectors="multiSlider" @select="selectItems"/>

      <Button style="padding: clamp(15px,2vw,20px) clamp(25px,3vw,40px)" :params="{name: 'Применить', icon: null}"/>


      <div class="filter__header__rest">
        Сохранить параметры поиска
      </div>
      <div class="filter__header__rest unshow-item-mobile">
        Сбросить
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "~/components/UI/basic/Button.vue";
import MultiSlider from "~/components/UI/basic/MultiSlider.vue";
import MultiSelect from "~/components/UI/basic/MultiSelect.vue";
import DropdownArrow from "~/components/icon/DropdownArrow.vue";


export default Vue.extend({
  name: "FilterPicker",

  components: {DropdownArrow, MultiSelect, MultiSlider, Button},

  data(){
    return{

      showFilter: true,

      countRoom: [
        {name: 1, selected: true},
        {name: 2, selected: false},
        {name: 3, selected: false},
        {name: 4, selected: false},
      ],

      multiSlider: [
        {name: 'Вид на залив', selected: true},
        {name: 'Большая кухня', selected: false},
        {name: 'Лоджия', selected: false},
        {name: 'Чистовая отделка', selected: false},
      ],
      price: {
        min: 0,
        max: 100,
        step: 1,

        minNow: 0,
        maxNow: 100,

        helperText: ' \u20BD'.normalize()
      },
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

    selectItems(index: number){
      this.multiSlider[index].selected = !this.multiSlider[index].selected
    }
  }

})
</script>

<style scoped lang="scss">
@import "../../../assets/style/variables";
.filter{
  display: flex;
  flex-direction: column;
  gap: 25px;

  &-base{
    gap: 25px;
    display: flex;
    flex-direction: column;

    background-color: $one-base-darker-color;
    padding: 50px 40px 50px 40px;
  }

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

      &-mobile{
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        gap: 10px;

        text-transform: uppercase;
        color: rgb($select-color, 0.5);

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

      width: clamp(20px, 5vw, 54px);
      height: clamp(20px, 5vw, 54px);

      background-color: rgb($white-color, 0);
      color: rgb($white-color, 1);
      border: 0.5px solid $lines-color;

      &-selected{

        width: clamp(20px, 5vw, 54px);
        height: clamp(20px, 5vw, 54px);
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
.show-item-mobile{
  display: flex;
}
.unshow-item-mobile{
  display: none;
}


@media (max-width: 700px) {

  .show-item-mobile{
    display: none !important;
  }
  .unshow-item-mobile{
    display: flex !important;
  }


  .filter__header{
    min-width: 80vw;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 10px;
  }
  .filter-base{
    padding: 24px 20px 24px 20px !important;
  }
}
</style>
