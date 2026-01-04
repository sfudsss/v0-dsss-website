import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, ChevronDown, FileText, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Resources | DSSS",
  description: "Academic resources and course information for Data Science students at SFU",
}

// Course structure based on Spring 2026 Calendar
const coursesByDepartment = {
  "Business Administration": [
    {
      code: "BUS 217W",
      title: "Critical Thinking in Business",
      units: 3,
      prerequisites:
        "BUS 201 with a minimum grade of C- and 15 units; OR 45 units and corequisite: BUS 202; OR business administration joint major, joint honours, or double degree students with 45 units; OR data science students with 15 units; OR actuarial science students with 15 units",
      description:
        "Examine and review today's global economy through critical analysis of differing perspectives. Develop and improve critical thinking and communication skills appropriate to the business environment.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/bus/217w.html",
    },
    {
      code: "BUS 272",
      title: "Behaviour in Organizations",
      units: 3,
      prerequisites: "12 units",
      description:
        "Theories, concepts and issues in the field of organizational behaviour with an emphasis on individual and team processes. Core topics include employee motivation and performance, stress management, communication, work perceptions and attitudes, decision-making, team dynamics, employee involvement and conflict management.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/bus/272.html",
    },
    {
      code: "BUS 374",
      title: "Business Intelligence and Data Analytics",
      units: 3,
      prerequisites: "BUS 201 or CMPT 125",
      description:
        "Introduction to business intelligence and data analytics. Topics include data warehousing, data mining, visualization, and predictive analytics.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/bus/374.html",
    },
  ],
  "Computing Science": [
    {
      code: "CMPT 120",
      title: "Introduction to Computing Science and Programming I",
      units: 3,
      prerequisites: "BC Math 12 or equivalent is recommended",
      description:
        "An elementary introduction to computing science and computer programming, suitable for students with little or no programming background. Topics include pseudocode, data types, control structures, fundamental algorithms, recursion, file I/O, performance measurement, debugging tools, and basic terminal navigation.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/cmpt/120.html",
    },
    {
      code: "CMPT 125",
      title: "Introduction to Computing Science and Programming II",
      units: 3,
      prerequisites: "CMPT 120 or CMPT 130, with a minimum grade of C-",
      description:
        "A rigorous introduction to computing science and computer programming. Topics include memory management, fundamental algorithms, formal analysis of running time, abstract data types, elementary data structures, object-oriented programming, software design, specification and correctness.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/cmpt/125.html",
    },
    {
      code: "CMPT 225",
      title: "Data Structures and Programming",
      units: 3,
      prerequisites: "MACM 101 and (CMPT 125, CMPT 129 or CMPT 135), all with a minimum grade of C-",
      description:
        "Introduction to a variety of practical and important data structures and methods for implementation and evaluation. Topics include stacks, queues, lists, search trees, hash tables, efficient sorting, object-oriented programming, and time/space efficiency analysis.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/cmpt/225.html",
    },
    {
      code: "CMPT 307",
      title: "Data Structures and Algorithms",
      units: 3,
      prerequisites: "MACM 201 and CMPT 225",
      description:
        "Analysis and design of data structures and algorithms. Advanced topics in sorting and searching, graph algorithms, and algorithmic techniques.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/cmpt/307.html",
    },
    {
      code: "CMPT 318",
      title: "Special Topics in Computing Science",
      units: 3,
      prerequisites: "Varies by topic",
      description: "Topics in computing science selected based on current developments and student interest.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/cmpt/318.html",
    },
    {
      code: "CMPT 353",
      title: "Computational Data Science",
      units: 3,
      prerequisites: "CMPT 225 and STAT 270",
      description:
        "Exploration of computational tools for data science, including data manipulation, visualization, statistical analysis, and machine learning techniques.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/cmpt/353.html",
    },
  ],
  Mathematics: [
    {
      code: "MACM 101",
      title: "Discrete Mathematics I",
      units: 3,
      prerequisites: "BC Pre-Calculus 12 or BC Calculus 12 (or equivalent), or any of MATH 100, 150, 151, 154, 157",
      description:
        "Introduction to graph theory, trees, induction, automata theory, formal reasoning, modular arithmetic.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/macm/101.html",
    },
    {
      code: "MACM 201",
      title: "Discrete Mathematics II",
      units: 3,
      prerequisites: "MACM 101 with a minimum grade of C-",
      description:
        "Applications of discrete mathematics. Algorithms, recursion, recurrence relations, graph theory, trees.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/macm/201.html",
    },
    {
      code: "MATH 152",
      title: "Calculus II",
      units: 3,
      prerequisites:
        "MATH 150 or 151 or 155, with a minimum grade of C-; or MATH 154 or 157, with a grade of at least B",
      description:
        "Riemann sum, Fundamental Theorem of Calculus, definite, indefinite and improper integrals, approximate integration, integration techniques, applications of integration. First-order separable differential equations and growth models. Sequences and series, series tests, power series, convergence and applications.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/math/152.html",
    },
    {
      code: "MATH 240",
      title: "Introduction to Linear Algebra",
      units: 3,
      prerequisites: "MATH 150 or 151 or 155",
      description: "Linear systems, matrix algebra, vector geometry, eigenvalues and eigenvectors, applications.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/math/240.html",
    },
    {
      code: "MATH 251",
      title: "Calculus III",
      units: 3,
      prerequisites: "MATH 152 or 155 or 158, all with a minimum grade of C-",
      description:
        "Multivariable and vector calculus. Curves, surfaces, partial derivatives, multiple integration, line and surface integrals.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/math/251.html",
    },
  ],
  Statistics: [
    {
      code: "STAT 270",
      title: "Introduction to Probability and Statistics",
      units: 3,
      prerequisites: "MATH 152 or 155 or 158, with a minimum grade of C- (can be taken as corequisite)",
      description:
        "Basic laws of probability, sample distributions. Introduction to statistical inference and applications.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/stat/270.html",
    },
    {
      code: "STAT 285",
      title: "Intermediate Probability and Statistics",
      units: 3,
      prerequisites: "STAT 270 with a minimum grade of C-",
      description:
        "Continuation of STAT 270. Discrete and continuous distributions, sampling distributions, estimation, hypothesis testing.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/stat/285.html",
    },
    {
      code: "STAT 302",
      title: "Applied Regression Analysis",
      units: 3,
      prerequisites: "STAT 270 with a minimum grade of C-",
      description:
        "Simple and multiple regression analysis. Model fitting, inference, diagnostics, and variable selection.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/stat/302.html",
    },
    {
      code: "STAT 350",
      title: "Linear Models in Applied Statistics",
      units: 3,
      prerequisites: "STAT 285 and MATH 240",
      description: "General linear models, analysis of variance, design of experiments, model diagnostics.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/stat/350.html",
    },
    {
      code: "STAT 380",
      title: "Introduction to Stochastic Processes",
      units: 3,
      prerequisites: "STAT 285",
      description: "Discrete and continuous time Markov chains, random walks, Poisson processes, queueing theory.",
      url: "https://www.sfu.ca/students/calendar/2026/spring/courses/stat/380.html",
    },
  ],
}

