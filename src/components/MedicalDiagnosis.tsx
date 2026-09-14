import { motion } from "framer-motion";
import { relationshipData } from "../data/relationship";
import { ButterflyField } from "./ButterflyField";
import { ChessMotif } from "./ChessMotif";
import { EcgHeart } from "./EcgHeart";
import { VitalIcon } from "./VitalIcon";
import "./MedicalDiagnosis.css";

interface MedicalDiagnosisProps {
  onContinue: () => void;
}

export function MedicalDiagnosis({ onContinue }: MedicalDiagnosisProps) {
  const { diagnosis } = relationshipData;

  return (
    <motion.section
      className="screen diagnosis-screen"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      aria-label="Nivel 1: diagnóstico médico"
    >
      <ButterflyField count={3} variant="sparse" />
      <ChessMotif corner="top-right" />

      <p className="eyebrow">Nivel 1</p>
      <h2 className="section-title diagnosis-title">{diagnosis.levelTitle}</h2>

      <motion.article
        className="chart"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <header className="chart-header">
          <span className="chart-header-label">{diagnosis.chartLabel}</span>
          <span className="chart-header-id">N.º 001</span>
        </header>

        <dl className="chart-fields">
          <div className="chart-field">
            <dt>{diagnosis.patient.label}</dt>
            <dd>{diagnosis.patient.value}</dd>
          </div>
          <div className="chart-field">
            <dt>{diagnosis.doctor.label}</dt>
            <dd>{diagnosis.doctor.value}</dd>
          </div>
          <div className="chart-field chart-field--wide">
            <dt>{diagnosis.reason.label}</dt>
            <dd>&ldquo;{diagnosis.reason.value}&rdquo;</dd>
          </div>
        </dl>

        <div className="chart-divider" aria-hidden="true" />

        <h3 className="chart-section-title">{diagnosis.vitalsTitle}</h3>
        <ul className="vitals-grid">
          {diagnosis.vitals.map((vital) => (
            <li className="vital-card" key={vital.id}>
              <span className="vital-icon">
                <VitalIcon type={vital.icon} />
              </span>
              <span className="vital-value">{vital.value}</span>
              <span className="vital-label">{vital.label}</span>
            </li>
          ))}
        </ul>

        <div className="chart-divider" aria-hidden="true" />

        <p className="ecg-caption">{diagnosis.ecgCaption}</p>
        <EcgHeart />

        <div className="chart-divider" aria-hidden="true" />

        <div className="chart-result">
          <div className="chart-result-block">
            <h3 className="chart-section-title">{diagnosis.diagnosisTitle}</h3>
            <p className="chart-result-value">{diagnosis.diagnosisValue}</p>
          </div>
          <div className="chart-result-block">
            <h3 className="chart-section-title">{diagnosis.prognosisTitle}</h3>
            <p className="chart-result-value chart-result-value--script">{diagnosis.prognosisValue}</p>
          </div>
        </div>
      </motion.article>

      <button type="button" className="btn btn-primary" onClick={onContinue}>
        {diagnosis.continueLabel}
      </button>
    </motion.section>
  );
}
