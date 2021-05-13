<template>
  <div>
    <p>
      Here you can find all of our restaurants. We have {{ storesCount }} stores
      right now!
    </p>
    <div class="search_wrapper">
      <input v-model="searchQuery" name="search" placeholder="Search Store" type="text" autocomplete="off" />
      <div class="decoyLoader"></div>
    </div>

    <div class="loader_wrapper vert_align" v-if="typing">
      <img src="@/assets/img/loader.gif" width="10%">
    </div>
    <div class="parent_center half_height" v-else-if="storesWithImages.length < 1">
      <em class="text_center">
        <h3>No such store</h3>
        <p>Please refine your search</p>
      </em>
    </div>
    <div class="store-list half_height" v-else>
      <Store
        class="store-list__item"
        :title="store.name"
        :photo="store.image"
        :location="store.location"
        v-for="store in storesWithImages"
        :key="store.id"
      />
    </div>
  </div>
</template>
<style lang="scss">
@import './StoreList.scss';
</style>
<script>
import Store from '@/components/Store/Store';
import { map, size } from 'lodash';

export default {
  name: 'StoreList',
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
      searchQuery: "",
      typing: false,
    };
  },
  watch: {
    searchQuery(val) {
      if (val.length) {
        this.typing = true;
        setTimeout(() => {
        this.typing = false;
        }, 1000);
      }
    }
  },
  computed: {
    storesWithImages() {
      let stores = this.stores;

      if (this.searchQuery.length) {
        stores = stores.filter((store) => {
          if (
            store.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1 // search by name
          ) {
            return store;
          }
        });
      }

      return map(stores, function(store) {
        store["image"] = "https://via.placeholder.com/300?text=" + store.name;

        return store;
      });
    },
    storesCount () {
      return size(this.stores);
    }
  }
};
</script>
