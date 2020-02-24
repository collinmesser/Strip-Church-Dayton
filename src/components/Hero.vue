<template>
  <div class="hero">
    <div class="call-out">
      Spreading the <br>
      love <br>
      of God <br>
      to the Gems <br>
      in our city
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped>
.hero {
  background: rgb(56,183,151);
  background: linear-gradient(180deg, rgba(56,183,151,1) 0%, rgba(44,117,138,1) 47%, rgba(89,78,134,0.4962184702982756) 91%);
  height: 700px; 
  width: 100%;
}

.call-out {
  font-size: 83px;
  height: 100%;
  margin-left: 50px;
  text-align: left;
  width: 100%;
}
</style>
