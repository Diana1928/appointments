<template>
    <div class="container col-xxl-8 px-4 py-5">
    <div class="List">
      <div class="row justify-content-center">
          <div>
              <h3 class="text-center pb-2 fw-bold">Appointments</h3>
                <table class="table align-middle table-striped table-bordered">
                  <thead class="thead-dark">
                      <tr>
                          <th>Name</th>
                          <th class="d-none d-sm-table-cell">Email</th>
                          <th>Service</th>
                          <th>Employee</th>
                          <th>Date</th>
                          <th>Session</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="appointment in Appointments" :key="appointment.key">
                          <td>{{ appointment.name }}</td>
                          <td class="d-none d-sm-table-cell">{{ appointment.email }}</td>
                          <td>{{ appointment.service }}</td>
                          <td>{{ appointment.employee }}</td>
                          <td>{{ appointment.date }}</td>
                          <td>{{ appointment.session }}</td>
                          <td>
                              <router-link :to="{name: 'AppointmentsEdit', params: { id: appointment.key }}" class="btn btn-primary btn-sm px-3" style="margin-right:10px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                              </router-link>
                              <button @click.prevent="deleteAppointment(appointment.key)" class="btn btn-danger btn-sm px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                </svg>
                              </button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import db from '../firebaseDb'

  export default {
    name: 'AppointmentsList',
    data () {
      return {
        Appointments: []
      }
    },
    created () {
      db.collection('appointments').onSnapshot((snapshotChange) => {
        this.Appointments = []
        snapshotChange.forEach((doc) => {
          this.Appointments.push({
            key: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            service: doc.data().service,
            employee: doc.data().employee,
            date: doc.data().date,
            session: doc.data().session
          })
        })
      })
    },
    methods: {
      deleteAppointment (id) {
        if (window.confirm('Do you really want to delete?')) {
          db.collection('appointments').doc(id).delete().then(() => {
            console.log('Document deleted!')
          })
            .catch((error) => {
              console.error(error)
            })
        }
      }
    }
  }
  </script>
  
  <style>
  </style>