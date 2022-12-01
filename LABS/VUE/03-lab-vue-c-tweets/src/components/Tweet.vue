<template>
  <div class="tweet">
    <ProfileImage :image="props.image" />

    <div class="body">
      <div class="top">
        <User :user="props.user" />

        <Timestamp :timestamp="props.timestamp" />
      </div>

      <Message :message="props.message" />

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
  user: Object,
  image: String,
  timestamp: String,
  message: String,
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
