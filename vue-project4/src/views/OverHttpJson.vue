<template>
    <div>
<button @click="callData">Fetch Data</button>
<pre>     
<h1 v-if="mydata">{{ mydata }}</h1>
</pre>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mydata:null
            }
        },

        methods: {
           async callData(){
       let response =await fetch("src/assets/myData.json");
       this.mydata =await response.text();
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>