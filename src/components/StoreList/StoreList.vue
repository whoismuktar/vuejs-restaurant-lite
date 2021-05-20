<template>
  <div>
    <p>
      Here you can find all of our restaurants. We have {{ storesCount }} stores
      right now!
    </p>
    <div class="search_wrapper">
      <form class="search_form">
        <input
          v-model="searchQuery"
          id="searchQuery"
          name="search"
          placeholder="Search Store"
          type="text"
          autocomplete="off"
        />
        <span class="search_btn_wrapper">
          <button
            v-if="searchMode"
            height="37"
            class="search-btn search_active"
            @click.prevent="clearSearch"
          >
            Clear
          </button>
          <button
            v-else
            height="37"
            class="search-btn search_inactive"
            @click.prevent="handleSearch"
          >
            Search
          </button>
        </span>
      </form>
      <div class="decoyLoader"></div>
    </div>

    <div class="loader_wrapper vert_align" v-if="typing">
      <img src="@/assets/img/loader.gif" width="10%" />
    </div>
    <div
      class="parent_center half_height"
      v-else-if="storesWithImages.length < 1"
    >
      <em class="text_center">
        <h3>No such store</h3>
        <p>Please refine your search</p>
      </em>
    </div>
    <div class="store-list half_height" v-else>
      <Store
        class="store-list__item"
        :joke="jod"
        :title="store.name"
        :photo="store.image"
        :location="store.location"
        v-for="store in storesWithImages"
        :key="store.id"
      />
    </div>

    <div v-if="!searchMode && initLoad.length < stores.length " class="load_next_wrapper">
      <button id="perLoad_btn" @click="nextLoad">Load Next</button>
    </div>
  </div>
</template>
<style lang="scss">
@import "./StoreList.scss";
</style>
<script>
import dailyJoke from "@/assets/js/dailyJoke";
import Store from "@/components/Store/Store";

export default {
  name: "StoreList",
  components: {
    Store,
  },
  props: {
    stores: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      jod: "",
      perLoad: 50,
      searchQuery: "",
      initLoad: [],
      typing: false,
      searchMode: false,
    };
  },
  methods: {
    async getJOD() {
        this.jod = await dailyJoke()
     },
    nextLoad() {
      this.initLoad = [
        ...this.initLoad,
        ...this.stores.slice(
          this.initLoad.length,
          this.perLoad + this.initLoad.length
        ),
      ];
    },
    handleSearch() {
      if (this.searchQuery.length) {
        this.typing = true;
        this.searchMode = true;

        let stores = this.stores;
        this.initLoad = stores.filter((store) => {
          if (
            store.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) !==
            -1 // search by name
          ) {
            return store;
          }
        });

        setTimeout(() => {
          this.typing = false;
        }, 1000);
      }
    },
    clearSearch() {
      this.searchMode = false;
      this.searchQuery = ""
      this.initLoad = this.stores.slice(0, this.perLoad);
    }
  },
  created() {
    this.getJOD();
    this.initLoad = this.stores.slice(0, this.perLoad);
  },
  computed: {
    storesWithImages() {
      return this.initLoad.map(store => {
        store["image"] = "https://via.placeholder.com/300?text=" + store.name;

        return store;
      })
    },
    storesCount() {
      return this.stores.length;
    },
  },
};
</script>
