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
   props: ['id'],

   created(){
      //console.log('servico', this.$props)
      //this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`)
      this.getDadosApi(`http://localhost:3000/servicos/${this.id}`)
   },

   beforeRouteUpdate(to, from, next){
      //to = $route para onde estamos indo
      //from = $route de onde viemos
      //next = faz o fluxo de navegação seguir em frente

      if(to.params.id != undefined )this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)

      next()
   },

   /*
   watch: {
      $route(to, from){ //convenção do watch para o objeto $route
         if(to.params.id != undefined )this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`)
      }
   }
   */
}
</script>