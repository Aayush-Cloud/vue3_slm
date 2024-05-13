
<template><div class="side-container" >
    <div class="search-container">
      <div class="title">Open DCOS</div> 
      <SearchBar />
    </div>
    <div class="resource-section">
      <div class="resource-tab-heading">Resources</div> 
      <div class="resource-tab-button" v-for="(resource, index) in resources" :key="index">
        <div class="resource-title">{{ resource }}</div>
        <div class="resource-icons">
          <font-awesome-icon :icon="['fas', 'info']" class="resource-icons"  v-on:mouseover="showOverlayinfo = true" v-on:mouseout="showOverlayinfo = false" />
          <font-awesome-icon :icon="['fas', 'pen-square']" class="resource-icons" />
          <font-awesome-icon :icon="['fas', 'trash']" class="resource-icons" @click="deleteResource(index)" />
        </div>
      </div>
    </div>
    <div class="resource-section">
      <div class="resource-tab-heading">Clusters</div> 
      <div class="resource-tab-button" v-for="(clusters, index) in clusters" :key="index">
        <div class="resource-title">{{ clusters }}</div>
        <div class="resource-icons">
            <font-awesome-icon :icon="['fas', 'info']" class="resource-icons" v-on:mouseover="showOverlayinfo = true" v-on:mouseout="showOverlayinfo = false"/>
          <font-awesome-icon :icon="['fas', 'pen-square']" class="resource-icons" />
          <font-awesome-icon :icon="['fas', 'trash']" class="resource-icons" @click="deleteCluster" />
        
      </div>
    </div>
       <!-- Add Button -->
    <div class="add-button" @click="showOverlay = true">
      <font-awesome-icon :icon="['fas', 'circle-plus']" />
    </div>
  
    <!-- Overlay Screen -->
    <div v-if="showOverlay" class="overlay-screen">
        <font-awesome-icon :icon="['fas', 'times']" class="close-icon" @click="showOverlay = false" />
       <div @click="handleAddExistingResource" class="overlay-button"><font-awesome-icon :icon="['fas', 'circle-plus']" class="overlay-icon"/> <div  >Add Existing Resource</div></div> 
       <div @click="handleCreateNewResource" class="overlay-button"><font-awesome-icon :icon="['fas', 'pen-square']"  class="overlay-icon" /><div >Create New Resource</div></div> 
    </div>
     <!-- Overlay Screen -->
     <div v-if="showOverlay2" class="overlay-screen">
        <font-awesome-icon :icon="['fas', 'times']" class="close-icon" @click="showOverlay2 = false" />
       <div  @click="handleHost"  class="overlay-button"><font-awesome-icon :icon="['fas', 'circle-plus']" class="overlay-icon"/> <div>Host</div></div> 
       <div  @click="handleCluster" class="overlay-button"><font-awesome-icon :icon="['fas', 'pen-square']"  class="overlay-icon" /><div>Cluster</div></div> 
    </div>
     <!-- Overlay Screen Info-->
  <div v-if="showOverlayinfo" class="overlay-screen-info">
    <!-- your overlay content -->
    <div class="info">
    <h2>Hostname</h2>
    <p>Host 1</p>
  </div>
  <div class="info">
    <h2>IP</h2>
    <p>10.1.2</p>
  </div>
  <div class="info">
    <h2>CPU Architecture</h2>
    <p>-</p>
  </div>
  <div class="info">
    <h2>CPU Cores</h2>
    <p>-</p>
  </div>
  <div class="info">
    <h2>Operating System</h2>
    <p>-</p>
  </div>
  <div class="info">
    <h2>UUID</h2>
    <p>UUID</p>
  </div>
  <div class="info">
    <h2>Cluster Member</h2>
    <p>False</p>
  </div>
    </div>
  </div>
  </div>
  </template>
  
  <script>
  import SearchBar from './SearchBar.vue';
  
  export default {
  name: 'SideContainer',
  components: {
    SearchBar
  },
  data() {
    return {
      showOverlay: false,
      showOverlay2 : false,
      showOverlayinfo: false,
      resources: ['Resource 1', 'Resource 2', 'Resource 3'],
      clusters: ['Cluster 1', 'Cluster 2']
    };
  },
  methods: {
    handleAddExistingResource() {
      this.showOverlay = false;
    },
    handleCreateNewResource() {  
      this.showOverlay2 = true;
    },
    handleCluster() {
      this.showOverlay2 = false;
    },
    handleHost() {
      this.showOverlay2 = false;
    },
    closeOverlay() {
      this.showOverlay = false;
      this.showOverlay2 = false;
    },
    deleteResource(index) {
      this.resources.splice(index, 1);
    },
    deleteCluster(index) {
      this.clusters.splice(index, 1);
    }
  
  }
  };
  
  </script>
  
  <style scoped>
  .overlay-screen-info {
  position: fixed;
  
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  background-color: #293565;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 100;
  border-radius: 10px;
  }
  .info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  margin: 1vw 0;
  }
  
  .info h2 {
  margin: 0;
  font-size: 1vw;
  }
  
  .info p {
  margin: 0;
  font-size: 1vw;
  }
  .title {
  text-align: left;
  font-size: 1.5vw;
  margin-bottom: 2vw;
  margin-left: 1vw;
  
  }
  .side-container {
  width: 70%;
  margin-left: 10%;
  margin-right: 15%; 
  }
  
  .search-container {
  margin: 1%;
  width: 100%;
  border-radius: 5%; 
  padding: 5px;
  }
  
  .resource-section{
  padding: 30px;
  }
  
  .resource-tab-heading{
  flex: none;
  text-align: left;
  margin-bottom: 10px;
  margin-left: 0.5%;
  font-size: 1.5vw;
  margin-bottom: 1vw;
  }
  
  .resource-tab-button {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 15px;
  background-color: #0B153A;
  cursor: pointer;
  justify-content: space-between;
  transition: background-color 0.2s ease-in-out;
  font-size: 1.2vw;
  margin-bottom: 1vw;
  }
  
  .resource-tab-button:hover {
  background-color: #e0e0e0;
  }
  
  .resource-title {
  flex: none; 
  font-weight: bold;
  margin-right: 1rem;
  font-size: 1.5vw;
  }
  
  .resource-icons {
  display: flex;
  color: white;
  justify-content: flex-end;
  height: 1rem;
  margin-left: 1vw;
  fill: white;
  cursor: pointer;
  width: 1.5vw;
  height: 1.5vw;
  }
  
  
  
  .resource-icons:hover {
  fill: #007bff;
  }
  .add-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 5vw;
  }
  
  
  
  .overlay-screen {
  
  position: fixed;
  top: 25%;
  left: 25%;
  width: 50vw;
  height: 20vw;
  background: #0B153A;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  animation: slide-in 0.5s forwards;
  }
  
  .overlay-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 4vw;
    background-color: #293565;
    border-radius: 10px;
    cursor: pointer;
  }
  .overlay-icon {
    margin-right: 1vw;
  }
  .close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #fff;
  }
  
  </style>