import { DoorObject } from './DoorObject';

export function Visualizer() {
    return (
        <section
            className="flex-1 relative bg-slate-200 flex items-center justify-center overflow-hidden p-12"
        >
            {/* Studio Environment Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#f8fafc,_#cbd5e1)] opacity-100" />
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

            {/* Studio Lighting Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/10 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

            {/* High-Fidelity Stage */}
            <div className="relative z-10 w-full max-w-[500px] aspect-[1/2] flex flex-col items-center">
                {/* Floor Reflection and Shadow */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[140%] h-32 bg-black/15 blur-[50px] rounded-full" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[100%] h-8 bg-black/10 blur-[15px] rounded-full" />

                {/* Door Frame & Door */}
                <div className="w-full h-full bg-stone-100 border-[20px] border-stone-200 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3),_0_30px_60px_-30px_rgba(0,0,0,0.3)] rounded-sm relative overflow-visible flex items-center justify-center">
                    {/* Inner Frame Detail */}
                    <div className="absolute inset-0 border border-slate-400/20" />

                    {/* The Door Product */}
                    <div className="w-[calc(100%-12px)] h-[calc(100%-12px)] relative">
                        <DoorObject />
                    </div>
                </div>

                {/* Descriptive Shadow / Floor Line */}
                <div className="mt-12 text-slate-400 font-bold text-xs tracking-[0.3em] uppercase">
                    Studio Configuration Engine
                </div>
            </div>

            {/* Sub-UI Info */}
            <div className="absolute bottom-10 right-10 text-slate-400 text-[10px] font-mono tracking-widest uppercase flex items-center gap-4">
                <span>Rendering: CSS-PBR v2.1</span>
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
            </div>

            {/* Subtle Rim Light Overlay */}
            <div className="absolute inset-0 border-[40px] border-transparent shadow-[inset_0_0_150px_rgba(255,255,255,0.2)] pointer-events-none" />
        </section>
    );
}
