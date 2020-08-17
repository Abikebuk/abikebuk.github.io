<template>
  <div id="content-navigation">
    <router-link
      :to="'/' + lang + '/' +page.name"
      v-for="page of text"
      v-bind:key="page.id"
      v-bind:name="page.name"
      v-bind:html="page.html[lang]"
      replace>
      ◉
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Content-Navigation',
  data() {
    return {
      text: this.$_text.Content,
    };
  },
};
</script>

<style scoped lang="stylus">
#content-navigation
  display flex
  flex-direction column
  position fixed
  float left
  margin-left 5%
  height 100vh
</style>
