<script setup>
import { ref } from "vue";
import PageItem from '@/components/PageItem'
import { useStore } from "vuex";

const store = useStore()
const pages = ref(store.getters.getPages)

</script>

<template>
  <div class="page-list">
    <h1>Список страниц: {{ pages.length }}</h1>
    <router-link to="/edit">
      <button v-if="!pages.length">
        Добавить страницу
      </button>
    </router-link>
    <div class="page-list__array">
      <page-item
        v-for="(page, index) in pages"
        :key="page.idPage"
        :page="page"
        :index="index">
      </page-item>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-list {
  &__array {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
}

</style>