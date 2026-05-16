"use client";

import { content } from "@/data/content";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const { title, subtitle, formLink, formButtonText } = content.contact;

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 md:p-16 rounded-3xl shadow-xl border border-gray-100"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          
          <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-blue-800 text-white font-bold text-lg px-8 py-5 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 w-full sm:w-auto"
          >
            {formButtonText || "Ir al Formulario"}
            <ExternalLink size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
