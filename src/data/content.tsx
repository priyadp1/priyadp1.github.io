/**
 * All site content lives here. Edit text in this file; the pages only handle layout.
 */
import type { ReactNode } from "react";

export type Entry = {
  title: string;
  org?: string;
  date?: string;
  focus?: string;
  tags?: string[];
  summary?: ReactNode;
  bullets?: ReactNode[];
  projects?: { title: string; bullets: ReactNode[] }[];
  links?: { label: string; href: string }[];
};

export type ExperienceItem = {
  role: string;
  org: string;
  date: string;
  kind: string;
  focus?: string;
  note?: string;
};

const Em = ({ children }: { children: ReactNode }) => (
  <span className="font-medium text-white">{children}</span>
);

/* ───────────────────────── Home ───────────────────────── */

export const certifications = [
  "AWS Certified Machine Learning – Specialty",
  "AWS Certified Cloud Practitioner",
];

export const experience: ExperienceItem[] = [
  { role: "Machine Learning Research Intern", org: "Deep Forest Sciences", kind: "Internship", date: "Sept 2026 – Present" },
  { role: "AI Engineering Intern", org: "DrRx", kind: "Internship", date: "Aug 2026 – Present" },
  { role: "Machine Learning Researcher", org: "TRACE AI Lab · Rutgers University", kind: "Research", date: "May 2026 – Present" },
  { role: "AI Fellow", org: "AI4ALL Ignite Summer Accelerator", kind: "Fellowship", date: "May 2026 – Oct 2026" },
  {
    role: "Lead Machine Learning Researcher",
    focus: "Interpretable ML & Model Multiplicity",
    org: "DIMACS (Center for Discrete Mathematics and Theoretical Computer Science) · Rutgers University",
    kind: "Research",
    date: "Jan 2026 – May 2026",
  },
  { role: "Machine Learning Intern", focus: "QA Validations & Operations", org: "Regeneron", kind: "Internship", date: "May 2026 – Aug 2026" },
  { role: "Google Summer of Code 2026 Contributor", org: "DeepChem · Google Summer of Code", kind: "Open Source", date: "May 2026 – Aug 2026" },
  {
    role: "AI Associate Developer",
    focus: "Geospatial AI & ML",
    org: "Insurity · Research & Development · SpatialKey Team",
    kind: "Internship",
    date: "Oct 2025 – Jan 2026",
  },
  {
    role: "Artificial Intelligence Researcher",
    focus: "Multi-Agent LLM Deliberation & Consensus Dynamics",
    org: "Algoverse AI Research",
    note: "ICML 2026 · Pluralistic Alignment Workshop",
    kind: "Internship",
    date: "Sept 2025 – June 2026",
  },
  {
    role: "Artificial Intelligence Researcher",
    focus: "Multimodal Scene Captioning Systems",
    org: "Algoverse AI Research",
    note: "NeurIPS 2025 · 7HVU Workshop (Oral)  ·  AAAI 2026 · AI4EDU Workshop",
    kind: "Internship",
    date: "June 2025 – Dec 2025",
  },
  {
    role: "Algorithms Research Shadow",
    focus: "RNA Folding & Dynamic Programming",
    org: "The College of New Jersey",
    kind: "Part-time",
    date: "Jan 2025 – May 2025",
  },
];

export const coursework = [
  { area: "Algorithms & Theory", courses: ["Data Structures", "Discrete Structures I–II", "Design & Analysis of Algorithms"] },
  { area: "Artificial Intelligence", courses: ["Artificial Intelligence", "Deep Learning", "Natural Language Processing", "Data Science"] },
  {
    area: "Mathematics",
    courses: ["Calculus I–III", "Linear Algebra", "Differential Equations", "Probability & Statistics", "Numerical Computing & Analysis"],
  },
  { area: "Systems", courses: ["Computer Architecture", "Operating Systems", "Cryptography & Cybersecurity", "Database Systems"] },
];

/* ───────────────────────── Research ───────────────────────── */

