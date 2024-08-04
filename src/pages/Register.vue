<template lang="">
    <div>
   <form @submit.prevent="register" method="post" id="registerForm"> 
        <div id="Register-container">
            <label for="name">Name:</label>
            <input v-model="name" type="text" name="name" id="name">
            <label for="email">Email:</label>
            <input v-model="email" type="text" name="email" id="email">
            <label for="password">Password:</label>
            <input v-model="password" type="password" name="password" id="password"> <!-- Use type="password" for sensitive data like passwords -->
            <button type="submit">Register</button>


            
        </div>        

    </form>    </div>
</template>
<script>
import axios from 'axios';
export default {
    name:'RegisterPage',
    data() {
        return {
            name:'',
            email:'',
            password:'',
        }
    },
    methods:{
        async register(){
            try{
                const response = await axios.post('http://127.0.0.1:8000/api/register',{
                    name:this.name,
                    email:this.email,
                    password:this.password
                });
                console.log(response.data);
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('name', this.name);

            this.$router.push('/');

            }catch(error){
            console.log(error);
            }
        }
    }
}
</script>
<style scoped>
      #Register-container {
    display: flex;
    flex-direction: column; 
    justify-content: center; 
    align-items: center;  
    height: 100vh;          
    text-align: center;
}

label {
    font-weight: bold;
    font-size: 16px;     
    font-family: Arial, sans-serif; 
    margin-bottom: 5px; 
}

input {
    margin-bottom: 15px; 
    padding: 5px; 
    font-size: 14px;
    width: 500px; 
    height: 30px;
    border-radius: 5px;
    border: 1px solid black;
}

button {
    display: flex; 
    justify-content: center; 
    align-items: center;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    width: 510px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: #0000ff;
    color: white;
}

button:hover {
    background-color: black;
}

.facebookbtn {
    display: flex;
    text-decoration: none;
    justify-content: center; 
    align-items: center;
    border: 1px solid black;
    background-color: #0000ff;
    color: white;
    width: 510px;
    height: 40px;
    border-radius: 5px;
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Added transition */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Initial shadow */
    margin-top: 10px; /* Add some margin to separate from the Register button */
}

.facebookbtn:hover {
    transform: translateY(-5px); /* Lift up effect */
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); /* Shadow on hover */
}

.facebookbtn i {
    margin-right: 8px; /* Space between icon and text */
}

.icon-text {
    margin-left: 8px; /* Adjust the space between icon and text */
}


</style>