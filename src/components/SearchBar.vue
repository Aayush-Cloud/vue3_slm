<template>
    <div class="search-bar">
      <font-awesome-icon :icon="['fas', 'search']" class="search-icon" />
      <input type="text" class="search-input" placeholder="  Search" v-model="searchTerm">
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        searchTerm: ''
      }
    }
  };
  </script>
  
  <style scoped>
.search-bar {
  background-color: #293565;
  display: flex;
  align-items: center;
  padding: 1vw; 
}

.search-icon {
  font-size: 1.5vw; 
  margin-right: 1vw; 
}

.search-input {
  border: none;
  outline: none;
  font-size: 1.5vw; 
  color: #333;
  flex: 1;
  border-radius: 15px;
}
  </style>
  