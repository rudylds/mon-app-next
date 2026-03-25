const projects = [
  {
    title: "Dashboard Analytics",
    description:
      "Une application de visualisation de données en temps réel, construite avec React et D3.js. Tableaux de bord interactifs avec filtres avancés.",
    tags: ["React", "D3.js", "Node.js"],
    color: "from-violet-500/20 to-indigo-500/20",
    accent: "text-violet-400",
  },
  {
    title: "E-commerce Platform",
    description:
      "Plateforme de vente en ligne full-stack avec gestion des stocks, paiement Stripe et panel admin. Plus de 500 produits gérés.",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    color: "from-cyan-500/20 to-teal-500/20",
    accent: "text-cyan-400",
  },
  {
    title: "Mobile Task Manager",
    description:
      "Application mobile de gestion de tâches avec synchronisation cloud, rappels intelligents et mode hors-ligne.",
    tags: ["React Native", "Firebase", "Expo"],
    color: "from-rose-500/20 to-pink-500/20",
    accent: "text-rose-400",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f13] text-[#e8e8f0] font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0f0f13]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight text-white">
            Rudy<span className="text-violet-400">.</span>
          </span>
          <nav className="flex gap-6 text-sm text-zinc-400">
            <a href="#about" className="transition-colors hover:text-white">
              À propos
            </a>
            <a href="#projects" className="transition-colors hover:text-white">
              Projets
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section
          id="about"
          className="flex min-h-[calc(100vh-65px)] flex-col justify-center py-24"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-violet-400">
            Développeur Web Full-Stack
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Bonjour, je suis{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Rudy
            </span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Je conçois et développe des applications web modernes, rapides et
            accessibles. Passionné par les interfaces soignées et les
            architectures propres, je transforme des idées en produits concrets.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex h-11 items-center rounded-full bg-violet-600 px-6 text-sm font-medium text-white transition-colors hover:bg-violet-500"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-full border border-white/10 px-6 text-sm font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
            >
              Me contacter
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-violet-400">
            Réalisations
          </p>
          <h2 className="mb-12 text-3xl font-bold text-white sm:text-4xl">
            Projets sélectionnés
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br ${project.color} p-6 transition-transform hover:-translate-y-1`}
              >
                <div className="absolute inset-0 bg-[#0f0f13]/60" />
                <div className="relative">
                  <h3 className={`mb-3 text-lg font-semibold ${project.accent}`}>
                    {project.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24">
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-10 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-violet-400">
              Contact
            </p>
            <h2 className="mb-4 text-3xl font-bold text-white">
              Travaillons ensemble
            </h2>
            <p className="mb-8 text-zinc-400">
              Un projet en tête ? N&apos;hésitez pas à me contacter.
            </p>
            <a
              href="mailto:rudy@example.com"
              className="inline-flex h-11 items-center rounded-full bg-violet-600 px-8 text-sm font-medium text-white transition-colors hover:bg-violet-500"
            >
              rudy@example.com
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto max-w-5xl px-6 text-center text-sm text-zinc-600">
          © {new Date().getFullYear()} Rudy — Tous droits réservés
        </div>
      </footer>
    </div>
  );
}
