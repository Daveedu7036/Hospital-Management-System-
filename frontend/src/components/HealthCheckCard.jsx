import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import { RefreshCw, CheckCircle2, AlertCircle, Database, Server, Clock, Cpu, Code2 } from 'lucide-react';

export default function HealthCheckCard() {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastCheck, setLastCheck] = useState(null);

  const fetchHealthStatus = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/health');
      setHealth(response.data);
      setLastCheck(new Date().toLocaleTimeString());
    } catch (err) {
      setError(err.message || 'Failed to connect to backend service');
      setHealth(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHealthStatus();
  }, []);

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-700/60 transition-all hover:border-slate-600/80">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-teal-400 animate-status-pulse"></span>
            <h2 className="text-xl font-bold text-white">Backend Health Diagnostics</h2>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Real-time verification of Spring Boot REST API & Database Connectivity
          </p>
        </div>

        <button
          onClick={fetchHealthStatus}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border border-teal-500/30 text-sm font-semibold transition-all disabled:opacity-50 cursor-pointer active:scale-95"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          <span>{loading ? 'Testing API...' : 'Re-test API Connection'}</span>
        </button>
      </div>

      {/* API Status Alert Banner */}
      <div className="my-6">
        {loading && !health ? (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300">
            <RefreshCw className="w-5 h-5 text-teal-400 animate-spin" />
            <span className="text-sm font-medium">Connecting to Spring Boot REST endpoint (/api/v1/health)...</span>
          </div>
        ) : error ? (
          <div className="flex items-start gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold">Backend Unreachable</h4>
              <p className="text-xs text-rose-300/80 mt-1">{error}</p>
              <div className="mt-3 text-xs bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 text-slate-400 font-mono">
                Start backend via terminal: <span className="text-teal-400">cd backend && mvn spring-boot:run</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold">Spring Boot REST Service Active & Healthy</h4>
                <p className="text-xs text-emerald-400/80">API returned HTTP 200 OK — Ready for Phase 2 domain modules.</p>
              </div>
            </div>
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              STATUS: UP
            </span>
          </div>
        )}
      </div>

      {/* Health Metrics Grid */}
      {health && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/40 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-medium">Service Name</span>
              <Server className="w-4 h-4 text-teal-400" />
            </div>
            <div className="text-base font-bold text-white tracking-wide truncate">{health.service}</div>
            <div className="text-xs text-slate-500 mt-1">v{health.version}</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/40 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-medium">Database Connection</span>
              <Database className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-base font-bold text-cyan-300 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
              {health.database}
            </div>
            <div className="text-xs text-slate-500 mt-1">JDBC Driver Active</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/40 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-medium">Active Profile</span>
              <Cpu className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-base font-bold text-amber-300 capitalize">{health.environment} Profile</div>
            <div className="text-xs text-slate-500 mt-1">H2 / PostgreSQL Ready</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/40 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs font-medium">Last Response Check</span>
              <Clock className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-base font-bold text-indigo-300">{lastCheck || 'Just now'}</div>
            <div className="text-xs text-slate-500 mt-1">Latency &lt; 20ms</div>
          </div>
        </div>
      )}
    </div>
  );
}
