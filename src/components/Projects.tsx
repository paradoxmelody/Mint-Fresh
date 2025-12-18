import SectionHeading from "../components/SectionHeading";
import { siteConfig } from "../config/siteConfig";

const hasProjects = siteConfig.projects && siteConfig.projects.length > 0;

const Projects = () => {
  if (!hasProjects) {
    return null;
  }

  return (
    <section id="projects" className="p-8 sm:p-12 md:p-16 lg:p-24">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <SectionHeading heading="Projects" />

          <div className="lg:col-span-8">
            <div className="space-y-8">
              {siteConfig.projects.map((project, index) => {
                const Component = project.link ? "a" : "div";
                const linkProps = project.link
                  ? {
                      href: project.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {};

                return (
                  <div key={project.name} className="group relative">
                    <Component
                      {...linkProps}
                      className={`block relative p-4 sm:p-6 md:p-8 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 transition-all duration-300 ${
                        project.link
                          ? "hover:bg-white hover:shadow-xl hover:border-gray-300 hover:-translate-y-1"
                          : ""
                      }`}
                    >
                      {project.link && (
                        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center bg-gray-900 rounded-full text-white transition-all duration-300 group-hover:bg-gray-700">
                          <svg
                            className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 17L17 7M17 7H7M17 7V17"
                            />
                          </svg>
                        </div>
                      )}

                      <div className="space-y-4">
                        <div>
                          <span className="text-sm font-mono text-(--accent-color)">
                            0{index + 1}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                            {project.name}
                          </h3>
                        </div>

                        <p
                          className={`text-base sm:text-lg text-gray-600 leading-relaxed ${
                            project.link ? "pr-12 sm:pr-14 md:pr-16" : ""
                          }`}
                        >
                          {project.description}
                        </p>

                        {project.technologies &&
                          project.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-900 text-white rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                                    project.link
                                      ? "group-hover:bg-gray-800"
                                      : ""
                                  }`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                      </div>
                    </Component>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;