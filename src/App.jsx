import React from 'react';
import Sidebar from './components/Sidebar';
import HeroCover from './components/HeroCover';
import NotesPanel from './components/NotesPanel';
import QuickActions from './components/QuickActions';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      {/* Page container */}
      <div className="mx-auto max-w-7xl px-4 py-6 md:py-8">
        {/* Hero Cover */}
        <HeroCover />

        {/* Main content area */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[16rem_1fr]">
          {/* Sidebar */}
          <Sidebar />

          {/* Content column */}
          <div className="flex flex-col gap-6">
            {/* Notes + Quick Actions */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.5fr_1fr]">
              <NotesPanel />
              <QuickActions />
            </div>

            {/* Footer hint */}
            <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-4 text-sm text-white/70">
              Tip: When connected to the API, an interceptor will attach your Firebase ID Token to each secure request.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
