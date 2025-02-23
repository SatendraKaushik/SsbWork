"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const isAuthPage = pathname === "/signin" || pathname === "/register";

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md shadow-md"
    >
      <div className="container flex h-20 items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-primary"
          >
            SSB Excellence
          </motion.span>
        </Link>
        
        {/* Navigation Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-64 md:w-80">
                  {[
                    { title: "Physical Training", desc: "Rigorous fitness programs for SSB physical tests" },
                    { title: "Psychological Preparation", desc: "In-depth psychological assessments and preparation techniques" },
                  ].map((item, index) => (
                    <NavigationMenuLink asChild key={index}>
                      <Link
                        href="#"
                        className="block rounded-md p-3 transition hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium">{item.title}</div>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-64 md:w-80">
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="block rounded-md p-3 transition hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="text-sm font-medium">Study Materials</div>
                      <p className="text-xs text-muted-foreground">Access comprehensive SSB preparation materials</p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#pricing" legacyBehavior passHref>
                <NavigationMenuLink className="h-10 px-4 py-2">Pricing</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        {/* Authentication Buttons */}
        {!isAuthPage && (
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/signin">Log in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register">Enroll Now</Link>
            </Button>
          </div>
        )}
      </div>
    </motion.header>
  );
}
