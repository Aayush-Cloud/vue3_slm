<template>
  <div class="search-bar">
    <font-awesome-icon :icon="['fas', 'search']" class="search-icon" />
    <select v-model="selectedField" class="search-select">
      <option value="name">Name</option>
      <option value="description">Description</option>
      <option value="identification">Identification</option>
    </select>
    <input type="text" class="search-input" placeholder="  Search" v-model="searchTerm" @input="updateSearch">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchTerm: '',
      selectedField: 'name'
    };
  },
  methods: {
    updateSearch() {
      this.$emit('updateSearch', { term: this.searchTerm, field: this.selectedField });
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
  flex: 2;
  border-radius: 15px;
}
.search-select {
  border: none;
  outline: none;
  font-size: 1.5vw; 
  color: #333;
  flex: 0.3;
  border-radius: 15px;
}
  </style>
  