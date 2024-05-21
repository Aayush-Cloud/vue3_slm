<template>
  <div class="side-container">
    <div class="search-container">
      <div class="title">Open DCOS</div> 
      <SearchBar @updateSearch="updateSearch"/>

    </div>
    <div class="filter-icon" @click="showFilterOverlay = true">
        <div class="filter-title">Filter</div>
      <font-awesome-icon :icon="['fas', 'filter']"  />
    </div>
    
    <div v-if="showFilterOverlay" class="filter-overlay">
     
      <font-awesome-icon :icon="['fas', 'times']" class="close-icon" @click="showFilterOverlay = false" />
      
      <div class="filter-container">
        <div class="filter-overlay-title">Filter by Health Status</div>
        <div class="filter-option">
          <input type="checkbox" id="healthy" value="healthy" v-model="healthStatusFilter" />
          <label for="healthy" class="filter-labels">Healthy</label>
        </div>
        <div class="filter-option">
          <input type="checkbox" id="unhealthy" value="unhealthy" v-model="healthStatusFilter" />
          <label for="unhealthy" class="filter-labels">Unhealthy</label>
        </div>
       
      </div>
    </div>
    <div class="resource-section">
      <div class="resource-tab-heading">Automation Systems</div> 
      <div class="resource-tab-button" v-for="(resource, index) in filteredResources" :key="index">
        <div class="resource-title">{{ resource.name }}</div>
        <div class="resource-icons">
          <font-awesome-icon :icon="['fas', 'info']" class="resource-icons"  v-on:mouseover="showResourceDetails(resource)" v-on:mouseout="showOverlayinfo = false" />
          <font-awesome-icon :icon="['fas', 'pen-square']" class="resource-icons" @click="editResource(resource)" />

          <font-awesome-icon :icon="['fas', 'trash']" class="resource-icons" @click="deleteResource(index)" />
        </div>
      </div>
    </div>
    <div class="resource-section">
   
      <!-- Overlay Screen Info-->
      <div v-if="showOverlayinfo && shownResource" class="overlay-screen-info">
       
        <div class="info">
          <h2>Description</h2>
          <p>{{ shownResource.description }}</p>
        </div>
        <div class="info">
          <h2>Health Status</h2>
          <p>{{ shownResource.healthStatus }}</p>
        </div>
        <div class="info">
          <h2>Type</h2>
          <p>{{ shownResource.type }}</p>
        </div>
        <div class="info">
          <h2>Automation Project</h2>
          <p>{{ shownResource.automationProject }}</p>
        </div>
        <div class="info">
          <h2>Identification</h2>
          <p>{{shownResource.identification}}</p>
          
        </div>
        <div class="info">
          <h2>Id</h2>
          <p>{{shownResource.id}}</p>
        </div>
      
      </div>
        <!-- Edit Overlay Screen -->
  <div v-if="showOverlayEdit && shownResource" class="overlay-screen-info">
    <font-awesome-icon :icon="['fas', 'times']" class="close-icon" @click="showOverlayEdit = false" />
    <form class="info-form" @submit.prevent="handleEditResource">
      <div class="info">
        <h2>Description</h2>
        <input v-model="shownResource.description" type="text" />
      </div>
      <div class="info">
        <h2>HealthStatus</h2>
        <input class="input" v-model="shownResource.healthStatus" type="text" />
      </div>
      <div class="info">
        <h2>Type</h2>
        <input v-model="shownResource.type" type="text" />
      </div>
      <div class="info">
        <h2>Automation Project</h2>
        <input v-model="shownResource.automationProject" type="text" />
      </div>
      <div class="info">
        <h2>Identification</h2>
        <input v-model="shownResource.identification" type="text" />
      </div>
  
   
      <button type="submit">Save</button>
    </form>
  </div>
    </div>
  </div>
</template>
  
<script>
import SearchBar from './SearchBar.vue';
import { fetchResources, handleEditResource, deleteResource } from './api.js';
import './AutomationStyles.css'

export default {
  name: 'SideContainer',
  components: {
    SearchBar
  },
  data() {
    return {
      showOverlayEdit: false,
      showOverlay: false,
      shownResource: null,
      showOverlay2 : false,
      showOverlayinfo: false,
      resources: [],
      filteredResources: [],
      healthStatusFilter: [],
      searchTerm: '',
      showFilterOverlay: false
    };
  },
  created() {
    this.fetchResources();
  }, 
 async created() {
  await this.fetchResources();
  this.filteredResources = this.resources;
},
  watch: {
    healthStatusFilter() {
      this.filterResources();
    },
  },
  
  computed: {
  filteredResources() {
    let resources = this.resources;

   
    if (this.searchTerm) {
      resources = resources.filter(resource =>
        resource[this.selectedField].toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }


    if (this.healthStatusFilter.length > 0) {
      resources = resources.filter(resource =>
        this.healthStatusFilter.includes(resource.healthStatus)
      );
    }

    return resources;
  },
  },
  methods: { 
    async handleEditResource() {
      try {
        const response = await handleEditResource(this.shownResource.id, this.shownResource);
     
      } catch (error) {
        console.error(error);
      }
    },
    async fetchResources() {
      try {
        this.resources = await fetchResources();
      } catch (error) {
        console.error(error);
      }
    },
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
      deleteCluster(index) {
        this.clusters.splice(index, 1);
      },
      showResourceDetails(resource) { // Added this method because of the issue in rendering the info content.
        this.shownResource = resource;
        this.showOverlayinfo = true;
      },
      editResource(resource) {
  this.shownResource = resource;
  this.showOverlayEdit = true;
},
    
    async deleteResource(index) {
      const resource = this.resources[index];
      try {
        await deleteResource(resource.id);
        this.resources.splice(index, 1);
      } catch (error) {
        console.error(error);
      }
    },
    filterResources() {
      this.filteredResources = this.resources.filter(resource => {
        return this.healthStatusFilter.length === 0 || this.healthStatusFilter.includes(resource.healthStatus);
      });
    },
    updateSearch(search) {
    this.searchTerm = search.term;
    this.selectedField = search.field;
  },

  }
};
</script>
  
  
 