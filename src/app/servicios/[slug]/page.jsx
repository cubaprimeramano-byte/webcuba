import { content } from "@/data/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import * as Icons from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generar rutas estáticas para cada servicio
export async function generateStaticParams() {
  return content.services.items.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }) {
  const resolvedParams = await params;
  
  const service = content.services.items.find(
    (item) => item.slug === resolvedParams.slug
  );

  if (!service) {
    notFound();
  }

  const IconComponent = Icons[service.icon] || Icons.HelpCircle;

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      {/* Hero Section del Servicio */}
      <div className="bg-primary pt-32 pb-20 text-white flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/#servicios" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors">
            <Icons.ArrowLeft size={20} className="mr-2" />
            Volver a Servicios
          </Link>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
              <IconComponent size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-gray-200 leading-relaxed max-w-3xl">
            {service.description}
          </p>
        </div>
      </div>

      {/* Detalles del Servicio */}
      <div className="flex-grow pb-24 -mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Icons.Info className="mr-3 text-secondary" size={28} />
              Detalles de la Ayuda
            </h2>
            
            <ul className="space-y-6">
              {service.detailedInfo && service.detailedInfo.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mt-1 mr-4">
                    <Icons.Check className="text-primary" size={16} />
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{detail}</p>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-12 pt-10 border-t border-gray-100 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">¿Quieres colaborar?</h3>
              <a 
                href={content.contact.formLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-secondary hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-red-900/20"
              >
                {content.contact.formButtonText}
                <Icons.ExternalLink size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
