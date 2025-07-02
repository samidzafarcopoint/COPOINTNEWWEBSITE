"use client"

import React, { useState, useEffect, useRef } from "react"
import { Separator } from "@/components/ui/separator"
import {
  FaLightbulb,
  FaCogs,
  FaUsers,
  FaLifeRing,
} from "react-icons/fa"
import processSteps from "@/lib/details/process.json"

const iconMap: { [key: string]: React.ElementType } = {
  FaLightbulb,
  FaCogs,
  FaUsers,
  FaLifeRing,
}

export default function ProcessSection() {
  const [active, setActive] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const stepsCount = processSteps.length

  // Auto-advance effect
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % stepsCount)
    }, 4000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [stepsCount])

  // Reset timer on manual click
  const handleStepClick = (idx: number) => {
    setActive(idx)
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % stepsCount)
      }, 4000)
    }
  }

  const step = processSteps[active]
  const Icon = iconMap[step.icon]

  return (
    <section className="py-12 sm:py-16 bg-[#f6fbfd] text-[#13294b]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="inline-block px-3 py-1 text-xs text-[#13294b] bg-[#7bafd4] rounded-full mb-2 border border-[#4f758b]">
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            How We <span className="text-[#4f758b]">Work</span>
          </h2>
          <p className="text-[#4f758b] mt-2">
            A structured approach to delivering exceptional results for your project.
          </p>
        </div>

        {/* Nav */}
        <div className="relative mb-12">
          {/* Horizontal line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#7bafd4]"></div>
          <div className="relative flex justify-between">
            {processSteps.map((s, idx) => {
              const isActive = idx === active
              return (
                <div
                  key={s.step}
                  onClick={() => handleStepClick(idx)}
                  className="flex flex-col items-center cursor-pointer z-10"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition border font-bold
                      ${isActive
                        ? "bg-[#13294b] text-white border-[#13294b] shadow-lg"
                        : "bg-[#e3eef6] text-[#4f758b] border-[#7bafd4] hover:bg-[#d2e6f3]"
                      }`}
                  >
                    {String(s.step).padStart(2, "0")}
                  </div>
                  <span className={`text-sm transition ${
                    isActive ? "text-[#13294b] font-semibold" : "text-[#4f758b] hover:text-[#13294b]"
                  }`}>
                    {s.title}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 px-4">
          {/* Left Details */}
          <div className="md:w-1/2 space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <Icon className="w-6 h-6 text-[#7bafd4]" />
              <h3 className="text-xl font-bold">
                Step • {String(step.step).padStart(2, "0")}
              </h3>
            </div>
            <p className="text-[#4f758b]">{step.description}</p>
          </div>

          {/* Right Card */}
          <div className="md:w-1/2 relative">
            <div className="p-6 bg-white rounded-2xl border-2 border-[#7bafd4] shadow-lg transition hover:shadow-2xl">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 rounded-full bg-[#7bafd4]">
                  <Icon className="w-6 h-6 text-[#13294b]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#13294b] mb-2">{step.title}</h3>
              <p className="text-[#4f758b]">{step.description}</p>
            </div>
            <div className="absolute -bottom-3 right-0 bg-[#4f758b] text-white px-2 py-0.5 rounded-lg font-mono text-xs">
              {String(step.step).padStart(2, "0")}
            </div>
          </div>
        </div>

        <Separator className="mt-12 border-[#7bafd4]" />
      </div>
    </section>
  )
}
