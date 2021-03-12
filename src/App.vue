<template>
  <main id="app">
    <Header />
    <Hero />
    <CallOut
      heading="Gem Team"
      imageSide="right"
      link-path="team"
      link-text="Get to know our team"
    >
      <template v-slot:img>
        <img src="./assets/group-truck.jpg" alt="Team">
      </template>
      <template v-slot:text>
        <p>We are commited to bringing love and joy to the women and men in the adult entertainment industry.</p>
      </template>
    </CallOut>
    <Quote>
      <template v-slot:quote>
        <p>God <span class="italic-text">delights</span> in showing unfailing <span class="purple-text">love</span>.</p>
      </template>
      <template v-slot:author>
        <p class="author">Micah 7:18</p>
      </template>
    </Quote>
    <CallOut
      heading="Outreach"
      imageSide="left"
      link-path="outreach"
      link-text="About our outreach"
    >
      <template v-slot:img>
        <img src="./assets/group-packing.jpg" alt="Team">
      </template>
      <template v-slot:text>
        <p>Currently, we are serving at Cheeks Gentlemen’s Cluband Diamond’s Caberet.</p>
      </template>
    </CallOut>
    <CallOut
      heading="Our Mission"
      imageSide="right"
      link-path="mission"
      link-text="About our mission"
    >
      <template v-slot:img>
        <img src="./assets/group-walking.jpg" alt="Team">
      </template>
      <template v-slot:text>
        <p>Our mission is all about spreading the love of Godto the Gems in the City of Dayton.</p>
      </template>
    </CallOut>
    <Quote>
      <template v-slot:quote>
        <p>YOU are a <span class="italic-text">precious</span> <span class="purple-text">Gem</span>.</p>
      </template>
    </Quote>
    <CallOut
      heading="How to support"
      imageSide="left"
    >
      <template v-slot:img>
        <img src="./assets/packages.jpg" alt="Team">
      </template>
      <template v-slot:text>
        <p>There are many ways you can support Strip Church Dayton including sponsoring an outreach night or prayer. <strong>For financial support, visit the Focused Ministries donation page and select "Strip Church Dayton"</strong></p>
        <p class="purple-text"><a href="https://pushpay.com/g/focusedmin?src=hpp" target="_blank">Use push pay to make a donation &#8594;</a></p>
      </template>
    </CallOut>
    <Footer />
  </main>
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
  font-size: 18px;
  margin: 0;
}

#app {
  font-family: adriane, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.green-text {
  color: #38B697;
}

.italic-text {
  font-style: italic;
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

.purple-text {
  color: #594E86;
  
  a {
    color: #594E86;
  }
}
</style>
