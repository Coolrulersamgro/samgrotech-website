import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://samgrotech-website.vercel.app";
const profileUrl = `${siteUrl}/samuel-growther`;

export const metadata: Metadata = {
  title: "Samuel Growther Biography | Founder of SamgroTech Solutions",
  description:
    "Samuel Growther is the founder of SamgroTech Solutions in Kenya. Read his biography, Information Technology education, KRA experience, software projects and entrepreneurial vision.",
  alternates: { canonical: profileUrl },\n  keywords: ["Samuel Growther", "SamgroTech Solutions", "Samuel Growther biography", "SamgroTech founder", "Kenyan IT entrepreneur", "Information Technology Kenya"],
  openGraph: {
    type: "profile",
    url: profileUrl,
    title: "Biography of Samuel Growther | SamgroTech Founder",
    description:
      "The life story, background, education, professional journey and technology ambitions of Samuel Growther.",
    siteName: "SamgroTech Solutions",
    locale: "en_KE",
  },
  twitter: {
    card: "summary",
    title: "Biography of Samuel Growther | SamgroTech Founder",
    description:
      "Biography of Samuel Growther, Kenyan technology enthusiast, programmer and Founder of SamgroTech Solutions.",
  },
};

const person = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2026-11-24",
  dateModified: "2026-11-27",
  mainEntity: {
    "@type": "Person",
    "@id": `${profileUrl}#person`,
    name: "Samuel Growther",
    url: profileUrl,
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "SamgroTech Solutions",
      url: siteUrl,
    },
    description:
      "Samuel Growther is a Kenyan technology enthusiast, aspiring programmer and entrepreneur born and raised in Kakamega Town. He is the Founder of samgroTech Solutions, a technology brand focused on software, web development, IT support, networking and digital solutions.",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Masinde Muliro University of Science and Technology",
    },
    knowsAbout: [
      "Information Technology",
      "Web Development",
      "Software Development",
      "IT Support",
      "Computer Networking",
      "Cybersecurity",
      "Business Technology Solutions",
      "Graphic Design",
    ],
    sameAs: ["https://github.com/Coolrulersamgro"],
  },
};

const skills = [
  "Web development",
  "Software development",
  "IT support",
  "Computer networking",
  "Cybersecurity",
  "Graphic design",
  "Business technology",
  "Field data collection",
];

const projects = [
  {
    number: "01",
    name: "samgroTech Solutions",
    type: "Technology services",
    description:
      "A digital home for web development, software, IT support, networking, cybersecurity and practical business technology services.",
    status: "Live",
    live: true,
  },
  {
    number: "02",
    name: "SENTINEL",
    type: "Security intelligence",
    description:
      "A cybersecurity monitoring dashboard concept covering system information, network monitoring, incidents and activity logs.",
    status: "In development",
    live: false,
  },
  {
    number: "03",
    name: "Dallas",
    type: "Business finance & accounting",
    description:
      "A business-focused application for recording daily sales, expenses and financial activity with clear reporting.",
    status: "In development",
    live: false,
  },
  {
    number: "04",
    name: "SamgroTech POS",
    type: "Business management & point of sale",
    description:
      "A cloud-based point-of-sale and business management system with product and stock tracking, cash and M-Pesa checkout, digital receipts, sales history, and customer-named credit accounts with partial repayment tracking.",
    status: "Live · Production",
    live: true,
    url: "https://samgrotech-pos.vercel.app",
    github: "https://github.com/Coolrulersamgro/samgrotech-pos",
  },
  {
    number: "05",
    name: "Paid Wi-Fi Hotspot System",
    type: "Connectivity & payments",
    description:
      "A hotspot business project exploring access packages and M-Pesa payment workflows.",
    status: "In development",
    live: false,
  },
];

function SectionHeading({
  eyebrow,
  title,
  detail,
}: {
  eyebrow: string;
  title: string;
  detail?: string;
}) {
  return (
    <div className="mb-7">
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
      {detail ? (
        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">{detail}</p>
      ) : null}
    </div>
  );
}

