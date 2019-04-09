<template>
  <div id="client">
  <label>Nome &nbsp;</label>
    <input type="text" v-model="name"><br><br>
    <label>Estado&nbsp;</label>
    <select @change="getCity" v-model="state">
        <option v-for="state in states" :value="state"> {{state.name_estate}} </option>
    </select><br><br>
    <label>Cidade&nbsp;</label>
    <select v-model="city">
        <option v-for="city in citys" :value="state">{{city.nome}}</option>
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
      getCity() {
          main.SERVICES.get(this.url +'/getCitys', { parameters: this.state }, response => {
              this.citys = response
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
