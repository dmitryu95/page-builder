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

watch(content, () => {
  emit('update:block', content, props.index)
})

</script>

<template>
  <div class="block-text">
    <div class="block-text__content">
      <input class="block-text__title"
        :style="{
          textAlign: content.titleTextAlign,
          fontSize: content.titleFontSize + 'px',
          fontStyle: content.titleFontStyle,
          color: content.titleColor,
          backgroundColor: content.titleBackgroundColor }"
        v-model="content.title"
        placeholder="Заголовок" 
      />
      <textarea
        class="block-text__text"  
        :style="{ 
          textAlign: content.textAreaTextAlign,
          fontSize: content.textFontSize + 'px',
          fontStyle: content.textFontStyle,
          color: content.textColor,
          backgroundColor: content.textBackgroundColor }"
        v-model="content.text">
      </textarea>
    </div>

    <div class="block-text__control-section">
      <!-- Стилизация блока заголовка -->
      <select v-model="content.titleTextAlign" 
        class="mr-10"
        id="titlePosition">
        <option value="left">Заголовок слева</option>
        <option value="center">Заголовок по центру</option>
        <option value="right">Заголовок справа</option>
      </select>

      <input type="number"
        id="fontSizeTitle"
        v-model="content.titleFontSize"
        class="mr-10">
      <label for="fontSizeTitle">Размер шрифта заголовка</label>

      <select v-model="content.titleFontStyle" 
        id="fontStyleTitle"
        class="mr-10">
        <option value="normal">Обычный заголовок</option>
        <option value="italic">Курсив заголовок</option>
        <option value="bold">Жирный заголовок</option>
      </select>

      <input type="color"
        id="colorTitle"
        v-model="content.titleColor"
        class="mr-10">
      <label for="colorTitle">Цвет заголовка</label>

      <input type="color"
        id="backgroundColorTitle"
        v-model="content.titleBackgroundColor"
        class="mr-10">
      <label for="colorTitle">Цвет фона заголовка</label>

      <!-- Стилизация блока текста -->
      <select v-model="content.textAreaTextAlign" 
        id="titlePosition"
        class="mr-10">
        <option value="left">Текст слева</option>
        <option value="center">Текст по центру</option>
        <option value="right">Текст справа></option>
      </select>

      <input type="number"
        id="fontSizeText"
        v-model="content.textFontSize"
        class="mr-10">
      <label for="fontSizeText">Размер шрифта текста</label>

      <select v-model="content.textFontStyle" 
        id="fontStyleText"
        class="mr-10">
        <option value="normal">Обычный текст</option>
        <option value="italic">Курсив текст</option>
        <option value="bold">Жирный текст</option>
      </select>

      <input type="color"
        id="colorText"
        v-model="content.textColor"
        class="mr-10">
      <label for="colorText">Цвет текста</label>

      <input type="color"
        id="backgroundColorText"
        v-model="content.titleBackgroundColor "
        class="mr-10">
      <label for="backgroundColorText">Цвет фона заголовка</label>

      <button class="block-text__delete"
        @click="$emit('deleteBlock:block', props.index)">
          X
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block-text {
    display: flex;
    &__content {
      display: flex;
      flex-direction: column;
      margin-top: 50px;
      width: 300px;
    }
    &__title {
        height: 30px;
    }
    &__text {
        height: 200px;
        padding: 10px;
        margin-top: 20px;
    }
    &__delete {
      margin-top: 20px;
      width: 30px;
      height: 30px;
    }
    &__control-section {
      display: flex;
      flex-direction: column;
      margin-left: 50px;
    }
}
.mr-10 {
  margin: 10px;
}

</style>