export default function SamuelGrowtherPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b16] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_15%_0%,rgba(14,165,233,0.12),transparent_35%),radial-gradient(ellipse_at_90%_15%,rgba(99,102,241,0.12),transparent_30%)]" />

      <header className="relative z-10 border-b border-white/[0.08] bg-[#070b16]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-500 text-xs font-black text-slate-950 shadow-lg shadow-cyan-500/20">
              SG
            </span>
            <span className="text-sm font-bold tracking-wide text-white">
              samgroTech <span className="font-medium text-slate-400">/ profile</span>
            </span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:text-cyan-200 sm:text-sm"
          >
            Visit SamgroTech <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </header>

      <section className="relative z-0 border-b border-white/[0.08]">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_280px]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                Biography · Kenya
              </div>
              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Samuel <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 bg-clip-text text-transparent">Growther.</span>
              </h1>
              <p className="mt-5 text-lg font-semibold text-slate-200 sm:text-xl">
                IT Professional <span className="text-cyan-400">·</span> Technology Builder <span className="text-cyan-400">·</span> Founder
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                Samuel enjoys turning ideas into useful digital experiences. Through
                SamgroTech Solutions, he is building practical technology that
                helps people and businesses work smarter.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://samgrotech-website.vercel.app/"
                  className="rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-cyan-500/20"
                >
                  Explore my company <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="https://github.com/Coolrulersamgro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-300/50 hover:bg-white/[0.07]"
                >
                  View GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[260px]">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 to-blue-600/20 blur-2xl" />
              <div className="relative aspect-square rounded-[2rem] border border-cyan-200/20 bg-gradient-to-br from-[#142a46] via-[#101a30] to-[#0b1020] p-3 shadow-2xl shadow-black/40">
                <div className="flex h-full flex-col items-center justify-center rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_50%_25%,rgba(34,211,238,0.18),transparent_45%),linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]">
                  <span className="text-7xl font-black tracking-[-0.1em] text-white">SG</span>
                  <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-200">SamgroTech</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-3 rounded-2xl border border-white/10 bg-[#111b2d] px-4 py-3 shadow-xl">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Building</p>
                <p className="mt-1 text-sm font-bold text-white">Ideas into impact</p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 border-t border-white/10 pt-7 sm:grid-cols-4 sm:gap-5">
            {[
              ["01", "Founder", "SamgroTech Solutions"],
              ["02", "Education", "Information Technology"],
              ["03", "Based in", "Kenya"],
              ["04", "Focus", "Digital solutions"],
            ].map(([number, label, value]) => (
              <div key={number} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                <p className="text-[10px] font-bold tracking-[0.2em] text-cyan-300">{number} / {label}</p>
                <p className="mt-2 text-sm font-bold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-16">
          <section>
            <SectionHeading eyebrow="Biography" title="About Samuel Growther" detail="His background, interests and commitment to building technology that solves real problems." />
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.055] to-white/[0.015] p-6 sm:p-8">
              <p className="text-sm leading-8 text-slate-300 sm:text-base">
                Samuel Growther is the Founder of samgroTech Solutions, a
                Kenya-based technology brand focused on web development,
                software development, IT support, networking, cybersecurity
                and business technology solutions. He is passionate about
                exploring new technologies, developing useful systems and
                helping businesses improve how they operate.
              </p>
              <p className="mt-4 text-sm leading-8 text-slate-400 sm:text-base">
                His journey combines formal IT education, practical technical
                exposure and hands-on personal projects. He completed a Diploma
                in Information Technology at Masinde Muliro University of
                Science and Technology and is now pursuing a Bachelor's Degree
                in Information Technology. He continues to grow his skills while
                building solutions with a clear purpose.
              </p>
              <p className="mt-4 text-sm leading-8 text-slate-400 sm:text-base">
                Samuel believes technology is most valuable when it solves everyday
                challenges. That belief guides the systems he builds, the skills
                he develops and the work he does through SamgroTech Solutions.
              </p>
            </div>
          </section>


          <section>
            <SectionHeading eyebrow="Roots & motivation" title="Early life and personal inspiration" detail="The beginnings of Samuel's interest in business and technology." />
            <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.055] to-white/[0.015] p-6 sm:p-8">
              <p className="text-sm leading-8 text-slate-300 sm:text-base">
                Born and raised in Kakamega Town, Kenya, Samuel developed an ambition from childhood to become a businessman. His love for computers and dream of becoming a programmer inspired his interest in Information Technology and technology entrepreneurship. Self-motivation has been a major source of inspiration in his journey, alongside determination and continuous learning.
              </p>
              <p className="mt-4 text-sm leading-8 text-slate-400 sm:text-base">
                Self-motivation has been a major source of inspiration in his journey. He values determination, continuous learning and the courage to keep pursuing his goals when progress takes time.
              </p>
            </div>
          </section>
          <section>
            <SectionHeading eyebrow="Early life & career" title="Education and career journey" detail="From childhood ambitions in Kakamega to education, practical experience and technology entrepreneurship." />
            <div className="space-y-4">
              <article className="rounded-3xl border border-white/[0.08] bg-[#0d1526]/90 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Education foundation</p>
                <h3 className="mt-2 text-lg font-bold text-white">Building a foundation in Information Technology</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Samuel's formal IT journey at Masinde Muliro University of Science
                  and Technology gave him a foundation for understanding
                  technology and applying it to practical challenges. After
                  completing his Diploma in IT, he continued to a Bachelor's
                  Degree in the same field.
                </p>
              </article>
              <article className="rounded-3xl border border-white/[0.08] bg-[#0d1526]/90 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Practical experience</p>
                <h3 className="mt-2 text-lg font-bold text-white">Learning through IT support at KRA</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  During a three-month industrial attachment in the IT
                  Department at the Kenya Revenue Authority, Samuel gained hands-on
                  exposure to technical support, printer troubleshooting,
                  Ethernet cable crimping, networking tasks and resolving
                  day-to-day IT issues.
                </p>
              </article>
              <article className="rounded-3xl border border-white/[0.08] bg-[#0d1526]/90 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Entrepreneurship</p>
                <h3 className="mt-2 text-lg font-bold text-white">Starting SamgroTech Solutions</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Samuel started building SamgroTech as a way to turn his interest
                  in technology into practical digital services and products.
                  It is also a space where he can keep learning, experiment with
                  ideas and create solutions for real business needs.
                </p>
              </article>
            </div>
          </section>

          <section>
            <SectionHeading eyebrow="Milestones" title="Achievements & progress" detail="Key milestones in my education, practical development and technology journey." />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Academic milestone", "Completed a Diploma in Information Technology at MMUST and progressed to Bachelor's degree studies."],
                ["Industry exposure", "Completed a three-month IT industrial attachment at the Kenya Revenue Authority."],
                ["Founder milestone", "Established SamgroTech Solutions as a platform for developing and delivering technology solutions."],
                ["Product development", "Built and released SamgroTech POS, a business point-of-sale and management system, to production."],
              ].map(([title, description]) => (
                <article key={title} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading eyebrow="Entrepreneurship" title="The SamgroTech founder story" detail="Turning a lifelong business ambition and passion for computers into practical technology work." />
            <div className="rounded-3xl border border-cyan-200/15 bg-gradient-to-br from-[#10233b] to-[#0d1526] p-6 sm:p-8">
              <p className="text-sm leading-8 text-slate-300 sm:text-base">
                SamgroTech Solutions reflects Samuel's commitment to learning by
                building. Through this initiative, he works on websites,
                business systems and digital tools intended to make everyday
                operations easier. Each project is an opportunity to apply
                what he has learned, strengthen his technical ability and
                understand the needs of the people who use technology.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading eyebrow="Looking ahead" title="Vision & future ambitions" detail="His ambition to grow SamgroTech into a globally recognised technology company." />
            <div className="rounded-3xl border border-white/[0.08] bg-[#0d1526]/90 p-6 sm:p-8">
              <p className="text-sm leading-8 text-slate-300 sm:text-base">
                Samuel's goal is to keep advancing in Information Technology,
                strengthen his skills through continuous learning and grow
                SamgroTech Solutions into a globally recognised technology
                company. He wants to create reliable software and digital
                services that address real challenges for individuals and
                businesses, while contributing positively to the technology
                space in Kenya and beyond.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading eyebrow="Selected work" title="Projects & initiatives" detail="A selection of technology ideas and products I am developing." />
            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project) => (
                <article key={project.name} className="group rounded-3xl border border-white/[0.08] bg-[#0d1526]/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-[#101d32]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-[0.2em] text-cyan-300/70">{project.number}</span>
                    <span className={`rounded-full px-3 py-1 text-[10px] font-bold ${project.live ? "border border-emerald-300/20 bg-emerald-300/10 text-emerald-200" : "border border-amber-300/15 bg-amber-300/[0.07] text-amber-100"}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-extrabold text-white transition group-hover:text-cyan-100">{project.name}</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.13em] text-blue-300">{project.type}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                  {"url" in project && project.url ? (
                    <div className="mt-5 flex flex-wrap gap-4 border-t border-white/10 pt-4 text-xs font-bold">
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-cyan-200 hover:text-white">Open preview ↗</a>
                      {"github" in project && project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white">GitHub repository ↗</a> : null}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading eyebrow="What I work with" title="Skills & interests" detail="Areas I have studied, practised and continue to develop." />
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span key={skill} className="rounded-xl border border-cyan-200/10 bg-cyan-200/[0.045] px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-cyan-200/30 hover:bg-cyan-200/10">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-5">
          <section className="rounded-3xl border border-white/[0.08] bg-[#0d1526]/90 p-6 shadow-xl shadow-black/10">
            <SectionHeading eyebrow="Learning journey" title="Education" />
            <div className="relative space-y-7 before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-px before:bg-gradient-to-b before:from-cyan-300/70 before:to-blue-500/10">
              <div className="relative pl-6">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-cyan-200 bg-[#0d1526]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">Currently pursuing</p>
                <h3 className="mt-2 text-base font-bold text-white">Bachelor&apos;s Degree</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">Information Technology</p>
              </div>
              <div className="relative pl-6">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-blue-300 bg-[#0d1526]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300">Completed studies</p>
                <h3 className="mt-2 text-base font-bold text-white">Diploma in IT</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">Masinde Muliro University of Science and Technology (MMUST)</p>
                <p className="mt-2 text-xs text-slate-500">Awaiting graduation</p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/[0.08] bg-[#0d1526]/90 p-6">
            <SectionHeading eyebrow="Professional experience" title="Experience" />
            <div className="border-l border-cyan-300/30 pl-4">
              <h3 className="font-bold text-white">IT Industrial Attachment</h3>
              <p className="mt-1 text-sm font-semibold text-cyan-200">Kenya Revenue Authority (KRA)</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Practical exposure to IT support, computer and printer
                troubleshooting, networking tasks and technical
                problem-solving.
              </p>
            </div>
            <div className="mt-6 border-t border-white/[0.08] pt-5">
              <h3 className="font-bold text-white">Field Data Collection</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Experience supporting field data collection activities.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-cyan-200/20 bg-gradient-to-br from-[#12304a] via-[#10233b] to-[#10182a] p-6 shadow-xl shadow-cyan-950/20">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-200">Personal details</p>
            <h2 className="mt-3 text-lg font-extrabold text-white">A little about Samuel</h2>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm text-slate-400">Country</span>
              <span className="text-sm font-semibold text-white">Kenya</span>
            </div>
          </section>

          <section className="rounded-3xl border border-blue-300/20 bg-white/[0.025] p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-300">The company</p>
            <h2 className="mt-3 text-xl font-black text-white">samgroTech Solutions</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Technology that moves your business forward. Building modern
              digital experiences and practical solutions for businesses.
            </p>
            <a href={siteUrl} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 transition hover:text-white">
              Visit company website <span aria-hidden="true">↗</span>
            </a>
          </section>
        </aside>
      </div>

      <footer className="relative border-t border-white/[0.08] bg-[#050811]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© 2026 Samuel Growther. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="https://www.linkedin.com/in/samuel-growther" target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-200">LinkedIn</a>
            <a href="https://github.com/Coolrulersamgro" target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-200">GitHub</a>
            <Link href="/" className="transition hover:text-cyan-200">SamgroTech Solutions</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
