<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
      <router-link to="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <h1 class="logo navbar-brand">Appointfy</h1>
      </router-link>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><router-link to="/" class="nav-link px-2 link-secondary">Home</router-link></li>
        <li><router-link :to="{name: 'ServicesList'}" class="nav-link px-2 link-dark">Services</router-link></li>
        <li><router-link :to="{name: 'AppointmentsList'}" class="nav-link px-2 link-dark">Appointments</router-link></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-dark me-2" @click="bookAppointment">
          <router-link :to="{name: 'BookAppointment'}" style="text-decoration: none; color:#fff;">Book Appointment</router-link>
        </button>
        
      </div>

    </header>

  
  </div>

  <router-view/>
</template>

<script>
import router from './router';

export default {
  name: 'App',
  data: () => ({
    authenticated: false,
    dialog: false,
    menu: [
      { title: 'Home', url:"/"},
      { title: 'Services', url:"/services" },
      { title: 'Appointments', url:"/appointments-list"}
    ]
  }),
  mounted() {
    
  },
  methods: {
    logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert('Successfully logged out');
        this.$router.push('/');
      })
      .catch(error => {
        alert(error.message);
        this.$router.push('/');
      });
  },
    login() {
      router.push("/login");
    },
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
/* https://www.jotform.com/form-templates/appointment-request-hairdressers-form */
#app {
  font-family: Lato, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.logo {
  font-family: 'Satisfy', cursive;
  font-size: 20px;
}
</style>
