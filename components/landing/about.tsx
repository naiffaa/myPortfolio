"use client"

import type { About as AboutType } from "@/lib/types"

interface AboutProps {
  data: AboutType
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-purple-300 font-semibold">
      {children}
    </span>
  )
}

export function About({ data }: AboutProps) {
  if (!data.name) return null

  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </p>

          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {data.name}
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-7 text-center text-base leading-8 text-white/75 sm:text-lg">
          <p>
            I’m <Highlight>Naifa Al-arifi</Highlight>, an{" "}
            <Highlight>Information Technology student</Highlight> with a strong
            focus on <Highlight>Artificial Intelligence</Highlight>, while also
            building skills in <Highlight>web development</Highlight>,{" "}
            <Highlight>IoT</Highlight>, and intelligent systems. I enjoy turning
            real-world ideas into practical solutions through a combination of
            technical depth and hands-on execution.
          </p>

          <p>
            I completed the <Highlight>Samsung Innovation Campus</Highlight>,
            where I strengthened my background in{" "}
            <Highlight>AI and Computer Vision</Highlight>. I also completed
            programs such as <Highlight>Building LLMs from Scratch</Highlight>{" "}
            and <Highlight>Developing Generative AI Solutions</Highlight> through{" "}
            <Highlight>SDAIA</Highlight>, in addition to the{" "}
            <Highlight>Advanced Artificial Intelligence Course</Highlight>{" "}
            through <Highlight>KAUST</Highlight>. These experiences helped shape
            me into a developer who builds not only functional systems, but
            meaningful and intelligent products.
          </p>

          <p>
            Through projects such as <Highlight>Makani</Highlight>,{" "}
            <Highlight>WildArabia</Highlight>, <Highlight>Tabayyun</Highlight>,
            and <Highlight>SEEN</Highlight>, I worked on solutions involving{" "}
            <Highlight>NLP and LLMs</Highlight>,{" "}
            <Highlight>computer vision</Highlight>,{" "}
            <Highlight>anomaly detection</Highlight>, and{" "}
            <Highlight>cloud-connected systems</Highlight>. These projects gave
            me practical experience in building complete systems that connect AI
            with software, mobile, and real-world implementation.
          </p>

          <p>
            I’m passionate about creating technology that solves meaningful
            problems, whether through <Highlight>AI-driven applications</Highlight>,{" "}
            <Highlight>web platforms</Highlight>, or{" "}
            <Highlight>smart connected systems</Highlight>. My strength lies in
            combining <Highlight>innovation</Highlight> with{" "}
            <Highlight>practical execution</Highlight>.
          </p>
        </div>
      </div>
    </section>
  )
}