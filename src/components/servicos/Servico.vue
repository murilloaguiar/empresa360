<template>
   <div class="card">

      <div class="card-header">{{dados.servico}}</div>

      <div class="card-body">
         <p class="card-text">{{dados.descricao}}</p>
      </div>

      
   </div>
</template>

<script>

import ApiMixin from '@/mixins/ApiMixin'


export default {
   name: 'Lead',
   mixins: [ApiMixin],

   created(){
      this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`)
   },

   watch: {
      $route(to/*, from*/){ //convenção do watch para o objeto $route
         if(to.params.id != undefined )this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
      }
   }
}
</script>