export const research: Entry[] = [
  {
    title: "Lead Researcher",
    org: "Center for Discrete Mathematics and Theoretical Computer Science (DIMACS)",
    focus: "Interpretable ML & Model Multiplicity",
    date: "Jan 2026 – May 2026",
    bullets: [
      "Lead an empirical study under Dr. Linda Ness and Dr. Lesia Semenova on sparse decision trees (SPLIT, GOSDT, LicketySPLIT, LicketyRESPLIT) against 3 boosting models (XGBoost, LightGBM, CatBoost) across 6 real-world datasets examining conditions where simple models can achieve near-identical accuracy to complex models, and how dataset properties influence model structure and multiplicity.",
      "Demonstrated that binarizing variables via ThresholdGuessBinarizer eliminates the performance gap between decision trees and boosting models, while preserving interpretability.",
      "Quantified performance–interpretability tradeoffs using accuracy, class-specific recall, macro F1, tree depth, leaf count (log-scale), and Rashomon set size.",
      "Analyzed that using preprocessing techniques such as SMOTE reshapes the Rashomon set, but doesn't improve prediction performance indicating that there isn't a correlation between Rashomon set size and prediction performance.",
      "Empirically demonstrated that large Rashomon sets correspond to multiple equally performant but structurally diverse decision trees, highlighting the non-uniqueness of interpretable models.",
      "Conducted a parameter sweep on ThresholdGuessBinarizer showing that MAX_DEPTH is the dominant driver for Rashomon set growth, but across all settings, performance doesn't improve with larger Rashomon sets.",
    ],
  },
  {
    title: "AI Researcher",
    org: "Algoverse",
    focus: "Multi-Agent Reasoning & Multimodal Machine Learning",
    date: "June 2025 – June 2026",
    projects: [
      {
        title: "Multi-Agent Deliberation & Consensus Dynamics (First Author, Solo)",
        bullets: [
          "Developed a multi-agent LLM framework to study consensus formation, showing that convergence is driven by directional model deference rather than purely independent reasoning.",
          "Designed and executed large-scale 20-round deliberation experiments across subjective and objective benchmarks (GlobalOpinionsQA, Anthropic Written-Evals, Humanity’s Last Exam) using GPT-4.1, Mistral, and cross-family model systems (Phi, LLaMA, and Mistral).",
          "Demonstrated that model deference is not a fixed hierarchical property, but varies with dataset characteristics, model composition, and interaction setting.",
          "Introduced a rotation-based experimental framework that disentangles model identity from response content, revealing that identity alone does not explain inter-agent influence.",
          "Formalized quantitative metrics for multi-agent dynamics, including inter-round disagreement (IDR), directional model deference (MDR), and accuracy-aware deference measures (MDAR).",
          "Showed that system-level interventions (e.g., adversarial and independent prompting) can significantly alter or destabilize consensus formation by reducing or reshaping model deference.",
          "Accepted to the ICML 2026 Pluralistic Alignment workshop.",
        ],
      },
      {
        title: "DynaStride: Dynamic Stride Windowing with MMCoT (Second Author)",
        bullets: [
          "Contributed to a hierarchical video captioning pipeline combining dynamic stride window selection with multimodal chain-of-thought reasoning (MMCoT) for temporally coherent scene understanding.",
          "Implemented and integrated Qwen2.5, Qwen3, and MiniLM models with subcaption aggregation to improve long-range temporal consistency.",
          "Designed a comprehensive evaluation framework spanning BLEU-4, METEOR, CIDEr, BERTScore, SBERT similarity, and temporal alignment metrics.",
          "Achieved +17% CIDEr over GPT-4o and +14% over VideoLLaMA-3 on the YouCook2 dataset.",
          "Accepted to NeurIPS 2025 (7HVU Workshop, Oral) and AAAI 2026 (AI4EDU Workshop).",
        ],
      },
    ],
  },
  {
    title: "Algorithms Research Shadow",
    org: "The College of New Jersey",
    focus: "Sparse Dynamic Programming for RNA Folding",
    date: "Jan 2025 – May 2025",
    bullets: [
      "Investigated classical and modern RNA secondary structure prediction algorithms including Nussinov, Zuker, and LinearFold.",
      "Implemented sparse dynamic programming strategies to reduce computational complexity in large-sequence folding tasks.",
      "Deployed large-scale experiments on a SLURM-managed HPC cluster using the ViennaRNA package.",
      "Automated batch processing pipelines to benchmark folding accuracy, energy scores, and runtime across thousands of RNA sequences.",
    ],
    links: [{ label: "RNA Folding Research Summary", href: "/RNAFoldingResearch.pdf" }],
  },
];

