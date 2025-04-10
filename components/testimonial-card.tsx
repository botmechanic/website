import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-[#A0E76C] mb-4" />
        <p className="text-gray-700 mb-6">{quote}</p>
        <div className="border-t border-gray-100 pt-4">
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </CardContent>
    </Card>
  )
}
