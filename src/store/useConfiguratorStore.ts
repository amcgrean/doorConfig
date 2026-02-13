import { create } from 'zustand';
import type { ConfigurationState, Category } from '../types';

interface ConfiguratorStore extends ConfigurationState {
    sidebarOpen: boolean;
    toggleSidebar: () => void;
    setSidebarOpen: (open: boolean) => void;
    setStep: (step: number) => void;
    nextStep: () => void;
    prevStep: () => void;
    selectOption: (category: Category, id: string) => void;
    setUploadedImage: (image: string | null) => void;
    setMaskPoints: (points: { x: number; y: number }[]) => void;
    selectHouse: (id: string) => void;
    reset: () => void;
}

const initialState: ConfigurationState = {
    step: 1,
    maxStep: 5,
    selections: {
        style: 'modern-farmhouse',
        material: 'wood',
        color: 'white',
        glass: 'clear',
        hardware: 'classic-knob'
    },
    uploadedImage: null,
    maskPoints: [],
    doorScale: 1,
};

export const useConfiguratorStore = create<ConfiguratorStore>((set) => ({
    ...initialState,

    sidebarOpen: false,
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
    setSidebarOpen: (open) => set({ sidebarOpen: open }),

    setStep: (step) => set({ step }),

    nextStep: () => set((state) => ({
        step: Math.min(state.step + 1, state.maxStep)
    })),

    prevStep: () => set((state) => ({
        step: Math.max(state.step - 1, 1)
    })),

    selectOption: (category, id) => set((state) => ({
        selections: { ...state.selections, [category]: id }
    })),

    setUploadedImage: () => { }, // No-op now
    setMaskPoints: () => { }, // No-op now
    selectHouse: () => { }, // No-op now
    reset: () => set(initialState),
}));
