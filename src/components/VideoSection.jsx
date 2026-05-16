"use client";

import { content } from "@/data/content";
import { motion } from "framer-motion";

export default function VideoSection() {
  const { title, subtitle, items } = content.videos;

  if (!items || items.length === 0) return null;

  return (
    <section id="videos" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col gap-4"
            >
              <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                <iframe
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
              <h3 className="text-xl font-semibold text-center">{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
