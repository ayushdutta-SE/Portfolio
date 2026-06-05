import { useState } from 'react';
import { SiApachedatabricks, SiMicrosoftazure, SiPostman } from 'react-icons/si';
import { FaServer, FaDatabase, FaExchangeAlt } from 'react-icons/fa';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('ingest');

  const pipelineStages = {
    ingest: {
      title: "Data Ingestion & Secure Hybrid Connectivity",
      subtitle: "Stage 01 // Secure Extraction",
      tech: ["Azure Data Factory", "Self-Hosted Integration Runtime (SHIR)", "SQL Server"],
      details: "Engineered secure data extraction from legacy on-premises SQL Server instances into cloud native storage. Deployed and configured a Self-Hosted Integration Runtime (SHIR) inside a private network to guarantee high-integrity, zero-data-loss transit while bypassing public internet exposures.",
      telemetry: { throughput: "High Bandwidth", security: "TLS 1.2 / SHIR Encrypted", validation: "Pre-ingestion Schema Check" }
    },
    transform: {
      title: "Scalable Transformation & Data Cleansing",
      subtitle: "Stage 02 // PySpark Compute Engine",
      tech: ["Azure Databricks", "Delta Lake", "PySpark", "Informatica Parity"],
      details: "Re-engineered complex business legacy rules from Informatica PowerCenter into distributed PySpark scripts within Azure Databricks. Built metadata-driven validation tracks that execute type checking, schema enforcement, and null-value cleansing across target datasets prior to lake production loads.",
      telemetry: { processingTime: "Distributed Cluster Scaling", integrity: "100% Schema Match", engine: "Apache Spark Optimization" }
    },
    automate: {
      title: "Orchestration & Operational Telemetry",
      subtitle: "Stage 03 // Automation & Alerting",
      tech: ["ADF Triggers", "Azure Key Vault", "Azure Logic Apps", "Stored Procedures"],
      details: "Designed modular, parameter-driven runtime orchestration utilizing complex SQL stored procedures to handle processing loops automatically. Integrated Azure Key Vault for seamless, zero-string security credential management and wired automated failure reporting via custom Azure Logic Apps webhooks.",
      telemetry: { status: "Automated / Trigger-Based", alerting: "Real-time Logic Apps UI", secrets: "Vault Masked" }
    }
  };

  const currentStage = pipelineStages[activeTab];

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-800/60">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div>
          <h3 className="text-3xl font-bold text-slate-200 flex items-center gap-3">
            <span className="text-blue-400 font-mono text-xl">03.</span> Core Engineering Projects
          </h3>
          <p className="text-slate-500 text-sm mt-2">Interactive system deep-dive of production implementations.</p>
        </div>
        
        {/* Production Metrics Widget */}
        <div className="bg-[#1e293b]/50 border border-slate-800 rounded-lg p-3 font-mono text-xs text-slate-400 flex gap-4 shadow-inner">
          <div><span className="text-green-400">●</span> PIPELINE STATUS: <span className="text-slate-200 font-semibold">ACTIVE</span></div>
          <div className="border-l border-slate-800 pl-4">DATA LOSS: <span className="text-slate-200 font-semibold">0.00%</span></div>
        </div>
      </div>

      {/* Main Project Card Frame */}
      <div className="bg-[#1e293b]/30 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-sm">
        <div className="p-6 md:p-8 border-b border-slate-800/80 bg-[#1e293b]/10">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Featured Cloud Infrastructure Architecture</span>
          <h4 className="text-2xl font-bold text-slate-100 mt-1">
            End-to-End On-Premises to Azure Cloud Migration Pipeline
          </h4>
        </div>

        {/* Dynamic Navigation Tabs */}
        <div className="flex border-b border-slate-800 bg-[#0f172a]/40 text-sm font-mono overflow-x-auto scrollbar-none">
          <button 
            onClick={() => setActiveTab('ingest')}
            className={`flex-1 min-w-[160px] py-4 px-6 text-center border-b-2 transition-all font-medium flex items-center justify-center gap-2 ${activeTab === 'ingest' ? 'border-blue-500 text-blue-400 bg-[#1e293b]/20' : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-[#1e293b]/10'}`}
          >
            <FaServer className="text-xs" /> Ingestion Layer
          </button>
          <button 
            onClick={() => setActiveTab('transform')}
            className={`flex-1 min-w-[160px] py-4 px-6 text-center border-b-2 transition-all font-medium flex items-center justify-center gap-2 ${activeTab === 'transform' ? 'border-blue-500 text-blue-400 bg-[#1e293b]/20' : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-[#1e293b]/10'}`}
          >
            <SiApachedatabricks className="text-xs" /> Transform Engine
          </button>
          <button 
            onClick={() => setActiveTab('automate')}
            className={`flex-1 min-w-[160px] py-4 px-6 text-center border-b-2 transition-all font-medium flex items-center justify-center gap-2 ${activeTab === 'automate' ? 'border-blue-500 text-blue-400 bg-[#1e293b]/20' : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-[#1e293b]/10'}`}
          >
            <SiMicrosoftazure className="text-xs" /> Automation Hub
          </button>
        </div>

        {/* Dynamic Display Board */}
        <div className="p-6 md:p-8 transition-all duration-300">
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">{currentStage.subtitle}</span>
          <h5 className="text-xl font-bold text-slate-200 mt-1 mb-4">{currentStage.title}</h5>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">{currentStage.details}</p>

          {/* Micro Telemetry Panel */}
          <div className="bg-[#0f172a]/60 border border-slate-800/80 rounded-xl p-4 mb-6 grid sm:grid-cols-3 gap-4">
            {Object.entries(currentStage.telemetry).map(([key, value]) => (
              <div key={key} className="font-mono">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">{key}</div>
                <div className="text-xs text-slate-300 font-semibold mt-0.5">{value}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack Sub-pills */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
            {currentStage.tech.map((t, i) => (
              <span key={i} className="text-[11px] font-mono bg-[#0f172a] text-slate-400 px-3 py-1 rounded border border-slate-800">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}