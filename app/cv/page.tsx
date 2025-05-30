import React from "react";
import { Navigation } from "../components/nav";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function CVPage() {
  return (
    <div className="relative pb-16 min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
      <Navigation />
      <div className="px-6 pt-20 mx-auto max-w-3xl lg:px-8 md:pt-24 lg:pt-32">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-2">Emanuele Di Luzio</h1>
        <h2 className="text-lg text-zinc-200 mb-6">Computer Engineering and Artificial Intelligence Student</h2>
        <div className="flex flex-wrap gap-4 mb-8 text-zinc-100">
          <div className="flex items-center gap-2"><Phone size={18} className="text-zinc-300"/> <span>+39 388-407-5575</span></div>
          <div className="flex items-center gap-2"><Linkedin size={18} className="text-zinc-300"/> <a href="https://www.linkedin.com/in/emanuele-di-luzio-658752184/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-300 hover:text-white transition">@linkedin.com/in/emanuele-di-luzio-658752184</a></div>
          <div className="flex items-center gap-2"><Github size={18} className="text-zinc-300"/> <a href="https://github.com/emanuelediluzio" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-300 hover:text-white transition">github.com/emanuelediluzio</a></div>
        </div>

        {/* Academic Background */}
        <section className="mb-8 p-4 rounded-lg bg-zinc-800/40 shadow-md">
          <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2"><span role="img" aria-label="🎓">🎓</span> Academic Background</h3>
          <div className="mb-2">
            <span className="font-bold text-zinc-100">Master's Degree in Artificial Intelligence Engineering</span> <span className="text-zinc-300">(2023 – Present)</span><br/>
            <span className="italic text-zinc-400">University of Modena and Reggio Emilia, Modena</span>
            <ul className="list-disc ml-6 text-zinc-200">
              <li>Advanced AI study: ML, Deep Learning, Computer Vision, NLP.</li>
              <li>Hands-on experience: TensorFlow, PyTorch, CNN, RNN, Transformer architectures.</li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-zinc-100">Bachelor's Degree in Computer Engineering</span> <span className="text-zinc-300">(2020 – 2023)</span><br/>
            <span className="italic text-zinc-400">Alma Mater Studiorum - University of Bologna, Bologna</span>
            <ul className="list-disc ml-6 text-zinc-200">
              <li>Fundamentals of system architectures (parallel/distributed), algorithms, advanced programming (Java, C, OOP).</li>
            </ul>
          </div>
        </section>

        {/* Relevant University Projects */}
        <section className="mb-8 p-4 rounded-lg bg-zinc-800/40 shadow-md">
          <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2"><span role="img" aria-label="🧑‍💻">🧑‍💻</span> Relevant University Projects</h3>
          <div className="mb-2">
            <span className="font-bold text-zinc-100">Air Pollution Prediction (Modena)</span> <span className="text-zinc-300">(Jan 2023 – Present)</span>
            <ul className="list-disc ml-6 text-zinc-200">
              <li>AI model (Sentinel data, CNN ResNet) for air quality.</li>
              <li>Workflow: Data acquisition, modeling, evaluation (MSE), and optimization.</li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-zinc-100">Tracking Emerging Technologies with Neo4j and BERT (Modena)</span> <span className="text-zinc-300">(Jul 2024)</span>
            <ul className="list-disc ml-6 text-zinc-200">
              <li>Knowledge Graph (arXiv, Neo4j) and BERT for semantic analysis tech trend prediction.</li>
            </ul>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-8 p-4 rounded-lg bg-zinc-800/40 shadow-md">
          <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2"><span role="img" aria-label="💼">💼</span> Professional Experience</h3>
          <div className="mb-2">
            <span className="font-bold text-zinc-100">Co-Founder and CTO | Stunbrand (Start-up)</span> <span className="text-zinc-300">(Sep 2023 – Present)</span>
            <ul className="list-disc ml-6 text-zinc-200">
              <li>Logistics platform architecture; Web dev (React/Node.js → Shopify custom).</li>
              <li>Third-party API integration (payments, shipping), security.</li>
            </ul>
          </div>
          <div className="mb-2">
            <span className="font-bold text-zinc-100">Web Developer (Part-time) | ASCOM Imola</span> <span className="text-zinc-300">(Apr 2023 – Jun 2023)</span>
            <ul className="list-disc ml-6 text-zinc-200">
              <li>Custom CRM development (Linux); WhatsApp Business API integration.</li>
            </ul>
          </div>
          <div className="mb-2">
            <span className="font-bold text-zinc-100">Web Developer | Vivaio Asso di Fiori</span> <span className="text-zinc-300">(2022)</span>
            <ul className="list-disc ml-6 text-zinc-200">
              <li>Static promotional website development (SEO, responsive focus).</li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-zinc-100">Digital Menu Design | Ristorante Pizzeria La Fontana</span> <span className="text-zinc-300">(2021)</span>
            <ul className="list-disc ml-6 text-zinc-200">
              <li>Interactive digital menu implementation (QR code), mobile optimization.</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8 p-4 rounded-lg bg-zinc-800/40 shadow-md">
          <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2"><span role="img" aria-label="🛠️">🛠️</span> Technical Skills</h3>
          <ul className="list-disc ml-6 text-zinc-200">
            <li><span className="font-bold">Programming Languages:</span> C, Java, Python, JavaScript, SQL (Advanced)</li>
            <li><span className="font-bold">Frameworks/Libraries:</span> TensorFlow, PyTorch (Deep Learning); React.js, Node.js (Web Dev)</li>
            <li><span className="font-bold">Tools:</span> Git, VS Code, IntelliJ IDEA, CI/CD tools (Expert)</li>
            <li><span className="font-bold">Operating Systems:</span> Windows, Linux (Ubuntu, CentOS), macOS (Familiarity)</li>
            <li><span className="font-bold">Web Development:</span> HTML5, CSS3, JS, Node.js, Express.js, Shopify (Advanced)</li>
          </ul>
        </section>

        {/* Other Skills */}
        <section className="mb-8 p-4 rounded-lg bg-zinc-800/40 shadow-md">
          <h3 className="text-2xl font-semibold text-white mb-2 flex items-center gap-2"><span role="img" aria-label="🎨">🎨</span> Other Skills</h3>
          <ul className="list-disc ml-6 text-zinc-200">
            <li><span className="font-bold">Graphics/Video Editing:</span> Adobe Photoshop/Premiere (Advanced); Blender (Experience)</li>
            <li><span className="font-bold">Musical Skills:</span> Cello (orchestral experience), Logic Pro X (Production)</li>
          </ul>
        </section>
      </div>
    </div>
  );
} 