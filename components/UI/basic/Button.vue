<template>
  <div class="m-button normal-padding">
    <component v-if="params.icon !== null" :is="params.icon"></component>
    <div class="m-button__text">{{params.name}}</div>
  </div>
</template>1

<script lang="ts">

import Vue, {Component} from "vue";

interface ButtonInfo{
  name: String,
  icon: Component | null,
}

export default Vue.extend({
  name: "Button",

  props: {
    params: {
      required: true,
      type: Object as () => ButtonInfo,
    },
    squareStyle: {
      required: false,
      type: String
    }
  }
})
</script>

<style scoped lang="scss">
@import "assets/style/variables";

.m-button{

  background-color: rgb($accent-color, 1);
  text-transform: uppercase;
  color: $one-base-darker-color;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;

  cursor: pointer;

  &__text{
    width: 100%;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover{
    background-color: rgb($accent-color, 0.5);
  }

  &:active{
    background-color: rgb($accent-color,0.9);
  }
}
</style>
