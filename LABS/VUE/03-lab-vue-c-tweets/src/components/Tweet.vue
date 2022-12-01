<template>
  <div class="tweet">
    <ProfileImage :image="props.tweet.user.image" />

    <div class="body">
      <div class="top">
        <User :user="props.tweet.user" />

        <Timestamp :timestamp="props.tweet.timestamp" />
      </div>

      <Message :message="props.tweet.message" />

      <Actions />
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script setup>
import User from "./User.vue";
import Timestamp from "./Timestamp.vue";
import Message from "./Message.vue";
import Actions from "./Actions.vue";
import ProfileImage from "./ProfileImage.vue";

const props = defineProps({
  tweet: Object,
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
