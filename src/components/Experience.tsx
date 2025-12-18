import SectionHeading from "../components/SectionHeading";
import { siteConfig } from "../config/siteConfig";

const hasExperience = siteConfig.experience && siteConfig.experience.length > 0;

const Experience = () => {
  if (!hasExperience) {
    return null;
  }

  return (
    <section id="experience" className="p-8 sm:p-12 md:p-16 lg:p-24">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <SectionHeading heading="Experience" />

          <div className="lg:col-span-8">
            <div className="relative">
              {siteConfig.experience.map((exp, index) => (
                <div key={exp.company} className="relative mb-12 last:mb-0">
                  <div
                    className="absolute left-1/2 -top-2 w-4 h-4 bg-white border-2 rounded-full -translate-x-1/2 z-20 transition-all duration-300"
                    style={{
                      borderColor: "var(--accent-color)",
                      backgroundColor: "var(--accent-color)",
                    }}
                  />

                  {index < siteConfig.experience.length - 1 && (
                    <div className="absolute left-1/2 bottom-0 w-0.5 h-12 bg-gray-300 -translate-x-1/2 translate-y-full z-10" />
                  )}

                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                          {exp.title}
                        </h3>
                        <p
                          className="text-base sm:text-lg"
                          style={{ color: "var(--accent-color)" }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">
                        {exp.dateRange}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 shrink-0" />
                          <span className="text-sm sm:text-base text-gray-600">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;