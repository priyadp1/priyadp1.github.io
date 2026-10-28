export default function Skills() {
  return (
    <section id="skills" className="mt-0 scroll-mt-0 space-y-12">
      <h2 className="text-3xl font-semibold mb-12 tracking-tight">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-12 text-sm text-gray-400 leading-relaxed">
        {/* Core ML & AI */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">
            Core AI & ML
          </h3>
          <p>
            PyTorch, Transformers, Hugging Face, FAISS, LightGBM, XGBoost,
            CNNs, OpenCV, scikit-learn, Kaggle, Multilayer Perceptron (MLP),
            Temporal Fusion Transformers (TFT), Retrieval-Augmented Generation (RAG)
          </p>
        </div>

         {/*Programming Languages */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">
            Programming Languages
          </h3>
            <p>
                Python, C, C++, Java, JavaScript, MATLAB
            </p>
            </div>
        {/* Web & Frontend */}
        <div>
            <h3 className="text-lg font-medium text-white mb-3">
                Backend
            </h3>
            <p>
                Flask, REST APIs, FastAPI, Streamlit
            </p>
        </div>
        <div>
            <h3 className="text-lg font-medium text-white mb-3">
                Frontend
            </h3>
            <p>
                React, Next.js, HTML/CSS, Tailwind CSS, GraphQL
            </p>
        </div>
        {/* Databases */}
        <div>
            <h3 className="text-lg font-medium text-white mb-3">
                Databases
            </h3>
            <p>
                PostgreSQL, SQLite
            </p>
        </div>

        {/* Research Concepts */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">
            Research Concepts
          </h3>
            <p>
                OpenAI APIs, Multi-Agent LLM Systems, Multimodal Chain-of-Thought (MMCoT), Generative AI
            </p>
            </div>

        {/* Compute Tools */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">
            Data & Scientific Computing
          </h3>
          <p>
           NumPy, Pandas, GeoPandas, Matplotlib, Seaborn
          </p>
        </div>

        {/* Cloud & MLOps */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">
            Cloud & ML Infrastructure
          </h3>
            <p>
                AWS, Azure, Docker, Vercel,
                RunPod,  Nvidia GPUs
            </p>
            </div>
        {/* Development & Collaboration */}
        <div>
          <h3 className="text-lg font-medium text-white mb-3">
            Development & Collaboration 
          </h3>
            <p>
                Git, GitHub, CI/CD, pytest, Bitbucket, Jira, Anaconda
            </p>
            </div>
        <div>
          <h3 className="text-lg font-medium text-white mb-3">
            AWS Tools
          </h3>
            <p>
                EC2, S3, SageMaker AI, Lambda, Athena, Glue, CloudWatch, DynamoDB, CLI
            </p>
            </div>
      </div>
    </section>
  );
}
