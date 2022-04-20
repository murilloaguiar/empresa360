<template>
   <div>
      <h3>Componente Opcoes</h3>
      <p>Poderiamos recuperar as opções do serviço {{id}}</p>
   </div>
</template>

<script>
export default {
   name: 'Opcoes',
   props: ['id'],

   created(){
      //console.log('Opcoes', this.id)
   }
}
</script>