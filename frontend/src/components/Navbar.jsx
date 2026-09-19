import React from 'react';
import { Activity, ShieldCheck, Database, Server, Terminal } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="glass-panel sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 p-0.5 shadow-lg shadow-teal-500/20 flex items-center justify-center">
            <div className="h-full w-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <Activity className="h-5 w-5 text-teal-400" />
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Smart Hospital Management
            </h1>
            <p className="text-xs text-slate-400 flex items-center gap-1.5">
              <span className="font-semibold text-teal-400">Phase 1 Architecture</span> • B.Tech Final Project Platform
            </p>
          </div>
        </div>

        {/* Stack Badges */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/50 text-xs font-medium text-slate-300">
            <Server className="w-3.5 h-3.5 text-teal-400" />
            <span>Java 21 / Spring Boot 3.3</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/50 text-xs font-medium text-slate-300">
            <Database className="w-3.5 h-3.5 text-cyan-400" />
            <span>PostgreSQL / H2</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/50 text-xs font-medium text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Spring Security + JWT</span>
          </div>
        </div>
      </div>
    </header>
  );
}