/* ───────────────────────── Publications ───────────────────────── */

export const publications: Entry[] = [
  {
    title: "DynaStride: Dynamic Stride Windowing with MMCoT for Instructional Multi-Scene Captioning",
    tags: ["NeurIPS 2025 — Oral Presentation (7HVU Workshop)", "AAAI 2026 — AI4EDU Workshop"],
    bullets: [
      "Developed a hierarchical scene-captioning pipeline integrating dynamic stride window selection with multimodal chain-of-thought reasoning.",
      "Leveraged Qwen2.5, Qwen3, and MiniLM embeddings for temporally coherent subcaption aggregation.",
      <>
        Achieved <Em>+17% CIDEr</Em> over GPT-4o and <Em>+14% over VLLaMA-3</Em> on the YouCook2 dataset.
      </>,
    ],
    links: [{ label: "arXiv", href: "https://arxiv.org/pdf/2510.23907" }],
  },
];

/* ───────────────────────── Industry ───────────────────────── */

export const industry: Entry[] = [
  {
    title: "Machine Learning Research Intern",
    org: "Deep Forest Sciences",
    date: "Sept 2026 – Present",
    summary:
      "Developing ChemBERTa-4, an OLMo-based chemical language model for molecular representation learning and property prediction.",
  },
  {
    title: "AI Engineering Intern",
    org: "DrRx",
    date: "Aug 2026 – Present",
    summary:
      "Developing a RAG pipeline leveraging BM25S retrieval and Qwen2.5-7B-Instruct over 2K+ pharmaceutical documents, integrating data from PostgreSQL and AWS S3.",
  },
  {
    title: "AI Fellow",
    org: "AI4ALL Ignite Summer Accelerator",
    date: "May 2026 – Oct 2026",
    bullets: [
      "Selected for the competitive AI4ALL Ignite Summer 2026 Accelerator.",
      "Developed an end-to-end Braille-to-speech computer vision pipeline integrating YOLO11n, EfficientNet-B0, Liblouis, and Piper TTS, achieving 96.15% detection mAP50, 99.41% classification accuracy, and 97.32% character coverage.",
      "Trained and evaluated detection and classification models across 4 datasets and 5 model families, scaling to 10,117 augmented images and 193K+ character crops and performing end-to-end error analysis to identify false positive detection and reading-order failures.",
    ],
  },
  {
    title: "Machine Learning Intern",
    org: "Regeneron",
    date: "May 2026 – Aug 2026",
    summary:
      "Deployed a Streamlit application for the QA Validation and Operations Team after evaluating 10+ machine learning modeling approaches and selecting TabPFN Regressor and Classifier models, engineering 40 trend-based features from 500K+ GMP manufacturing records to predict equipment breakdowns, achieving a 67.8% ROC-AUC.",
  },
  {
    title: "Google Summer of Code 2026 Contributor",
    org: "DeepChem",
    date: "May 2026 – Aug 2026",
    bullets: [
      "Selected as 1 of 5 from 200+ applicants to extend DeepChem’s support for large-scale molecular language models.",
      "Extended the HuggingFaceModel class by implementing the generate() API, implementing batched autoregressive inference, tokenizer padding, and device-aware execution.",
      "Developed an OLMo wrapper class supporting regression, classification, multitask learning, and causal language modeling with custom prediction heads, pretrained checkpoint loading, mixed-precision inference, LoRA/QLoRA, and multi-GPU support.",
    ],
  },
  {
    title: "AI Associate Developer",
    org: "Insurity",
    date: "Oct 2025 – Jan 2026",
    projects: [
      {
        title: "Peril Prediction Project",
        bullets: [
          "Engineered large-scale geospatial preprocessing pipelines (6M+ rows) integrating climate variables with peril events via time alignment, spatial filtering, and feature engineering using Python, Pandas, and GeoPandas.",
          "Built and evaluated LightGBM-based multi-class peril classifiers, applying SMOTE class balancing achieving a 70% accuracy and F1 score.",
          "Experimented with a Temporal Fusion Transformer (TFT), modeling seasonal dependencies via cyclical week encoding and training GPU-accelerated PyTorch models on NVIDIA RTX hardware.",
        ],
      },
      {
        title: "Computer Vision — Geospatial Change Detection",
        bullets: [
          "Developed a geospatial change-detection system for before/after satellite imagery using OpenCV and deep learning pipelines.",
          "Implemented CNN and Transformer-based architectures including U-Net++ for high-resolution semantic segmentation.",
        ],
      },
    ],
  },
];

