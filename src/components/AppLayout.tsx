import { Outlet, NavLink } from 'react-router-dom';

export function AppLayout() {
  const navItems = [
    { to: "/", icon: "dashboard", label: "Today" },
    { to: "/explore", icon: "restaurant", label: "Explore" },
    { to: "/audit", icon: "analytics", label: "Audit" },
    { to: "/intelligence", icon: "psychology", label: "Intelligence" },
    { to: "/profile", icon: "person", label: "Profile" }
  ];

  return (
    <div className="bg-surface/50 sm:bg-surface-dim min-h-screen flex justify-center sm:py-8">
      <div className="w-full max-w-[390px] bg-surface text-on-surface min-h-screen sm:min-h-[844px] pb-32 relative shadow-2xl sm:rounded-[3rem] overflow-x-hidden overflow-y-auto">
        {/* TopAppBar */}
        <header className="w-full sticky top-0 z-50 bg-[#fbf9f5]/90 dark:bg-emerald-950/20 backdrop-blur-xl flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant/20">
              <img 
                alt="user profile photo" 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
              />
            </div>
            <span className="font-serif italic text-2xl text-[#1b4332] dark:text-[#a5d0b9]">HealthyKhana</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-[#1b4332] dark:text-[#a5d0b9] p-2 hover:bg-[#f5f3ef] transition-colors rounded-full transition-transform active:scale-95">notifications</button>
          </div>
        </header>

        {/* Main Content */}
        <main className="w-full overflow-x-hidden">
          <Outlet />
        </main>

        {/* BottomNavBar */}
        <nav className="absolute bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-[#fbf9f5]/90 dark:bg-emerald-950/80 backdrop-blur-xl rounded-t-[3rem] shadow-[0_-10px_40px_-15px_rgba(27,67,50,0.1)]">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => 
                isActive 
                  ? "flex flex-col items-center justify-center bg-[#dfec60] dark:bg-[#1b4332] text-[#1b4332] dark:text-[#dfec60] rounded-full px-4 py-2 transition-all duration-300 ease-out scale-105"
                  : "flex flex-col items-center justify-center text-[#1b4332]/40 dark:text-emerald-100/40 p-2 hover:scale-[1.15] transition-transform"
              }
            >
              {({ isActive }) => (
                <>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                    {item.icon}
                  </span>
                  <span className="font-sans text-[9px] font-semibold uppercase tracking-widest mt-1 hidden sm:block">
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
