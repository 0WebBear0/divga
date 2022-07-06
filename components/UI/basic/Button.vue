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

  background-color: $accent-color;
  text-transform: uppercase;
  color: $one-base-darker-color;

  padding: clamp(15px,2vw,20px);

  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  width: max-content;

  cursor: pointer;

  &__empty{
    background-color: rgb($accent-color, 0);
    border: 1px solid $gray;
    color: $white-color;

    &:hover{
      background-color: $pink-dark !important;
      opacity: 1;
    }

    &:active{
      background-color: $accent-color !important;
      opacity: 1;
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
    background-color: $pink-dark;
    opacity: 1;
  }

  &:active{
    background-color: $accent-color;
    opacity: 1;
  }
}
</style>
