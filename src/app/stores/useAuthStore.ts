import { create } from "zustand";
import { persist } from "zustand/middleware";

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

// Zustand 스토어 생성
const useAuthStore = create((set) => ({
  authData: null,
  setAuthData: (data) => set({ authData: data }),
}));

export default useAuthStore;
