<template>
  <div class="header">
    <div class="top-bar"></div>
    <p>Header</p>
  </div>
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
</style>
