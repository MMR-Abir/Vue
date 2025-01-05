<template>
    <div>
        <h1 ref="h1" ></h1>
        <button @click="showData">Click Here</button>
    </div>
        <hr>
    <div>

        <p ref="msg">Today is Sunday</p>
        <button @click="copyPaste">Click Here</button>
        <h1 ref="umsg">...</h1>
        
    </div>

    <form action="">
<input type="text" name="fullname" ref="fullname" @input="inputShow"  id="">
<h1 ref="nameShow"></h1>

    </form>
</template>

<script>
    export default {
        methods: {
             showData(){
                this.$refs.h1.innerHTML = "Hello Fokkinni !";
             },
        

        copyPaste(){
            this.$refs.umsg.innerHTML = this.$refs.msg.innerHTML;
        },


        inputShow(){
            this.$refs.nameShow.innerHTML = this.$refs.fullname.value;
        },
    },
    }
</script>

<style>

</style>