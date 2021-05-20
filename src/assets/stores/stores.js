// For Optimization, enerate Virtual Store
const generateStore = () => {
  let stores = [];
  for (let i = 1; i < 10000; i++) {
    let store = {};
    store.id = i;
    i < 101
      ? (store.name = "Store 00" + i)
      : i < 100
      ? (store.name = "Store 0" + i)
      : (store.name = "Store " + i);
    store.location = "Spain";

    stores.push(store);
  }

  return stores;
};

export default generateStore;
