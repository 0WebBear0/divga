<template>
  <div class="paginator-horiz">
    <div class="paginator-horiz__box">
      <div v-for="(item, index) in params">
        <div
          class="paginator-horiz__item"
          :class="{'paginator-horiz__item_selected': item.selected}"
          @click="$emit('select', index)"
        >
          {{item.name}}
        </div>
      </div>
      <IconArrowCircle class="ml-2 paginator-horiz-icon"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IconArrowCircle from "~/components/icon/IconArrowCircle.vue";

interface Paginator{
  name: String,
  selected: boolean,
}

export default Vue.extend({
  name: "PaginatorHorizontal",
  components: {IconArrowCircle},
  props: {
    params: {
      required: true,
      type: Array as () => Array<Paginator>
    }
  }
})
</script>

<style scoped lang="scss">
@import "assets/style/variables";

.paginator-horiz{

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: left;

  width: 100%;

  &__box{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    font-weight: normal;
  }

  &__item{

    border: 0.5px solid $gray;

    width: clamp(40px, 5vw, 54px);
    height: clamp(40px, 5vw, 54px);
    color: $lines-color;

    display: flex;
    align-items: center;
    justify-content: center;

    &_selected{
      background-color: $accent-color;
    }
  }
  &-icon{
    transform: rotate(90deg);
    fill: $favorites-line;

    width: 100%;

    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s ease-out;

    &:hover{
      fill: rgb($black-color,0.3);
    }
    &:active{
      fill: rgb($black-color,0.1);
    }
  }
}

</style>
