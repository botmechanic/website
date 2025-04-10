import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Twitter, Github, Linkedin, Mail, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="max-w-6xl mx-auto mb-16 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold mb-2">Stay ahead of the market</h3>
              <p className="text-gray-600">
                Get the latest algorithmic trading insights and Solana updates delivered to your inbox.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="rounded-lg border-gray-200 focus:border-[#70DB21] focus:ring-[#70DB21]/20"
                />
                <Button 
                  className="bg-gradient-to-r from-[#70DB21] to-[#A0E76C] text-black font-medium hover:shadow-md transition-all whitespace-nowrap"
                  asChild
                >
                  <Link href="https://www.skool.com/algo-traders-club-3768" target="_blank" rel="noopener noreferrer">
                    Subscribe
                    <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center">
              <img 
                src="/atc-logo.png" 
                alt="Algo Traders Club Logo" 
                className="h-10 w-auto hover:opacity-90 transition-opacity" 
              />
            </Link>
            <p className="mt-4 text-gray-600 max-w-md leading-relaxed">
              The premier destination to learn algorithmic trading on the Solana blockchain. Join our community and
              master the hottest skill of 2025.
            </p>
            <div className="flex space-x-3 mt-6">
              <Button variant="outline" size="icon" className="rounded-full border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all">
                <Twitter className="h-4 w-4 text-gray-700" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all">
                <Github className="h-4 w-4 text-gray-700" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all">
                <Linkedin className="h-4 w-4 text-gray-700" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5 text-black">Resources</h3>
            <ul className="space-y-3">
              {["Documentation", "Tutorials", "Blog", "API Reference", "Community Forum"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-black flex items-center group">
                    <ChevronRight className="h-3 w-3 mr-1 text-gray-400 group-hover:text-[#70DB21] transition-colors" />
                    <span className="group-hover:translate-x-0.5 transition-transform">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5 text-black">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Privacy Policy", "Terms of Service", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-black flex items-center group">
                    <ChevronRight className="h-3 w-3 mr-1 text-gray-400 group-hover:text-[#70DB21] transition-colors" />
                    <span className="group-hover:translate-x-0.5 transition-transform">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5 text-black">Contact Us</h3>
            <address className="not-italic text-gray-600 space-y-3">
              <p>San Francisco, CA</p>
              <p>United States</p>
              <p className="hover:text-black transition-colors">
                <a href="mailto:hello@algotradersclub.com">hello@algotradersclub.com</a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Algo Traders Club. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Button 
              className="bg-gradient-to-r from-[#70DB21] to-[#A0E76C] text-black font-medium hover:shadow-md transition-all"
              asChild
            >
              <Link href="https://www.skool.com/algo-traders-club-3768" target="_blank" rel="noopener noreferrer">
                Join Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
