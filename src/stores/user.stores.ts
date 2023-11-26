import { defineStore } from 'pinia';

export const UserStoreName = 'user_store';

export const useUser = defineStore(UserStoreName, {
  state: () => ({
    user: null,
    token: null,
  }),
  getters: {
    accessToken() {
      return this.token?.accessToken;
    },
    accessIsExpires() {
      const expires = this.token?.accessExpires;
      return expires ? expires > ~~(Date.now() / 1000) : null;
    },
  },
  actions: {
    setUser(user: any) {
      this.$patch({ user });
    },
    delUser() {
      this.$patch({ user: null });
    },
  },
});
