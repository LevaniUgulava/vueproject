<template>
  <div>
    <HeaderPage />
    <div class="card-container">
      <ProductCard v-for="(item, index) in productdata" :key="index" :data="item" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'; // Ensure this import statement is at the top

import HeaderPage from '../components/HeaderPage.vue';
import ProductCard from '../components/Product.vue'; 

export default {
  name: 'HomePage',
  components: {
    HeaderPage,
    ProductCard
  },
  data() {
    return {
      productdata: []
    };
  },
  created() {
    this.fetchProductData();
  },
  methods: {
    async fetchProductData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/display');
        this.productdata = response.data.data;
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}
.card {
  margin: 10px;
  align-items: center;
  text-align: center;
}
</style>
