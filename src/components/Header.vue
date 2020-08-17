<template>
  <div id="header" ref="header">
    <div class="container-fluid">
      <div class="row">
        <div id="header-title" class="col">
          <a id="header-title-link" :href="'/' + getLanguage" >
            <span id="header-title-text">Rettana Muon's Portofolio</span>
          </a>
        </div>
        <div id="header-languages" class="col">
          <ol>
            <li
              v-for="l in lang"
              v-bind:key="l.id"
              v-bind:name="l.name"
              v-on:click="setLanguage(l.id)">
              <router-link :to="'/' + l.id">
                <span class="header-languages-text">{{l.name}}</span>
              </router-link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      lang: this.$_lang.languages,
    };
  },
  computed: {
    headerHeight() {
      return this.$store.state.headerHeight;
    },
    getLanguage() {
      return this.$store.getters.language;
    },
  },
  methods: {
    setHeaderHeight() {
      this.$store.commit('headerHeight', this.$refs.header.clientHeight);
    },
  },
  mounted() {
    this.setHeaderHeight(this.$refs.header.clientHeight);
  },
};
</script>

<style scoped lang="stylus">
  #header
    display flex
    position fixed
    width 100%
    margin 0
    padding 3px 15px 3px 15px
    color header-main-color
    background-color header-main-background-color
    border-bottom-style solid
    border-bottom-color header-sub-background-color
    #header-title
      a
        text-decoration  none
        color header-main-color
        font-family: header-title-font
        font-size 24pt
        font-weight 900
    #header-languages
      text-align right
      li + li::before
        padding: 0 5px
        content: '/'
      ol
        display inline-flex
        margin 0
        padding 0
        list-style  none
      a
        &:hover
          color navajowhite
        color header-sub-color
        text-decoration none
        #header-languages-text
          font-family default-font-family
</style>
