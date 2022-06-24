<template>
  <div class="switcher">
    <div v-for="(tabs, index) in switchObject" class="switcher-box">
      <div
        class="normal-padding switcher__item text-select"
        :class="{'switcher__item-selected': tabs.TabSelected}"
        @click="$emit('tabSelect', index)"
      >
        {{ tabs.TabName }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface Panels {
  TabSelected: boolean | null
  TabName: String
}

export default Vue.extend({
  name: "SwitcherTab",

  props: {
    switchObject: {
      required: true,
      type: Array as () => Array<Panels>
    }
  },


})
</script>

<style scoped lang="scss">
@import "../../../assets/style/variables";

.switcher {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border: 1px solid $select-color;
  border-radius: 100px;

  width: -moz-max-content;
  width: max-content;

  &-box{
    display: flex;
    justify-content: space-between;
  }

  &__item {

    color: $select-color;

    padding-left: clamp(10px, 1.5vw, 30px);
    padding-right: clamp(10px, 1.5vw, 30px);
    gap: 0;
    left: 0;
    transition: left 5s cubic-bezier(0, 0, 1, 1);

    &-selected {
      display: flex;
      color: $one-base-color;
      margin-top: -0.5px;
      margin-right: -1px;
      border: 1px solid $select-color;
      background-color: $select-color;
      border-radius: 100px;
    }
  }
}
</style>
