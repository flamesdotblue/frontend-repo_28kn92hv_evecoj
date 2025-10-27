import React from 'react';
import { Home, FileText, Upload, Settings, User } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active = false }) => (
  <button
    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors ${
      active ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'
    }`}
  >
    <Icon size={18} />
    <span>{label}</span>
  </button>
);

const Sidebar = () => {
  return (
    <aside className="hidden md:flex md:w-64 flex-col gap-2 rounded-2xl bg-neutral-900/60 border border-white/10 p-4 text-white backdrop-blur">
      <div className="flex items-center gap-3 px-2 py-1.5">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-rose-500 to-pink-400" />
        <div>
          <p className="text-sm font-semibold">Flames Workspace</p>
          <p className="text-xs text-white/60">Secure • Unified</p>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <NavItem icon={Home} label="Dashboard" active />
        <NavItem icon={FileText} label="Notes" />
        <NavItem icon={Upload} label="PDF Sessions" />
      </div>

      <div className="mt-auto space-y-1 pt-4 border-t border-white/10">
        <NavItem icon={User} label="Account" />
        <NavItem icon={Settings} label="Settings" />
      </div>
    </aside>
  );
};

export default Sidebar;
