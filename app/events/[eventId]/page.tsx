import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, Clock, Trophy, ArrowLeft, ExternalLink } from "lucide-react"
import { getEventById, getAllEvents } from "@/lib/events-data"

export const dynamicParams = false

// This ensures all event routes are pre-rendered at build time
export async function generateStaticParams() {
  const events = getAllEvents()

  console.log(
    "[v0] Generating static params for events:",
    events.map((e) => e.id),
  )

  return events.map((event) => ({
    eventId: event.id,
  }))
}

export default async function EventDetailPage({ params }: { params: Promise<{ eventId: string }> }) {
  const { eventId } = await params
  const event = getEventById(eventId)

  if (!event) {
    notFound()
  }

  const isUpcoming = event.status !== "completed"

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link href="/events">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Link>
          </Button>

          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{event.category}</Badge>
              {isUpcoming ? (
                <Badge className="bg-primary text-primary-foreground">Upcoming</Badge>
              ) : (
                <Badge variant="secondary">Past Event</Badge>
              )}
            </div>

            <h1 className="mb-4 text-4xl font-bold tracking-tight text-navy-dark md:text-5xl text-balance">
              {event.title}
            </h1>
            <p className="mb-8 text-xl text-muted-foreground text-pretty leading-relaxed">{event.tagline}</p>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Date</p>
                  <p className="font-medium text-sm text-navy-dark">{event.date}</p>
                </div>
              </div>

              {event.time && (
                <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="font-medium text-sm text-navy-dark">{event.time}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="font-medium text-sm text-navy-dark">{event.location}</p>
                </div>
              </div>

              {event.capacity && (
                <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Capacity</p>
                    <p className="font-medium text-sm text-navy-dark">{event.capacity}</p>
                  </div>
                </div>
              )}
            </div>

            {isUpcoming && event.registrationLink && (
              <div className="mt-8">
                {event.registrationLink.startsWith("http") ? (
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                      Register Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                ) : (
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href={event.registrationLink}>
                      Register Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {isUpcoming ? (
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="about" className="mt-8 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-navy-dark">About This Event</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                      <p className="text-muted-foreground leading-relaxed">{event.longDescription}</p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="schedule" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-navy-dark">Event Schedule</CardTitle>
                      <CardDescription>24-hour timeline of activities</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {event.schedule?.map((item: any, index: number) => (
                          <div key={index} className="flex gap-4 border-l-2 border-primary/30 pl-4 pb-4 last:pb-0">
                            <div className="min-w-[80px]">
                              <p className="font-semibold text-sm text-primary">{item.time}</p>
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-navy-dark">{item.title}</p>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="details" className="mt-8 space-y-6">
                  {event.details && (
                    <>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-navy-dark">Eligibility</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{event.details.eligibility}</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-navy-dark">Team Size</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{event.details.teamSize}</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-navy-dark">
                            <Trophy className="mr-2 inline h-5 w-5 text-primary" />
                            Prizes
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{event.details.prizes}</p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-navy-dark">Food & Amenities</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{event.details.food}</p>
                        </CardContent>
                      </Card>
                    </>
                  )}
                </TabsContent>

                <TabsContent value="faq" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-navy-dark">Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {event.faq?.map((item: any, index: number) => (
                          <div key={index} className="space-y-2">
                            <h3 className="font-semibold text-navy-dark">{item.question}</h3>
                            <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                            {index < event.faq.length - 1 && <div className="mt-4 border-b border-border" />}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            ) : (
              // Past Event Content
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-navy-dark">Event Recap</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    <p className="text-muted-foreground leading-relaxed">{event.longDescription}</p>
                  </CardContent>
                </Card>

                {event.highlights && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-navy-dark">Event Highlights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight: string, index: number) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {event.winners && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-navy-dark">
                        <Trophy className="mr-2 inline h-5 w-5 text-primary" />
                        Winners
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {event.winners.map((winner: any, index: number) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Badge className="bg-primary/10 text-primary">{winner.place}</Badge>
                              <h3 className="font-semibold text-navy-dark">{winner.team}</h3>
                            </div>
                            <p className="font-medium text-sm">{winner.project}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{winner.description}</p>
                            {index < event.winners.length - 1 && <div className="mt-4 border-b border-border" />}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card className="border-primary/20 bg-muted/30">
                  <CardContent className="p-6 text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      Photos and detailed results will be added here after the event concludes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {isUpcoming && (
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Ready to Participate?</h2>
            <p className="mx-auto mb-6 max-w-2xl text-lg opacity-90 leading-relaxed">
              Register now to secure your spot. Spaces are limited and registration closes soon!
            </p>
            {event.registrationLink &&
              (event.registrationLink.startsWith("http") ? (
                <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                    Register for {event.title}
                  </a>
                </Button>
              ) : (
                <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Link href={event.registrationLink}>Register for {event.title}</Link>
                </Button>
              ))}
          </div>
        </section>
      )}
    </main>
  )
}
