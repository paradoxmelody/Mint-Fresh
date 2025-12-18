import SectionHeading from "../components/SectionHeading";
import { siteConfig } from "../config/siteConfig";

const hasEducation = siteConfig.education && siteConfig.education.length > 0;

const Education = () => {
  if (!hasEducation) {
    return null;
  }

  return (
    <section id="education" className="p-8 sm:p-12 md:p-16 lg:p-24">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <SectionHeading heading="Education" />

          <div className="lg:col-span-8">
            <div className="space-y-8">
              {siteConfig.education.map((edu) => (
                <div
                  key={edu.school}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-5 md:p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                        {edu.degree}
                      </h3>
                      <p className="text-base sm:text-lg text-(--accent-color)">
                        {edu.school}
                      </p>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">
                      {edu.dateRange}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {edu.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 mr-3 shrink-0" />
                        <span className="text-sm sm:text-base text-gray-600">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;