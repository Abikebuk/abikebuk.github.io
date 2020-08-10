<template>
  <div id="app">
      <Header></Header>
      <!--suppress HtmlDeprecatedTag -->
      <Content></Content>
      <Footer></Footer>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Footer, Content, Header },
  created() {
    const langKey = this.$GLOBAL.keys.language;
    const defaultLang = this.$GLOBAL.vars.default_language;
    if (!this.$cookies.isKey(langKey)) {
      this.setLanguage(defaultLang);
    }
  },
};
</script>

<style lang="stylus">
#app
  height 100%
  margin 0
  display flex
  flex-direction column
</style>
