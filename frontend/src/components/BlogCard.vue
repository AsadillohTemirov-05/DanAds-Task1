<template>
  <div class="blog-card">
    <h3 class="title">{{ blog.title }}</h3>

    <p class="content">
      {{ shortContent }}
    </p>

    <div class="meta">
      <span>✍️ {{ blog.author }}</span>
      <span>{{ formattedDate }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  blog: {
    type: Object,
    required: true,
  },
});

const shortContent = computed(() =>
  props.blog.content.length > 120
    ? props.blog.content.slice(0, 120) + '...'
    : props.blog.content
);

const formattedDate = computed(() =>
  new Date(props.blog.createdAt).toLocaleDateString()
);
</script>

<style scoped>
.blog-card {
  border: 1px solid #e5e7eb;
  padding: 16px;
  border-radius: 8px;
  background: white;
  transition: box-shadow 0.2s;
}

.blog-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
}

.content {
  color: #555;
  margin-bottom: 12px;
}

.meta {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #777;
}
</style>
