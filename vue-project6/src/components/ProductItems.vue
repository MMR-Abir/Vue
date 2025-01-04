<template>
    <div class="box">
        <h3>{{ productName }}</h3>
        <img src="../favourite.jpeg"  alt="" v-show="isFavourite">
        <p>{{ productDesc }}</p>

    </div>
</template>

<script>
    export default {
        props:[
            'productName','productDesc','isFavourite'
        ]
    }
</script>

<style>
.box{
    height:150px;
    width:100px;
    border:1px solid red;
    float: left;
    }

    img {
    height: 1.5em;
    float: right;
  }

</style>