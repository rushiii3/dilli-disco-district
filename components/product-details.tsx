"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
// import Image from "next/image"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ProductDetails({details, sizeChart}: {details: string, sizeChart: { size: string, chest: number, length: number }[] | null}) {
  const [activeTab, setActiveTab] = useState<string | null>(null)

  const toggleTab = (tab: string) => {
    if (activeTab === tab) {
      setActiveTab(null)
    } else {
      setActiveTab(tab)
    }
  }

  return (
    <div className="space-y-6">
      {
        details && <div className="border-b border-[#33333320] pb-3">
        <button
          onClick={() => toggleTab("details")}
          className="w-full text-left py-2 text-sm flex items-center justify-between group"
        >
          <span className="font-medium tracking-wide">product details</span>
          <span className="text-[#33333380] group-hover:text-[#333333]">
            {activeTab === "details" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        </button>
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: activeTab === "details" ? "500px" : "0px" }}
        >
          <div className="py-4 text-sm text-[#333333cc] leading-relaxed">
            <p className="mb-3">
              {details}
            </p>
            {/* <ul className="space-y-2 pl-4">
              <li>• Premium cotton blend shell (80% cotton, 20% polyester)</li>
              <li>• Luxurious satin lining</li>
              <li>• Metal YKK zipper front closure</li>
              <li>• Ribbed collar, cuffs and hem</li>
              <li>• Side pockets with hidden snap closure</li>
              <li>• Relaxed, oversized fit</li>
              <li>• Dry clean only</li>
            </ul> */}
          </div>
        </div>
      </div>
      }
      

      {/* <div className="border-b border-[#33333320] pb-3">
        <button
          onClick={() => toggleTab("sizing")}
          className="w-full text-left py-2 text-sm flex items-center justify-between group"
        >
          <span className="font-medium tracking-wide">sizing chart</span>
          <span className="text-[#33333380] group-hover:text-[#333333]">
            {activeTab === "sizing" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        </button>
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: activeTab === "sizing" ? "500px" : "0px" }}
        >
          <div className="py-4 text-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#33333320]">
                  <th className="text-left py-2 font-medium text-[#333333]">Size</th>
                  <th className="text-left py-2 font-medium text-[#333333]">Chest (cm)</th>
                  <th className="text-left py-2 font-medium text-[#333333]">Length (cm)</th>
                </tr>
              </thead>
              <tbody className="text-[#333333cc]">
                {
                    sizeChart.map((size, index) => (
                        <tr key={index} className="border-b border-[#33333310]">
                        <td className="py-2">{size.size}</td>
                        <td className="py-2">{size.chest}</td>
                        <td className="py-2">{size.length}</td>
                      </tr>
                    ))
                }
              </tbody>
            </table>
            <p className="mt-4 text-xs text-[#33333399]">
              Measurements are approximate. For detailed fitting advice, please contact customer service.
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="border-b border-[#33333320] pb-3">
        <button
          onClick={() => toggleTab("styled")}
          className="w-full text-left py-2 text-sm flex items-center justify-between group"
        >
          <span className="font-medium tracking-wide">styled with</span>
          <span className="text-[#33333380] group-hover:text-[#333333]">
            {activeTab === "styled" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        </button>
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: activeTab === "styled" ? "500px" : "0px" }}
        >
          <div className="py-4">
            <div className="flex gap-6">
              <div className="space-y-3 group cursor-pointer">
                <div className="w-28 h-40 bg-[#d8dfd0] rounded-sm overflow-hidden hover-scale">
                  <Image
                    src="/placeholder.svg?height=160&width=112"
                    alt="Ruched Skirt"
                    width={112}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium group-hover:underline">Ruched Skirt</p>
                  <p className="text-sm text-[#33333399]">320.00 USD</p>
                </div>
              </div>
              <div className="space-y-3 group cursor-pointer">
                <div className="w-28 h-40 bg-[#d5cec5] rounded-sm overflow-hidden hover-scale">
                  <Image
                    src="/placeholder.svg?height=160&width=112"
                    alt="Wide Leg Pants"
                    width={112}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium group-hover:underline">Wide Leg Pants</p>
                  <p className="text-sm text-[#33333399]">380.00 USD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
