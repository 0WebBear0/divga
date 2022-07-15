<template>
  <div class="paginator-vert">
    <div class="paginator-vert__box">
      <div v-for="(item, index) in params">
        <div
          class="paginator-vert__item"
          :class="{'paginator-vert__item_selected': item.selected}"
          @click="$emit('select', index)"
        >
          {{item.name}}
        </div>
      </div>
      <IconArrowCircle class="paginator-vert-icon"/>
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
  name: "PaginatorVertical",
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

.paginator-vert{

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;

  width: 100%;

  &__box{
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: normal;
  }

  &__item{

    border: 0.5px solid $gray;

    width: clamp(20px, 5vw, 54px);
    height: clamp(20px, 5vw, 54px);
    color: $lines-color;

    display: flex;
    align-items: center;
    justify-content: center;

    &_selected{
      background-color: $accent-color;
    }
  }
  &-icon{
    transform: rotate(180deg);
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
