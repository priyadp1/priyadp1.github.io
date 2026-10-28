export default function Research() {
  return (
    <div className="space-y-16">

      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-white">
          Research
        </h1>
        <p className="text-gray-500 max-w-2xl">
          My research focuses on multi-agent reasoning systems, multimodal ML, interpretable ML,
          and large-scale experimental evaluation across real-world datasets. 
          I have not only contributed to research projects in these areas,
          but also designed and executed large-scale experiments,
          built reproducible pipelines, and led research teams.
        </p>
      </div>


      {/* DIMACS */}
      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Lead Researcher — Center for Discrete Mathematics and Theoretical Computer Science (DIMACS)
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Interpretable ML & Model Multiplicity
          </p>
        </div>

        <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
          <li>
            Lead an empirical study under Dr. Linda Ness and Dr. Lesia Semenova on sparse decision trees (SPLIT, GOSDT, LicketySPLIT, LicketyRESPLIT)
            against 3 boosting models (XGBoost, LightGBM, CatBoost) across 6 real-world datasets examining
            conditions where simple models can achieve near-identical accuracy to complex models, and 
            how dataset properties influence model structure and multiplicity.
          </li>
          <li>
            Deemonstrated that binarzing variables via ThresholdGuessBinarizer eliminates the performance 
            gap between decision trees and boosting models, while preserving interpretability.
          </li>
          <li>
            Quantified performance–interpretability tradeoffs using accuracy, 
            class-specific recall, macro F1, tree depth, leaf count (log-scale), and Rashomon set size.
          </li>
          <li>
            Analyzed that using preprocessing techniques such as SMOTE reshapes the Rashomon set, 
            but doesn't improve prediction performance indicating that there 
            isn't a correlation between Rashomon set size and prediction performance.
          </li>
          <li>
            Empirically demonstrated that large Rashomon sets correspond to multiple equally performant 
            but structurally diverse decision trees, highlighting the non-uniqueness of interpretable models.
          </li>
          <li>
            Conducted a parameter sweep on ThresholdGuessBinarizer showing that MAX_DEPTH is the dominant 
            driver for Rashomon set growth, but across all settings, performance doesn't improve with larger Rashomon sets.
          </li>
        </ul>
      </section>

      <hr className="border-gray-800" />


      {/* Algoverse */}
      <section className="space-y-10 max-w-3xl">
  <div>
    <h2 className="text-2xl font-semibold text-white">
      AI Researcher — Algoverse
    </h2>
    <p className="text-sm text-gray-500 mt-1 tracking-wide">
      Multi-Agent Reasoning & Multimodal Machine Learning
    </p>
  </div>

  <div className="space-y-8">

    {/* Project 1 — STRONGEST FIRST */}
    <div>
  <h3 className="text-lg font-semibold text-white">
    Multi-Agent Deliberation & Consensus Dynamics (First Author, Solo)
  </h3>
  <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
    <li>
      Developed a multi-agent LLM framework to study consensus formation, showing that convergence is driven by 
      directional model deference rather than purely independent reasoning. 
    </li>
    <li>
      Designed and executed large-scale 20-round deliberation experiments across subjective and objective benchmarks 
      (GlobalOpinionsQA, Anthropic Written-Evals, Humanity’s Last Exam) using GPT-4.1, Mistral, and 
      cross-family model systems (Phi, LLaMA, and Mistral).
    </li>
    <li>
      Demonstrated that model deference is not a fixed hierarchical property, 
      but varies with dataset characteristics, model composition, and interaction setting.
    </li>
    <li>
      Introduced a rotation-based experimental framework that 
      disentangles model identity from response content, revealing that identity alone does not explain inter-agent influence.
    </li>
    <li>
      Formalized quantitative metrics for multi-agent dynamics, including inter-round disagreement (IDR),
       directional model deference (MDR), and accuracy-aware deference measures (MDAR).
    </li>
    <li>
      Showed that system-level interventions (e.g., adversarial and independent prompting) can 
      significantly alter or destabilize consensus formation by reducing or reshaping model deference.
    </li>
    <li>
      Accepted to the ICML 2026 Pluralistic Alignment workshop
    </li>
  </ul>
</div>

    {/* Project 2 */}
    <div>
      <h3 className="text-lg font-semibold text-white">
        DynaStride: Dynamic Stride Windowing with MMCoT (Second Author)
      </h3>
      <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
        <li>
          Contributed to a hierarchical video captioning pipeline combining dynamic stride window selection 
          with multimodal chain-of-thought reasoning (MMCoT) for temporally coherent scene understanding.
        </li>
        <li>
          Implemented and integrated Qwen2.5, Qwen3, and MiniLM models with 
          subcaption aggregation to improve long-range temporal consistency.
        </li>
        <li>
          Designed a comprehensive evaluation framework spanning BLEU-4, METEOR, CIDEr, 
          BERTScore, SBERT similarity, and temporal alignment metrics.
        </li>
        <li>
          Achieved +17% CIDEr over GPT-4o and +14% over VideoLLaMA-3 on the YouCook2 dataset.
        </li>
        <li>
          Accepted to NeurIPS 2025 (7HVU Workshop, Oral) and AAAI 2026 (AI4EDU Workshop).
        </li>
      </ul>
    </div>

  </div>
</section>

   <hr className="border-gray-800" />


      {/* TCNJ */}
      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Algorithms Research Shadow — The College of New Jersey
          </h2>
        </div>
        <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Sparse Dynamic Programming for RNA Folding
          </p>

        <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
          <li>
            Investigated classical and modern RNA secondary structure
            prediction algorithms including Nussinov, Zuker, and LinearFold.
          </li>
          <li>
            Implemented sparse dynamic programming strategies to reduce
            computational complexity in large-sequence folding tasks.
          </li>
          <li>
            Deployed large-scale experiments on a SLURM-managed HPC cluster
            using the ViennaRNA package.
          </li>
          <li>
            Automated batch processing pipelines to benchmark folding accuracy,
            energy scores, and runtime across thousands of RNA sequences.
          </li>
          <li>
            <a
              href="/RNAFoldingResearch.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              RNA Folding Research Summary
            </a>
          </li>
        </ul>
      </section>

    </div>
  );
}
