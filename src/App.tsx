import { useState } from 'react';
import { Header } from './components/Header';
import { cn } from './lib/utils';
import { LayoutDashboard, Map, User, Euro } from 'lucide-react';

import { TabSynthese } from './components/TabSynthese';
import { TabRoadmap } from './components/TabRoadmap';
import { TabConsultante } from './components/TabConsultante';
import { TabInvestissement } from './components/TabInvestissement';

function App() {
  const [activeTab, setActiveTab] = useState('synthese');

  const tabs = [
    { id: 'synthese', label: 'Synthèse', icon: LayoutDashboard },
    { id: 'roadmap', label: 'Méthode', icon: Map },
    { id: 'consultante', label: 'Consultante', icon: User },
    { id: 'investissement', label: 'Investissement', icon: Euro },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />

      <main className="max-w-5xl mx-auto -mt-4 px-4 pb-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Tabs Navigation */}
          <div className="flex border-b border-gray-200 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap",
                    isActive
                      ? "text-[#3C39C4] border-b-2 border-[#3C39C4] bg-blue-50/30"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'synthese' && <TabSynthese onNavigate={setActiveTab} />}
            {activeTab === 'roadmap' && <TabRoadmap onNavigate={setActiveTab} />}
            {activeTab === 'consultante' && <TabConsultante />}
            {activeTab === 'investissement' && <TabInvestissement />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
