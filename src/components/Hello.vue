<template>
  <div class="container">
    <div>计数器值为: {{ count }}</div>
    <button @click="count++">计数器 + 1</button>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 };
  }
};
</script>

