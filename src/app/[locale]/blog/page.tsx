import { useTranslations } from 'next-intl';
import Navigation from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const t = useTranslations();

  // Articles fictifs pour la démonstration
  const sampleArticles = [
    {
      id: 1,
      title: "Évolution du marché de l'assurance au Cameroun en 2024",
      excerpt: "Analyse des tendances et perspectives du secteur de l'assurance camerounais...",
      category: "news",
      date: "2024-12-15",
      readTime: "5 min",
      image: "/images/article-1.jpg"
    },
    {
      id: 2,
      title: "Formation sur les nouvelles réglementations CIMA",
      excerpt: "L'APCAR organise une session de formation sur les dernières directives CIMA...",
      category: "training",
      date: "2024-12-10",
      readTime: "3 min",
      image: "/images/article-2.jpg"
    },
    {
      id: 3,
      title: "Assemblée générale annuelle 2024",
      excerpt: "Retour sur les principales décisions prises lors de notre assemblée générale...",
      category: "events",
      date: "2024-12-05",
      readTime: "7 min",
      image: "/images/article-3.jpg"
    }
  ];

  const featuredArticles = [
    {
      id: 4,
      title: "L'avenir du courtage d'assurance à l'ère numérique",
      excerpt: "Comment la transformation digitale redéfinit les pratiques de courtage...",
      category: "innovation",
      date: "2024-12-01",
      readTime: "8 min",
      featured: true
    },
    {
      id: 5,
      title: "Partenariats stratégiques en Afrique centrale",
      excerpt: "Renforcement des liens avec nos homologues de la sous-région...",
      category: "collaboration",
      date: "2024-11-28",
      readTime: "6 min",
      featured: true
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1" id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('blog.hero.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('blog.hero.subtitle')}
            </p>
          </div>
        </div>

        {/* Latest Articles Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('blog.latest.title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sampleArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
                  <div className="aspect-w-16 aspect-h-9 bg-slate-200 rounded-t-xl">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-xl flex items-center justify-center">
                      <span className="text-slate-500 text-sm">Image à venir</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <Tag className="h-3 w-3 mr-1" />
                        {t(`blog.latest.categories.${article.category}`)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime}
                        </span>
                      </div>
                      <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium">
                        {t('blog.latest.readMore')}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('blog.featured.title')}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t('blog.featured.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <article key={article.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        ⭐ En vedette
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime}
                        </span>
                      </div>
                      <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                        {t('blog.latest.readMore')}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Placeholder Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📝</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {t('blog.placeholder.title')}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {t('blog.placeholder.description')}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                Nous Contacter
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
