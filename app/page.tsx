"use client"

import { SiteHeader } from "./components/site-header"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

import { Shield, Target, Users, Zap, Book, Award, Check } from "lucide-react"
import Image from "next/image"
import HeroSection from "./components/HeroSection"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden ">
      <SiteHeader />
      <main className="flex-1 overflow-x-hidden">
        <HeroSection />

        <Separator className="my-12" />

        <section className="container space-y-12 py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Comprehensive SSB Training</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Our programs cover all aspects of SSB selection, ensuring you're fully prepared for the challenges ahead.
            </p>
          </motion.div>
          <div className="mx-auto grid gap-8 sm:max-w-3xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="relative overflow-hidden rounded-lg border bg-background p-2"
              >
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <feature.icon className="h-12 w-12 text-primary" />
                  <div className="space-y-2">
                    <h3 className="font-bold">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section className="relative py-16 px-6 md:py-24 overflow-y-hidden text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center space-y-4"
          >
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white  md:text-6xl bg-gradient-to-r tc text-transparent bg-clip-text">
              Training Methodology
            </h2>
            <p className="max-w-2xl text-lg text-gray-300 sm:text-xl">
              Our state-of-the-art training methods prepare you for real-world scenarios in the SSB selection process.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-12 md:grid-cols-2 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-6  p-8 rounded-lg shadow-xl "
            >
              <h3 className="text-3xl font-semibold ">Immersive Learning Experience</h3>
              <p className="text-gray-300 leading-relaxed">
                Our training programs utilize advanced simulation techniques and real-world scenarios to provide an
                immersive learning experience. This approach ensures that you're not just memorizing information but
                developing critical thinking and decision-making skills necessary for success in the SSB selection process.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="mr-3 h-6 w-6 text-green-400" />
                  <span className="text-gray-200">Realistic scenario simulations</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-3 h-6 w-6 text-green-400" />
                  <span className="text-gray-200">Hands-on practical exercises</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-3 h-6 w-6 text-green-400" />
                  <span className="text-gray-200">Expert-led debriefing sessions</span>
                </li>
              </ul>
            </motion.div>
            <img
              src="https://ssbsmartlearningapp.com/wp-content/uploads/2024/06/Pump-Upcompressed-1.gif"
              alt="SSB Training Simulation"
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-105 rounded-xl"
            />
            {/* Right Side - Image */}
            {/* <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl shadow-2xl border border-gray-700"
        >
          
        </motion.div> */}
          </div>
        </section>

        <Separator className="my-12" />

        <section id="pricing" className="container px-32 py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Training Course Pricing</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Choose the training package that best fits your preparation needs and goals.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col overflow-hidden rounded-lg border bg-background"
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline text-3xl font-bold">
                    ₹{plan.price.toLocaleString()}
                    <span className="ml-1 text-xl font-normal text-muted-foreground">{plan.duration}</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">{plan.description}</p>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-8 w-full">{plan.buttonText}</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        <section className="container py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Begin Your SSB Journey</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Start your preparation for the Special Service Bureau selection process today.
            </p>
            <Button size="lg" className="mt-4">
              Enroll Now
            </Button>

          </motion.div>
            <img src="https://ssbsmartlearningapp.com/wp-content/uploads/2024/06/Jump.gif" alt=""  className="mx-auto mt-12 h-auto w-full max-w-screen-xl rounded-lg shadow-lg" />

        </section>
      </main>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-[100rem] flex-col items-center justify-between gap-4 text-center"
      >
        <footer className="border-t bg-background w-screen">
          <div className="container mx-auto flex flex-col gap-10 py-12 px-6 md:px-12 lg:px-24">
            {/* Grid Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
              {/* Courses */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold">Courses</h3>
                {["Physical Training", "Psychological Preparation", "Interview Skills", "Group Tasks"].map((item) => (
                  <Link key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                ))}
              </div>

              {/* Resources */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold">Resources</h3>
                {["Study Materials", "SSB Blog", "Success Stories", "FAQs"].map((item) => (
                  <Link key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                ))}
              </div>

              {/* Company */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold">Company</h3>
                {["About Us", "Our Team", "Careers", "Contact"].map((item) => (
                  <Link key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                ))}
              </div>

              {/* Legal */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold">Legal</h3>
                {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
                  <Link key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </motion.div>

    </div>
  )
}

const features = [
  {
    name: "Physical Training",
    description: "Rigorous fitness programs tailored for SSB physical tests.",
    icon: Shield,
  },
  {
    name: "Psychological Preparation",
    description: "In-depth psychological assessments and preparation techniques.",
    icon: Users,
  },
  {
    name: "Interview Skills",
    description: "Comprehensive interview preparation and mock sessions.",
    icon: Target,
  },
  {
    name: "Group Tasks",
    description: "Simulated group exercises to enhance team skills.",
    icon: Zap,
  },
  {
    name: "Written Exam Prep",
    description: "Thorough coverage of SSB written exam syllabus.",
    icon: Book,
  },
  {
    name: "Leadership Development",
    description: "Focused training on leadership qualities and decision-making.",
    icon: Award,
  },
] as const

const pricingPlans = [
  {
    name: "Basic Package",
    price: 15000,
    duration: "/month",
    description: "Essential SSB preparation for beginners.",
    features: ["Physical fitness program", "Basic psychological prep", "Interview fundamentals", "Online resources"],
    buttonText: "Get Started",
  },
  {
    name: "Advanced Package",
    price: 25000,
    duration: "/month",
    description: "Comprehensive training for serious candidates.",
    features: [
      "Intensive physical training",
      "Advanced psych assessments",
      "In-depth interview coaching",
      "Group task simulations",
      "Personal mentor",
      "24/7 doubt clearing",
    ],
    buttonText: "Enroll Now",
  },
  {
    name: "Elite Package",
    price: 40000,
    duration: "/month",
    description: "Premium, personalized SSB coaching experience.",
    features: [
      "One-on-one physical training",
      "Personalized psych profiling",
      "Mock SSB board interviews",
      "Leadership workshops",
      "Residential training option",
      "Post-selection guidance",
    ],
    buttonText: "Apply for Elite",
  },
] as const

