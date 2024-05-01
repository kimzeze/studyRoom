import { create } from "zustand";
// import { persist } from "zustand/middleware";

// const useUserStore = create(
//   persist<userState>(
//     (set) => ({
//       userId: 0,
//       setUserId: (newUserId) => set({ userId: newUserId }),
//     }),
//     {
//       name: 'userIdStorage',
//     },
//   ),
// );

interface AuthState {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
}));

export default useAuthStore;
