<template>
    <div>
         <button type="button" @click="myPrint">
    Print PDF File On click
</button>

    </div>
</template>
<script>
// import printJS from 'print-js';
export default {
    data() {
        return {
        }
    },

methods:{

myPrint(){
  var page = window.open('chanakya.pdf');
  console.log(page);
page.print();
}
}

}
</script>
<style lang="stylus" scoped>

</style>