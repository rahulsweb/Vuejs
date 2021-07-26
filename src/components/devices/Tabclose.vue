<template>
    <div>
        <h1>Close Tab</h1>
         <div id="Notice">
    <span title="remove this until browser tab is closed"><u>{{message}}</u>.</span>
</div>
    </div>
</template>
<script>
// import $ from "jquery";
export default {
    data() {
        return {
        message1:"Active"
        }
    },
    computed:{
        message(){
            return this.message1;
        }
    },
    methods:{
        // onRemoved(tabId, removeInfo) {
        //     browser.tabs.remove(tabId, function () {
        //         browser.tabs.query({
        //             currentWindow: true
        //         }, function (tabs) {
        //             tabs = tabs.filter(tab => tab.id != tabId);
        //             console.log(tabs);
        //         })
        //     });
        // }
    },
    created(){
   window.addEventListener('beforeunload', function (e) {
           this.message1="Browser Close Message";
           console.log("Close Tab")
            e.preventDefault();
            e.returnValue = '';
        });
    },
    destroyed(){}
}
</script>
<style lang="">
    
</style>