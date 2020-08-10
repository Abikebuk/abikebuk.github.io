const mixinGlobal = {
  methods: {
    getLanguage() { return this.$cookies.get('lang'); },
    setLanguage(lang) { this.$cookies.set(this.$GLOBAL.keys.language, lang); },

  },
};
module.exports = mixinGlobal;