/* ───────────────────────── Projects ───────────────────────── */

export const projects: Entry[] = [
  {
    title: "Knowledge Distillation for Reasoning in MoE and Dense LLMs",
    focus: "Efficiently transferring reasoning from large LLMs to smaller models using parameter-efficient distillation",
    bullets: [
      "Developed an offline knowledge distillation framework combining sequence-level and logit-level distillation to transfer reasoning capabilities from large teacher models to smaller student models.",
      "Leveraged teacher-generated chain-of-thought (CoT) reasoning traces and trained student models via supervised fine-tuning to replicate both intermediate reasoning steps and final answers.",
      "Applied Low-Rank Adaptation (LoRA) to enable parameter-efficient distillation, updating less than 1% of model weights while preserving performance and reducing compute requirements.",
      "Implemented logit-based distillation using temperature-scaled softmax and KL divergence loss to align student token distributions with teacher outputs via top-k probability reconstruction.",
      "Built an offline pipeline to extract teacher logits and map them to student token spaces, enabling scalable training without direct API dependency.",
      "Evaluated performance on SciBench and TheoremQA across multi-domain reasoning tasks, using accuracy and BERTScore to measure both correctness and reasoning alignment.",
      "Demonstrated that small LLMs can approximate both the reasoning process and output distributions of larger models with minimal parameter updates.",
    ],
  },
  {
    title: "GenreBlender",
    focus: "Generative AI Music Mixer & Classifier",
    bullets: [
      "Built a generative AI system that blends two music genres using a controllable slider (α ∈ [0,1]) and generates hybrid audio with Meta’s MusicGen.",
      "Designed a clean ML pipeline on the GTZAN dataset, including feature selection, scaling, label encoding, and reproducible preprocessing for inference.",
      "Trained a 4-layer PyTorch MLP (92% validation accuracy) using scikit-learn’s GroupShuffleSplit to prevent data leakage and predict genre probabilities from audio features.",
      "Developed a measurable genre-blending framework by comparing predicted probabilities against a weighted target distribution to quantify how well the blend worked via Target = (α·A) + (1−α)·B.",
      "Built and deployed an interactive Streamlit web application enabling real-time genre blending, probabilistic evaluation, and 10-second AI-generated audio output.",
    ],
  },
  {
    title: "PocketRAG",
    focus: "Retrieval-Augmented Generation System",
    bullets: [
      "Built a lightweight RAG web application enabling instant PDF summarization and document-based question answering.",
      "Implemented semantic search using FAISS vector indexing with embedding-based chunk retrieval.",
      "Integrated Gemini API for context-aware generation with dynamic prompt construction.",
      "Designed clean frontend UI for real-time query-response streaming and document upload.",
    ],
  },
  {
    title: "Telematics UBI Prototype",
    focus: "Usage-Based Insurance Modeling Platform",
    bullets: [
      "Developed a full-stack usage-based insurance system for telematics risk scoring and driver behavior analysis.",
      "Built XGBoost-based risk prediction models trained on telematics driving data with engineered behavioral features.",
      "Implemented FastAPI backend for model serving and REST endpoints with secure AWS deployment.",
      "Designed React frontend dashboard visualizing driver risk scores and prediction outputs.",
    ],
  },
  {
    title: "This Website!",
    focus: "Personal Portfolio",
    bullets: [
      "Designed and deployed a responsive personal portfolio website using Next.js, Tailwind CSS, and TypeScript to showcase my work in AI/ML.",
      "Implemented GitHub-based CI/CD with Vercel for automated build and deployment on every commit.",
      "Leveraged modern React architecture (App Router) and optimized performance using built-in Next.js font and asset optimization features.",
    ],
  },
];

