import { defineStore } from 'pinia';

export const UserStoreName = 'user_store';

interface UserState {
  user?: {};
  token?: {
    accessToken: string;
    accessExpires: number;
  };
}

export const useUserStore = defineStore(UserStoreName, {
  state: (): UserState => ({}),
  getters: {
    accessToken: ({ token }) => token?.accessToken,
    accessIsExpires: ({ token }) => token?.accessExpires ? token?.accessExpires > ~~(Date.now() / 1000) : null,
  },
  actions: {
    setUser(user: any) {
      this.$patch({ user });
    },
    delUser() {
      this.$patch({ user: undefined });
    },
  },
});
