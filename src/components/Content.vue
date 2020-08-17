<template>
  <div id="content">
    <ContentNavigation></ContentNavigation>
    <div class="container-fluid">
      <div class="row">
        <div
          :id="'content-'+ page.name"
          class="content-page"
          v-for="page in text"
          v-bind:key="page.id"
          v-bind:name="page.name"
          v-bind:text="page.html"
          v-bind:style="{ paddingTop : headerHeight  + 'px'}" >
          {{page.html[lang]}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentNavigation from '@/components/Content-Navigation.vue';

export default {
  name: 'Content',
  components: { ContentNavigation },
  data() {
    return {
      text: this.$_text.Content,
    };
  },
  computed: {
    headerHeight() {
      return this.$store.getters.headerHeight;
    },
  },
};
</script>

<style scoped lang="stylus">
  #content
    display flex
    flex-direction column
    flex 1 0 auto
    padding 15px
    justify-content center
    color content-main-color
    background-color content-background-color
    font-family default-font-family, monospaced
    font-size 18pt
    .content-page
      height 100vh
      width 100%
    #content-hello
      text-align center
</style>
