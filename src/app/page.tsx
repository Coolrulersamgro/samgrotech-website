
"use client";

import Image from "next/image";

const WHATSAPP_NUMBER = "254790809200";

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Pricing", "#pricing"],
  ["Projects", "#projects"],
  ["Founder", "/samuel-growther"],
  ["Contact", "#contact"],
];

const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Web Development",
    description:
      "Modern, responsive websites that help businesses build credibility, reach customers and grow online.",
    tags: ["Business websites", "Landing pages", "E-commerce"],
  },
  {
    number: "02",
    icon: "⚙",
    title: "Software Development",
    description:
      "Practical digital systems designed to simplify business operations and everyday workflows.",
    tags: ["Business systems", "Management apps", "Automation"],
  },
  {
    number: "03",
    icon: "⌁",
    title: "IT & Networking",
    description:
      "Reliable technical support, computer troubleshooting and network setup for homes and businesses.",
    tags: ["IT support", "Network setup", "Troubleshooting"],
  },
  {
    number: "04",
    icon: "⬡",
    title: "Cybersecurity",
    description:
      "Security-focused solutions that help organisations monitor systems and improve their digital protection.",
    tags: ["Security monitoring", "Risk awareness", "System protection"],
  },
  {
    number: "05",
    icon: "▦",
    title: "Business Solutions",
    description:
      "Digital tools that help businesses organise records, track operations and make better decisions.",
    tags: ["Digital records", "Reporting", "Business tools"],
  },
];

const projects = [
  {
    number: "01",
    letter: "D",
    category: "Business Finance & Accounting",
    name: "Dallas",
    description:
      "A business-focused finance application concept for tracking sales, expenses and daily business activity.",
    status: "IN DEVELOPMENT",
  },
  {
    number: "02",
    letter: "S",
    category: "Cybersecurity Intelligence",
    name: "Sentinel",
    description:
      "A security monitoring dashboard concept for viewing system activity, network information and incidents.",
    status: "IN DEVELOPMENT",
  },
  {
    number: "03",
    letter: "W",
    category: "Web Design & Development",
    name: "Business Web Solutions",
    description:
      "Website concepts focused on helping businesses establish a professional online presence.",
    status: "PORTFOLIO CONCEPT",
  },
];

const pricingAreas = [
  {
    title: "Websites",
    description:
      "Business websites, landing pages, portfolio websites and online stores.",
  },
  {
    title: "Software & Business Tools",
    description:
      "Custom systems, management applications, workflow tools and reporting.",
  },
  {
    title: "IT, Networks & Security",
    description:
      "Technical support, network setup, troubleshooting and security-focused services.",
  },
];

