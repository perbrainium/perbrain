import localforage from "localforage";

export const persLocal = localforage.createInstance({
  name: "perbrain",
  storeName: "pers",
});
