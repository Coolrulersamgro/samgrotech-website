import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://samgrotech-website.vercel.app";
const profileUrl = `${siteUrl}/samuel-growther`;

export const metadata: Metadata = {
  title: "Samuel Growther | Founder of SamgroTech Solutions",
  description:
    "Meet Samuel Growther, Founder of SamgroTech Solutions in Kenya. IT professional with a Diploma in Information Technology from MMUST and currently pursuing a Bachelor's degree in Information Technology.",
  alternates: {
    canonical: profileUrl,
  },
  openGraph: {
    type: "profile",
    url: profileUrl,
    title: "Samuel Growther | Founder of SamgroTech Solutions",
    description:
      "Professional profile, education, skills and technology projects by Samuel Growther.",
    siteName: "samgroTech Solutions",
    locale: "en_KE",
  },
  twitter: {
    card: "summary",
    title: "Samuel Growther | Founder of SamgroTech Solutions",
    description:
      "Founder of SamgroTech Solutions | Information Technology | Software and web projects",
  },
};

const person = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2026-11-24",
  dateModified: "2026-11-24",
  mainEntity: {
    "@type": "Person",
    "@id": `${profileUrl}#person`,
    name: "Samuel Growther",
    birthDate: "2004-07-10",
    url: profileUrl,
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: "samgroTech Solutions",
      url: siteUrl,
    },
    description:
      "Samuel Growther is the Founder of samgroTech Solutions, a Kenya-based technology brand focused on web development, software, IT support, networking and digital solutions.",
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
  "Information technology support",
  "Computer networking",
  "Cybersecurity fundamentals",
  "Graphic design",
  "Business technology solutions",
  "Field data collection",
];

const projects = [
  {
    name: "samgroTech Solutions",
    type: "Technology services website",
    description:
      "A business website presenting web development, software, IT and networking, cybersecurity, and digital business services.",
    status: "Live website",
  },
  {
    name: "SENTINEL",
    type: "Security intelligence dashboard",
    description:
      "A cybersecurity monitoring project focused on system information, network monitoring, incidents and activity logs.",
    status: "In development",
  },
  {
    name: "Dallas",
    type: "Business finance and accounting application",
    description:
      "A business-focused application concept for recording daily sales, expenses and financial activity.",
    status: "In development",
  },
  {
    name: "Paid Wi-Fi Hotspot System",
    type: "Connectivity and payment project",
    description:
      "A hotspot business project exploring customer access packages and M-Pesa payment workflows.",
    status: "In development",
  },
];

export default function SamuelGrowtherPage() {
  return (
    <main className="min-h-screen bg-[#080f20] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />

      <header className="border-b border-white/10 bg-[#080f20]/95">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-sm font-bold tracking-wide text-cyan-300">
            samgroTech Solutions
          </Link>
          <Link
            href="/"
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
          >
            Back to website
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[110px]" />
        <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
            <div
              aria-label="Samuel Growther initials"
              className="flex h-32 w-32 shrink-0 items-center justify-center rounded-[2rem] border border-cyan-300/30 bg-gradient-to-br from-blue-500/25 to-cyan-400/10 text-5xl font-black text-cyan-200 shadow-2xl shadow-blue-950/40"
            >
              SG
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-cyan-400">
                PROFESSIONAL PROFILE
              </p>
              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                Samuel Growther
              </h1>
              <p className="mt-4 text-lg font-semibold text-slate-300">
                Founder, samgroTech Solutions
              </p>
              <p className="mt-3 max-w-2xl leading-8 text-slate-400">
                Information Technology professional, technology builder and
                entrepreneur based in Kenya, interested in creating practical
                digital solutions for people and businesses.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://samgrotech-website.vercel.app/"
                  className="rounded-full bg-blue-600 px-5 py-3 text-sm font-bold transition hover:bg-blue-500"
                >
                  Explore SamgroTech ↗
                </a>
                <a
                  href="https://github.com/Coolrulersamgro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  GitHub profile ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-14">
          <section>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              ABOUT
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">About Samuel</h2>
            <p className="mt-5 leading-8 text-slate-400">
              Samuel Growther is the Founder of samgroTech Solutions, a
              Kenya-based technology brand focused on web development,
              software development, IT support, networking, cybersecurity and
              business technology solutions. He is interested in using
              technology to solve practical problems and help businesses
              improve the way they work.
            </p>
          </section>

          <section>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              SELECTED WORK
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">Projects</h2>
            <div className="mt-6 grid gap-4">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-2xl border border-white/10 bg-[#0d192d] p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-xl font-bold">{project.name}</h3>
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-blue-300">
                    {project.type}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              PROFESSIONAL INTERESTS
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">Skills &amp; areas</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-2xl border border-white/10 bg-[#0d192d] p-6">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              EDUCATION
            </p>
            <div className="mt-5">
              <h2 className="text-lg font-bold">
                Bachelor&apos;s Degree in Information Technology
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Currently pursuing
              </p>
            </div>
            <div className="my-6 border-t border-white/10" />
            <div>
              <h3 className="font-bold">
                Diploma in Information Technology
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Masinde Muliro University of Science and Technology (MMUST)
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Completed; awaiting graduation
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-[#0d192d] p-6">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              PERSONAL DETAILS
            </p>
            <h2 className="mt-3 text-lg font-bold">Date of Birth</h2>
            <p className="mt-2 text-sm text-slate-400">10 July 2004</p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-[#0d192d] p-6">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-400">
              EXPERIENCE
            </p>
            <h2 className="mt-3 text-lg font-bold">
              IT Industrial Attachment
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Kenya Revenue Authority (KRA)
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Practical exposure to IT support activities, computer and printer
              troubleshooting, networking tasks and technical problem-solving.
            </p>
            <div className="my-5 border-t border-white/10" />
            <h3 className="font-bold">Field Data Collection</h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              Experience supporting field data collection activities.
            </p>
          </section>

          <section className="rounded-2xl border border-blue-300/20 bg-gradient-to-br from-[#142b50] to-[#0d192d] p-6">
            <p className="text-xs font-bold tracking-[0.25em] text-cyan-300">
              BUSINESS
            </p>
            <h2 className="mt-3 text-xl font-extrabold">
              samgroTech Solutions
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Founder of a technology brand delivering digital experiences
              and practical technology solutions.
            </p>
            <a
              href="https://samgrotech-website.vercel.app/"
              className="mt-5 inline-flex text-sm font-bold text-cyan-300 hover:text-white"
            >
              Visit business website →
            </a>
          </section>
        </aside>
      </div>

      <footer className="border-t border-white/10 bg-[#060b16]">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Samuel Growther</span>
          <Link href="/" className="font-semibold text-cyan-300 hover:text-white">
            samgroTech Solutions
          </Link>
        </div>
      </footer>
    </main>
  );
}
