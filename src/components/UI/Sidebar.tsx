import { useConfiguratorStore } from '../../store/useConfiguratorStore';
import { catalog } from '../../data/catalog';
import { cn } from '../../lib/utils';
import { ChevronRight, Check, Box, X } from 'lucide-react';
import type { Category } from '../../types';

const steps = [
    { id: 1, label: 'Door Style', category: 'style' },
    { id: 2, label: 'Material', category: 'material' },
    { id: 3, label: 'Color', category: 'color' },
    { id: 4, label: 'Glass', category: 'glass' },
    { id: 5, label: 'Hardware', category: 'hardware' }
];

export function Sidebar() {
    const { step, selections, selectOption, sidebarOpen, setSidebarOpen } = useConfiguratorStore();

    // Determine current category based on step
    // Note: step logic might need adjustment if steps map 1:1 to categories
    const currentStepObj = steps.find(s => s.id === step);
    const currentCategory = currentStepObj?.category as Category;

    // Get options based on category and dependencies
    const getOptions = () => {
        if (!currentCategory) return [];

        switch (currentCategory) {
            case 'houseType': // This case will effectively be unused now
                return catalog.houseStyles;
            case 'style':
                return catalog.styles;
            case 'material':
                return catalog.materials;
            case 'color':
                const selectedMaterial = selections.material || 'steel';
                return catalog.colors[selectedMaterial] || [];
            case 'glass':
                return catalog.glass;
            case 'hardware':
                return catalog.hardware;
            default:
                return [];
        }
    };

    const options = getOptions();

    return (
        <>
            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside className={cn(
                "bg-white border-l border-slate-200 flex flex-col shadow-xl z-40 h-full",
                "w-80 sm:w-96",
                "fixed inset-y-0 right-0 transition-transform duration-300 ease-in-out md:static md:translate-x-0",
                sidebarOpen ? "translate-x-0" : "translate-x-full"
            )}>
                {/* Header */}
                <div className="p-6 border-b border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold text-slate-800">
                            {currentStepObj?.label || 'Select Option'}
                        </h2>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-md border border-blue-100">
                                Step {step} of {steps.length}
                            </span>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="md:hidden p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>
                    <p className="text-sm text-slate-500">
                        Customize your door {currentCategory}.
                    </p>
                </div>

                {/* Options Grid */}
                <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
                    <div className="grid grid-cols-2 gap-4">
                        {options.map((option) => {
                            const isSelected = (selections as any)[currentCategory] === option.id;
                            return (
                                <div
                                    key={option.id}
                                    onClick={() => selectOption(currentCategory, option.id)}
                                    className={cn(
                                        "group cursor-pointer rounded-xl border-2 transition-all duration-300 bg-white overflow-hidden shadow-sm hover:shadow-md",
                                        isSelected
                                            ? "border-blue-600 ring-2 ring-blue-600/10 shadow-blue-100"
                                            : "border-transparent hover:border-slate-200"
                                    )}
                                >
                                    {isSelected && (
                                        <div className="absolute top-2 right-2 bg-blue-600 text-white p-1 rounded-full shadow-sm z-10">
                                            <Check size={12} strokeWidth={4} />
                                        </div>
                                    )}

                                    <div className={cn(
                                        "h-32 relative flex items-center justify-center overflow-hidden",
                                        isSelected ? "bg-blue-50" : "bg-slate-100"
                                    )}>
                                        {option.thumbnail?.startsWith('#') ? (
                                            <div
                                                className="w-full h-full shadow-inner"
                                                style={{
                                                    backgroundColor: option.thumbnail,
                                                    backgroundImage: currentCategory === 'color'
                                                        ? 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)'
                                                        : 'none'
                                                }}
                                            />
                                        ) : option.thumbnail ? (
                                            <img
                                                src={option.thumbnail}
                                                alt={option.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="text-xs text-slate-400 font-medium flex flex-col items-center gap-2">
                                                {currentCategory === 'hardware' ? <Box size={20} /> : null}
                                                {option.name}
                                            </div>
                                        )}
                                    </div>

                                    <div className={cn(
                                        "p-3 border-t",
                                        isSelected ? "border-slate-100 bg-blue-50/30" : "border-slate-100"
                                    )}>
                                        <h4 className={cn(
                                            "font-bold text-sm",
                                            isSelected ? "text-blue-700" : "text-slate-800 group-hover:text-blue-600"
                                        )}>
                                            {option.name}
                                        </h4>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="p-6 border-t border-slate-200 bg-white">
                    <div className="flex justify-between items-center text-sm">
                        <button
                            onClick={() => useConfiguratorStore.getState().prevStep()}
                            disabled={step === 1}
                            className="text-slate-500 hover:text-slate-800 font-medium disabled:opacity-50"
                        >
                            Back
                        </button>
                        <button
                            onClick={() => useConfiguratorStore.getState().nextStep()}
                            disabled={step === steps.length}
                            className="bg-slate-900 hover:bg-black text-white px-6 py-2.5 rounded-lg shadow-lg shadow-slate-900/10 font-medium transition-all transform hover:scale-105 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
