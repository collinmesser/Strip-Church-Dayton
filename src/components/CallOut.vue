<template>
  <div class="call-out">
    <h2>{{ heading }}</h2>
    <slot name="img" />
    <slot name="text" />
    <router-link :to="link-path">
      {{ link-text }} &#8594;
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CallOut',
  prop: {
    heading: {
      type:  String,
      default: "Heading Missing",
      required: true,
    },
    linkPath: {
      type:  String,
      default: "Link Path Missing",
      required: true,
    },
    linkText: {
      type:  String,
      default: "Link Text Missing",
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
