<template>
  <div class="hero">
    <div class="call-out">
      Spreading the <br>
      <span class="purple-text">love</span> <br>
      of God <br>
      to the Gems <br>
      in our city
    </div>
    <router-link to="/">
        <img
          class="logo"
          src="@/assets/logo-black-color.png"
          alt="Strip Church Dayton Logo"
        />
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  //background-image: url('../assets/dayton_banner_skyline.jpg');
  background: rgb(56,183,151);
  background: linear-gradient(180deg, rgba(56,183,151,.37) 0%, rgba(44,117,138,.37) 47%, rgba(89,78,134,0.18) 91%);
  padding: 5em 0;
  width: 100%;

  img {
    width: 100%;
    max-width: 500px;

    @media only screen and (max-width: 768px) {
      margin-top: 3em;
    }
      
    }
  }


.call-out {
  color: #fff;
  font-size: 3rem;
  line-height: 1em;
  text-align: left;
}
</style>
