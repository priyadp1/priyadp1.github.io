export default function extracurriculars() {
  return (
    <div className="space-y-16">

      {/* Header */}
      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-white">
          Extracurriculars
        </h1>
        <p className="text-gray-500 max-w-2xl">
          My extracurricular work spans academic service, technical mentorship,
          leadership, and collegiate athletics.
        </p>
      </div>


      {/* Academic Service */}
      <section className="space-y-12 max-w-3xl">

        {/* Mathematics Grader */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Mathematics Grader — Rutgers University–New Brunswick
            </h2>
            <p className="text-sm text-gray-500 mt-1 tracking-wide">
              Jan 2026 – May 2026
            </p>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Support instruction for Multivariable Calculus through grading,
            detailed feedback, and academic assistance to undergraduate students.
          </p>
        </div>

        <hr className="border-gray-800" />

        {/* Peer Tutor */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Peer Tutor — The College of New Jersey
            </h2>
            <p className="text-sm text-gray-500 mt-1 tracking-wide">
              Sept 2024 – May 2025
            </p>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Tutored undergraduate students in Linear Algebra, Data Structures,
            Design & Analysis of Algorithms, General Physics I, and
            Probability & Statistics.
          </p>
        </div>

        <hr className="border-gray-800" />

        {/* Recruitment Chair */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Recruitment Chair — Kappa Theta Pi (Zeta Chapter), The College of New Jersey
            </h2>
            <p className="text-sm text-gray-500 mt-1 tracking-wide">
              Dec 2024 – May 2025
            </p>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Led the Spring 2025 recruitment cycle, coordinating outreach,
            evaluation, and onboarding efforts that resulted in 10 new members
            joining the professional technology fraternity.
          </p>
        </div>

        <hr className="border-gray-800" />

         {/* CS Department Volunteer */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              CS Department Volunteer — The College of New Jersey
            </h2>
            <p className="text-sm text-gray-500 mt-1 tracking-wide">
              Sept 2024 – May 2025
            </p>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Served as a representative for the department at key admissions events
            and engaged with prospective and admitted students bysharing insights into the CS
            program and collaborated with faculty to set up event spaces. 
          </p>
        </div>
        
       <hr className="border-gray-800" />

        {/* Varsity Tennis */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Varsity Tennis Player — The College of New Jersey
            </h2>
            <p className="text-sm text-gray-500 mt-1 tracking-wide">
              Aug 2023 – May 2024
            </p>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Competed at the NCAA Division III level, earning All-NJAC Singles
            and Doubles recognition (2024) for athletic and competitive performance.
          </p>
        </div>

      </section>

    </div>
  );
}
