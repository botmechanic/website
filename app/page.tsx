import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Brain, Cpu, Layers, Code, Database, Coins, Zap, LineChart } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#70DB21]/10 to-[#A0E76C]/5 blur-3xl"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-[#70DB21]/5 to-[#A0E76C]/10 blur-3xl"></div>
          </div>
          
          <div className="container px-4 mx-auto relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">
                <span className="text-sm font-medium bg-gradient-to-r from-[#70DB21] to-[#A0E76C] text-transparent bg-clip-text">
                  The #1 Community for Algo Traders on Solana
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black leading-tight">
                Master <span className="relative">Algo Trading on Solana<span className="absolute bottom-2 left-0 w-full h-3 bg-[#70DB21]/20 -z-10 skew-x-3"></span></span> with the #1 Community
              </h1>
              
              <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
                Learn the hottest skill of 2025 at the intersection of Crypto, Web3, and AI on the Solana blockchain.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#70DB21] to-[#A0E76C] text-black font-medium text-lg px-8 py-6 h-auto transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] rounded-xl w-full sm:w-auto"
                  asChild
                >
                  <Link href="https://www.skool.com/algo-traders-club-3768" target="_blank" rel="noopener noreferrer">
                    Join Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-black font-medium text-lg px-8 py-6 h-auto transition-all duration-300 hover:bg-gray-50 rounded-xl w-full sm:w-auto"
                  asChild
                >
                  <Link href="https://www.skool.com/algo-traders-club-3768" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </Link>
                </Button>
              </div>
              
              <div className="mt-8 text-gray-500 flex items-center justify-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium">
                      {i}
                    </div>
                  ))}
                </div>
                <span>Join 2,500+ traders already in our community</span>
              </div>
            </div>

            {/* Enhanced Trading Chart Graphic */}
            <div className="mt-16 max-w-5xl mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10 pointer-events-none"></div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative z-0">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-bold text-lg">SOL/USDC Spot Bot</h3>
                    <p className="text-gray-500 text-sm">Live On-Chain Performance</p>
                  </div>
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-green-50 text-green-600 rounded-md text-xs font-medium">+38.2%</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">1s latency</span>
                  </div>
                </div>
                
                <div className="flex space-x-2 items-end h-[180px] overflow-hidden">
                  {[40, 65, 45, 80, 60, 90, 75, 110, 95, 125, 105, 140, 130, 150, 120, 160, 145, 170, 155, 180].map((height, index) => (
                    <div key={index} className="flex-1 group relative">
                      <div 
                        className={`rounded-t-sm ${index % 4 === 0 ? "bg-[#70DB21]" : index % 4 === 1 ? "bg-[#A0E76C]" : index % 4 === 2 ? "bg-[#C0EF9D]" : "bg-[#E0F7CE]"} transition-all duration-300 group-hover:brightness-110`}
                        style={{ height: `${height}px` }}
                      ></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {index % 2 === 0 ? '+' : ''}{Math.floor(height/10)}% profit
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 flex justify-between text-xs text-gray-400">
                  <span>Apr 1</span>
                  <span>Apr 5</span>
                  <span>Apr 10</span>
                  <span>Apr 15</span>
                  <span>Apr 20</span>
                  <span>Today</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section id="learn" className="relative py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gray-50 -skew-y-3 transform origin-top-right z-0"></div>
          <div className="absolute -bottom-[10%] -right-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-[#70DB21]/5 to-[#A0E76C]/10 blur-3xl z-0"></div>
          
          <div className="container px-4 mx-auto relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <span className="px-3 py-1 bg-[#70DB21]/10 text-[#70DB21] rounded-full text-sm font-medium">
                  What You'll Learn
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                Unlock the Power of <span className="relative inline-block">Algorithmic Trading<span className="absolute bottom-2 left-0 w-full h-3 bg-[#70DB21]/20 -z-10"></span></span>
              </h2>
              <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
                Deploy autonomous trading agents on Solana's top liquidity pools: Orca, Raydium, and advanced DLMM platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white">
                <div className="h-2 bg-gradient-to-r from-[#70DB21] to-[#A0E76C]"></div>
                <CardContent className="pt-8 p-6">
                  <div className="mb-6 w-14 h-14 bg-gradient-to-br from-[#70DB21] to-[#A0E76C] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Layers className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#70DB21] transition-colors">Liquidity Pool Fundamentals</h3>
                  <div className="text-gray-700 leading-relaxed">
                    Master Solana's top liquidity pools with:
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="font-medium border-b border-dashed border-gray-400 cursor-help text-[#70DB21]"> Dynamic Liquidity</span>
                      </TooltipTrigger>
                      <TooltipContent className="bg-white shadow-xl border border-gray-100 p-3 rounded-lg">
                        <div className="max-w-xs">Leverage DLMM features for enhanced capital efficiency</div>
                      </TooltipContent>
                    </Tooltip>
                    {` `}and{` `}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="font-medium border-b border-dashed border-gray-400 cursor-help text-[#70DB21]"> Bin-Based Strategies</span>
                      </TooltipTrigger>
                      <TooltipContent className="bg-white shadow-xl border border-gray-100 p-3 rounded-lg">
                        <div className="max-w-xs">
                          Optimize liquidity placement across discrete price bins
                        </div>
                      </TooltipContent>
                    </Tooltip>{" "}
                  </div>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 w-5 h-5 bg-gradient-to-r from-[#70DB21] to-[#A0E76C] rounded-full flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span>Understand liquidity shapes: Spot, Curve, Bid-Ask</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 w-5 h-5 bg-gradient-to-r from-[#70DB21] to-[#A0E76C] rounded-full flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span>Optimize capital efficiency with strategic bin placement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white">
                <div className="h-2 bg-gradient-to-r from-[#70DB21] to-[#A0E76C]"></div>
                <CardContent className="pt-8 p-6">
                  <div className="mb-6 w-14 h-14 bg-gradient-to-br from-[#70DB21] to-[#A0E76C] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#70DB21] transition-colors">Solana Fundamentals</h3>
                  <div className="text-gray-700 leading-relaxed">
                    Deploy agents that trade efficiently on Solana:
                    <ul className="mt-6 space-y-3">
                      <li className="flex items-start">
                        <div className="mr-3 mt-1 w-5 h-5 bg-gradient-to-r from-[#70DB21] to-[#A0E76C] rounded-full flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span>Master accounts, transactions, keypairs, and RPC nodes</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1 w-5 h-5 bg-gradient-to-r from-[#70DB21] to-[#A0E76C] rounded-full flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span>SOL & SPL token integration</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1 w-5 h-5 bg-gradient-to-r from-[#70DB21] to-[#A0E76C] rounded-full flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12L10 17L20 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span>Priority fee optimization</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white">
                <div className="h-2 bg-gradient-to-r from-[#70DB21] to-[#A0E76C]"></div>
                <CardContent className="pt-8 p-6">
                  <div className="mb-6 w-14 h-14 bg-gradient-to-br from-[#70DB21] to-[#A0E76C] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Database className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#70DB21] transition-colors">Advanced Trading Strategies</h3>
                  <div className="text-gray-700 leading-relaxed">
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 w-4 h-4 bg-[#A0E76C] rounded-full"></div>
                        <span>Dynamic fee optimization</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 w-4 h-4 bg-[#A0E76C] rounded-full"></div>
                        <span>Impermanent loss mitigation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 w-4 h-4 bg-[#A0E76C] rounded-full"></div>
                        <span>Strategic bin placement for capital efficiency</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Algo Traders Club? */}
        <section id="why" className="container px-4 py-24 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black">Your Edge in 2025</h2>
              <p className="mt-4 text-xl text-gray-700">
                Join the community that's shaping the future of algorithmic trading
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-[#C0EF9D] rounded-full flex items-center justify-center shrink-0 mx-auto md:mx-0">
                  <BarChart2 className="h-8 w-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-center md:text-left">Dynamic Fees & Impermanent Loss</h3>
                  <p className="text-gray-700">
                    {`Explore `}
                    <span className="font-bold text-black border-b-2 border-[#A0E76C]">dynamic fee optimization</span>
                    {` and `}
                    <span className="font-bold text-black border-b-2 border-[#A0E76C]">impermanent loss mitigation</span>
                    {`. Our agents leverage `}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="font-bold text-black border-b-2 border-[#A0E76C] cursor-help">
                          Solana's high throughput
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <div className="max-w-xs">
                          Fast transaction processing for efficient trading
                        </div>
                      </TooltipContent>
                    </Tooltip>{" "}
                    {` to maximize your returns.`}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-[#C0EF9D] rounded-full flex items-center justify-center shrink-0 mx-auto md:mx-0">
                  <Brain className="h-8 w-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-center md:text-left">SDK Mastery</h3>
                  <p className="text-gray-700">
                    {`Our `}
                    <span className="font-bold text-black border-b-2 border-[#A0E76C]">comprehensive SDK guides</span>
                    {` help you leverage tools from Orca, Raydium, and other Solana protocols to build, manage, and optimize your trading agents.`}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 bg-[#C0EF9D] rounded-full flex items-center justify-center shrink-0 mx-auto md:mx-0">
                  <Cpu className="h-8 w-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-center md:text-left">Future-Proof Skills</h3>
                  <p className="text-gray-700">
                    Join a community that's at the forefront of{" "}
                    <span className="font-bold text-black border-b-2 border-[#A0E76C]">
                      Crypto/Web3 and AI integration
                    </span>
                    . Develop skills that will be in high demand as these technologies converge. Stay ahead of the curve
                    with cutting-edge knowledge and techniques that few traders possess.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="bg-[#70DB21] hover:bg-[#A0E76C] text-black font-medium text-lg px-8 py-6 h-auto transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="https://www.skool.com/algo-traders-club-3768" target="_blank" rel="noopener noreferrer">
                  Start Learning Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how" className="bg-gray-50 py-24">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-black">Autonomous Trading, Simplified</h2>
              <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
                Transform your trading strategy into profitable autonomous agents
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-none bg-[#C0EF9D]/10 hover:bg-[#C0EF9D]/20 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 bg-[#70DB21] rounded-full flex items-center justify-center mb-4">
                      <span className="text-black font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Define Your Triggers</h3>
                    <p className="text-gray-700">Specify what makes your agent autonomous:</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 w-3 h-3 bg-[#70DB21] rounded-full"></div>
                        <span>Price-based triggers</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 w-3 h-3 bg-[#70DB21] rounded-full"></div>
                        <span>Volatility monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 w-3 h-3 bg-[#70DB21] rounded-full"></div>
                        <span>Decision parameters</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none bg-[#C0EF9D]/10 hover:bg-[#C0EF9D]/20 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 bg-[#70DB21] rounded-full flex items-center justify-center mb-4">
                      <span className="text-black font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Target Strategic Bins</h3>
                    <p className="text-gray-700">Optimize your capital efficiency:</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 w-3 h-3 bg-[#70DB21] rounded-full"></div>
                        <span>Target bins around active prices</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 w-3 h-3 bg-[#70DB21] rounded-full"></div>
                        <span>Claim fees strategically</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 w-3 h-3 bg-[#70DB21] rounded-full"></div>
                        <span>Optimize price ranges</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-none bg-[#C0EF9D]/10 hover:bg-[#C0EF9D]/20 transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="w-10 h-10 bg-[#70DB21] rounded-full flex items-center justify-center mb-4">
                      <span className="text-black font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Deploy & Scale</h3>
                    <p className="text-gray-700">Launch your agent and grow your strategy:</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 w-3 h-3 bg-[#70DB21] rounded-full"></div>
                        <span>Start with Spot liquidity</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 w-3 h-3 bg-[#70DB21] rounded-full"></div>
                        <span>Scale to Curve strategies</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1 w-3 h-3 bg-[#70DB21] rounded-full"></div>
                        <span>Advance to Bid-Ask approaches</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-center">Liquidity Shape Strategies</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Spot Strategy */}
                  <div className="text-center">
                    <div className="mb-4 h-40 flex items-end justify-center">
                      <div className="w-8 h-32 bg-[#70DB21] rounded-t-md animate-pulse"></div>
                    </div>
                    <h4 className="font-bold">Spot Strategy</h4>
                    <p className="text-sm text-gray-700 mt-2">
                      Concentrate liquidity in the currently active bin. Offers high capital efficiency while leveraging Solana's 
                      <span className="text-[#70DB21] font-semibold"> fast finality</span>. 
                      <span className="block mt-1 text-xs text-gray-500">"Maximum efficiency, frequent rebalancing"</span>
                    </p>
                  </div>

                  {/* Curve Strategy */}
                  <div className="text-center">
                    <div className="mb-4 h-40 flex items-end justify-center">
                      <div className="w-8 h-8 bg-[#A0E76C] rounded-t-md mx-1"></div>
                      <div className="w-8 h-24 bg-[#70DB21] rounded-t-md mx-1"></div>
                      <div className="w-8 h-16 bg-[#C0EF9D] rounded-t-md mx-1"></div>
                    </div>
                    <h4 className="font-bold">Curve Strategy</h4>
                    <p className="text-sm text-gray-700 mt-2">
                      Distribute liquidity across several bins around the active price for a smoother spread. Utilize Solana's 
                      <span className="text-[#70DB21] font-semibold"> DLMM features</span> 
                      for enhanced flexibility. 
                      <span className="block mt-1 text-xs text-gray-500">"Balance efficiency and stability"</span>
                    </p>
                  </div>

                  {/* Bid-Ask Strategy */}
                  <div className="text-center">
                    <div className="mb-4 h-40 flex items-end justify-center">
                      <div className="w-8 h-24 bg-[#70DB21] rounded-t-md mx-3 transform -skew-x-6"></div>
                      <div className="w-8 h-24 bg-[#70DB21] rounded-t-md mx-3 transform skew-x-6"></div>
                    </div>
                    <h4 className="font-bold">Bid-Ask Strategy</h4>
                    <p className="text-sm text-gray-700 mt-2">
                      Place two liquidity peaks slightly below and above the current price to capture 
                      <span className="text-[#70DB21] font-semibold"> spread opportunities</span>. 
                      Solana's speed enables quick adjustments as markets move.
                      <span className="block mt-1 text-xs text-gray-500">"Advanced strategy for spread capture"</span>
                    </p>
                  </div>
                </div>

                {/* Solana USP Banner */}
                <div className="mt-8 p-4 bg-[#C0EF9D]/20 rounded-lg text-center">
                  <p className="text-sm font-medium">
                    <span className="text-[#70DB21]">Why This Works on Solana:</span> 
                    Fast transaction processing and low fees enable efficient strategy execution and capital optimization 🚀
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black py-24">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Trade Smarter?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              {`Join the #1 community for algorithmic traders on `}
              <span className="text-[#70DB21]">Solana</span>
              {` - master the hottest skill of 2025.`}
            </p>
            <Button
              size="lg"
              className="bg-[#70DB21] hover:bg-[#A0E76C] text-black font-medium text-lg px-8 py-6 h-auto transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="https://www.skool.com/algo-traders-club-3768" target="_blank" rel="noopener noreferrer">
                Join Algo Traders Club Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </TooltipProvider>
  )
}
