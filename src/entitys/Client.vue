<template>
  <div id="client">
  <label>Nome &nbsp;</label>
    <input type="text" ng-model="name">
    <select>
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
      states: ''

    }
  },
  methods: {
  },
  mounted () {
    main.SERVICES.get('http://localhost:3000/getStates', response => {
        this.states = response
    })
  }
}
</script>

<style>

</style>
