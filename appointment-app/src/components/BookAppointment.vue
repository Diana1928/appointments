<template>
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row">
          <div>
              <h3 class="text-center mb-3 fw-bold">Book Appointment</h3>
              <form @submit.prevent="onFormSubmit">
                  <div class="form-floating mb-3">
                      <input type="text" class="form-control form-control-lg" v-model="appointment.name" required>
                      <label for="floatingInput">Name</label>
                  </div>
  
                  <div class="form-floating mb-3">
                      <input type="text" class="form-control form-control-lg" v-model="appointment.email" required>
                      <label for="floatingInput">Email</label>
                  </div>
  
                  <div class="form-floating mb-3">
                      <select id='service' class="form-control form-control-lg" v-model="appointment.service" required>
                        <option value='Steam Bath'>Steam Bath</option>
                        <option value='Swedish Massage'>Swedish Massage</option>
                        <option value='Deep Tissue Massage'>Deep Tissue Massage</option>
                        <option value='Hot Stone Massage'>Hot Stone Massage</option>
                        <option value='Aroma Therapy'>Aroma Therapy</option>
                        <option value='Body Scrub'>Body Scrub</option>
                     </select>
                     <label for="floatingInput">Service</label>
                  </div>
  
                  <div class="form-floating mb-3">
                      <select id='employee' class="form-control form-control-lg" v-model="appointment.employee" required>
                        <option value='Any'>Any</option>
                        <option value='Ashton Porter'>Ashton Porter</option>
                        <option value='Kate Doe'>Kate Doe</option>
                        <option value='Michael Cross'>Michael Cross</option>
                     </select>
                     <label for="floatingInput">Employee</label>
                  </div>

                  <div class="form-floating mb-3">
                      <label for="floatingInput">Date and Time</label>
                      <Datepicker v-model="appointment.date" week-start="0" 
                      :disabled-week-days="[6, 0]" 
                      :is-24="false"
                      />
                  </div>

                  <div class="form-floating mb-3">
                      <select id='session' class="form-control" v-model="appointment.session" required>
                        <option value='30 Minutes'>30 Minutes</option>
                        <option value='1 Hour'>1 Hour</option>
                     </select>
                     <label for="floatingInput">Session</label>
                  </div>
  
                  <div class="form-group">
                      <button class="w-100 btn btn-lg btn-dark btn-block" @click="bookAppointment">
                        Book Appointment
                      </button>
                  </div>
              </form>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  import db from '../firebaseDb'

  export default {
    name: 'BookAppointment',
    data () {
      return {
        appointment: {}
      }
    },
    methods: {
      bookAppointment () {
        if (this.appointment.name.length !== 0 && this.appointment.email.length !== 0) {
          db.collection('appointments').add(this.appointment).then(() => {
            alert('Appointment successfully booked!')
            this.appointment.name = ''
            this.appointment.email = ''
            this.appointment.service = ''
            this.appointment.employee = ''
            this.appointment.date = ''
            this.appointment.session = ''
          })
          this.error = true
          this.errorMsg = 'Please fill out the form'
          setTimeout(() => {
            this.error = false
          }, 5000)
        }
      }
    }
  }
  </script>