<script setup>
import router from "@/router";
import { defineProps } from "vue";
import { useStore } from "vuex";

const store = useStore()
const props = defineProps ({
    page: Object,
    index: Number
})

const editPage = (page) => {  
    router.push({ name: 'PageEditor', params: { 
      idPage: page.idPage
    }})
}
</script>

<template>
  <div class="page-item">
    <div class="page-item__name" 
      @click="editPage(page)">
      <p>
          {{ page.namePage }}
      </p>
    </div>
    <button class="page-item__delete-item"
      type="button" 
      @click="store.commit('deletePage', props.index)"
      >
      x
    </button>
  </div>
</template>

<style lang="scss" scoped>
.page-item { 
    display: flex;
    align-items: baseline;
    &__name {
        width: 500px;
        display: flex;
        padding: 15px;
        border: 2px solid gray;
        border-radius: 12px;
        height: 10px;
        text-align: center;
        justify-content: left;
        align-items: center;
        margin-top: 10px;
    }
    &__delete-item {
        background-color: #f29696;
        margin-left: 20px;
        height: 43px;
        width: 43px;
        font-size: 20px;
        border-radius: 8px;
        cursor: pointer;
    } 
}
</style>