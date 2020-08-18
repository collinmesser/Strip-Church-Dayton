<template>
  <div id="app">
    <Header />
    <Hero />
    <CallOut
      heading="heading"
      link-path="mission"
      link-text="text"
    >
      <template v-slot:img>
        <p>God delights in showing unfailing love.</p>
      </template>
      <template v-slot:text>
        <p>God delights in showing unfailing love.</p>
      </template>
    </CallOut>
    <Quote>
      <template v-slot:quote>
        <p>God delights in showing unfailing love.</p>
      </template>
      <template v-slot:author>
        <p>Micah 7:18</p>
      </template>
    </Quote>
    <Quote>
      <template v-slot:quote>
        <p>You are a precious Gem.</p>
      </template>
    </Quote>
    <Footer />
  </div>
</template>

<script>
import CallOut from "@/components/CallOut.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Quote from "@/components/Quote.vue";

export default {
  name: "App",
  components: {
    CallOut,
    Footer,
    Header,
    Hero,
    Quote,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
