import React from 'react';
import Navbar from './components/Navbar';
import HealthCheckCard from './components/HealthCheckCard';
import { Layers, ShieldCheck, Database, FileText, CheckCircle2, Workflow, ArrowRight } from 'lucide-react';

export default function App() {
  const nextPhases = [
    { title: 'Phase 2: Database Entities & Repositories', desc: 'User, Patient, Doctor, Department & Audit Log schema mapping.' },
    { title: 'Phase 3: JWT Security & Authentication', desc: 'Stateless JWT auth controller, login API, password hashing.' },
    { title: 'Phase 4: Core Hospital Modules', desc: 'Patient registration, Doctor management, Double-booking appointment engine.' },
    { title: 'Phase 5: Medical, Pharmacy & Billing', desc: 'Prescriptions, auto-inventory reduction, invoice generation & PDF export.' }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 space-y-8">
        {/* Welcome Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-900/60 via-slate-800 to-indigo-950/60 p-8 border border-slate-700/60 shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30 mb-4">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              Phase 1 Execution Complete
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Hospital Platform Foundation Ready
            </h1>
            <p className="text-slate-300 text-base mt-3 leading-relaxed">
              The project structure, Spring Boot 3.3 REST service layer, Maven build configuration, Swagger/OpenAPI setup, 
              React + Vite frontend, and multi-tier architectural documentation have been established.
            </p>
          </div>
        </div>

        {/* Live API Health Check Section */}
        <HealthCheckCard />

        {/* Architecture & Documentation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Modular Architecture</h3>
              <p className="text-sm text-slate-400 mt-2">
                Structured Controller-Service-Repository layout designed for scalable hospital operations.
              </p>
            </div>
            <a
              href="#docs"
              onClick={(e) => { e.preventDefault(); alert("Documentation located in project docs/ folder!"); }}
              className="mt-4 text-xs font-semibold text-teal-400 hover:text-teal-300 inline-flex items-center gap-1"
            >
              <span>Explore docs/architecture.md</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Database Design</h3>
              <p className="text-sm text-slate-400 mt-2">
                Relational schema supporting Patients, Doctors, Appointments, Lab Tests, Inventory, and Invoices.
              </p>
            </div>
            <a
              href="#docs"
              onClick={(e) => { e.preventDefault(); alert("Documentation located in project docs/ folder!"); }}
              className="mt-4 text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
            >
              <span>Explore docs/database-design.md</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-700/50 flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Faculty Demo Workflow</h3>
              <p className="text-sm text-slate-400 mt-2">
                9-step scripted presentation flow from Receptionist booking to Pharmacist dispensing & Accountant billing.
              </p>
            </div>
            <a
              href="#docs"
              onClick={(e) => { e.preventDefault(); alert("Documentation located in project docs/ folder!"); }}
              className="mt-4 text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
            >
              <span>Explore docs/demo-flow.md</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Phase Roadmap Overview */}
        <div className="glass-card rounded-2xl p-6 border border-slate-700/50">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-400" />
            <span>Development Roadmap & Next Phases</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {nextPhases.map((phase, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Step {idx + 2}</span>
                <h4 className="text-sm font-semibold text-white mt-1">{phase.title}</h4>
                <p className="text-xs text-slate-400 mt-1">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        Smart Hospital Management Platform • Designed for B.Tech Final Year Presentation
      </footer>
    </div>
  );
}
