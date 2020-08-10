<template>
  <div id="footer">
    <div class="container-fluid">
      <div class="row">
        <div id="footer-content" class="col">
          STICKY FOOTER
        </div>
        <div id="footer-copyright" class="col-auto">
          Copyright © 2020 Rettana Muon.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped lang="stylus">
  #footer
    flex-shrink 0 // Sticky footer
    min-height 100px
    padding-top 8px 8px 8px 8px
    border-top-style solid
    color footer-main-color
    background-color footer-background-color
    font-family default-font-family
    .container-fluid
      height 100%
      .row
        height 100%
        flex-direction column
        #footer-content
          padding 8px 25px 3px 25px
          text-align center
        #footer-copyright
          padding 0 25px 3px 25px
          justify-content end

</style>
