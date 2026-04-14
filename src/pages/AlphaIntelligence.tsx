export default function AlphaIntelligence() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 pt-8 pb-12">
      {/* Editorial Header */}
      <section className="mb-12">
        <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-secondary mb-2 block">System Status: Active</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary leading-tight max-w-2xl">
          Alpha <span className="italic font-normal">Intelligence</span>
        </h1>
        <p className="text-on-surface-variant text-lg mt-4 max-w-lg leading-relaxed">
          Your goals aren't static. Our neural engine recalibrates your nutritional roadmap based on real-time physiological data.
        </p>
      </section>

      {/* Actionable Insight (Highlighted) */}
      <section className="mb-12">
        <div className="bg-primary-container text-on-primary-container p-8 md:p-12 rounded-lg relative overflow-hidden group">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-secondary/10 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-secondary-container text-on-secondary-container p-4 rounded-xl shrink-0">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">Today's Recalibration</h3>
              <p className="text-on-primary-container text-xl leading-relaxed font-light">
                "Your sleep was low (<span className="font-bold text-secondary-fixed">5h 12m</span>). To compensate for metabolic stress and maintain cognitive focus, we have <span className="italic underline decoration-secondary">increased your Carb budget by 15%</span> and adjusted your caffeine window."
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-white/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">+240kcal Adjusted</span>
                <span className="bg-white/10 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Cortisol Recovery Mode</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Layout for Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* What-If Simulator (Toggle Section) */}
        <section className="lg:col-span-7 bg-surface-container-low rounded-lg p-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-serif font-bold text-primary">"What-If" Simulator</h2>
            <span className="material-symbols-outlined text-outline">info</span>
          </div>
          <div className="flex flex-col gap-8">
            {/* Toggle Switch Area */}
            <div className="bg-surface-container-lowest p-2 rounded-full flex items-center relative h-16 shadow-sm">
              {/* Active Indicator (Sliding Background) */}
              <div className="absolute inset-y-1 left-1 w-[48%] bg-primary rounded-full transition-all duration-500 ease-in-out"></div>
              <button className="flex-1 relative z-10 text-sm font-bold uppercase tracking-widest text-white h-full transition-colors duration-500">
                Aggressive Weight Loss
              </button>
              <button className="flex-1 relative z-10 text-sm font-bold uppercase tracking-widest text-primary/40 h-full transition-colors duration-500">
                Performance / Bulking
              </button>
            </div>
            {/* Macro Shift Visualization */}
            <div className="grid grid-cols-3 gap-4 h-64 items-end px-4">
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-full bg-primary-container/20 rounded-t-xl relative overflow-hidden transition-all duration-500 group-hover:bg-primary-container/30 h-[80%]">
                  <div className="absolute bottom-0 left-0 w-full bg-primary h-[60%] rounded-t-xl"></div>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold text-outline uppercase tracking-tighter">Protein</p>
                  <p className="text-lg font-serif font-bold">185g</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-full bg-secondary-container/20 rounded-t-xl relative overflow-hidden transition-all duration-500 group-hover:bg-secondary-container/30 h-[50%]">
                  <div className="absolute bottom-0 left-0 w-full bg-secondary h-[40%] rounded-t-xl"></div>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold text-outline uppercase tracking-tighter">Carbs</p>
                  <p className="text-lg font-serif font-bold">110g</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 group">
                <div className="w-full bg-tertiary-fixed/20 rounded-t-xl relative overflow-hidden transition-all duration-500 group-hover:bg-tertiary-fixed/30 h-[40%]">
                  <div className="absolute bottom-0 left-0 w-full bg-tertiary h-[30%] rounded-t-xl"></div>
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold text-outline uppercase tracking-tighter">Fats</p>
                  <p className="text-lg font-serif font-bold">45g</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed bg-surface-container p-4 rounded-xl italic">
              *Estimated achievement: <span className="text-primary font-bold">Target Weight in 14 days.</span> High metabolic demand predicted for days 3-5.
            </p>
          </div>
        </section>

        {/* Biometric Sync Status */}
        <section className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-surface-container-highest rounded-lg p-8 flex-1">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-serif font-bold text-primary">Biometric Sync</h2>
              <div className="flex items-center gap-2 text-secondary">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest">Live Connect</span>
              </div>
            </div>
            <div className="space-y-6">
              {/* Biometric Row */}
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined">favorite</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-outline">Heart Rate</p>
                    <p className="text-lg font-bold">62 BPM <span className="text-sm font-normal text-outline-variant">Resting</span></p>
                  </div>
                </div>
                <div className="h-8 w-24 bg-surface-container-low rounded overflow-hidden">
                  <div className="w-full h-full opacity-20 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                </div>
              </div>
              {/* Biometric Row */}
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined">footprint</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-outline">Steps</p>
                    <p className="text-lg font-bold">8,432 <span className="text-sm font-normal text-outline-variant">/ 10k</span></p>
                  </div>
                </div>
                <div className="w-24 h-2 bg-surface-container-low rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[84%]"></div>
                </div>
              </div>
              {/* Biometric Row */}
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined">bedtime</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-outline">Sleep</p>
                    <p className="text-lg font-bold">5h 12m <span className="text-tertiary text-xs font-bold">Low Alert</span></p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-tertiary">warning</span>
              </div>
            </div>
          </div>
          {/* Secondary Intelligence Card */}
          <div className="bg-secondary-container p-8 rounded-lg overflow-hidden relative">
            <div className="absolute right-[-10%] bottom-[-10%] opacity-20 transform rotate-12">
              <span className="material-symbols-outlined text-[8rem]" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            </div>
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-secondary-container mb-2">Alpha Projection</p>
              <h4 className="text-2xl font-serif font-bold text-on-secondary-container mb-4">Metabolic Efficiency: 92%</h4>
              <button className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest hover:scale-105 transition-transform">VIEW DEEP AUDIT</button>
            </div>
          </div>
        </section>
      </div>

      {/* Asymmetric Visual Break */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-lg overflow-hidden h-[400px]">
          <img alt="healthy food plate" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&fit=crop"/>
          <div className="absolute inset-0 bg-primary/20 backdrop-multiply"></div>
          <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg max-w-[240px] shadow-xl">
            <p className="font-serif italic text-xl text-primary">"The gut is the second brain."</p>
            <p className="text-xs text-outline mt-2 uppercase tracking-widest">Alpha Research Vol. 4</p>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-serif font-bold text-primary">Future-Proofing Your Microbiome</h2>
          <p className="text-on-surface-variant leading-relaxed">
            By analyzing biometric trends, Alpha Intelligence predicts inflammatory responses before they manifest. Your dinner tonight has been pre-selected to combat the high cortisol detected during your 2:00 PM session.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-secondary shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <p className="text-sm font-semibold">Proactive glucose management based on step variance.</p>
            </li>
            <li className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-secondary shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <p className="text-sm font-semibold">Adaptive hydration reminders synced with heart rate variability.</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
