<template>
  <div class="card">
    <h1>id: {{ data.id }}</h1>
    <h1>name: {{ data.name }}</h1>
    <p>description: {{ data.description }}</p>
    <p>price: {{ data.price }}</p>
    <p>Main Category: {{ data.MainCategory }}</p>
    <p>Category: {{ data.Category }}</p>
    <p>Sub Category: {{ data.SubCaregory }}</p>
    <p v-if="data.Contacts">Contacts: {{ data.Contacts.join(', ') }}</p>
    <p>User: {{ data.User }}</p>
    <router-link v-if="!this.$route.params.id" :to="`/display/${data.id}`">More</router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  align-items: center;
  text-align: center;
  margin: 10px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
