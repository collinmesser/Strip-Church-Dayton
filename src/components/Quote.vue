<template>
  <div class="quote">
    <slot name="quote"/>
    <slot name="author"/>
  </div>
</template>

<script>
export default {
  name: 'Quote',
}
</script>

<style lang="scss" scoped>

.quote {
  display: block;
  flex-wrap: wrap;
  font-size: 3.5em;
  padding: 0 2em;
  text-align: center;

  .author {
    text-align: right;
  }
}

</style>