/* ───────────────────────── Skills ───────────────────────── */

export const skills = [
  {
    area: "Core AI & ML",
    items: [
      "PyTorch", "Transformers", "Hugging Face", "FAISS", "LightGBM", "XGBoost", "CNNs", "OpenCV", "scikit-learn", "Kaggle",
      "Multilayer Perceptron (MLP)", "Temporal Fusion Transformers (TFT)", "Retrieval-Augmented Generation (RAG)",
    ],
  },
  { area: "Programming Languages", items: ["Python", "C", "C++", "Java", "JavaScript", "MATLAB"] },
  { area: "Backend", items: ["Flask", "REST APIs", "FastAPI", "Streamlit"] },
  { area: "Frontend", items: ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "GraphQL"] },
  { area: "Databases", items: ["PostgreSQL", "SQLite"] },
  { area: "Research Concepts", items: ["OpenAI APIs", "Multi-Agent LLM Systems", "Multimodal Chain-of-Thought (MMCoT)", "Generative AI"] },
  { area: "Data & Scientific Computing", items: ["NumPy", "Pandas", "GeoPandas", "Matplotlib", "Seaborn"] },
  { area: "Cloud & ML Infrastructure", items: ["AWS", "Azure", "Docker", "Vercel", "RunPod", "Nvidia GPUs"] },
  { area: "Development & Collaboration", items: ["Git", "GitHub", "CI/CD", "pytest", "Bitbucket", "Jira", "Anaconda"] },
  { area: "AWS Tools", items: ["EC2", "S3", "SageMaker AI", "Lambda", "Athena", "Glue", "CloudWatch", "DynamoDB", "CLI"] },
];

/* ───────────────────────── Extracurriculars ───────────────────────── */

export const extracurriculars: Entry[] = [
  {
    title: "Mathematics Grader",
    org: "Rutgers University–New Brunswick",
    date: "Jan 2026 – May 2026",
    summary:
      "Support instruction for Multivariable Calculus through grading, detailed feedback, and academic assistance to undergraduate students.",
  },
  {
    title: "Peer Tutor",
    org: "The College of New Jersey",
    date: "Sept 2024 – May 2025",
    summary:
      "Tutored undergraduate students in Linear Algebra, Data Structures, Design & Analysis of Algorithms, General Physics I, and Probability & Statistics.",
  },
  {
    title: "Recruitment Chair",
    org: "Kappa Theta Pi (Zeta Chapter) · The College of New Jersey",
    date: "Dec 2024 – May 2025",
    summary:
      "Led the Spring 2025 recruitment cycle, coordinating outreach, evaluation, and onboarding efforts that resulted in 10 new members joining the professional technology fraternity.",
  },
  {
    title: "CS Department Volunteer",
    org: "The College of New Jersey",
    date: "Sept 2024 – May 2025",
    summary:
      "Served as a representative for the department at key admissions events and engaged with prospective and admitted students by sharing insights into the CS program and collaborated with faculty to set up event spaces.",
  },
  {
    title: "Varsity Tennis Player",
    org: "The College of New Jersey",
    date: "Aug 2023 – May 2024",
    summary:
      "Competed at the NCAA Division III level, earning All-NJAC Singles and Doubles recognition (2024) for athletic and competitive performance.",
  },
];
