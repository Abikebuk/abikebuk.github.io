const mixinGlobal = {
  methods: {
    getCookieLanguage() { return this.$cookies.get('lang'); },
    setLanguage(lang) {
      this.$store.commit('language', lang);
      this.$cookies.set(this.$GLOBAL.keys.language, lang);
    },
  },
  computed: {
    lang() { return this.$store.getters.language; },
  },
};
module.exports = mixinGlobal;
