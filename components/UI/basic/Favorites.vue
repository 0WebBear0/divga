<template>
  <div class="favorite-b normal-padding text-select" :class="{'favorite-b__empty': favorite.count === 0}">
    <IconHearth class="icon-scalable favorite-b-icon"/>
    <div class="favorite-b-text">Избранное {{favorite.count === 0 ? '' : `(${favorite.count})`}}</div>
  </div>
</template>

<script lang="ts">
import IconHearth from "~/components/icon/IconHearth.vue";
import Vue from "vue";

interface Favorite{
  count: Number,
}

export default Vue.extend({
  name: "Favorites",
  components: {IconHearth},
  props: {
    favorite: {
      required: false,
      default: 0,
      type: Object as () => Favorite
    }
  }
})
</script>

<style scoped lang="scss">
@import "../../../assets/style/variables";

.favorite-b{
  background: $one-base-darker-color;
  border-radius: 100px;
  white-space: nowrap;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: clamp(1px, 1vw, 8px);

  width: max-content;
  min-width: 95px;
  padding-left: 20px;
  padding-right: 20px;
  &-text{
    display: flex;
    align-items: center;
  }

  &-icon{
    display: flex;
    align-items: center;
    min-width: 20px;
  }

  &__empty{
    fill: rgba($white-color, 0.3);
  }

  &:active{
    opacity: 0.6;
  }
}
</style>
