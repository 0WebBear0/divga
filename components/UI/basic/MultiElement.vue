<template>
  <div class="multi-element">
    <div v-for="item in selectors">
      <div class="multi-element__item">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface MultiSelect{
  name: String,
}

export default Vue.extend({
  name: "MultiElement",

  props: {
    selectors: {
      required: false,
      type: Array as () => Array<MultiSelect>,
    }
  }
})
</script>

<style scoped lang="scss">
@import "assets/style/variables";

.multi-element{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;

  &__item{
    border: 1px solid #7592A7;
    border-radius: 100px;
    padding: 4px 14px;

    cursor: pointer;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: all 0.25s ease-out;

    &:hover{
      opacity: 0.8;
    }

  }
}
</style>
