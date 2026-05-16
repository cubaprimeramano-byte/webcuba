"use client";

import { content } from "@/data/content";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesSection() {
  const { title, subtitle, items } = content.services;

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons.HelpCircle;
            
            return (
              <Link href={`/servicios/${service.slug}`} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-gray-100 h-full flex flex-col cursor-pointer"
                >
                  <div className="w-14 h-14 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{service.description}</p>
                  <div className="mt-6 flex items-center text-primary font-semibold group-hover:text-secondary transition-colors">
                    Ver detalles <Icons.ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
