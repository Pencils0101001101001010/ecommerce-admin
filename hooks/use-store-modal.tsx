import { create } from "zustand";
//Key features of Zustand:
// Simplicity: Zustand has a minimal API, making it easy to learn and use.
// No boilerplate: Unlike some other state management solutions, Zustand requires very little setup code.
// Hook-based: It leverages React hooks, making it integrate
//*seamlessly with functional components.
// Framework agnostic: While popular in React, Zustand can be used with any JavaScript framework or vanilla JS.
// TypeScript support: It has built-in TypeScript definitions for type safety.
// Middleware support: Zustand allows you to extend its functionality with middleware.

interface useStoreModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useStoreModal = create<useStoreModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
