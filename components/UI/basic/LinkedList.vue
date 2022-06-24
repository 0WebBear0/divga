<template>
  <div>
    <div class="linked-list" >
      <div class="linked-list-box">{{info}}</div>
      <div v-for="tabs in linkedObject" class="linked-list-box">
        <nuxt-link
          :to="`/${tabs.ItemLink}`"
          class="linked-list__item text-select normal-padding"
          :class="{'linked-list__item-selected': tabs.ItemSelected}"
          @click="$emit('itemSelect', tabs.ItemName)"
        >
          {{ tabs.ItemName }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface Panels {
  ItemSelected: boolean | null
  ItemName: String
  ItemLink: String
}

export default Vue.extend({
  name: "LinkedList",

  props: {
    linkedObject: {
      required: true,
      type: Array as () => Array<Panels>
    },
    info:{
      required: true,
      type: String
    }
  }
})
</script>

<style scoped lang="scss">
@import "../../../assets/style/variables";

.linked-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  width: 100%;

  &-box{
    display: flex;
    align-items: center;
    width: 100%;
    color: rgba($white-color, 0.5);
    text-transform: uppercase;
  }

  &__item {

    color: rgba($white-color, 0.5);

    &-selected {
      color: $white-color;
      border-radius: 100px;
    }
  }
}
</style>
