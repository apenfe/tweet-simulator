<template>
  <div class="tweet-form container" :class="{open: showForm}"> <!--Se establece la clase open si showform es true-->
    <form @submit.prevent="sendTweet">
        <input class="form-control" placeholder="Tu nombre" v-model="username">
        <textarea 
            class="form-control" 
            rows="3" 
            placeholder="Escibe tu Tweet"
            v-model="tweet">
        </textarea>
        <button 
            class="btn btn-primary" 
            type="submit">
            Enviar Tweet
        </button>
    </form>
  </div>
</template>

<script>

import {ref} from "vue";
import {saveTweetApi} from "../api/tweet";

export default {
    props:{
        showForm: Boolean,
        reloadTweets: Function,
        openCloseForm: Function
    },
    setup(props){

        let username = ref("");
        let tweet = ref("");

        const sendTweet = () => {

            if(!tweet.value || !username.value){
                return;
            }else{
                saveTweetApi(tweet.value, username.value);
                tweet.value = "";
                username.value = "";
                props.reloadTweets();
                props.openCloseForm();
            }
            
        }

        return{
            sendTweet,
            username,
            tweet
        };
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