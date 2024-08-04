<template>
  <div class="header">
    <h1>Website Header</h1>
    <nav>
      <ul class="main-nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><a href="#">Services</a></li>
        <li>
          <router-link v-if="notlogin" to="/login">Login</router-link>
          <div v-else class="dropdown-wrapper">
            <button @click="toggleDropdown" class="dropdown">{{ this.display }}</button>
            <ul v-if="isOpen" class="dropdown-menu">
              <li v-for="item in items" :key="item" @click="selectItem(item)">
                {{ item }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  data() {
    return {
      isOpen: false,
      items: ['Profile', 'Settings','Facebook' ,'Logout'],
      display:'Login',
    };
  },
  computed: {
    notlogin() {
      return !localStorage.getItem('token');
    },
   
  },
  mounted(){
      const name = localStorage.getItem('name');
      if (!this.notlogin) {
        this.display=name;
      }
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectItem(item) {
      this.isOpen = false;
      if (item === 'Profile') {
        this.$router.push('/profile');
      } else if (item === 'Facebook') {
        this.$router.push('/facebook');
      }
       else if (item === '') {
        this.$router.push('/settings');
      } else if (item === 'Logout') {
        // Perform logout logic
        localStorage.removeItem('token');
        this.$router.push('/login');
      }
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f8f8f8;
}

nav ul.main-nav {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul.main-nav li {
  margin-left: 20px;
}

nav a {
  text-decoration: none;
  color: #333;
}

h1 {
  margin: 0;
}

.dropdown-wrapper {
  position: relative;
  display: inline-block;
}

.dropdown {
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  background: none;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  padding: 0;
  margin: 0;
  list-style: none;
  background: white;
  border: 1px solid #ccc;
  z-index: 1000;
  display: flex;
  flex-direction: column; /* Stack items vertically */
}

.dropdown-menu li {
  padding: 10px 20px;
  cursor: pointer;
}

.dropdown-menu li:hover {
  background-color: #f0f0f0;
}
</style>
