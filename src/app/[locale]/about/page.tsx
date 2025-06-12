import { useTranslations } from 'next-intl';
import Navigation  from '../../../components/Navigation';
import { Footer } from '@/src/components/Footer';
import Image from 'next/image';


export default function AboutPage() {
  const t = useTranslations();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1" id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-white w-full flex justify-between">
          <div className="mx-auto px-4 w-[50%]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                {t('about.mission.title')}
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p className="text-lg text-slate-600 mb-6">
                  {t('about.mission.content.p1')}
                </p>
                <p className="text-lg text-slate-600 mb-6">
                  {t('about.mission.content.p2')}
                </p>
                <p className="text-lg text-slate-600">
                  {t('about.mission.content.p3')}
                </p>
              </div>
            </div>
          </div>
          <div className='w-[50%] rounded-lg p-10'>
            <Image
              src="/images/apcar-team.jpeg"
              alt="APCAR team"
              width={1000}
              height={1000}
              className="h-full w-full rounded-lg"
            />
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('about.values.title')}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t('about.values.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(t.raw('about.values.items')).map(([key, value]: [string, any]) => (
                <div key={key} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">
                        {key === 'professionalism' && '👔'}
                        {key === 'excellence' && '⭐'}
                        {key === 'integrity' && '🤝'}
                        {key === 'collaboration' && '🌟'}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-slate-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('about.history.title')}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t('about.history.subtitle')}
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {Object.entries(t.raw('about.history.timeline')).map(([year, event]: [string, any], index) => (
                  <div key={year} className={`flex items-start gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="flex-shrink-0 w-24 text-center">
                      <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm mx-auto">
                        {year}
                      </div>
                    </div>
                    <div className="flex-1 bg-slate-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        {event.title}
                      </h3>
                      <p className="text-slate-600">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
       <Footer />
    </div>
  );
}