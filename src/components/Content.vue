<template>
  <div id="content">
    <div class="container-fluid">
      <div class="row">
          ?
      </div>
    </div>
  </div>

</template>

<script>
import { digitalize } from '@abikebuk/digitalization';

export default {
  name: 'Content',
  data() {
    return {
      text: this.$_text.Content,
      lang: this.getLanguage(),
    };
  },
  mounted() {
    digitalize(document.getElementById('content'), this.text.hello[this.lang], 20, 4, 'linear_full', false, '', ' ');
  },
};
</script>

<style scoped lang="stylus">
  #content
    display flex
    flex 1 0 auto
    padding 15px
    justify-content center
    background-color content-background-color
    font-family default-font-family, monospaced
    font-size 18pt
</style>
