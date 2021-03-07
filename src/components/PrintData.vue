<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Chanakya Neeti</h5>
        <p class="card-text">Ebook For Reading</p>
        <button type="button" class="btn btn-primary" @click="myPrint">
          Print PDF On Button click
        </button>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Chanakya Neeti</h5>
        <p class="card-text">Ebook For Reading</p>
        <button type="button" class="btn btn-success" @click="redirect">
          <strong>When Page Load Print Pdf</strong>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
// import printJS from 'print-js';
export default {
  data() {
    return {};
  },

  methods: {
    myPrint() {
      var page = window.open("chanakya.pdf");
      console.log(page);
      page.print();
    },
     redirect() {
         this.$router.push({ path: "/print" });

    },
  },
};
</script>
<style lang="stylus" scoped></style>