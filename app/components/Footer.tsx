import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export function Footer() {
  return (
<footer className="border-t bg-background">
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
        </div>

        {/* Separator */}
        <div className="border-t border-muted-foreground"></div>

        
      </div>
    </footer>
  )
}

