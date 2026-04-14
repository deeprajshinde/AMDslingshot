export default function FoodDiscovery() {
  return (
    <div className="px-6 max-w-7xl mx-auto space-y-10 mt-6 pb-20">
      <section className="space-y-4">
        <div className="relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-on-surface-variant">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input className="w-full bg-surface-container-high border-none rounded-xl py-5 pl-14 pr-6 focus:ring-0 focus:border-b-2 focus:border-secondary transition-all text-on-surface placeholder:text-on-surface-variant/60 shadow-sm" placeholder="Search for recipes, ingredients..." type="text"/>
        </div>
      </section>
      
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-tertiary font-bold tracking-widest uppercase text-[10px]">Curation</span>
            <h2 className="text-4xl font-headline font-bold text-primary mt-1">Explore Library</h2>
          </div>
          <button className="text-primary font-bold text-sm border-b border-primary/20 pb-1">Filter All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          <button className="flex-none px-6 py-3 rounded-full bg-secondary-container text-on-secondary-container font-bold text-sm flex items-center gap-2 hover:scale-[1.02] shadow-sm">
            <span className="material-symbols-outlined text-sm">star</span>
            High Protein
          </button>
          <button className="flex-none px-6 py-3 rounded-full bg-surface-container-low text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-colors">
            Under 30 Mins
          </button>
          <button className="flex-none px-6 py-3 rounded-full bg-surface-container-low text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-colors">
            Immunity Boost
          </button>
          <button className="flex-none px-6 py-3 rounded-full bg-surface-container-low text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-colors">
            Vegan Comfort
          </button>
          <button className="flex-none px-6 py-3 rounded-full bg-surface-container-low text-on-surface-variant font-semibold text-sm hover:bg-surface-container-high transition-colors">
            Low Carb
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col gap-4 group">
          <div className="relative rounded-lg overflow-hidden h-72 shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&fit=crop" alt="Wild Atlantic Poke"/>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-primary text-xs font-bold flex items-center gap-1 shadow-sm">
              <span className="material-symbols-outlined text-xs">timer</span>
              15 Mins
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-headline font-bold text-primary leading-tight">Wild Atlantic Poke</h3>
              <span className="text-on-surface-variant/70 text-xs font-bold py-1 px-2 bg-surface-container-low rounded-md">340 kcal</span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-[90%]">Sustainably sourced salmon paired with ginger-soy glaze and fresh garden greens.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 group">
          <div className="relative rounded-lg overflow-hidden h-72 shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&fit=crop" alt="Goddess Grain Bowl"/>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-primary text-xs font-bold flex items-center gap-1 shadow-sm">
              <span className="material-symbols-outlined text-xs">timer</span>
              22 Mins
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-headline font-bold text-primary leading-tight">Goddess Grain Bowl</h3>
              <span className="text-on-surface-variant/70 text-xs font-bold py-1 px-2 bg-surface-container-low rounded-md">410 kcal</span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-[90%]">Ancient grains, sprouted lentils, and a citrus-tahini dressing for sustained energy.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 group">
          <div className="relative rounded-lg overflow-hidden h-72 shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800&fit=crop" alt="Sourdough Sunrise"/>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-primary text-xs font-bold flex items-center gap-1 shadow-sm">
              <span className="material-symbols-outlined text-xs">timer</span>
              10 Mins
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-headline font-bold text-primary leading-tight">Sourdough Sunrise</h3>
              <span className="text-on-surface-variant/70 text-xs font-bold py-1 px-2 bg-surface-container-low rounded-md">280 kcal</span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-[90%]">Organic sourdough with smashed avocado, hemp seeds, and a soft-boiled farm egg.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 group">
          <div className="relative rounded-lg overflow-hidden h-72 shadow-lg transition-transform duration-500 group-hover:scale-[1.02]">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&fit=crop" alt="Herbed Cedar Salmon"/>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-primary text-xs font-bold flex items-center gap-1 shadow-sm">
              <span className="material-symbols-outlined text-xs">timer</span>
              30 Mins
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-headline font-bold text-primary leading-tight">Herbed Cedar Salmon</h3>
              <span className="text-on-surface-variant/70 text-xs font-bold py-1 px-2 bg-surface-container-low rounded-md">520 kcal</span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-[90%]">Omega-rich salmon roasted with thyme, rosemary and charred lemon asparagus.</p>
          </div>
        </div>
      </section>

      <section className="bg-primary-container rounded-lg p-10 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="flex-1 space-y-6 relative z-10 text-left">
          <h2 className="text-4xl font-headline font-bold text-on-primary">Personalized Chef Recommendations</h2>
          <p className="text-on-primary-container text-lg max-w-lg">Based on your activity this week, we've curated a high-recovery meal plan to keep your immunity strong.</p>
          <button className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-DEFAULT font-bold text-md hover:scale-105 transition-transform">Get My Plan</button>
        </div>
        <div className="flex-1 flex gap-4 relative z-10">
          <div className="w-1/2 rounded-lg h-64 overflow-hidden shadow-2xl">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&fit=crop" alt="soup"/>
          </div>
          <div className="w-1/2 rounded-lg h-64 overflow-hidden mt-12 shadow-2xl">
            <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=800&fit=crop" alt="salad"/>
          </div>
        </div>
      </section>
    </div>
  );
}
