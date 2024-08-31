<template>
  <div>
    <MenuComponent :openCloseForm="openCloseForm" :showForm="showForm"></MenuComponent>
    <TweetForm :showForm="showForm" :reloadTweets="reloadTweets" :openCloseForm="openCloseForm" ></TweetForm>
    <TweetList :tweets="tweets" :reloadTweets="reloadTweets"></TweetList>
  </div>

</template>

<script>
import MenuComponent from './components/MenuComponent.vue';
import TweetForm from './components/TweetForm.vue';
import useFormTweet from './hooks/useFormTweet';
import TweetList from './components/TweetList.vue';
import {getTweetsApi} from "./api/tweet";
import {ref} from "vue"

export default {
  name: 'App',
  components: {
    MenuComponent,
    TweetForm,
    TweetList
  },
  setup(){

    let tweets = ref(getTweetsApi().reverse());

    const reloadTweets = () => {
      tweets.value = getTweetsApi().reverse();
    }

    return{
      ...useFormTweet(),
      tweets,
      reloadTweets
    }
  }
  
}
</script>

<style lang="scss">

</style>
