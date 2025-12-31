"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useToast } from "@/hooks/use-toast"

export default function RegisterPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentNumber: "",
    discordUsername: "",
    major: "",
    year: "",
    howHeard: [] as string[],
    kaggleUsername: "",
    dietaryRestrictions: "",
    tshirtSize: "",
  })

  const toggleHowHeard = (option: string) => {
    setFormData({
      ...formData,
      howHeard: formData.howHeard.includes(option)
        ? formData.howHeard.filter((item) => item !== option)
        : [...formData.howHeard, option],
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const supabase = createClient()

    try {
      console.log("[v0] Starting registration submission for event:", params.eventId)
      console.log("[v0] Form data:", formData)

      const insertData = {
        event_id: params.eventId as string,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        student_id: formData.studentNumber,
        program: formData.major,
        year_level: formData.year,
        how_heard_about: formData.howHeard.join(", "),
        dietary_restrictions: formData.dietaryRestrictions,
        shirt_size: formData.tshirtSize,
        additional_info: JSON.stringify({
          discord_username: formData.discordUsername,
          kaggle_username: formData.kaggleUsername,
        }),
        registration_status: "confirmed",
      }

      console.log("[v0] Inserting data:", insertData)

      const { data, error } = await supabase.from("participants").insert(insertData).select()

      console.log("[v0] Supabase response - data:", data)
      console.log("[v0] Supabase response - error:", error)

      if (error) {
        console.error("[v0] Supabase error details:", JSON.stringify(error, null, 2))
        throw error
      }

      console.log("[v0] Registration successful!")
      setIsSuccess(true)

      toast({
        title: "Success!",
        description: "Your registration has been completed",
      })

      // Redirect after 3 seconds
      setTimeout(() => {
        router.push(`/events/${params.eventId}`)
      }, 3000)
    } catch (error: any) {
      console.error("[v0] Registration error:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to complete registration. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <main className="flex min-h-[80vh] items-center justify-center">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-12 text-center">
              <CheckCircle2 className="mx-auto mb-6 h-16 w-16 text-primary" />
              <h2 className="mb-4 text-3xl font-bold text-navy-dark">Registration Successful!</h2>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Thank you for registering for HackML 2026. You'll receive a confirmation email shortly with further
                details.
              </p>
              <Button asChild>
                <Link href={`/events/${params.eventId}`}>Return to Event Page</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <Button asChild variant="ghost" className="mb-6">
            <Link href={`/events/${params.eventId}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Event
            </Link>
          </Button>

          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold text-navy-dark md:text-4xl">Event Registration</h1>
            <p className="leading-relaxed text-muted-foreground">
              Fill out the form below to register for this event. All fields marked with * are required.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy-dark">Personal Information</CardTitle>
                <CardDescription>Tell us about yourself</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="data8@sfu.ca"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <p className="text-xs text-muted-foreground">Preferred: @sfu.ca email</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentNumber">Student Number *</Label>
                  <Input
                    id="studentNumber"
                    placeholder="300913643"
                    value={formData.studentNumber}
                    onChange={(e) => setFormData({ ...formData, studentNumber: e.target.value })}
                    required
                  />
                  <p className="text-xs text-muted-foreground">9-digit number listed on your student ID</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="discordUsername">Discord Username *</Label>
                  <Input
                    id="discordUsername"
                    placeholder="data8"
                    value={formData.discordUsername}
                    onChange={(e) => setFormData({ ...formData, discordUsername: e.target.value })}
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Academic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy-dark">Academic Information</CardTitle>
                <CardDescription>Your educational background</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="major">Major *</Label>
                  <Select value={formData.major} onValueChange={(value) => setFormData({ ...formData, major: value })}>
                    <SelectTrigger id="major">
                      <SelectValue placeholder="Select your major" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="data-science">Data Science</SelectItem>
                      <SelectItem value="computer-science">Computer Science</SelectItem>
                      <SelectItem value="statistics">Statistics</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year">What year are you in? *</Label>
                  <Select value={formData.year} onValueChange={(value) => setFormData({ ...formData, year: value })}>
                    <SelectTrigger id="year">
                      <SelectValue placeholder="Select your year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4+">4+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Event Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy-dark">Event Information</CardTitle>
                <CardDescription>Help us prepare for your participation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>How did you hear about this event? *</Label>
                  <div className="space-y-2">
                    {["Instagram", "Discord", "Email", "A friend", "Posters", "Other"].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.howHeard.includes(option)}
                          onChange={() => toggleHowHeard(option)}
                          className="h-4 w-4 rounded border-input"
                        />
                        <span className="text-sm text-foreground">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="kaggleUsername">Kaggle Username *</Label>
                  <Input
                    id="kaggleUsername"
                    placeholder="your_kaggle_username"
                    value={formData.kaggleUsername}
                    onChange={(e) => setFormData({ ...formData, kaggleUsername: e.target.value })}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    If you haven't already, please create a free Kaggle account at{" "}
                    <a
                      href="https://www.kaggle.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      kaggle.com
                    </a>
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dietaryRestrictions">Do you have any dietary restrictions? *</Label>
                  <Textarea
                    id="dietaryRestrictions"
                    placeholder="e.g., Vegetarian, Vegan, Gluten-free, Nut allergy, None"
                    value={formData.dietaryRestrictions}
                    onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                    required
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tshirtSize">T-shirt Size *</Label>
                  <Select
                    value={formData.tshirtSize}
                    onValueChange={(value) => setFormData({ ...formData, tshirtSize: value })}
                  >
                    <SelectTrigger id="tshirtSize">
                      <SelectValue placeholder="Select your size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xs">XS</SelectItem>
                      <SelectItem value="s">S</SelectItem>
                      <SelectItem value="m">M</SelectItem>
                      <SelectItem value="l">L</SelectItem>
                      <SelectItem value="xl">XL</SelectItem>
                      <SelectItem value="2xl">2XL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Complete Registration"
              )}
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
