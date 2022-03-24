<template>
   <h3>Leads</h3>
   {{dados}}
</template>

<script>
export default {
   name: 'Leads',
   data: ()=>({
      dados: null
   }),

   methods: {
      getDadosApi(){
         fetch('http://localhost:3000/leads')
            .then(response => response.json())
            .then(data => this.dados = data)
      }
   },

   created(){
      this.getDadosApi()
   }
}
</script>