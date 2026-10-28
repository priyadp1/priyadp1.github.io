export default function IndustryExperience() {
  return (
    <div className="space-y-16">

      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-white">
          Industry Experience
        </h1>
        <p className="text-gray-500 max-w-2xl">
          My industry work focuses on large-scale machine learning systems,
          geospatial modeling, and production-ready AI experimentation.
        </p>
      </div>


      {/* DFS */}
      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Machine Learning Research Intern — Deep Forest Sciences
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Sept 2026 - Present
          </p>
        </div>

        <p className="text-gray-400 leading-relaxed">
          Developing ChemBERTa-4, an OLMo-based chemical language model for 
          molecular representation learning and property prediction.
        </p>
      </section>
      {/* DrRx */}
      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            AI Engineering Intern — DrRx
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Aug 2026 - Present
          </p>
        </div>

        <p className="text-gray-400 leading-relaxed">
          Developing a RAG pipeline leveraging BM25S retrieval and Qwen2.5-7B-Instruct over 2K+ pharmaceutical documents,
          integrating data from PostgreSQL and AWS S3.
        </p>
      </section>
     <hr className="border-gray-800" />
      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            AI Fellow - AI4ALL Ignite Summer Accelerator 
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            May 2026 - Present
          </p>
        </div>

        <p className="text-gray-400 leading-relaxed">
          <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
            <li>
              Selected for the competitive AI4ALL Ignite Summer 2026 Accelerator.
            </li>
            <li>
               Developed an end-to-end Braille-to-speech computer vision pipeline integrating YOLO11n, 
               EfficientNet-B0, Liblouis, and Piper TTS, achieving 96.15% detection mAP50, 
               99.41% classification accuracy, and 97.32% character coverage.
            </li>
            <li>
              Trained and evaluated detection and classification models across 
              4 datasets and 5 model families, scaling to 10,117 augmented images and 193K+ character crops 
              and performing end-to-end error analysis to identify false positive detection and reading-order failures.
            </li>
          </ul>
        </p>
      </section>
        <hr className="border-gray-800" />

      {/* Regeneron */}
      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Machine Learning Intern — Regeneron
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            May 2026 - Aug 2026
          </p>
        </div>

        <p className="text-gray-400 leading-relaxed">
        Deployed a Streamlit application for the QA Validation and Operations Team after 
        evaluating 10+ machine learning modeling approaches and selecting TabPFN Regressor and Classifier models, 
        engineering 40 trend-based features from 500K+ GMP manufacturing records to predict equipment breakdowns, 
        achieving a 67.8% ROC-AUC.
        </p>
      </section>

      <hr className="border-gray-800" />

      <section className="space-y-8 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Google Summer of Code 2026 Contributor (DeepChem) 
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            May 2026 - Aug 2026
          </p>
        </div>

        <p className="text-gray-400 leading-relaxed">
          <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
            <li>
              Selected as 1 of 5 from 200+ applicants to extend DeepChem’s support for 
              large-scale molecular language models.
            </li>
            <li>
              Extended the HuggingFaceModel class by implementing the generate() API, 
              implementing batched autoregressive inference,tokenizer padding, and device-aware execution.
            </li>
            <li>
              Developed an OLMo wrapper class supporting regression, 
              classification, multitask learning, and causal language modeling
              with custom prediction heads, pretrained checkpoint loading, 
              mixed-precision inference, LoRA/QLoRA, and multi-GPU support.
            </li>
          </ul>
        </p>
      </section>

      <hr className="border-gray-800" />

      

      {/* Insurity */}
      <section className="space-y-10 max-w-3xl">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            AI Associate Developer — Insurity
          </h2>
          <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Oct 2025 – Jan 2026
          </p>
        </div>

        {/* Project 1 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">
            Peril Prediction Project
          </h3>

          <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
            <li>
              Engineered large-scale geospatial preprocessing pipelines
              (6M+ rows) integrating climate variables with peril events
              via time alignment, spatial filtering, and feature engineering
              using Python, Pandas, and GeoPandas.
            </li>
            <li>
              Built and evaluated LightGBM-based multi-class peril classifiers,
              applying SMOTE class balancing achieving a 70% accuracy and F1 score.
            </li>
            <li>
              Experimented with a Temporal Fusion Transformer (TFT),
              modeling seasonal dependencies via cyclical week encoding
              and training GPU-accelerated PyTorch models on NVIDIA RTX hardware.
            </li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">
            Computer Vision — Geospatial Change Detection
          </h3>

          <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
            <li>
              Developed a geospatial change-detection system for before/after
              satellite imagery using OpenCV and deep learning pipelines.
            </li>
            <li>
              Implemented CNN and Transformer-based architectures including
              U-Net++ for high-resolution semantic segmentation.
            </li>
          </ul>
        </div>

      </section>

    </div>
  );
}
