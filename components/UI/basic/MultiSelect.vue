<template>
 <div class="multi-select">
    <div
      v-for="(item, index) in selectors"
    >
      <div
        class="multi-select__item"
        :class="{'multi-select__item-selected': item.selected}"
        @click="$emit('select', index)"
      >
        {{item.name}}
      </div>
    </div>
 </div>
</template>

<script lang="ts">
import Vue from "vue";

interface MultiSelect{
  name: String,
  selected: Boolean,
}

export default Vue.extend({
  name: "MultiSelect",

  props: {
    selectors: {
      required: false,
      type: Array as () => Array<MultiSelect>,
      default: [{name: 'Нет значений', selected: true}]
    }
  }
})
</script>

<style scoped lang="scss">
@import "assets/style/variables";

.multi-select{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  text-transform: uppercase;

  &__item{
    border: 1px solid $lines-color;
    border-radius: 100px;
    padding: 4px 14px;

    cursor: pointer;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &-selected{
      background-color: $select-color;
      border: 1px solid $select-color;
      color: $one-base-color;
    }

    &:hover{
      background-color: rgb($accent-color, 0.7);
      border: 1px solid $lines-color;
      color: $white-color;
    }

    &:active{
      opacity: 0.7;
    }
  }
}
</style>
