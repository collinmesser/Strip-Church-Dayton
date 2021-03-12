<template>
  <div class="call-out">
    <slot name="img" v-if="imageSide == 'left'"/>
    <div class="text-container">
      <div class="gradient-bar"></div>
      <h2>{{ heading }}</h2>
      <slot name="text" />
      <router-link :to="linkPath" class="purple-text" v-if="linkText">
        {{ linkText }} &#8594;
      </router-link>
    </div>
    <slot name="img" v-if="imageSide == 'right'"/>
  </div>
</template>

<script>
export default {
  name: "CallOut",
  props: {
    heading: {
      type: String,
      default: "Heading Missing",
      required: true,
    },
    imageSide: {
      type: String,
      default: "right",
      required: true,
    },
    linkPath: {
      type: String,
      default: "Link Path Missing",
      required: false,
    },
    linkText: {
      type: String,
      default: "",
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.call-out {
  background: #fff;
  color: #000;
  display: flex;
  margin: 6em 0;

  .gradient-bar {
    background: linear-gradient(90deg, rgba(56,183,151,1) 0%, rgba(44,117,138,1) 47%, rgba(89,78,134,1) 91%);
    height: 10px;
    width: 85px;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6em 4em;
    text-align: left;
  }
}
</style>
