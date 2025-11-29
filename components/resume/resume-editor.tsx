"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2, GripVertical } from "lucide-react"
import { useResume } from "./resume-context"

export function ResumeEditor() {
  const { currentResume, updateSection, addSection, removeSection } = useResume()

  if (!currentResume) return null

  const personalSection = currentResume.sections.find((s) => s.type === "personal")
  const summarySection = currentResume.sections.find((s) => s.type === "summary")
  const experienceSection = currentResume.sections.find((s) => s.type === "experience")

  return (
    <div className="space-y-6">
      {/* Personal Information */}
      {personalSection && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Personal Information
              <GripVertical className="h-4 w-4 text-muted-foreground" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={personalSection.content.fullName || ""}
                  onChange={(e) =>
                    updateSection(personalSection.id, {
                      ...personalSection.content,
                      fullName: e.target.value,
                    })
                  }
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={personalSection.content.email || ""}
                  onChange={(e) =>
                    updateSection(personalSection.id, {
                      ...personalSection.content,
                      email: e.target.value,
                    })
                  }
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={personalSection.content.phone || ""}
                  onChange={(e) =>
                    updateSection(personalSection.id, {
                      ...personalSection.content,
                      phone: e.target.value,
                    })
                  }
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={personalSection.content.location || ""}
                  onChange={(e) =>
                    updateSection(personalSection.id, {
                      ...personalSection.content,
                      location: e.target.value,
                    })
                  }
                  placeholder="New York, NY"
                />
              </div>
              <div>
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={personalSection.content.website || ""}
                  onChange={(e) =>
                    updateSection(personalSection.id, {
                      ...personalSection.content,
                      website: e.target.value,
                    })
                  }
                  placeholder="https://johndoe.com"
                />
              </div>
              <div>
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  value={personalSection.content.linkedin || ""}
                  onChange={(e) =>
                    updateSection(personalSection.id, {
                      ...personalSection.content,
                      linkedin: e.target.value,
                    })
                  }
                  placeholder="linkedin.com/in/johndoe"
                />
              </div>
              <div>
                <Label htmlFor="photo">Photo</Label>
                {personalSection.content.photoUrl ? (
                  <div className="flex items-center space-x-3">
                    <img
                      src={personalSection.content.photoUrl}
                      alt="Profile"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => updateSection(personalSection.id, { ...personalSection.content, photoUrl: "" })}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ) : (
                  <input
                    id="photo"
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files?.[0]
                      if (!file) return
                      try {
                        const fd = new FormData()
                        fd.append("photo", file)
                        const res = await fetch("/api/upload", { method: "POST", body: fd })
                        const data = await res.json()
                        if (data?.url) {
                          updateSection(personalSection.id, { ...personalSection.content, photoUrl: data.url })
                        }
                      } catch (err) {
                        console.error("Upload failed", err)
                      }
                    }}
                  />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Professional Summary */}
      {summarySection && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Professional Summary
              <div className="flex items-center space-x-2">
                <GripVertical className="h-4 w-4 text-muted-foreground" />
                <Button variant="ghost" size="sm" onClick={() => removeSection(summarySection.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={summarySection.content.text || ""}
              onChange={(e) =>
                updateSection(summarySection.id, {
                  text: e.target.value,
                })
              }
              placeholder="Write a compelling professional summary that highlights your key achievements and career goals..."
              rows={4}
            />
          </CardContent>
        </Card>
      )}

      {/* Work Experience */}
      {experienceSection && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Work Experience
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    const newExperience = {
                      company: "",
                      position: "",
                      startDate: "",
                      endDate: "",
                      current: false,
                      description: "",
                    }
                    updateSection(experienceSection.id, [...experienceSection.content, newExperience])
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
                <GripVertical className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {experienceSection.content.map((exp: any, index: number) => (
              <div key={index} className="border rounded-lg p-4 space-y-4">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium">Experience {index + 1}</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const updated = experienceSection.content.filter((_: any, i: number) => i !== index)
                      updateSection(experienceSection.id, updated)
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Company</Label>
                    <Input
                      value={exp.company}
                      onChange={(e) => {
                        const updated = [...experienceSection.content]
                        updated[index] = { ...updated[index], company: e.target.value }
                        updateSection(experienceSection.id, updated)
                      }}
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <Label>Position</Label>
                    <Input
                      value={exp.position}
                      onChange={(e) => {
                        const updated = [...experienceSection.content]
                        updated[index] = { ...updated[index], position: e.target.value }
                        updateSection(experienceSection.id, updated)
                      }}
                      placeholder="Job Title"
                    />
                  </div>
                  <div>
                    <Label>Start Date</Label>
                    <Input
                      type="month"
                      value={exp.startDate}
                      onChange={(e) => {
                        const updated = [...experienceSection.content]
                        updated[index] = { ...updated[index], startDate: e.target.value }
                        updateSection(experienceSection.id, updated)
                      }}
                    />
                  </div>
                  <div>
                    <Label>End Date</Label>
                    <Input
                      type="month"
                      value={exp.endDate}
                      onChange={(e) => {
                        const updated = [...experienceSection.content]
                        updated[index] = { ...updated[index], endDate: e.target.value }
                        updateSection(experienceSection.id, updated)
                      }}
                      disabled={exp.current}
                    />
                  </div>
                </div>

                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={exp.description}
                    onChange={(e) => {
                      const updated = [...experienceSection.content]
                      updated[index] = { ...updated[index], description: e.target.value }
                      updateSection(experienceSection.id, updated)
                    }}
                    placeholder="Describe your responsibilities and achievements..."
                    rows={3}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Add Section Button */}
      <Card className="border-dashed">
        <CardContent className="flex items-center justify-center py-8">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">Add more sections to your resume</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button variant="outline" size="sm" onClick={() => addSection("experience")}>
                <Plus className="h-4 w-4 mr-1" />
                Experience
              </Button>
              <Button variant="outline" size="sm" onClick={() => addSection("education")}>
                <Plus className="h-4 w-4 mr-1" />
                Education
              </Button>
              <Button variant="outline" size="sm" onClick={() => addSection("skills")}>
                <Plus className="h-4 w-4 mr-1" />
                Skills
              </Button>
              <Button variant="outline" size="sm" onClick={() => addSection("projects")}>
                <Plus className="h-4 w-4 mr-1" />
                Projects
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
