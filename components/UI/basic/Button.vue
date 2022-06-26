<template>
  <div class="m-button" :class="{'m-button__empty': emptyInside}">
    <component v-if="params.icon !== null" :is="params.icon"></component>
    <div class="m-button__text" v-if="params.name !== null">{{params.name}}</div>
  </div>
</template>

<script lang="ts">

import Vue, {Component} from "vue";

interface ButtonInfo{
  name: String | null,
  icon: Component | null,
}

export default Vue.extend({
  name: "Button",

  props: {
    params: {
      required: true,
      type: Object as () => ButtonInfo,
    },
    emptyInside:{
      required: false,
      type: Boolean,
      default: () => false
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

  padding: clamp(15px,2vw,20px);

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;

  cursor: pointer;

  &__empty{
    background-color: rgb($accent-color, 0);
    border: 1px solid $gray;
    color: $white-color;

    &:hover{
      background-color: rgb($gray, 0.5) !important;
    }

    &:active{
      background-color: rgb($gray, 0.9) !important;
    }
  }

  &__text{
    width: 100%;
    font-weight: 500;
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
