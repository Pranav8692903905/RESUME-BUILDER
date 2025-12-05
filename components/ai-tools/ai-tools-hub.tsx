"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Linkedin, MessageSquare, Zap, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CoverLetterGenerator } from "./cover-letter-generator"
import { LinkedInBioGenerator } from "./linkedin-bio-generator"

export function AIToolsHub() {
  const [showChatbot, setShowChatbot] = useState(false)

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('/1715371733808.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(2,6,23,0.5)',
        backgroundBlendMode: 'overlay',
      }}
    >
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

      {/* Floating AI Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!showChatbot ? (
          <button
            onClick={() => setShowChatbot(true)}
            className="group relative"
            aria-label="Open AI Assistant"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity animate-pulse" />
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:scale-110 transition-transform duration-300">
              <img
                src="/AI-Job.avif"
                alt="AI Assistant"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
          </button>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl w-96 max-h-[600px] flex flex-col overflow-hidden border-2 border-primary/20">
            {/* Chatbot Header */}
            <div 
              className="p-4 text-white relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
              }}
            >
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                    <img
                      src="/AI-Job.avif"
                      alt="AI Assistant"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">AI Career Assistant</h3>
                    <p className="text-xs opacity-90">Online • Ready to help</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowChatbot(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Chatbot Body */}
            <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="/AI-Job.avif"
                      alt="AI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[80%]">
                    <p className="text-sm text-gray-800">
                      👋 Hello! I'm your AI Career Assistant. I can help you with:
                    </p>
                    <ul className="text-xs text-gray-600 mt-2 space-y-1">
                      <li>✨ Resume optimization tips</li>
                      <li>💼 Cover letter suggestions</li>
                      <li>🎯 Career advice</li>
                      <li>📝 LinkedIn profile enhancement</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2">How can I assist you today?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chatbot Input */}
            <div className="p-4 bg-white border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <Button
                  className="rounded-full px-6"
                  style={{
                    background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
                  }}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
