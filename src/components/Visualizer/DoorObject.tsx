import { useConfiguratorStore } from '../../store/useConfiguratorStore';
import { catalog } from '../../data/catalog';
import { cn } from '../../lib/utils';
import { useMemo } from 'react';

export function DoorObject() {
    const { selections } = useConfiguratorStore();

    // Default fallback
    const styleId = selections.style || 'flush';
    const colorId = selections.color || 'white';
    const materialId = selections.material || 'steel';

    // Find color value from catalog
    const colorOptions = catalog.colors[materialId] || [];
    const colorObj = colorOptions.find(c => c.id === colorId);
    const colorHex = colorObj?.thumbnail || '#ffffff';

    // Hardware position (Standard: Right side)
    const handleSide = 'right';

    const panels = useMemo(() => {
        const panelShadow = "shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-1px_2px_rgba(255,255,255,0.2)]";
        const panelBorder = "border-[1px] border-black/20";
        const panelBase = cn("transition-all duration-500", panelShadow, panelBorder);

        switch (styleId) {
            case '6-panel':
                return (
                    <div className="absolute inset-0 p-4 pt-16 grid grid-cols-2 grid-rows-3 gap-y-6 gap-x-3">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className={cn(panelBase, "rounded-sm")} style={{ backgroundColor: 'rgba(0,0,0,0.05)' }} />
                        ))}
                    </div>
                );
            case 'craftsman':
                return (
                    <div className="absolute inset-x-4 bottom-4 top-[45%] flex flex-col gap-3">
                        <div className="flex-1 flex gap-3">
                            <div className={cn(panelBase, "flex-1 rounded-sm")} style={{ backgroundColor: 'rgba(0,0,0,0.05)' }} />
                            <div className={cn(panelBase, "flex-1 rounded-sm")} style={{ backgroundColor: 'rgba(0,0,0,0.05)' }} />
                        </div>
                        <div className="flex-1 flex gap-3">
                            <div className={cn(panelBase, "flex-1 rounded-sm")} style={{ backgroundColor: 'rgba(0,0,0,0.05)' }} />
                            <div className={cn(panelBase, "flex-1 rounded-sm")} style={{ backgroundColor: 'rgba(0,0,0,0.05)' }} />
                        </div>
                    </div>
                );
            case 'farmhouse':
                return (
                    <div className="absolute inset-x-4 bottom-4 top-[20%] flex flex-col gap-2">
                        <div className={cn(panelBase, "flex-1 rounded-sm")} style={{ backgroundColor: 'rgba(0,0,0,0.05)' }} />
                        <div className="h-6" /> {/* Handle area */}
                        <div className={cn(panelBase, "flex-1 rounded-sm")} style={{ backgroundColor: 'rgba(0,0,0,0.05)' }} />
                    </div>
                );
            case 'prairie':
                return (
                    <div className="absolute inset-x-6 bottom-6 top-[60%] flex flex-col justify-end">
                        <div className={cn(panelBase, "h-full rounded-sm m-2 flex gap-3 p-3")}>
                            <div className="w-1/4 bg-black/5 rounded-sm shadow-inner" />
                            <div className="flex-1 bg-black/5 rounded-sm shadow-inner" />
                            <div className="w-1/4 bg-black/5 rounded-sm shadow-inner" />
                        </div>
                    </div>
                );
            case 'flush':
            default:
                return null;
        }
    }, [styleId]);

    const glass = useMemo(() => {
        const glassId = selections.glass || 'none';
        if (glassId === 'none') return null;

        let glassClass = "top-8 left-8 right-8 bottom-32";
        if (glassId === 'half') glassClass = "top-8 left-8 right-8 h-1/2";
        if (glassId === 'craftsman-lite' || styleId === 'craftsman') glassClass = "top-6 left-6 right-6 h-[35%]";
        if (glassId === 'top-lite') glassClass = "top-8 left-8 right-8 h-1/4";

        return (
            <div className={cn("absolute overflow-hidden border border-white/40 shadow-[inset_0_4px_12px_rgba(0,0,0,0.5)] z-0", glassClass)}>
                {/* Glass Base */}
                <div className="absolute inset-0 bg-sky-900/20 backdrop-blur-[1px]" />

                {/* Reflections */}
                <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-white/10 via-white/5 to-transparent" />
                <div className="absolute -inset-[100%] opacity-20 bg-gradient-to-tr from-transparent via-white to-transparent transform -skew-x-12 translate-x-[-10%]" />

                {/* Procedural Gradients for sky reflection */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-400/10 to-transparent pointer-events-none" />
            </div>
        );
    }, [selections.glass, styleId]);

    const materialOverlay = useMemo(() => {
        if (materialId === 'wood') {
            return (
                <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none"
                    style={{
                        backgroundImage: `
                            repeating-linear-gradient(90deg, transparent 0px, transparent 1px, rgba(0,0,0,0.2) 1px, rgba(0,0,0,0.2) 2px),
                            repeating-linear-gradient(0deg, transparent 0px, transparent 100px, rgba(255,255,255,0.05) 100px, rgba(255,255,255,0.08) 101px),
                            radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 80%)
                        `,
                        backgroundSize: '3px 100%, 100% 200px, 100% 100%'
                    }}
                />
            );
        }
        if (materialId === 'steel') {
            return (
                <>
                    <div className="absolute inset-0 opacity-20 mix-blend-soft-light pointer-events-none bg-gradient-to-br from-white via-transparent to-black" />
                    <div className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(45deg, #000 0px, #000 1px, transparent 1px, transparent 2px)',
                            backgroundSize: '100% 2px'
                        }}
                    />
                </>
            );
        }
        return null;
    }, [materialId]);

    return (
        <div
            className="w-full h-full border-[12px] border-white/95 relative shadow-[0_0_100px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-700"
            style={{
                backgroundColor: colorHex,
                backgroundImage: `
                    linear-gradient(to right, rgba(0,0,0,0.15), transparent 3%, transparent 97%, rgba(0,0,0,0.15)),
                    linear-gradient(to bottom, rgba(255,255,255,0.05), transparent 10%, rgba(0,0,0,0.05) 90%, rgba(0,0,0,0.2))
                `
            }}
        >
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.05)] pointer-events-none" />

            {/* Ultra Realistic Wood/Metal Texturing */}
            {materialOverlay}

            {/* Ambient Lighting & Depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />

            {/* Door Sections (Panels/Glass) with enhanced drop shadows */}
            <div className="relative z-0 w-full h-full drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
                {glass}
                {panels}
            </div>

            {/* Handle / Hardware */}
            {(() => {
                const hardwareId = selections.hardware || 'classic-knob';
                const baseClass = cn(
                    "absolute top-[52%] z-10 transition-all duration-300 drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)]",
                    handleSide === 'right' ? "right-5" : "left-5"
                );

                const metalFinish = "bg-gradient-to-b from-slate-200 via-slate-50 to-slate-400 border-[1px] border-slate-600/30";

                switch (hardwareId) {
                    case 'modern-lever':
                        return (
                            <div className={cn(baseClass, "flex flex-col items-center")}>
                                {/* Backplate with sub-shading */}
                                <div className={cn("w-4 h-24 rounded-sm relative shadow-inner", metalFinish)}>
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-black/20 rounded-full" />
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-black/20 rounded-full" />
                                </div>
                                {/* Lever */}
                                <div className={cn(
                                    "absolute top-1/2 -translate-y-1/2 w-12 h-3.5 rounded-full shadow-2xl",
                                    metalFinish,
                                    handleSide === 'right' ? "-translate-x-[75%]" : "translate-x-[75%]"
                                )} />
                            </div>
                        );
                    case 'handle-set':
                        return (
                            <div className={cn(baseClass, "flex flex-col items-center gap-2")}>
                                {/* Top Handle */}
                                <div className={cn("w-4 h-32 rounded-sm relative shadow-xl transform skew-y-1", metalFinish)}>
                                    <div className="absolute inset-y-8 inset-x-1 bg-white/40 rounded-full blur-[1px]" />
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2.5 bg-slate-800/10 rounded-sm" />
                                </div>
                                {/* Bottom Accent */}
                                <div className={cn("w-5 h-5 rounded-full shadow-lg", metalFinish)} />
                            </div>
                        );
                    case 'classic-knob':
                    default:
                        return (
                            <div className={cn(baseClass, "flex flex-col items-center")}>
                                <div className={cn("w-4 h-20 rounded-sm shadow-inner", metalFinish)} />
                                <div className={cn(
                                    "absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.4)] border border-slate-500/50 flex items-center justify-center",
                                    metalFinish
                                )}>
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/30 blur-[2px]" />
                                    <div className="absolute top-2 left-2 w-3 h-3 bg-white/60 rounded-full blur-[1.5px]" />
                                </div>
                            </div>
                        );
                }
            })()}
        </div>
    );
}
