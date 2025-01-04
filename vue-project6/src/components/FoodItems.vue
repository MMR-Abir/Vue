<template>
    <div v-on:click="countClick">
<!-- <h1>{{ name }}</h1>
<h3>{{ message }}</h3>
<p>{{ counter }}</p> -->
<h3>{{ foodName }}</h3>
<p>{{ foodDesc }}</p>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:"Apple",
                message:"I like Apple",
                counter:0
            }
        },
        methods: {
            countClick(){
                this.counter++
            }
        },

        props:[
            'foodName',
            'foodDesc'
        ]
    }
</script>

<style lang="scss" scoped>

</style>