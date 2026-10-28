export default function Publications() {
  return (
    <div className="space-y-16">

      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-white">
          Publications
        </h1>
        <p className="text-gray-500 max-w-2xl">
          Peer-reviewed research contributions in multimodal reasoning,
          large language models, and instructional video understanding.
        </p>
      </div>


      {/* Paper 1 */}
      <section className="space-y-8 max-w-3xl">

        <div>
          <h2 className="text-2xl font-semibold text-white">
            DynaStride: Dynamic Stride Windowing with MMCoT for Instructional Multi-Scene Captioning
          </h2>

          <p className="text-sm text-gray-500 mt-2 tracking-wide">
            NeurIPS 2025 — Oral Presentation (7HVU Workshop)  
            <br />
            AAAI 2026 — AI4EDU Workshop
          </p>
        </div>

        <ul className="space-y-3 text-gray-400 list-disc list-inside leading-relaxed">
          <li>
            Developed a hierarchical scene-captioning pipeline integrating
            dynamic stride window selection with multimodal chain-of-thought reasoning.
          </li>
          <li>
            Leveraged Qwen2.5, Qwen3, and MiniLM embeddings for temporally
            coherent subcaption aggregation.
          </li>
          <li>
            Achieved <span className="text-white font-medium">+17% CIDEr</span> over GPT-4o
            and <span className="text-white font-medium">+14% over VLLaMA-3</span> on the YouCook2 dataset.
          </li>
        </ul>

        <div className="flex gap-6 text-sm">
          <a
            href="https://arxiv.org/pdf/2510.23907"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            arXiv
          </a>

          <span className="text-gray-600">
            | Instructional Multi-Scene Captioning
          </span>
        </div>

      </section>

    </div>
  );
}
