<template>
  <div>
    <div class="card">
      <div class="card-header">After Page load</div>
      <div class="card-body">
        <h5 class="card-title">This is after page load print pdf page</h5>
        <p class="card-text">
          Print chanakya neeti pdf.
        </p>
        <button  class="btn btn-primary" @click="redirect">Back</button>
      </div>
    </div>
  </div>
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
    redirect() {
      this.$router.push({ path: "/menu" });
    },
  },
};
</script>
<style lang="stylus" scoped></style>