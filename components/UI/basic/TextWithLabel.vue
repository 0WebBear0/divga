<template>
  <div class="text-with-label">
    <div
      :id="elementId +'__'+ itemId"
      class="text-with-label__text">
      {{text}}
    </div>
    <!-- Попап с позиционированием -->
    <div v-show="popupShow" :id="popupId +'__'+ itemId" class="text-with-label__popup">
      <div>
        <div v-if="itemId !== undefined || null" class="text-with-label__popup-item_triangle"/>
        <div
          class="text-with-label__popup-item text-select "
          v-for="item in popupItem"
        >
          <div>
            <component :is="item.icon"/>
          </div>
          <div>
            {{item.name}}
          </div>
        </div>
      </div>
    </div>

    <div
      class="text-with-label__text-body text-select"
      v-for="texts in textBody"
      @click="openClosePopup()"
    >
      {{texts}}
    </div>
    <slot/>
  </div>
</template>

<script lang="ts">

import Vue, {Component} from "vue";
import IconHearth from "~/components/icon/IconHearth.vue";


interface BoxItem {
  icon: Component,
  name: String
}


export default Vue.extend ({
  name: "TextWithLabel",

  components: {IconHearth},

  props:{
    text:{
      required: false,
      type: String
    },
    textBody:{
      required: false,
      type: Array as () => Array<String>
    },
    popupItem:{
      required: false,
      type: Array as () => Array<BoxItem>
    },
    itemId: {
      required: false,
      type: String
    }
  },

  data(){
    return{
      elementId: 'text-label-id',
      popupId: 'popup-id',
      popupShow: false,
    }
  },

  methods:{

    //логика с работой над позиционированием элемента нужно вынести в миксины
    getElementPosition() {
      let positionElement = document.getElementById(`${this.elementId +'__'+ this.itemId}`)?.getBoundingClientRect()

      let popup =  document.getElementById(`${this.popupId +'__'+ this.itemId}`);

      popup!.style!.top = `${positionElement!.top + 20}px` ?? ''
      popup!.style!.left = `${positionElement!.left + positionElement!.width/2 + 20}px` ?? ''

    },

    openClosePopup(){
      this.popupShow = !this.popupShow

      this.getElementPosition()
    }
  },


  beforeMount() {
    if (this.popupShow){
      this.getElementPosition()
    }
  },

})
</script>

<style scoped lang="scss">
@import "assets/style/variables";

.text-with-label{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;

  width: 100%;

  &__text {
    color: rgba($white-color, 0.5);
    text-transform: uppercase;

    &-body{
      color: $white-color;
      width: max-content;
      text-transform: uppercase;
      cursor: pointer;
    }
  }

  &__popup{

    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    top: 0;
    margin-left: -80px;

    display: flex;
    flex-direction: column;

    &-item{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      flex: 1;

      padding: clamp(2px, 1vw, 8px) clamp(4px, 3vw, 16px);
      gap: clamp(1px, 1vw, 10px);

      background: $one-base-darker-color;
      z-index: 1;

      &_triangle{
        position: relative;
        background: $one-base-darker-color;
        border-radius: 1px;
        margin-bottom: -20px;
        margin-left: 40px;
        width: 30px;
        height: 30px;
        transform: rotate(45deg) scaleZ(-1);
        z-index: -1;
      }

      &:active{
        color: rgb($white-color, 0.5) !important;
        fill: rgb($white-color, 0.5) !important;
        opacity: 1;
      }
    }
  }
}
</style>
