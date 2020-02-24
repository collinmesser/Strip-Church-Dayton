<template>
  <header class="header">
    <div class="top-bar">top-bar</div>
    <nav>
      <img src="" alt="">
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.top-bar {
  background: rgb(56,183,151);
  background: linear-gradient(90deg, rgba(56,183,151,1) 0%, rgba(44,117,138,1) 47%, rgba(89,78,134,1) 91%);
  height: 40px;
  width: 100%;
}

nav {
  display: flex;
  align-items: center;
  background: rgb(56,183,151);
  /* background: linear-gradient(180deg, rgba(56,183,151,1) 0%, rgba(44,117,138,1) 47%, rgba(89,78,134,0.4962184702982756) 91%); */
  height: 100px;
  width: 100%;
}

nav img {
  margin-left: 50px;
}
</style>
