<script setup>

</script>

<template>
  
    <h1>Welcome Home</h1>
    <food-item food-name="Moghlai" food-desc="BhajaPora"/>
    <food-item food-name="Puri" food-desc="Oil Machine"/>
    <food-item food-name="Pizza" food-desc="Yoo"/> 
<hr>
    <product-item product-name="Shirt" product-desc="Cotton Used" v-bind:is-favourite="true"/>
    <product-item product-name="Pant" product-desc="Cotton Used" v-bind:is-favourite="false"/>
    <product-item product-name="Scaff" product-desc="Cotton Used" v-bind:is-favourite="true"/>
  
</template>

<style>
  #app > div {
        border: dashed black 1px;
        display: inline-block;
        margin: 10px;
        padding: 10px;
        background-color: lightgreen;
    }

    #app > div:hover {
  cursor: pointer;
}
</style> 