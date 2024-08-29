<template>
  <div class="tweet-form container" :class="{open: showForm}"> <!--Se establece la clase open si showform es true-->
    <form>
        <input class="form-control" placeholder="Tu nombre">
        <textarea 
            class="form-control" 
            rows="3" 
            placeholder="Escibe tu Tweet">
        </textarea>
        <button 
            class="btn btn-primary" 
            type="button">
            Enviar Tweet
        </button>
    </form>
  </div>
</template>

<script>
export default {
    props:{
        showForm: Boolean,
    }

}
</script>

<style lang="scss" scoped>

.tweet-form{
    margin-top: 20px;
    height: 0;
    overflow: hidden;
    transition: all 300ms ease-in-out;

    &.open{
        height: auto;
    }

    form{
        margin-bottom: 50px;

        input{
            margin-bottom: 10px;
        }

        button{
            width: 100%;
            margin-top: 10px;
        }
    }
}

</style>