import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Navigation  from '../../components/Navigation';
import { StatsSection } from '../../components/StatSection';
import { TestimonialsSection } from '../../components/TestimonialsSection';
import { Footer } from '../../components/Footer';
import { Shield, BookOpen, Award, Users, BarChart3, Scale } from 'lucide-react';

export default function HomePage() {
  const t = useTranslations();

  const serviceIcons = {
    promotion: Shield,
    training: BookOpen,
    ethics: Award,
    networking: Users,
    studies: BarChart3,
    regulatory: Scale,
  };

  return (
      <div className="flex flex-col min-h-screen">
        <Navigation />

        <main className="flex-1" id="main-content" tabIndex={-1}>
          {/* Hero Section */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/bg-pattern.png')] bg-center opacity-10"></div>

            <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    <span className="block">{t('home.hero.title.line1')}</span>
                    <span className="block text-blue-400">{t('home.hero.title.line2')}</span>
                    <span className="block">{t('home.hero.title.line3')}</span>
                  </h1>

                  <p className="mt-6 text-lg text-slate-300 max-w-2xl">
                    {t('home.hero.subtitle')}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                    <Link
                        href="/about"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                    >
                      {t('home.hero.cta.discover')}
                    </Link>
                    <Link
                        href="/contact"
                        className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg transition-colors font-medium"
                    >
                      {t('home.hero.cta.contact')}
                    </Link>
                  </div>
                </div>

                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-md h-[500px] bg-white rounded-lg p-2 shadow-2xl">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                          src="/images/apcar-logo-new.jpeg"
                          alt="APCAR Logo"
                          width={300}
                          height={150}
                          className="w-auto h-auto max-h-36"
                      />
                    </div>

                    <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex items-center justify-center">
                      <div className="bg-blue-100 text-blue-800 p-8 rounded-lg shadow-md w-full max-w-sm mx-4">
                        <h3 className="text-xl font-bold mb-4 text-center">
                          {t('home.hero.insuranceCard.title')}
                        </h3>
                        <p className="text-sm text-center">
                          {t('home.hero.insuranceCard.text')}
                        </p>
                        <div className="flex justify-center mt-4">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-xs transition-colors">
                            {t('home.hero.insuranceCard.button')}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg
                  aria-hidden="true"
                  className="w-full h-20 text-white"
                  fill="currentColor"
                  viewBox="0 0 1440 96"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 96L60 85.3C120 74.7 240 53.3 360 48C480 42.7 600 53.3 720 64C840 74.7 960 85.3 1080 80C1200 74.7 1320 53.3 1380 42.7L1440 32V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V96Z" />
              </svg>
            </div>
          </div>

          {/* Services Section */}
          <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  {t('home.services.title')}
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                  {t('home.services.subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Service Cards */}
                {Object.entries(t.raw('home.services.items')).map(([key, service]: [string, any]) => {
                  const IconComponent = serviceIcons[key as keyof typeof serviceIcons];
                  return (
                      <div key={key} className="rounded-xl bg-white text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="h-12 w-12 text-blue-600 flex items-center justify-center bg-blue-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              {IconComponent && <IconComponent className="h-6 w-6" />}
                            </div>
                            <h3 className="font-semibold text-xl text-slate-900">
                              {service.title}
                            </h3>
                          </div>
                          <p className="text-slate-600 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <StatsSection />

          {/* Testimonials Section */}
          <TestimonialsSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
  );
}
