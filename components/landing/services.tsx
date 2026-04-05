"use client"

import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiFastapi,
  SiFlask,
  SiPytorch,
  SiFigma,
  SiGit,
  SiGithub,
  SiJupyter,
  SiDart,
} from "react-icons/si"
import { FaJava } from "react-icons/fa6"
import { TbDatabase, TbBrain, TbEye, TbCircuitChangeover } from "react-icons/tb"
import type { Services as ServicesType } from "@/lib/types"

interface ServicesProps {
  data: ServicesType
}

const skillsData = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Java", icon: FaJava },
      { name: "Dart", icon: SiDart },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "AI", icon: TbBrain },
      { name: "React", icon: SiReact },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Flask", icon: SiFlask },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Computer Vision", icon: TbEye },
      { name: "IoT Systems", icon: TbCircuitChangeover },
    ],
  },
  {
    title: "Tools & Systems",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Jupyter", icon: SiJupyter },
      { name: "Figma", icon: SiFigma },
      { name: "SQL", icon: TbDatabase },
    ],
  },
]

export function Services({ data }: ServicesProps) {
  return (
    <section id="services" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">
            Skills
          </p>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {data.headline || "My Skills"}
          </h2>
        </div>

        <div className="space-y-14">
          {skillsData.map((group) => (
            <div key={group.title}>
              <h3 className="mb-6 text-2xl font-semibold tracking-wide text-white">
                {group.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
                {group.items.map((skill) => {
                  const Icon = skill.icon

                  return (
                    <div
                      key={skill.name}
                      className="group flex w-[120px] flex-col items-center justify-center gap-3 rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-black/35 hover:shadow-[0_0_30px_rgba(139,92,246,0.16)] sm:w-[140px] sm:p-6"
                      title={skill.name}
                    >
                      <Icon className="h-12 w-12 text-white/90 transition-all duration-500 group-hover:scale-110 group-hover:text-purple-300 sm:h-14 sm:w-14" />
                      <span className="text-center text-sm font-medium leading-5 text-white/75 transition-colors duration-500 group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}