<template>
  <div class="multi-slider">
    <div class="multi-slider__input-box">

      <b-input-group prepend="От:" class="multi-slider__input-box-item">
        <b-input
          v-model="slider.minNow"
          type="Number"
          @change="showPrice()"
        />
      </b-input-group>

      <b-input-group prepend="До:" class="multi-slider__input-box-item">
        <b-input
          v-model="slider.maxNow"
          type="Number"
          @change="showPrice()"
        />
      </b-input-group>
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
  min: Number,
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
      required: true,
      type: Object as () => Slider
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
    baseValidate(){
      if (this.slider.minNow < this.slider.min) this.slider.minNow = this.slider.min

      if (this.slider.maxNow > this.slider.max) this.slider.maxNow = this.slider.max

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
  margin: auto;
  text-align: center;
  position: relative;
  height: 6em;

  &__input-box{
    display: flex;
    flex-direction: row;
    gap: 10px;

    &-item{
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
</style>
