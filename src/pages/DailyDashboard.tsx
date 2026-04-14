export default function DailyDashboard() {
  return (
    <div className="px-6 max-w-4xl mx-auto">
      {/* Hero Section: Editorial Welcome */}
      <section className="mt-12 mb-16">
        <div className="relative">
          <div className="absolute -top-12 -right-8 w-64 h-64 bg-secondary-container opacity-20 rounded-full blur-3xl -z-10"></div>
          <p className="text-on-surface-variant font-medium tracking-widest uppercase text-xs mb-3">Tuesday, Oct 24</p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight max-w-lg">
            Nurturing your body, <span className="italic font-normal">naturally.</span>
          </h1>
        </div>
      </section>

      {/* Bento Grid: Health Score & Hydration */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
        {/* Health Score Card */}
        <div className="md:col-span-7 bg-primary-container text-on-primary p-8 rounded-lg relative overflow-hidden flex flex-col justify-between min-h-[320px]">
          <div className="relative z-10">
            <h3 className="text-on-primary-container text-sm font-bold uppercase tracking-widest mb-2">Daily Health Score</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-7xl font-bold font-serif">84</span>
              <span className="text-on-primary-container text-xl font-medium">/100</span>
            </div>
            <p className="mt-4 text-on-primary-container max-w-xs text-sm leading-relaxed">Your metabolic rate is peaking. Excellent protein intake today.</p>
          </div>
          {/* Meter Visualization */}
          <div className="mt-8 relative z-10 flex gap-1 items-end h-16">
            <div className="w-2 h-1/2 bg-on-primary-container/20 rounded-full"></div>
            <div className="w-2 h-2/3 bg-on-primary-container/20 rounded-full"></div>
            <div className="w-2 h-3/4 bg-secondary-container rounded-full"></div>
            <div className="w-2 h-full bg-secondary-container rounded-full"></div>
            <div className="w-2 h-5/6 bg-secondary-container rounded-full"></div>
            <div className="w-2 h-2/3 bg-on-primary-container/20 rounded-full"></div>
            <div className="w-2 h-1/2 bg-on-primary-container/20 rounded-full"></div>
          </div>
          {/* Abstract Shape Decor */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary-container/10 rounded-full blur-2xl"></div>
        </div>

        {/* Hydration Tracker */}
        <div className="md:col-span-5 bg-surface-container-low p-8 rounded-lg flex flex-col justify-between">
          <div>
            <h3 className="text-on-surface-variant text-sm font-bold uppercase tracking-widest mb-6">Hydration</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-4xl font-serif font-bold text-primary">1.8 <span className="text-lg font-sans font-medium text-on-surface-variant">Liters</span></span>
                <span className="text-on-surface-variant text-sm">Goal: 2.5L</span>
              </div>
              <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[72%] rounded-full"></div>
              </div>
            </div>
          </div>
          <button className="mt-8 flex items-center justify-center gap-2 bg-white text-primary font-bold py-4 rounded-DEFAULT shadow-sm hover:scale-[1.02] active:scale-95 transition-all">
            <span className="material-symbols-outlined">add</span>
            Add 250ml
          </button>
        </div>
      </div>

      {/* Horizontal Scroll: Today's Meals */}
      <section className="mb-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Today's Meals</h2>
            <p className="text-on-surface-variant italic">Crafted for your Low-Carb profile</p>
          </div>
          <a className="text-primary font-bold text-sm border-b-2 border-secondary-container pb-1" href="#plan">View Full Plan</a>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-6 pb-4 -mx-6 px-6">
          {/* Meal Card: Breakfast */}
          <div className="flex-none w-72 group">
            <div className="relative h-96 rounded-lg overflow-hidden mb-4">
              <img alt="Breakfast meal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=800&fit=crop"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 inline-block">Breakfast</span>
                <h4 className="text-xl font-bold font-serif leading-tight">Berry &amp; Chia Power Bowl</h4>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-on-surface-variant uppercase tracking-tighter">
              <span>420 Cal</span>
              <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
              <span>12g Protein</span>
            </div>
          </div>
          {/* Meal Card: Lunch */}
          <div className="flex-none w-72 group">
            <div className="relative h-96 rounded-lg overflow-hidden mb-4">
              <img alt="Lunch meal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&fit=crop"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 inline-block">Lunch</span>
                <h4 className="text-xl font-bold font-serif leading-tight">Mediterranean Zen Salad</h4>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-on-surface-variant uppercase tracking-tighter">
              <span>580 Cal</span>
              <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
              <span>34g Protein</span>
            </div>
          </div>
          {/* Meal Card: Dinner */}
          <div className="flex-none w-72 group">
            <div className="relative h-96 rounded-lg overflow-hidden mb-4">
              <img alt="Dinner meal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&fit=crop"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 inline-block">Dinner</span>
                <h4 className="text-xl font-bold font-serif leading-tight">Wild Salmon &amp; Asparagus</h4>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-on-surface-variant uppercase tracking-tighter">
              <span>610 Cal</span>
              <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
              <span>42g Protein</span>
            </div>
          </div>
        </div>
      </section>

      {/* Insights / Tips Section */}
      <section className="bg-tertiary-fixed/30 p-8 rounded-lg mb-12 border border-tertiary-fixed-dim/20">
        <div className="flex gap-6 items-start">
          <span className="material-symbols-outlined text-tertiary text-4xl">lightbulb</span>
          <div>
            <h3 className="text-tertiary font-serif text-xl font-bold mb-2">Chef's Note</h3>
            <p className="text-on-tertiary-fixed-variant leading-relaxed">Try adding a pinch of sea salt and lemon zest to your lunch to activate digestive enzymes. It complements the avocado perfectly!</p>
          </div>
        </div>
      </section>
    </div>
  );
}
