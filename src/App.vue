<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const sortedRoutes = computed(() =>
  Array.from(router.options.routes).sort(
    (a, b) => (a.meta?.menuOrder as number) - (b.meta?.menuOrder as number)
  )
)
</script>

<template>
  <div class="container">
    <h1 class="title">Vue Dynamic Router Config</h1>
    <ol class="navbar">
      <RouterLink v-for="link of sortedRoutes" :to="link.path">
        {{ link.meta?.title }}
      </RouterLink>
    </ol>
    <RouterView />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body,
html {
  width: 100%;
  height: 100%;
}
.container {
  width: 100dvw;
  height: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 128px;
  row-gap: 24px;
}

.navbar {
  display: flex;
  gap: 16px;
}
</style>