export default function Home() {
  function submitEnquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const message = [
      "Hello samgroTech Solutions! I would like to make an enquiry.",
      "",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Service: ${data.get("service")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080f20] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://samgrotech-website.vercel.app/#organization",
                "name": "SamgroTech Solutions",
                "alternateName": ["samgroTech", "SamgroTech"],
                "url": "https://samgrotech-website.vercel.app/",
                "logo": "https://samgrotech-website.vercel.app/images/samgrotech-logo.png",
                "description": "A Kenya-based technology business focused on web development, software development, IT support, networking, cybersecurity and practical business technology solutions.",
                "founder": { "@id": "https://samgrotech-website.vercel.app/samuel-growther#person" },
                "foundingLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressCountry": "KE" } },
                "areaServed": ["Kenya", "Worldwide"],
                "knowsAbout": ["Web development", "Software development", "IT support", "Computer networking", "Cybersecurity", "Business technology"]
              },
              {
                "@type": "WebSite",
                "@id": "https://samgrotech-website.vercel.app/#website",
                "url": "https://samgrotech-website.vercel.app/",
                "name": "SamgroTech Solutions",
                "publisher": { "@id": "https://samgrotech-website.vercel.app/#organization" },
                "inLanguage": "en-KE"
              },
              {
                "@type": "Person",
                "@id": "https://samgrotech-website.vercel.app/samuel-growther#person",
                "name": "Samuel Growther",
                "url": "https://samgrotech-website.vercel.app/samuel-growther",
                "jobTitle": "Founder of SamgroTech Solutions",
                "worksFor": { "@id": "https://samgrotech-website.vercel.app/#organization" },
                "sameAs": ["https://github.com/Coolrulersamgro"]
              }
            ]
          }).replace(/</g, "\\u003c")
        }}
      />

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080f20]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-10">

          <a href="#home" aria-label="samgroTech Solutions home">
            <Image
              src="/images/samgrotech-logo.png"
              alt="samgroTech Solutions"
              width={220}
              height={100}
              priority
              className="h-14 w-auto object-contain sm:h-16"
            />
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
            {navigation.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="transition hover:text-cyan-400"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-blue-600 px-6 py-3 text-sm font-bold transition hover:bg-blue-500 lg:inline-flex"
          >
            Let&apos;s Talk ↗
          </a>

          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-lg border border-white/20 px-4 py-2 text-xl">
              ☰
            </summary>
            <nav className="absolute right-0 top-14 z-50 w-56 rounded-xl border border-white/10 bg-[#101d35] p-4 shadow-2xl">
              {navigation.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="block rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-400"
                >
                  {label}
                </a>
              ))}
            </nav>
          </details>

        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative scroll-mt-24">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10 lg:py-32">

          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold tracking-widest text-blue-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              YOUR TECHNOLOGY PARTNER
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Technology that moves your business{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                forward.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              We create modern digital experiences, practical software and
              reliable technology solutions that help businesses work smarter
              and grow with confidence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-full bg-blue-600 px-7 py-4 text-sm font-bold transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Explore Our Services ↗
              </a>

              <a
                href="#projects"
                className="rounded-full border border-white/20 px-7 py-4 text-sm font-bold transition hover:border-cyan-400 hover:text-cyan-300"
              >
                View Our Projects
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-10 border-t border-white/10 pt-8">
              <div>
                <div className="text-2xl font-extrabold">5+</div>
                <div className="mt-1 text-xs text-slate-500">Service areas</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold">Kenya</div>
                <div className="mt-1 text-xs text-slate-500">Our home market</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold">Global</div>
                <div className="mt-1 text-xs text-slate-500">Our ambition</div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-blue-300/20 bg-gradient-to-br from-[#14284a] to-[#0b1427] p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-xs tracking-widest text-slate-500">
                  SAMGROTECH / DIGITAL
                </span>
              </div>

              <div className="py-10 text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[2rem] border border-blue-300/30 bg-blue-500/15 text-6xl font-black text-blue-300">
                  S
                </div>
                <h2 className="mt-7 text-2xl font-bold">
                  Ideas into technology.
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Building solutions for a connected world.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {["Web experiences", "Smart software", "IT solutions", "Digital security"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="text-xs font-bold text-cyan-400">
                        0{index + 1}
                      </div>
                      <div className="mt-2 text-sm font-semibold">{item}</div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 border-y border-white/10 bg-[#0c1629]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10">

          <div>
            <div className="text-xs font-bold tracking-[0.3em] text-cyan-400">
              WHO WE ARE
            </div>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
              Technology should make business{" "}
              <span className="text-blue-400">better.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg leading-8 text-slate-400">
              samgroTech Solutions is a technology brand focused on helping
              individuals and businesses solve real problems through digital
              innovation. From websites and software to IT support and
              cybersecurity-focused solutions, our goal is to make technology
              useful, accessible and dependable.
            </p>

            <p className="mt-5 leading-7 text-slate-500">
              Based in Kenya, we aim to serve clients locally and build
              solutions for opportunities beyond our borders.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex w-fit font-bold text-blue-400 hover:text-cyan-300"
            >
              Work with us →
            </a>
          </div>

        </div>
      </section>

      {/* FOUNDER PROFILE */}
      <section
        id="founder"
        aria-labelledby="founder-heading"
        className="scroll-mt-24 border-y border-white/10 bg-[#0a1426]"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="max-w-3xl">
            <div className="text-xs font-bold tracking-[0.3em] text-cyan-400">
              MEET THE FOUNDER
            </div>
            <h2 id="founder-heading" className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Samuel Growther
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-400">
              Founder of samgroTech Solutions, an IT professional and technology
              builder based in Kenya. Learn more about his background, education,
              experience, skills and technology projects on his professional profile.
            </p>
          </div>
          <a
            href="/samuel-growther"
            aria-label="View Samuel Growther's professional profile"
            className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-blue-600 px-7 py-4 text-sm font-bold transition hover:-translate-y-1 hover:bg-blue-500"
          >
            View Samuel Growther&apos;s Profile ↗
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-10">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs font-bold tracking-[0.3em] text-cyan-400">
              WHAT WE DO
            </div>
            <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
              Our services<span className="text-blue-400">.</span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-slate-400">
            Practical technology services designed around the needs of modern
            businesses, organisations and individuals.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-2xl border border-white/10 bg-[#0d192d] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-400/50 hover:bg-[#11213a]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-3xl text-cyan-300">
                  {service.icon}
                </div>
                <span className="text-sm font-bold text-slate-600">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-bold">{service.title}</h3>

              <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-400">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex text-sm font-bold text-blue-400 transition group-hover:text-cyan-300"
              >
                Enquire about this service →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="scroll-mt-24 border-y border-white/10 bg-[#0c1629]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

          <div className="text-xs font-bold tracking-[0.3em] text-cyan-400">
            PRICING & QUOTATIONS
          </div>

          <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            The right solution for your business.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-slate-400">
            Every project has different requirements. We discuss your goals,
            project scope and budget before preparing a quotation. Contact us
            for a tailored estimate.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pricingAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl border border-white/10 bg-[#101e35] p-7"
              >
                <h3 className="text-xl font-bold">{area.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {area.description}
                </p>
                <a
                  href="#contact"
                  className="mt-7 inline-flex text-sm font-bold text-cyan-400 hover:text-blue-300"
                >
                  Request a quote →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24 border-b border-white/10 bg-[#080f20]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

          <div className="text-xs font-bold tracking-[0.3em] text-cyan-400">
            SELECTED WORK
          </div>

          <h2 className="mt-5 text-4xl font-extrabold sm:text-5xl">
            Projects &amp; ideas<span className="text-blue-400">.</span>
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-slate-400">
            A look at the digital products and concepts we are developing.
          </p>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#101e35]"
              >
                <div className="relative flex h-52 items-center justify-center bg-gradient-to-br from-blue-950 via-[#132c51] to-cyan-950">
                  <div className="absolute h-48 w-48 rounded-full border border-blue-300/20" />
                  <div className="absolute h-36 w-36 rounded-full border border-cyan-300/20" />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-blue-200/30 bg-white/10 text-5xl font-black">
                    {project.letter}
                  </div>

                  <span className="absolute right-5 top-5 text-xs font-bold tracking-widest text-blue-200/70">
                    PROJECT {project.number}
                  </span>
                </div>

                <div className="p-7">
                  <div className="text-xs font-bold tracking-wider text-cyan-400">
                    {project.category}
                  </div>

                  <h3 className="mt-3 text-2xl font-extrabold">
                    {project.name}
                  </h3>

                  <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-2 text-[10px] font-bold tracking-wider text-amber-200">
                      {project.status}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-7 text-xs text-slate-500">
            These are internal projects and concepts, not client deployments.
          </p>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 relative overflow-hidden">
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">

          <div className="mb-14 text-center">
            <div className="text-xs font-bold tracking-[0.3em] text-cyan-300">
              LET&apos;S BUILD SOMETHING
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
              Have a project in mind?
              <span className="text-blue-400"> Let&apos;s talk.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-300">
              Tell us what you want to build, improve or solve. Let&apos;s explore
              how technology can move your business forward.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">

            <aside className="rounded-3xl border border-blue-300/20 bg-gradient-to-br from-[#142b50] to-[#0d192e] p-8">
              <h3 className="text-2xl font-bold">Let&apos;s connect.</h3>

              <p className="mt-4 leading-7 text-slate-300">
                We work with businesses and individuals in Kenya and aim to
                support clients internationally.
              </p>

              <div className="mt-8">
                <div className="text-xs uppercase tracking-widest text-slate-500">
                  WhatsApp
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-semibold text-cyan-300 hover:text-white"
                >
                  +254 790 809 200
                </a>
              </div>

              <div className="mt-6">
                <div className="text-xs uppercase tracking-widest text-slate-500">
                  Location
                </div>
                <p className="mt-2 font-semibold">
                  Kenya · Serving clients globally
                </p>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello samgroTech Solutions, I would like to enquire about your services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex rounded-full bg-green-600 px-6 py-3 text-sm font-bold transition hover:bg-green-500"
              >
                Chat on WhatsApp ↗
              </a>
            </aside>

            <form
              onSubmit={submitEnquiry}
              className="rounded-3xl border border-white/10 bg-[#0d192d] p-7 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">

                <label className="block text-sm font-medium text-slate-300">
                  Your name
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#080f20] px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-400"
                  />
                </label>

                <label className="block text-sm font-medium text-slate-300">
                  Email address
                  <input
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#080f20] px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-400"
                  />
                </label>

              </div>

              <label className="mt-5 block text-sm font-medium text-slate-300">
                Service required
                <select
                  name="service"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#080f20] px-4 py-3 text-white outline-none focus:border-blue-400"
                >
                  {services.map((service) => (
                    <option key={service.number}>{service.title}</option>
                  ))}
                  <option>Other / Not sure yet</option>
                </select>
              </label>

              <label className="mt-5 block text-sm font-medium text-slate-300">
                Tell us about your project
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Describe what you need help with..."
                  className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-[#080f20] px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-blue-400"
                />
              </label>

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-blue-600 px-7 py-4 text-sm font-bold transition hover:bg-blue-500"
              >
                Send enquiry via WhatsApp ↗
              </button>

              <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                WhatsApp will open with your message. Press Send there to
                deliver your enquiry.
              </p>
            </form>

          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello samgroTech Solutions, I need your services.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with samgroTech Solutions on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl font-bold text-white shadow-2xl transition hover:scale-110 hover:bg-green-400"
      >
        ☎
      </a>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#060b16]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-9 sm:flex-row sm:items-center lg:px-10">

          <a href="#home" aria-label="samgroTech Solutions home">
            <Image
              src="/images/samgrotech-logo.png"
              alt="samgroTech Solutions"
              width={220}
              height={100}
              className="h-14 w-auto object-contain"
            />
          </a>

          <p className="text-sm text-slate-500">
            Technology that moves your business forward.
          </p>

          <p className="text-xs text-slate-600">
            © 2026 samgroTech Solutions.
          </p>

        </div>
      </footer>

    </main>
  );
}
