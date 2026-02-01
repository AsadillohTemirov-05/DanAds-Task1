<template>
  <section class="blogs">
    <h1>📝 Blogs</h1>

    <div v-if="loading" class="loading">Loading blogs...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div class="grid">
      <BlogCard
        v-for="blog in blogs"
        :key="blog.id"
        :blog="blog"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getBlogs } from '../api/blog.api';
import BlogCard from '../components/BlogCard.vue';

const blogs = ref([]);
const loading = ref(false);
const error = ref(null);

const fetchBlogs = async () => {
  loading.value = true;
  error.value = null;

  try {
    const res = await getBlogs();
    blogs.value = res.data;
  } catch (err) {
    error.value = 'Failed to load blogs';
  } finally {
    loading.value = false;
  }
};

onMounted(fetchBlogs);
</script>

<style scoped>
.blogs {
  max-width: 900px;
  margin: auto;
  padding: 24px;
}

h1 {
  margin-bottom: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}

.loading {
  color: #555;
}

.error {
  color: red;
}
</style>
