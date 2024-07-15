import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const pageModules = import.meta.glob('../views/**/page.{ts,js}', {
  eager: true,
  import: 'default',
})
const compModules = import.meta.glob('../views/**/index.vue')

const routes: Readonly<RouteRecordRaw[]> = Object.entries(pageModules).map(
  ([pagePath, config]) => {
    const path = pagePath.replace('../views', '').replace('/page.ts', '') || '/'
    const name = path.split('/').filter(Boolean).join('-') || 'index'
    const compPath = pagePath.replace('page.ts', 'index.vue')
    return {
      path,
      name,
      component: compModules[compPath],
      meta: config,
    } as RouteRecordRaw
  }
)

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
