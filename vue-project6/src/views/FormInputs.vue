<template>
   <br>
   <h1>Registration Form</h1>
   <div ref="infoShow" id="display">...</div>
    
       
    
    <div>

       <div>{{ fname }}</div> 
       <div>{{ gender }}</div>
       <div>{{ district }}</div>
       <div>{{ language }}</div>
       <div>{{ address }}</div>

        <form @submit.prevent="FormSubmit">
            Name: <br> <input type="text" v-model="fname" name="fname"> <br>
            Gender: <br>
            Male <input type="radio" name="gender" v-model="gender" value="male">
            Female <input type="radio" name="gender" v-model="gender" value="female"> <br>
            District: <br>
            <select name="district"  v-model="district" id="">
                <option disabled selected>Select One</option>
                <option>Dhaka</option>
                <option>Sylhet</option>  
                <option>Khulna</option>  
                <option>Rangpur</option>        
            </select> <br>

            Interested Language: <br>
            <input type="checkbox" name="PHP" v-model="language" value="PHP">PHP
            <input type="checkbox" name="JavaScript"  v-model="language" value="JavaScript">JavaScript
            <input type="checkbox" name="Laravel" v-model="language" value="Laravel">Laravel
           <br>
           Address:  <br>
           <textarea name="address"  v-model="address" id=""></textarea> <br>
           <input type="submit" name="submit" value="SUBMIT">

        </form>
    </div>
</template>

<script>
    export default {

        data(){
            return{
             fname:'',
             gender:'',
             district:'',
             language:[],
             address:'',
             info:''
            }
            
        },
        methods: {
            FormSubmit(){
                this.info +="Full Name:" + this.fname + "<br/>"; 
                this.info +="Gender:" + this.gender + "<br/>";
                this.info +="District:" + this.district+ "<br/>";
                this.info +="Language:" + this.language + "<br/>";
                this.info +="Address:" + this.address + "<br/>";
                this.$refs.infoShow.innerHTML = this.info;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>