const officialResources = [
  {
    title: "Data Science Major Spring 2026 Academic Calendar",
    description: "Complete program requirements, course listings, and academic regulations",
    url: "https://www.sfu.ca/students/calendar/2026/spring/programs/data-science/major/bachelor-of-science.html",
  },
  {
    title: "About Data Science",
    description: "Learn about the Data Science program, career prospects, and program structure",
    url: "https://www.sfu.ca/stat-actsci/undergraduate/prospective-students/degree-programs/data-science.html",
  },
  {
    title: "Data Science FAQs + Contacts",
    description: "Frequently asked questions and contact information for academic advising",
    url: "https://www.sfu.ca/stat-actsci/undergraduate/all-undergrad/advising/FAQs/data-sci-faq.html",
  },
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-balance">Academic Resources</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Everything you need to succeed in your Data Science journey at SFU
          </p>
        </div>

        {/* Official SFU Resources Section */}
        <section className="mb-16">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <img src="/sfu-logo-red.jpg" alt="SFU Logo" className="h-10 w-10" />
                <CardTitle className="text-2xl">Official SFU Resources</CardTitle>
              </div>
              <CardDescription>Essential links to official SFU Data Science program information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {officialResources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-2 p-4 rounded-lg border border-border hover:border-primary hover:bg-accent/50 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors text-balance">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{resource.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Course Structure Section */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Course Structure</h2>
            <p className="text-muted-foreground leading-relaxed">
              Required courses for the Data Science Major, organized by department
            </p>
          </div>

          <div className="grid gap-6">
            {Object.entries(coursesByDepartment).map(([department, courses]) => (
              <Card key={department}>
                <CardHeader>
                  <CardTitle className="text-xl">{department}</CardTitle>
                  <CardDescription>
                    {courses.length} {courses.length === 1 ? "course" : "courses"} required
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {courses.map((course) => (
                      <Collapsible key={course.code}>
                        <div className="border rounded-lg overflow-hidden">
                          <CollapsibleTrigger className="w-full">
                            <div className="flex items-center justify-between p-4 hover:bg-accent/50 transition-colors">
                              <div className="flex items-center gap-4">
                                <div className="flex flex-col items-start">
                                  <div className="flex items-center gap-2">
                                    <span className="font-mono font-semibold text-primary">{course.code}</span>
                                    <span className="text-xs text-muted-foreground">
                                      ({course.units} {course.units === 1 ? "unit" : "units"})
                                    </span>
                                  </div>
                                  <span className="text-sm text-muted-foreground text-left">{course.title}</span>
                                </div>
                              </div>
                              <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform data-[state=open]:rotate-180" />
                            </div>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <div className="px-4 pb-4 pt-2 border-t bg-muted/30 space-y-3">
                              <div>
                                <h4 className="text-sm font-semibold mb-1">Description</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold mb-1">Prerequisites</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{course.prerequisites}</p>
                              </div>
                              <div className="pt-2">
                                <Button asChild variant="outline" size="sm" className="gap-2 bg-transparent">
                                  <a href={course.url} target="_blank" rel="noopener noreferrer">
                                    View in Calendar
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </CollapsibleContent>
                        </div>
                      </Collapsible>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Papers Section */}
        <section>
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Past Papers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Study materials from previous semesters for required courses
            </p>
          </div>

          <Card>
            <CardHeader>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between bg-transparent">
                    <span className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Want to upload your own past papers?
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <div className="bg-muted/50 p-4 rounded-lg space-y-3">
                    <p className="text-sm leading-relaxed">
                      We appreciate contributions from students! Before submitting past papers, please ensure:
                    </p>
                    <ol className="text-sm space-y-2 ml-4 list-decimal">
                      <li>The papers and answers are verified for correctness</li>
                      <li>All sensitive information (names, student IDs, etc.) is censored</li>
                    </ol>
                    <div className="pt-2">
                      <Button asChild variant="default" size="sm">
                        <Link href="/contact">Contact Us to Submit Papers</Link>
                      </Button>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {/* Computing Science Papers */}
                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">CMPT 120</h3>
                  <p className="text-sm text-muted-foreground mb-3">Intro to Computing Science I</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">CMPT 125</h3>
                  <p className="text-sm text-muted-foreground mb-3">Intro to Computing Science II</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">CMPT 225</h3>
                  <p className="text-sm text-muted-foreground mb-3">Data Structures and Programming</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">CMPT 307</h3>
                  <p className="text-sm text-muted-foreground mb-3">Data Structures and Algorithms</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">CMPT 353</h3>
                  <p className="text-sm text-muted-foreground mb-3">Computational Data Science</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>

                {/* Mathematics Papers */}
                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">MACM 101</h3>
                  <p className="text-sm text-muted-foreground mb-3">Discrete Mathematics I</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">MACM 201</h3>
                  <p className="text-sm text-muted-foreground mb-3">Discrete Mathematics II</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">MATH 152</h3>
                  <p className="text-sm text-muted-foreground mb-3">Calculus II</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">MATH 240</h3>
                  <p className="text-sm text-muted-foreground mb-3">Intro to Linear Algebra</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">MATH 251</h3>
                  <p className="text-sm text-muted-foreground mb-3">Calculus III</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>

                {/* Statistics Papers */}
                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">STAT 270</h3>
                  <p className="text-sm text-muted-foreground mb-3">Intro to Probability and Statistics</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">STAT 285</h3>
                  <p className="text-sm text-muted-foreground mb-3">Intermediate Probability and Statistics</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">STAT 302</h3>
                  <p className="text-sm text-muted-foreground mb-3">Applied Regression Analysis</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">STAT 350</h3>
                  <p className="text-sm text-muted-foreground mb-3">Linear Models in Applied Statistics</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">STAT 380</h3>
                  <p className="text-sm text-muted-foreground mb-3">Intro to Stochastic Processes</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>

                {/* Business Papers */}
                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">BUS 217W</h3>
                  <p className="text-sm text-muted-foreground mb-3">Critical Thinking in Business</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">BUS 272</h3>
                  <p className="text-sm text-muted-foreground mb-3">Behaviour in Organizations</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="font-mono font-semibold text-primary mb-2">BUS 374</h3>
                  <p className="text-sm text-muted-foreground mb-3">Business Intelligence and Data Analytics</p>
                  <p className="text-xs text-muted-foreground italic">Coming soon...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
