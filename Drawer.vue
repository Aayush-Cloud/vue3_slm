<template>
  <div class="home-page">
    <nav class="dashboard-nav">
      <div class="list-components" 
           v-for="(item, index) in navItems" 
           :key="index"
           @mouseover="showText = true" >
        <font-awesome-icon :icon="item.icon" class="icon"/>
        <li class="nav-text" v-if="showText || isOpen">{{ item.name }}</li>
      </div>
    </nav>
    <SideContainer />
  
    
    <div class="overlay" v-if="showOverlay">
      <div class="overlay-content">
        <button class="overlay-button">Button 1</button>
        <button class="overlay-button">Button 2</button>
      </div>
      <div class="overlay-close" @click="showOverlay = false">
        <font-awesome-icon :icon="['fas', 'times']" />
      </div>
    </div>
  
  </div>
</template>




<script>
import SideContainer from './SideContainer.vue';

export default {
  name: 'App',
  components: {
    SideContainer
  },
  data() {
    return {
      showText: false,
      isOpen: false,
      navItems: [
        { name: 'Dashboard', icon: 'table-columns' },
        { name: 'Jobs', icon: ['fas', 'briefcase'] },
        { name: 'Services', icon: ['fas', 'gears'] },
        {name: 'Automation', icon: ['fas', 'gears']},
        { name: 'Admin', icon: ['fas', 'user-tie'] },
        { name: 'Tickets', icon: ['fas', 'ticket-alt'] },
        { name: 'Logout', icon: ['fas', 'arrow-right-from-bracket'] }
      ]
    }
  }
};
</script>

<style scoped>

.toggle-button {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.icon {
  margin-right: 10px;
}

.home-page{
  background-color: #293565;
  height: 100vh;
  display: flex;
  justify-content: space-around;
}

.dashboard-nav {
  position: relative;
  width: 5vw; 
  transition: width 0.5s ease;
  border-radius: 5px;
  background-color: #0B153A;
  padding: 1rem;
  flex-direction: column;
  height: 95vh;
}

.toggle-button {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}

.dashboard-nav:hover,
.dashboard-nav.open {
  width: 20vw; 
}

.icon {
  font-size: 1vw; 
  margin-right: 1vw; 
}


.list-components {
  border-radius: 10px;
  flex-direction: row;
  display: flex;
  align-items: center; 
  justify-content: flex-start; 
  padding: 2vw; 
  color: white;
  background-color: #0B153A;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out; 
  font-size: 1vw;
}


.list-components:hover {
  background-color: #293565; 
  opacity: 0.8; 
}

.nav-text {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.dashboard-nav:hover .nav-text,
.dashboard-nav.open .nav-text {
  opacity: 1;
}


</style>
