<template>
   <div>
      <h3>Componente Indicadores</h3>
      <p>Poderiamos recuperar os indicadores do serviço {{id}}</p>
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