<template>
    <div>
<ul>
<todo-item v-for="x in contents" :key="x" :todo-name="x"/>
</ul>

<input type="text" v-model="newContent" v-on:keydown.enter="addContent" >
<button @click="addContent">Add</button>
    </div>
</template>



<script>
    export default {
        data() {
            return {
                contents:[
                    'item 1',
                    'item 2',
                    'item 3',
                    'item 4',
                    'item 5',
                ],

                newContent:''
            }
        },

        methods: {
            addContent(){
                this.contents.push(this.newContent),
                this.newContent=''
            }
        },
    }
</script>

<style>

</style>