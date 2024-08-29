<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
        <span class="navbar-brand">Simulador de tweets</span>
        <button 
            class="btn pl-4 pr-4 btn-success" 
            :class="{'btn-danger': showForm}" 
            @click="openCloseForm">
            {{ !showForm ? "Nuevo tweet" : "Cerrar tweet"}}
        </button>
    </div>
  </nav>
</template>

<script>
export default {
    props:{
        openCloseForm: Function,
        showForm: Boolean
    }

}
</script>

<style>

</style>