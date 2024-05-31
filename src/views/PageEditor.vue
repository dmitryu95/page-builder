<script setup>
import { reactive, onMounted, defineProps } from "vue";
import { useStore } from "vuex";
import BlockText from "@/components/BlockText.vue";
import BlockImage from "@/components/BlockImage.vue";
import BlockTextImage from "@/components/BlockTextImage.vue";
import router from "@/router";

const props = defineProps ({
  idPage: String
})

const store = useStore()

const page = reactive({
  idPage: '',
  namePage: 'Имя новой страницы',
  blocks: []
})

const addBlock = (type) => {
  page.blocks.push({
    idBlock: new Date().getTime() + 'block',
    content: {},
    type,
  });
};

const getBlockType = (type) => {
  if (type === "textImg") {
    return BlockTextImage;
  } else if (type === "text") {
    return BlockText;
  } else if (type === "img") {
    return BlockImage;
  } else return null;
};

const updateBlock = (content, index) => {
  page.blocks[index].content = content
}

const deleteBlock = (index) => {
  page.blocks.splice(index, 1)
}

const savePage = () => {
  if(page.idPage === '') {
    store.commit('addPage', {
      idPage: new Date().getTime().toString(),
      namePage: page.namePage,
      blocks: page.blocks
    })
  } else {
    store.commit('updatePage', {
      idPage: page.idPage,
      namePage: page.namePage,
      blocks: page.blocks
    })
  }
  
  router.push({ name: 'PageList'})
};

onMounted( () => {
  if(props.idPage) {
    page.idPage = props.idPage
    Object.assign(page, store.getters.getPageById(page.idPage))
  }
})
</script>

<template>
  <div class="page-editor__container">
    <div class="page-editor__new-page">
      <h1 v-if='!page.idPage'>
        Создать новую страницу
      </h1>
      <h1 v-else>
        Редактировать
      </h1>
      <input class="page-editor__name-page" 
        v-model="page.namePage" 
      />
      <div class="page-editor__btns-block">
        <button type="button" 
          @click="addBlock('textImg')">
          Блок текст + картинка
        </button>
        <button type="button" 
          @click="addBlock('text')">
          Блок текст
        </button>
        <button type="button" 
          @click="addBlock('img')">
          Блок картинка
        </button>
      </div>
      <button class="page-editor__add-page"
        @click="savePage">
        СОХРАНИТЬ СТРАНИЦУ
      </button>
      <div v-if='page.blocks' 
        class="page-editor__blocks-list">
        <div class="page-editor__block"
          :style="{backgroundColor : block.content.backgroundColor}"
          v-for="(block, index) in page.blocks"
          :key="block.idPage"
        >
          <component 
            :is="getBlockType(block.type)" 
            :block="block"
            :index="index"
            @update:block="updateBlock"
            @deleteBlock:block="deleteBlock"> 
          </component>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-editor {
  &__block {
    border: 2px solid grey;
    border-radius: 12px;
    padding: 10px;
    margin: 10px;
  }
  &__new-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__name-page {
    width: 400px;
    resize: vertical;
    padding: 10px;
    font-size: 16px;
    border-radius: 8px;
    margin-top: 20px;
    border: 2px solid grey;
  }
  &__add-page {
    margin-top: 20px;
    width: 180px;
  }
  &__btns-block {
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin-top: 20px;
  }
}
</style>
