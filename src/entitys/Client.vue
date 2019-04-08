<template>
  <div id="client">
  <label>Nome &nbsp;</label>
    <input type="text" ng-model="name"><br><br>
    <label>Estado&nbsp;</label>
    <select @change="getCity">
        <option v-for="state in states" :value="state"> {{state.name_estate}} </option>
    </select>
  </div>
</template>

<script>
const main = require('../utils/services')
export default {
  data() {
    return {
      name: '',
      cpf: '',
      telephone : '',
      cellphone: '',
      street: '',
      district: '',
      city: '',
      state: '',
      country: '',
      email: '',
      cnpj: '',
      states: '',
      url: 'http://localhost:3000',
      citys: ''
    }
  },
  methods: {
      getCity(state) {
          main.SERVICES.get(this.url +'/getCitys', state, response => {
              console.log(response)
          })
      }
  },
  mounted () {
    main.SERVICES.get(this.url + '/getStates',null, response => {
        this.states = response
    })
  }
}
</script>

<style>

</style>
