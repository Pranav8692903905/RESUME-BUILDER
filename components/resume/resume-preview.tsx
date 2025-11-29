"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useResume } from "./resume-context"

export function ResumePreview() {
  const { currentResume } = useResume()

  if (!currentResume) return null

  const personalSection = currentResume.sections.find((s) => s.type === "personal")
  const summarySection = currentResume.sections.find((s) => s.type === "summary")
  const experienceSection = currentResume.sections.find((s) => s.type === "experience")

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white text-black">
      <CardContent className="p-8">
        <div className="space-y-6">
          {/* Header */}
          {personalSection && (
            <div className="border-b pb-6">
              <div className={`flex items-center ${currentResume.template === "modern" ? "justify-center" : "justify-between"}`}>
                {/* Photo for minimal and corporate templates */}
                {personalSection.content.photoUrl && (currentResume.template === "minimal" || currentResume.template === "corporate") ? (
                  <img
                    src={personalSection.content.photoUrl}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover mr-6"
                  />
                ) : null}

                <div className={`${personalSection.content.photoUrl && (currentResume.template === "minimal" || currentResume.template === "corporate") ? "flex-1" : "w-full text-center"}`}>
                  <h1 className="text-3xl font-bold mb-2 text-center">{personalSection.content.fullName || "Your Name"}</h1>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
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
              <h2 className="text-xl font-semibold mb-3 text-primary">Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed">{summarySection.content.text}</p>
            </div>
          )}

          {/* Work Experience */}
          {experienceSection && experienceSection.content.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-primary">Work Experience</h2>
              <div className="space-y-4">
                {experienceSection.content.map((exp: any, index: number) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{exp.position || "Position"}</h3>
                        <p className="text-primary font-medium">{exp.company || "Company"}</p>
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
        </div>
      </CardContent>
    </Card>
  )
}
