<script setup>
import { watch } from "vue"

const props = defineProps({
  block: {
    type: Object,
  },
  index: {
    type: Number
  }  
})

const content = props.block.content
const emit = defineEmits(['update:block'])

const upLoadFile = (event) => {
  const file = event.target.files[0];
  if (file) {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      content.img = e.target.result;
    };
    fileReader.readAsDataURL(file);
  }
}

watch(content, () => {
  emit('update:block', content, props.index)
})

</script>

<template>
  <div class="block-image">
    <img v-if="content.img" 
      class="block-image__image"
      :src="content.img" 
      width="150"
      alt="Изображение"
      /> 
    <input type="file" 
      class="block-image__image-input"
      @change="upLoadFile" 
      accept="image/*" />
  </div>
  <div class="block-image__control-section">
    <input type="color"
      id="backgroundColor"
      v-model="content.backgroundColor">
    <label for="backgroundColor">
      Цвет блока
    </label>
    <button class="block-image__delete"
      @click="$emit('deleteBlock:block', props.index)">
      X
    </button>
  </div>
</template>

<style lang="scss" scoped>
.block-image {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    &__image-input {
        margin-top: 20px;
    }
    &__image {
        width: 150px;
    }
    &__delete {
      margin-top: 20px;
    }
}

</style>