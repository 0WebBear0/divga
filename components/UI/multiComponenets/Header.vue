<template>
  <div class="header">
    <div class="header__title">{{titleName}}</div>

    <div class="header__selection" :class="{'header__selection-show': showSwitcher}">

      <!-- switcher -->
      <Switcher
        class="header__selection-switcher"
        v-if="switchObjectProps[0].TabName === 'Не выбранно'"
        :switch-object="switchObject">
      </Switcher>
      <SwitcherTab
        class="header__selection-switcher"
        v-else
        :switch-object="switchObjectProps"
        @tabSelect="selectTab"
      >
      </SwitcherTab>

      <!-- slot -->
      <slot/>

    </div>
    <div class="splitter mt-4 mb-4" v-if="underline"></div>
  </div>
</template>

<script lang="ts">

import Vue from "vue";
import SwitcherTab from "~/components/UI/basic/SwitcherTab.vue";
import Favorites from "~/components/UI/basic/Favorites.vue";
import LinkedList from "~/components/UI/basic/LinkedList.vue";
import Switcher from "~/components/UI/basic/Switcher.vue";

export default Vue.extend({
  name: "Header",
  components: {SwitcherTab, Favorites, LinkedList, Switcher},

  data(){
    return{
      switchObject: [
        {TabSelected: false, TabName: 'На 3D плане', TabLink: ''},
        {TabSelected: false, TabName: 'По параметрам', TabLink: 'parameters'},
        {TabSelected: false, TabName: 'На плане этажа', TabLink: 'floor-plan'},
      ],
    }
  },

  props: {
    titleName: {
      required: false,
      type: String,
      default: 'Выберите аппартаменты'
    },
    switchObjectProps: {
      required: false,
      type: Array as () => Array<{TabSelected: boolean, TabName: String}>,
      default: () => [{TabSelected: true, TabName: 'Не выбранно'},],
    },
    showSwitcher: {
      required: false,
      type: Boolean,
      default: () => false
    },
    underline: {
      required: false,
      type: Boolean,
      default: () => true
    }
  },

  created() {
    for (let i = 0; i < this.switchObject.length; i++) {
      if (this.switchObject[i].TabLink === this.$route.path.split('/')[1]){
          this.switchObject[i].TabSelected = true
      }
    }
  },

  methods: {
    selectTab(index: number){
      for (let i = 0; i < this.switchObjectProps.length; i++) {
        this.switchObjectProps[i].TabSelected = false
      }
      this.switchObjectProps[index].TabSelected = true

      if (index === 0){
        this.$emit('selected', true)
      }
      else this.$emit('selected', false)
    }
  }
})
</script>

<style scoped lang="scss">

.header{
  display: flex;
  flex-direction: column;

  white-space: nowrap;
  width: 100%;

  text-transform: uppercase;


  &__title{
    font-family: 'Jost', serif;
    font-style: normal;
    font-weight: 400;
    font-size: clamp(10px, 4vw, 40px);
    line-height: clamp(20px, 4vw, 50px);
    letter-spacing: 0.05em;
    text-transform: uppercase;


    padding-bottom: clamp(1px,3vw,40px);
  }

  &__selection{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &-switcher{
      display: flex;
      flex-direction: row;
    }
  }
}

@media (max-width: 640px) {

  .header__selection{
    display: none !important;
  }
  .header__selection-show{
    display: flex !important;
  }
}

@media (max-width: 480px) {

  .header__selection{
    display: none !important;
  }
  .header__selection-show{
    display: flex !important;
  }
}
</style>
