export default function MetabolicAudit() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-8 pb-32">
      {/* Header Section */}
      <section className="mb-12">
        <span className="text-secondary font-extrabold tracking-widest uppercase text-xs mb-2 block">Metabolic Insights</span>
        <h1 className="text-5xl font-bold text-primary mb-4 leading-tight">Audit Your Vitality</h1>
        <p className="text-on-surface-variant max-w-xl text-lg">A deep-tissue analysis of your nutritional patterns, glycemic responses, and long-term physiological trends.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Glycemic Impact Chart (Line Graph) */}
        <div className="md:col-span-12 lg:col-span-8 bg-surface-container-low rounded-lg p-8 relative overflow-hidden group">
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-1">Glycemic Impact</h2>
              <p className="text-sm text-on-surface-variant">24-hour glucose simulation based on carb complexity</p>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-lowest px-4 py-2 rounded-full shadow-sm">
              <span className="w-3 h-3 rounded-full bg-secondary-fixed animate-pulse"></span>
              <span className="text-xs font-bold text-primary tracking-wider uppercase">Live Sync</span>
            </div>
          </div>
          {/* SVG Graph Mockup */}
          <div className="h-64 w-full relative">
            <svg className="w-full h-full drop-shadow-2xl" viewBox="0 0 800 200">
              {/* Grid Lines */}
              <line stroke="#c1c8c2" strokeOpacity="0.2" x1="0" x2="800" y1="40" y2="40"></line>
              <line stroke="#c1c8c2" strokeOpacity="0.2" x1="0" x2="800" y1="100" y2="100"></line>
              <line stroke="#c1c8c2" strokeOpacity="0.2" x1="0" x2="800" y1="160" y2="160"></line>
              {/* Smooth Area Gradient */}
              <defs>
                <linearGradient id="gradientImpact" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#dfec60" stopOpacity="0.4"></stop>
                  <stop offset="100%" stopColor="#dfec60" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path d="M0,150 Q100,20 200,140 T400,160 T600,40 T800,130 V200 H0 Z" fill="url(#gradientImpact)"></path>
              {/* Main Line */}
              <path className="graph-line" d="M0,150 Q100,20 200,140 T400,160 T600,40 T800,130" fill="none" stroke="#1b4332" strokeLinecap="round" strokeWidth="4"></path>
              {/* Pulse Point */}
              <circle cx="600" cy="40" fill="#012d1d" r="6"></circle>
              <circle cx="600" cy="40" fill="#012d1d" fillOpacity="0.1" r="12"></circle>
            </svg>
            {/* Labels */}
            <div className="absolute bottom-0 w-full flex justify-between text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-tighter px-2">
              <span>08:00</span>
              <span>12:00</span>
              <span>16:00</span>
              <span>20:00</span>
              <span>00:00</span>
            </div>
            {/* Tooltip Simulation */}
            <div className="absolute top-4 left-[580px] bg-primary text-on-primary p-3 rounded-lg shadow-xl translate-y-[-100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <p className="text-[10px] uppercase font-bold text-primary-fixed-dim">Peak Impact</p>
              <p className="text-lg font-serif italic leading-none">Evening Pasta</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                <span className="text-xs">+42% Insulin Spike</span>
              </div>
            </div>
          </div>
        </div>

        {/* 7-Day Vitality Consistency (Bar Chart) */}
        <div className="md:col-span-12 lg:col-span-4 bg-surface-container-low rounded-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-1">Vitality Consistency</h2>
          <p className="text-sm text-on-surface-variant mb-8">7-day adherence to nutritional goals</p>
          <div className="flex items-end justify-between h-48 gap-2">
            {[60, 85, 40, 95, 75, 90, 88].map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className={`w-full bg-secondary-fixed/30 rounded-t-lg relative group h-[${val}%]`}>
                  <div className={`absolute bottom-0 w-full ${val < 50 ? 'bg-primary-container/40' : 'bg-secondary-fixed'} rounded-t-lg h-full`}></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold bg-primary text-on-primary px-1.5 py-0.5 rounded">{val}%</div>
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase">{['M','T','W','T','F','S','S'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Insight Card */}
        <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-6">
          <div className="bg-primary-container text-on-primary-container p-8 rounded-lg flex-1 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-4">psychology</span>
              <h3 className="text-2xl font-bold leading-tight mb-2">Efficiency Score</h3>
              <p className="text-primary-fixed-dim text-sm">Your metabolism is processing complex starches 12% faster than last month.</p>
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-end mb-2">
                <span className="text-4xl font-serif">84</span>
                <span className="text-xs uppercase tracking-widest opacity-60 font-bold">Optimal Range</span>
              </div>
              <div className="w-full bg-primary/30 h-1.5 rounded-full">
                <div className="w-[84%] h-full bg-secondary-fixed rounded-full shadow-[0_0_10px_#dfec60]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Nutrient Density Heatmap */}
        <div className="md:col-span-12 lg:col-span-8 bg-surface-container-low rounded-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-1">Density Heatmap</h2>
              <p className="text-sm text-on-surface-variant">Size = Volume, Color = Micronutrient Value</p>
            </div>
          </div>
          <div className="grid grid-cols-4 grid-rows-3 gap-2 h-80">
            <div className="col-span-2 row-span-2 bg-[#1b4332] rounded-md p-4 flex flex-col justify-between text-on-primary hover:scale-[1.02] transition-transform cursor-pointer">
              <span className="text-xs font-bold uppercase tracking-widest opacity-60">Leafy Greens</span>
              <span className="text-xl font-serif">Kale &amp; Spinach</span>
            </div>
            <div className="col-span-2 row-span-1 bg-[#4f0e00] rounded-md p-4 flex flex-col justify-between text-white hover:scale-[1.02] transition-transform cursor-pointer">
              <span className="text-xs font-bold uppercase tracking-widest opacity-60">Grains</span>
              <span className="text-lg">Refined Flour</span>
            </div>
            <div className="col-span-1 row-span-1 bg-[#dfec60] rounded-md p-4 flex flex-col justify-between text-primary hover:scale-[1.02] transition-transform cursor-pointer">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Fats</span>
              <span className="text-sm font-bold">Avocado</span>
            </div>
            <div className="col-span-1 row-span-2 bg-[#a5d0b9] rounded-md p-4 flex flex-col justify-between text-primary hover:scale-[1.02] transition-transform cursor-pointer">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Protein</span>
              <span className="text-sm font-bold leading-tight">Pasture Raised Eggs</span>
            </div>
            <div className="col-span-1 row-span-1 bg-surface-container-highest rounded-md p-4 flex flex-col justify-center items-center text-primary/40 hover:bg-surface-container-high transition-colors cursor-pointer">
              <span className="material-symbols-outlined">add</span>
            </div>
          </div>
        </div>

        {/* Body Composition Forecast (Expanded with Metabolic Trend) */}
        <div className="md:col-span-12 lg:col-span-12 bg-surface-container-lowest rounded-lg p-8 shadow-sm border border-outline-variant/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-1">Physiological Forecast</h2>
              <p className="text-sm text-on-surface-variant mb-8">90-day predictive composition modeling</p>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-on-surface-variant">Weight Trend</span>
                      <span className="text-sm font-bold text-primary">-2.4kg</span>
                    </div>
                    <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-primary"></div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary">trending_down</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-on-surface-variant">Predicted Muscle</span>
                      <span className="text-sm font-bold text-secondary">+0.8kg</span>
                    </div>
                    <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-secondary"></div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-secondary">analytics</span>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-outline-variant/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-tertiary">bolt</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-tertiary mb-1">Chef's Audit</p>
                    <p className="text-sm font-medium leading-relaxed">Increase leucine-rich protein at breakfast to maintain the muscle forecast curve.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Metabolic Trend Area Chart */}
            <div className="bg-surface-container-low/50 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-bold text-primary">Metabolic Trend</h3>
                  <p className="text-xs text-on-surface-variant">Last 30-day stability index</p>
                </div>
                <span className="text-xs font-bold text-secondary-fixed-dim bg-primary px-3 py-1 rounded-full">+14% Stability</span>
              </div>
              <div className="h-48 w-full relative">
                <svg className="w-full h-full" viewBox="0 0 400 150">
                  <defs>
                    <linearGradient id="gradMetabolic" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#a5d0b9" stopOpacity="0.4"></stop>
                      <stop offset="100%" stopColor="#a5d0b9" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M0,120 C50,110 80,140 120,90 C160,40 220,100 280,60 C320,30 360,50 400,40 V150 H0 Z" fill="url(#gradMetabolic)"></path>
                  <path d="M0,120 C50,110 80,140 120,90 C160,40 220,100 280,60 C320,30 360,50 400,40" fill="none" stroke="#3f6653" strokeLinecap="round" strokeWidth="2.5"></path>
                  <circle cx="120" cy="90" fill="#3f6653" r="3"></circle>
                  <circle cx="280" cy="60" fill="#3f6653" r="3"></circle>
                </svg>
                <div className="flex justify-between mt-4 text-[9px] font-bold text-on-surface-variant uppercase tracking-widest px-1">
                  <span>Day 1</span>
                  <span>Day 15</span>
                  <span>Today</span>
                </div>
              </div>
              <div className="mt-6 flex gap-4">
                <div className="flex-1 bg-surface-container-highest/50 rounded-lg p-3">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Peak Flux</p>
                  <p className="text-sm font-bold text-primary">Day 12</p>
                </div>
                <div className="flex-1 bg-surface-container-highest/50 rounded-lg p-3">
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase mb-1">Consistency</p>
                  <p className="text-sm font-bold text-primary">High</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
