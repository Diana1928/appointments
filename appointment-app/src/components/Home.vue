<template>
    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-12 col-sm-8 col-lg-6">
        <img src="https://th.bing.com/th/id/OIP.LgsbT8mBZnkr6VdNtQULuwHaHa?pid=ImgDet&rs=1" class="d-block mx-lg-auto img-fluid" alt="Food Hero" width="900" height="700" loading="lazy">
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Essential Balance. Massage and Wellness</h1>
        <p class="lead py-5">Your body could use a hand. Get a custom massage to help keep your body working</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <a @click="createAppointment" class="btn btn-dark btn-lg px-4 me-md-2">Book an appointment</a>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import router from '@/router';


export default {
    name: 'Register',
    data() { 
         
    },
    
    methods: {
        createAppointment() {
          router.push('/book-appointment')
        }
    }
};
</script>

<style>
.btn.btn-dark {
    background-image: linear-gradient(to right, #00b4db, #0083b0);
    border: none;
    transition: 0.5s;
}
</style>