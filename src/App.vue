<template>
  <div class="container">
    <h1 class="title">Vue Dynamic Config</h1>
    <ol class="navbar">
      <RouterLink to="/">首页</RouterLink>
      <RouterLink to="/about">关于</RouterLink>
      <RouterLink to="/products">产品</RouterLink>
      <RouterLink to="/news">新闻</RouterLink>
    </ol>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style>
.container {
  width: fit-content;
  margin: 0 auto;
}

.container .title {
  margin-bottom: 16px;
}

.container .navbar {
  display: flex;
  gap: 24px;
}

</style>
