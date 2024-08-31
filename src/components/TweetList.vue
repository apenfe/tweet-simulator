<template>
  <div class="container">
    <h1 class="text-center mb-4">Lista de Tweets</h1>
    <p v-if="tweets.length === 0">No hay ningun Tweet</p>
    <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
        <p class="tweet__title">{{tweet.username}}</p>
        <p class="tweet__text">{{tweet.tweet}}</p>
        <span>{{formatDate(tweet.createdAt)}}</span>
        <CloseComponent></CloseComponent>
        <button class="close" @click="deleteTweet(tweet.id)">X</button>
    </div>

  </div>
</template>

<script>

import moment from 'moment';
import "moment/locale/es";
import {CloseComponent} from "./icons/index";
import {deleteTweetApi} from "../api/tweet";
export default {

    props:{
        tweets: Array,
        reloadTweets: Function
    },
    components:{
        CloseComponent
    },
    setup(props){

        const formatDate = (date) => {
            return moment(date).fromNow();
        }

        const deleteTweet = (idtweet) => {
            deleteTweetApi(idtweet);
            props.reloadTweets();
        }

        return{
            formatDate,
            deleteTweet
        }

    }

}
</script>

<style lang="scss" scoped>
.tweet{
    position: relative;
    border: 1px solid gray;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        margin: 0;
    }

    &__title{
        position: absolute;
        top: -12px;
        left: 10px;
        background-color: #fff;
        padding: 0 10px;
        font-weight: bold;
    }

    &__text{
        color: gray;
    }

    span{
        position: absolute;
        right: 10px;
        font-size: 12px;
        color: gray;
        background-color: #fff;
        padding: 0 20px;
        bottom: -9px;
        border: 1px solid #ccc;
    }

    .close{
        outline: none;
        border: none;
        width: 30px;
        height: 30px;
        border-radius: 30px;
        background: transparent;
        border: 1px solid gray;
    }

    .close:hover{
        background-color: gray;
        border-color: red;
        color: red;
    }

}
</style>