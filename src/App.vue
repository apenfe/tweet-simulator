<template>
  <div>
    <MenuComponent :openCloseForm="openCloseForm" :showForm="showForm"></MenuComponent>
    <TweetForm :showForm="showForm"></TweetForm>
  </div>

</template>

<script>
import MenuComponent from './components/MenuComponent.vue';
import TweetForm from './components/TweetForm.vue';
import useFormTweet from './hooks/useFormTweet';

export default {
  name: 'App',
  components: {
    MenuComponent,
    TweetForm
  },
  setup(){
    return{
      ...useFormTweet()
    };
  }
  
}
</script>

<style lang="scss">

</style>
