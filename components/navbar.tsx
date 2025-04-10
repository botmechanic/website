"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: "#learn", label: "What You'll Learn" },
    { href: "#why", label: "Why Us" },
    { href: "#how", label: "How It Works" },
    { href: "#pricing", label: "Pricing" },
  ]

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm" 
          : "bg-white border-b border-gray-100"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <img 
                src="/atc-logo.png" 
                alt="Algo Traders Club Logo" 
                className="h-10 w-auto group-hover:opacity-90 transition-opacity" 
              />
              <span className="ml-2 bg-gradient-to-r from-[#70DB21] to-[#A0E76C] text-black text-xs px-2 py-1 rounded-full font-medium shadow-sm">
                SOLANA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="relative text-gray-700 hover:text-black font-medium py-2 transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#70DB21] to-[#A0E76C] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-gray-300 text-black hover:bg-gray-50 hover:border-gray-400 transition-all"
              asChild
            >
              <Link href="https://www.skool.com/algo-traders-club-3768" target="_blank" rel="noopener noreferrer">
                Log In
              </Link>
            </Button>
            <Button 
              className="bg-gradient-to-r from-[#70DB21] to-[#A0E76C] text-black font-medium hover:shadow-md transition-all duration-300 hover:opacity-90"
              asChild
            >
              <Link href="https://www.skool.com/algo-traders-club-3768" target="_blank" rel="noopener noreferrer">
                Join Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-black hover:bg-gray-50 font-medium py-3 px-2 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-4 mt-2 border-t border-gray-100">
              <Button 
                variant="outline" 
                className="border-gray-300 text-black hover:bg-gray-50 w-full justify-start"
                asChild
              >
                <Link href="https://www.skool.com/algo-traders-club-3768" target="_blank" rel="noopener noreferrer">
                  Log In
                </Link>
              </Button>
              <Button 
                className="bg-gradient-to-r from-[#70DB21] to-[#A0E76C] text-black font-medium w-full justify-start"
                asChild
              >
                <Link href="https://www.skool.com/algo-traders-club-3768" target="_blank" rel="noopener noreferrer">
                  Join Now
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
