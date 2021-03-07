<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.myPrint();
  },
  methods: {
    myPrint() {
      var page = window.open("chanakya.pdf");
      page.print();
    },
  },
};
</script>
<style lang="stylus" scoped></style>