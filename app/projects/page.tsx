import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const projects = [
  {
    slug: "cv",
    title: "CV Project",
    description: "Un progetto per la gestione e visualizzazione del curriculum vitae",
    date: "2024-03-20",
    link: "https://github.com/emanuelediluzio/cv-project",
  },
  {
    slug: "distributed-coordination",
    title: "Sistema di Coordinamento Distribuito per il Trasporto di Materiali in un Magazzino",
    description: "Un sistema distribuito per la gestione efficiente del trasporto di materiali in un ambiente di magazzino",
    date: "2024-03-20",
    link: "https://github.com/emanuelediluzio/Distributed-Coordination-System-for-Material-Transport-in-a-Warehouse",
  },
  {
    slug: "bachelor-thesis",
    title: "Tesi di Laurea - Analisi e Sviluppo",
    description: "Progetto di tesi di laurea con analisi approfondite e sviluppi innovativi",
    date: "2024-03-20",
    link: "https://github.com/emanuelediluzio/BachelorThesis",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Progetti
          </h2>
          <p className="mt-4 text-zinc-400">
            I miei progetti principali.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3 ">
          {projects.map((project) => (
            <Card key={project.slug}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      <time dateTime={new Date(project.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(project.date))}
                      </time>
                    </div>
                  </div>
                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    {project.title}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {project.description}
                  </p>
                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      Vai al repository <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
