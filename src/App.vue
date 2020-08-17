<template>
  <div id="app" ref="app">
      <Header></Header>
      <!--suppress HtmlDeprecatedTag -->
      <Content></Content>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Footer, Content, Header },

  computed: {
    appHeight() {
      return this.$store.state.appHeight;
    },
  },
  methods: {
    setAppHeight() {
      this.$store.commit('appHeight', this.$refs.app.clientHeight);
    },
    setLanguageOnStartup() {
      const langKey = this.$GLOBAL.keys.language;
      const defaultLang = this.$GLOBAL.vars.defaultLanguage;
      if (!this.$cookies.isKey(langKey)) {
        this.setLanguage(defaultLang);
      } else {
        this.$store.commit('language', this.getCookieLanguage());
      }
    },
  },
  created() {
    this.setLanguageOnStartup();
  },
  mounted() {
    this.setAppHeight();
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
