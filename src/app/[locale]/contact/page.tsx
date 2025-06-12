import { useTranslations } from 'next-intl';
import Navigation from '../../../components/Navigation';


export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-1" id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('nav.contact')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('footer.description')}
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                  {t('footer.contact.title')}
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {t('footer.contact.address')}
                      </h3>
                      <p className="text-slate-600">
                        {t('footer.contact.addressValue')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {t('footer.contact.phone')}
                      </h3>
                      <p className="text-slate-600">
                        {t('footer.contact.phoneValue')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {t('footer.contact.email')}
                      </h3>
                      <p className="text-slate-600">
                        {t('footer.contact.emailValue')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-slate-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  {t('nav.contact')}
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-md border-none">
                    {t('common.submit')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}