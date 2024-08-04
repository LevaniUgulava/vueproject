<template lang="">
    <div>
    <HeaderPage />
    <div class="card-container">
      <ProductCard v-for="(item, index) in productdata" :key="index" :data="item" />
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import HeaderPage from '../components/HeaderPage.vue';
import ProductCard from '../components/Product.vue'; 
export default {
    name:"SingleViewPage",
    components:{
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
        const productId = this.$route.params.id;
        const response = await axios.get(`http://127.0.0.1:8000/api/display/${productId}`);
        this.productdata = response.data.data;
        console.log(response.data.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }
  }
}
</script>
<style lang="">
    
</style>