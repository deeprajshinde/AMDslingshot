export default function HealthProfile() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 pb-32">
      {/* Hero Profile Section */}
      <section className="flex flex-col md:flex-row gap-12 items-end mb-16">
        <div className="relative">
          <div className="w-48 h-64 rounded-xl overflow-hidden shadow-[0_40px_60px_-10px_rgba(27,28,26,0.05)] rotate-[-2deg] bg-surface-container-low">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&fit=crop" alt="Elena Korbut"/>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-secondary-container px-6 py-2 rounded-full shadow-[0_40px_60px_-10px_rgba(27,28,26,0.05)]">
            <span className="font-headline italic text-on-secondary-container">Vibrant Vegan</span>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-primary mb-4">Elena Korbut</h1>
          <p className="text-on-surface-variant max-w-xl leading-relaxed text-lg">
            Savoring the rhythm of seasonal greens and mindful movement. Currently on a 14-day streak of botanical hydration.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-5 py-2 rounded-full bg-primary-fixed-dim text-on-primary-fixed-variant text-sm font-semibold uppercase tracking-wider">Level 24 Alchemist</span>
            <span className="px-5 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-semibold uppercase tracking-wider">750km Logged</span>
          </div>
        </div>
      </section>

      {/* Bento Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
        {/* Weekly Calories Chart */}
        <div className="md:col-span-8 bg-surface-container-low rounded-lg p-8 relative overflow-hidden flex flex-col justify-between">
          <div>
            <h3 className="font-headline text-2xl font-bold text-primary">Nourishment Balance</h3>
            <p className="text-on-surface-variant font-medium">Daily average: 1,840 kcal</p>
          </div>
          <div className="flex items-end justify-between h-32 gap-2 mt-4">
            <div className="flex-1 bg-primary/10 rounded-t-full relative group">
              <div className="absolute bottom-0 w-full bg-primary rounded-t-full transition-all duration-700 h-[60%]"></div>
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100">M</span>
            </div>
            <div className="flex-1 bg-primary/10 rounded-t-full relative group">
              <div className="absolute bottom-0 w-full bg-primary rounded-t-full transition-all duration-700 h-[85%]"></div>
            </div>
            <div className="flex-1 bg-primary/10 rounded-t-full relative group">
              <div className="absolute bottom-0 w-full bg-primary rounded-t-full transition-all duration-700 h-[70%]"></div>
            </div>
            <div className="flex-1 bg-secondary-container/30 rounded-t-full relative group">
              <div className="absolute bottom-0 w-full bg-secondary rounded-t-full transition-all duration-700 h-[95%]"></div>
            </div>
            <div className="flex-1 bg-primary/10 rounded-t-full relative group">
              <div className="absolute bottom-0 w-full bg-primary rounded-t-full transition-all duration-700 h-[55%]"></div>
            </div>
            <div className="flex-1 bg-primary/10 rounded-t-full relative group">
              <div className="absolute bottom-0 w-full bg-primary rounded-t-full transition-all duration-700 h-[40%]"></div>
            </div>
            <div className="flex-1 bg-primary/10 rounded-t-full relative group border-2 border-primary/20">
              <div className="absolute bottom-0 w-full bg-primary/20 rounded-t-full h-[10%] animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Water Intake Circle */}
        <div className="md:col-span-4 bg-primary-container rounded-lg p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-9xl">water_drop</span>
          </div>
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
              <circle className="text-white/10" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
              <circle className="text-secondary-fixed" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="91.1" strokeLinecap="round" strokeWidth="8"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-on-primary">2.4</span>
              <span className="text-[10px] text-on-primary/60 uppercase tracking-widest">Liters</span>
            </div>
          </div>
          <p className="text-on-primary mt-6 font-headline italic">Hydration Peak</p>
          <p className="text-on-primary-container text-xs mt-1 italic">92% of your daily goal achieved</p>
        </div>

        {/* Weight Progress */}
        <div className="md:col-span-4 bg-surface-container-highest rounded-lg p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-primary">monitor_weight</span>
            <span className="text-primary font-bold bg-white/50 px-3 py-1 rounded-full text-xs">-1.2kg this month</span>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-primary">64.5<span className="text-lg font-normal ml-1">kg</span></h4>
            <p className="text-on-surface-variant text-sm mt-2">Steady progress toward your target of 62kg. Mindful consistency is key.</p>
          </div>
        </div>

        {/* Macro Distribution */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-lg p-8 shadow-[0_40px_60px_-10px_rgba(27,28,26,0.05)] grid grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <div className="h-1 bg-secondary-container rounded-full w-full relative">
              <div className="absolute left-0 top-0 h-full bg-secondary w-3/4 rounded-full"></div>
            </div>
            <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Carbs</span>
            <span className="text-xl font-bold text-primary">180g</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-1 bg-tertiary-fixed rounded-full w-full relative">
              <div className="absolute left-0 top-0 h-full bg-tertiary w-1/2 rounded-full"></div>
            </div>
            <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Protein</span>
            <span className="text-xl font-bold text-primary">65g</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-1 bg-primary-fixed rounded-full w-full relative">
              <div className="absolute left-0 top-0 h-full bg-primary w-1/3 rounded-full"></div>
            </div>
            <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Fats</span>
            <span className="text-xl font-bold text-primary">42g</span>
          </div>
          <div className="col-span-3 pt-4 border-t border-outline-variant/10">
            <p className="text-sm italic text-on-surface-variant">Your intake is perfectly aligned with the <span className="text-primary font-bold">Vibrant Vegan</span> profile.</p>
          </div>
        </div>
      </div>

      {/* Settings & Preferences Section */}
      <section className="mt-24">
        <h2 className="font-headline text-4xl font-bold text-primary mb-12">Your Sanctuary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="group cursor-pointer flex items-center justify-between p-6 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-primary">restaurant_menu</span>
                <div>
                  <h4 className="font-bold text-primary">Dietary Architecture</h4>
                  <p className="text-sm text-on-surface-variant">Modify your vegan filters and allergies</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform">chevron_right</span>
            </div>
            <div className="group cursor-pointer flex items-center justify-between p-6 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-primary">notifications_active</span>
                <div>
                  <h4 className="font-bold text-primary">Mindful Prompts</h4>
                  <p className="text-sm text-on-surface-variant">Control meal and hydration reminders</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform">chevron_right</span>
            </div>
          </div>
          <div className="space-y-8">
            <div className="group cursor-pointer flex items-center justify-between p-6 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors">
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-primary">security</span>
                <div>
                  <h4 className="font-bold text-primary">Privacy &amp; Data</h4>
                  <p className="text-sm text-on-surface-variant">Manage your biometrics and health logs</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:translate-x-1 transition-transform">chevron_right</span>
            </div>
            <div className="group cursor-pointer flex items-center justify-between p-6 rounded-lg bg-tertiary-fixed/30 hover:bg-tertiary-fixed/50 transition-colors">
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-tertiary">logout</span>
                <div>
                  <h4 className="font-bold text-tertiary">Step Away</h4>
                  <p className="text-sm text-tertiary/60">Sign out of your account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
