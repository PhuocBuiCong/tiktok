import { defineStore } from "pinia";

export const useCommonStore = defineStore({
  id: "common",
  state: () => ({
    isShowSidebar: false,
  }),
  actions: {
    setShowSideBar(payload: boolean) {
      this.isShowSidebar = payload;
    },
  },
});
