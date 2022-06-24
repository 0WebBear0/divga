<template>
  <TextWithLabel :text="text" class="user-view">
    <IconViewGrid class="icon-scalable select-item"
                  :class="{ 'select-item__selected': selected }"
                  @click.native="selectedChangeGrid()"/>
    <IconViewColumn class="icon-scalable select-item"
                    :class="{ 'select-item__selected': !selected }"
                    @click.native="selectedChangeColumn()"/>
  </TextWithLabel>
</template>

<script>
import TextWithLabel from "~/components/UI/basic/TextWithLabel";
import IconViewGrid from "~/components/icon/IconViewGrid";
import IconViewColumn from "~/components/icon/IconViewColumn";

export default {
  name: "UsersView",
  components: { IconViewColumn, IconViewGrid, TextWithLabel },
  props: {
    text: {
      required: false,
      type: String,
    },
  },

  data(){
    return{
      selected: true
    }
  },

  methods:{
    selectedChangeGrid(){
      this.selected = true
      this.$emit('clicked', this.selected)
    },
    selectedChangeColumn(){
      this.selected = false
      this.$emit('clicked', this.selected)
    }
  }
}
</script>

<style scoped>
.user-view{
  display: flex;
  gap: clamp(5px, 3vw, 15px);
}
</style>
