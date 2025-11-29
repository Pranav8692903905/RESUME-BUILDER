"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Linkedin, MessageSquare, Zap } from "lucide-react"
import { CoverLetterGenerator } from "./cover-letter-generator"
import { LinkedInBioGenerator } from "./linkedin-bio-generator"

export function AIToolsHub() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">AI Tools</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">AI-Powered Career Tools</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leverage artificial intelligence to create compelling career documents and optimize your professional
            presence
          </p>
        </div>

        <Tabs defaultValue="cover-letter" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cover-letter" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Cover Letter</span>
            </TabsTrigger>
            <TabsTrigger value="linkedin-bio" className="flex items-center space-x-2">
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn Bio</span>
            </TabsTrigger>
            <TabsTrigger value="interview-prep" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>Interview Prep</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cover-letter" className="mt-8">
            <CoverLetterGenerator />
          </TabsContent>

          <TabsContent value="linkedin-bio" className="mt-8">
            <LinkedInBioGenerator />
          </TabsContent>

          <TabsContent value="interview-prep" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <span>Interview Preparation Assistant</span>
                  </CardTitle>
                  <CardDescription>
                    Coming soon! AI-powered interview question generator and practice sessions
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center py-12">
                  <div className="bg-muted/30 rounded-lg p-8">
                    <MessageSquare className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Interview Prep Tool</h3>
                    <p className="text-muted-foreground mb-4">
                      This feature is currently in development. Soon you'll be able to:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 max-w-md mx-auto">
                      <li>• Generate common interview questions for your role</li>
                      <li>• Practice with AI-powered mock interviews</li>
                      <li>• Get feedback on your answers</li>
                      <li>• Prepare for behavioral and technical questions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
