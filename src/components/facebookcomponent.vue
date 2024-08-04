<template>
  <div>
    <HFaceBookLogin
      v-slot="fbLogin"
      app-id="995572175612610"
      @onSuccess="onSuccess"
      @onFailure="onFailure"
      scope="email,public_profile"
      fields="id,name,email,first_name,last_name,birthday"
    >
      <span @click="fbLogin.initFBLogin" class="fb-button">Login with Facebook</span>
    </HFaceBookLogin>
  </div>
</template>

<script>
import { HFaceBookLogin } from '@healerlab/vue3-facebook-login';
import axios from 'axios';
export default {
  name: 'FacebookAuthenticationButton',
  components: {
    HFaceBookLogin
  },
  methods: {
    async login(accessToken,name) {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/facebook', {
              accessToken : accessToken
            });

            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('name', name);



            this.$router.push('/');
        } catch (error) {
            console.error(error);
            alert('Login failed');
        }
    },
    onSuccess(response) {
      console.log(response.authInfo.name)
      const accessToken= response.authResponse.accessToken
      const name=response.authInfo.name
      this.login(accessToken,name);
      this.$router.push('/');
    },
    onFailure(error) {
      console.log('Failure: Authentication failed', error);
    }
  }
};
</script>

<style>
.fb-button {
  cursor: pointer;
  padding: 10px 20px; /* Adding some padding for better button appearance */
  background-color: #1877f2; /* Facebook blue */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width: 470px;
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s;
margin-top: 10px;}

.fb-button:hover {
  background-color: black; /* Darker blue on hover */
}
</style>
