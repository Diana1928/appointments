<template>
    <div class="container col-xxl-8 px-4 py-5">
        <div class="row">
            <div class="form-signin">
                <form @submit.prevent="register">
                    <h1 class="logo-login mb-4">Appointfy</h1>
                    <h5 class="mb-3 fw-normal mb-5">Please enter an email and password to register</h5>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control form-control-lg" id="floatingInput" placeholder="name@example.com" v-model="email">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control form-control-lg" id="floatingPassword" placeholder="Password" v-model="password">
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button class="w-100 btn btn-lg btn-dark" type="submit" @click="register">Sign Up</button>
                    <p class="pb-lg-2 py-5">Already have an account? <router-link :to="{name: 'Login'}" style="color: #393f81;">Login here</router-link></p>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
import firebase from 'firebase/app';
//import auth from '../firebaseDb'

export default {
    name: 'Register',
    data() { 
        return { 
            email: '', 
            password: '', 
        }; 
    },
    methods: {
        register() {
            firebase.auth.createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
                this.$router.push('/');
            })
            .catch(error => {
                alert(error.message);
            });
        },
    }
};
</script>

<style>
.logo-login {
  font-family: 'Satisfy', cursive;
  font-size: 60px;
}

form {
    text-align: center;
}
</style>