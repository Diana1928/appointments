<template>
    <div class="container col-xxl-8 px-4 py-5">
        <div class="row">
            <div class="form-signin">
                <form @submit.prevent="onFormSubmit">
                    <h1 class="logo-login mb-4">Appointfy</h1>
                    <h5 class="mb-3 fw-normal mb-5">Please enter your credential to log in</h5>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control form-control-lg" id="floatingInput" placeholder="name@example.com" v-model="email">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control form-control-lg" id="floatingPassword" placeholder="Password" v-model="password">
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button class="w-100 btn btn-lg btn-dark" type="submit">Log in</button>
                    <p class="pb-lg-2 py-5">Don't have an account? <router-link :to="{name: 'Register'}" style="color: #393f81;">Sign Up here</router-link></p>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue';
import firebase from 'firebase/app';

export default {
    name: 'Login',
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        onFormSubmit() {
      firebase.auth()
      .signInWithEmailAndPassword(this.user.email, this.user.password).then(() => {
        this.$router.push('/appointments-list')
       })
      .catch((err) => {
         console.log(err);
      });
    }
    }
};
</script>


<style>
.logo-login {
  font-family: 'Satisfy', cursive;
  font-size: 60px;
}
</style>