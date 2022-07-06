<template>
  <div class="multi-slider">
    <div class="multi-slider__input-box">

      <div class="multi-slider__input-box_item">
        <p class="multi-slider__input-box_item-text">от</p>
        <input
          class="multi-slider__input-box_item-input"
          v-model="slider.minNow"
          type="number"
          @change="showPrice()"
        >
      </div>

      <div class="multi-slider__input-box_item">
        <p class="multi-slider__input-box_item-text">до</p>
        <input
          class="multi-slider__input-box_item-input"
          v-model="slider.maxNow"
          type="number"
          @change="showPrice()"
        >
      </div>
    </div>
    <div class="multi-slider__input-slider">
      <input
        type="range"
        :min="slider.min"
        :max="slider.max"
        :step="slider.step"
        v-model="slider.minNow"

        @change="baseValidateSlider()"
      />
      <input
        type="range"
        :min="slider.min"
        :max="slider.max"
        :step="slider.step"
        v-model="slider.maxNow"

        @change="baseValidateSlider()"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface Slider{
  min: Number | undefined,
  max: Number,
  step: Number,

  minNow: Number,
  maxNow: Number,

  helperText: String
}

export default Vue.extend({
  name: "MultiSlider",

  props: {
    slider:{
      required: false,
      type: Object as () => Slider,
      default: () => ({
        min: 0,
        max: 100,
        step: 1,

        minNow: 12,
        maxNow: 77,

        helperText: 'Empty'
      })
    }
  },

  data(){
    return{
      showMin: 0,
      showMax: 0,
    }
  },

  methods: {
    baseValidateSlider(){
      if (this.slider.maxNow < this.slider.minNow) {

        const helper = this.slider.maxNow
        this.slider.maxNow = this.slider.minNow
        this.slider.minNow = helper

      }
      this.showPrice()
    },

    showPrice(){
      // this.showMin = this.slider.minNow.toString() + this.slider.helperText
      // this.showMax = this.slider.maxNow.toString() + this.slider.helperText
    }
  },

  created() {
    if (this.slider.helperText === undefined || this.slider.helperText === null){
      this.slider.helperText = ''
    }
    this.showPrice()
  }
})
</script>

<style scoped lang="scss">
@import "assets/style/variables";
.multi-slider {
  width: 100%;
  text-align: center;
  position: relative;
  height: 6em;

  &__input-box{
    display: flex;
    flex-direction: row;
    width: 100%;
    &_item{

      display: flex;
      width: 100%;
      flex-direction: row;

      &-text{
        position: relative;
        top: 18%;
        left: 15%;
        cursor: pointer;

        font-size: 14px;
        color: rgb($white-color, 0.5);
      }
      &-input{
        margin-left: -11%;
        width: 100%;
        padding-left: 33%;
        background-color: rgb($white-color, 0);
        color: rgb($white-color, 1);

        border-color: $lines-color;
        border-style: solid;
        border-width: 0.5px;
      }
    }
  }
}

.multi-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;

  border-radius: 8px;
  height: 5px;
  background: $white-color;
}

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  //background: $lines-color;
}

input[type=range]:focus::-ms-fill-lower {
  background: $accent-color;
}

input[type=range]:focus::-ms-fill-upper {
  background: $accent-color;
}

input[type=range]::-webkit-slider-runnable-track {
  height: 2px;
  cursor: pointer;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  border: 5px solid $white-color;
  height: 16px;
  width: 16px;
  border-radius: 25px;
  background: $one-base-darker-color;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -6px;

  &:active{
    margin-top: -9px;
    height: 22px;
    width: 22px;
    border: 7px solid $white-color;
  }
}
input::-webkit-slider-thumb{
  background-color: $accent-color;
}


//unshow arrow on number field
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}


//focus on input
[type="number"]:focus {
  outline: none; /* Убираем контур */
  border-color: #BAE0FD; /* Синяя рамка */
}
</style>
