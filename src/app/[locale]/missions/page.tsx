import { useTranslations } from 'next-intl';
import Navigation from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { Target, Users, BookOpen, Award, Globe, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function MissionsPage() {
  const t = useTranslations();

  const objectiveIcons = {
    representation: Target,
    development: Users,
    training: BookOpen,
    ethics: Award,
    collaboration: Globe,
    innovation: Lightbulb,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1" id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('missions.hero.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('missions.hero.subtitle')}
            </p>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                {t('missions.intro.title')}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('missions.intro.content')}
              </p>
            </div>
          </div>
        </section>

        {/* Main Mission Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  {t('missions.mission.title')}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t('missions.mission.content')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Objectives Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('missions.objectives.title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(t.raw('missions.objectives.items')).map(([key, objective]: [string, any]) => {
                const IconComponent = objectiveIcons[key as keyof typeof objectiveIcons];
                return (
                  <div key={key} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 text-blue-600 flex items-center justify-center bg-blue-50 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          {IconComponent && <IconComponent className="h-6 w-6" />}
                        </div>
                        <h3 className="font-semibold text-xl text-slate-900">
                          {objective.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {objective.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rejoignez notre mission
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ensemble, construisons l'avenir du courtage d'assurance au Cameroun
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg transition-colors font-medium"
              >
                Nous Contacter
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg transition-colors font-medium"
              >
                En Savoir Plus
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
