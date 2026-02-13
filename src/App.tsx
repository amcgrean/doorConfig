import { Sidebar } from './components/UI/Sidebar';
import { Visualizer } from './components/Visualizer/Visualizer';

function App() {
  return (
    <div className="h-screen flex flex-col bg-background text-slate-900 font-sans overflow-hidden">
      {/* Header */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-20 shadow-sm relative">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/30">
            W
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight text-slate-900 leading-none">Wausau</h1>
            <span className="text-xs font-medium text-slate-500 tracking-wide uppercase">Door Configurator</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-5 rounded-lg shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5">
            Save Project
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Center Visualizer */}
        <Visualizer />
      </main>
    </div>
  )
}

export default App
