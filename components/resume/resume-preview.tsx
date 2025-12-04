"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useResume } from "./resume-context"

export function ResumePreview() {
  const { currentResume } = useResume()

  if (!currentResume) return null

  const personalSection = currentResume.sections.find((s) => s.type === "personal")
  const summarySection = currentResume.sections.find((s) => s.type === "summary")
  const experienceSection = currentResume.sections.find((s) => s.type === "experience")
  const headerColor = currentResume.headerColor || "#3b82f6"

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white text-black">
      <CardContent className="p-8">
        <div className="space-y-6">
          {/* Header */}
          {personalSection && (
            <div className="-m-8 mb-6 p-8 rounded-t-lg" style={{ backgroundColor: headerColor }}>
              <div className="flex items-center justify-center gap-6">
                {/* Photo - Show for all templates */}
                {personalSection.content.photoUrl && (
                  <img
                    src={personalSection.content.photoUrl}
                    alt="Profile"
                    className="w-28 h-28 rounded-full object-cover border-4 border-white flex-shrink-0"
                  />
                )}

                <div className="text-center flex-1">
                  <h1 className="text-3xl font-bold mb-2 text-white">{personalSection.content.fullName || "Your Name"}</h1>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-white/90">
                    {personalSection.content.email && <span>{personalSection.content.email}</span>}
                    {personalSection.content.phone && <span>{personalSection.content.phone}</span>}
                    {personalSection.content.location && <span>{personalSection.content.location}</span>}
                    {personalSection.content.website && <span>{personalSection.content.website}</span>}
                    {personalSection.content.linkedin && <span>{personalSection.content.linkedin}</span>}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Professional Summary */}
          {summarySection && summarySection.content.text && (
            <div>
              <h2 className="text-xl font-semibold mb-3" style={{ color: headerColor }}>Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed">{summarySection.content.text}</p>
            </div>
          )}

          {/* Work Experience */}
          {experienceSection && experienceSection.content.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: headerColor }}>Work Experience</h2>
              <div className="space-y-4">
                {experienceSection.content.map((exp: any, index: number) => (
                  <div key={index} className="border-l-2 pl-4" style={{ borderColor: `${headerColor}33` }}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{exp.position || "Position"}</h3>
                        <p className="font-medium" style={{ color: headerColor }}>{exp.company || "Company"}</p>
                      </div>
                      <div className="text-sm text-gray-600">
                        {exp.startDate && (
                          <span>
                            {new Date(exp.startDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                            })}
                          </span>
                        )}
                        {exp.startDate && exp.endDate && " - "}
                        {exp.endDate && (
                          <span>
                            {new Date(exp.endDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                            })}
                          </span>
                        )}
                        {exp.current && " - Present"}
                      </div>
                    </div>
                    {exp.description && <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {currentResume.sections.find((s) => s.type === "education") && currentResume.sections.find((s) => s.type === "education")!.content.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: headerColor }}>Education</h2>
              <div className="space-y-4">
                {currentResume.sections.find((s) => s.type === "education")!.content.map((edu: any, index: number) => (
                  <div key={index} className="border-l-2 pl-4" style={{ borderColor: `${headerColor}33` }}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{edu.degree || "Degree"}</h3>
                        <p className="font-medium" style={{ color: headerColor }}>{edu.institution || "Institution"}</p>
                        {edu.field && <p className="text-sm text-gray-600">{edu.field}</p>}
                      </div>
                      <div className="text-sm text-gray-600">
                        {edu.startDate && (
                          <span>
                            {new Date(edu.startDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                            })}
                          </span>
                        )}
                        {edu.startDate && edu.endDate && " - "}
                        {edu.endDate && (
                          <span>
                            {new Date(edu.endDate).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                            })}
                          </span>
                        )}
                      </div>
                    </div>
                    {edu.gpa && <p className="text-sm text-gray-700">GPA: {edu.gpa}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {currentResume.sections.find((s) => s.type === "skills") && currentResume.sections.find((s) => s.type === "skills")!.content.categories?.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: headerColor }}>Skills</h2>
              <div className="space-y-3">
                {currentResume.sections.find((s) => s.type === "skills")!.content.categories.map((category: any, index: number) => (
                  category.skills && category.skills.length > 0 && (
                    <div key={index}>
                      <h3 className="font-medium mb-2" style={{ color: headerColor }}>{category.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill: string, skillIndex: number) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 text-sm rounded-full text-white"
                            style={{ backgroundColor: headerColor }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {currentResume.sections.find((s) => s.type === "projects") && currentResume.sections.find((s) => s.type === "projects")!.content.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: headerColor }}>Projects</h2>
              <div className="space-y-4">
                {currentResume.sections.find((s) => s.type === "projects")!.content.map((project: any, index: number) => (
                  <div key={index} className="border-l-2 pl-4" style={{ borderColor: `${headerColor}33` }}>
                    <div className="mb-2">
                      <h3 className="font-semibold">{project.name || "Project Name"}</h3>
                      {project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline" style={{ color: headerColor }}>
                          {project.url}
                        </a>
                      )}
                    </div>
                    {project.description && <p className="text-gray-700 text-sm leading-relaxed mb-2">{project.description}</p>}
                    {project.technologies && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech: string, techIndex: number) => (
                          <span key={techIndex} className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
