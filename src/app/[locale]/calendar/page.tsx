import { useTranslations } from 'next-intl';
import Navigation from '../../../components/Navigation';
import { Footer } from '../../../components/Footer';
import { Calendar, Clock, MapPin, Users, BookOpen, MessageSquare, Award, Handshake } from 'lucide-react';
import Link from 'next/link';

export default function CalendarPage() {
  const t = useTranslations();

  // Événements fictifs pour la démonstration
  const upcomingEvents = [
    {
      id: 1,
      title: "Formation : Nouvelles réglementations CIMA 2025",
      date: "2025-01-15",
      time: "09:00 - 17:00",
      location: "Hôtel Pullman, Douala",
      type: "training",
      participants: "50 places",
      quarter: "q1"
    },
    {
      id: 2,
      title: "Assemblée Générale Ordinaire",
      date: "2025-02-20",
      time: "14:00 - 18:00",
      location: "Siège APCAR, Douala",
      type: "meeting",
      participants: "Tous les membres",
      quarter: "q1"
    },
    {
      id: 3,
      title: "Conférence : L'assurance à l'ère numérique",
      date: "2025-03-10",
      time: "08:30 - 16:30",
      location: "Centre de conférences Bonapriso",
      type: "conference",
      participants: "200 places",
      quarter: "q1"
    },
    {
      id: 4,
      title: "Atelier : Éthique et déontologie",
      date: "2025-04-18",
      time: "09:00 - 13:00",
      location: "Salle de formation APCAR",
      type: "workshop",
      participants: "30 places",
      quarter: "q2"
    },
    {
      id: 5,
      title: "Soirée de networking",
      date: "2025-05-25",
      time: "18:00 - 22:00",
      location: "Hôtel Akwa Palace",
      type: "networking",
      participants: "100 places",
      quarter: "q2"
    },
    {
      id: 6,
      title: "Formation : Gestion des sinistres complexes",
      date: "2025-06-12",
      time: "09:00 - 17:00",
      location: "Centre de formation APCAR",
      type: "training",
      participants: "40 places",
      quarter: "q2"
    }
  ];

  const eventTypeIcons = {
    training: BookOpen,
    conference: MessageSquare,
    meeting: Users,
    workshop: Award,
    networking: Handshake,
  };

  const eventTypeColors = {
    training: "bg-blue-100 text-blue-800 border-blue-200",
    conference: "bg-green-100 text-green-800 border-green-200",
    meeting: "bg-purple-100 text-purple-800 border-purple-200",
    workshop: "bg-orange-100 text-orange-800 border-orange-200",
    networking: "bg-pink-100 text-pink-800 border-pink-200",
  };

  const groupEventsByQuarter = (events: typeof upcomingEvents) => {
    return events.reduce((acc, event) => {
      if (!acc[event.quarter]) {
        acc[event.quarter] = [];
      }
      acc[event.quarter].push(event);
      return acc;
    }, {} as Record<string, typeof upcomingEvents>);
  };

  const eventsByQuarter = groupEventsByQuarter(upcomingEvents);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />

      <main className="flex-1" id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('calendar.hero.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('calendar.hero.subtitle')}
            </p>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {t('calendar.events.title')}
              </h2>
            </div>

            {/* Events by Quarter */}
            <div className="space-y-12">
              {Object.entries(eventsByQuarter).map(([quarter, events]) => (
                <div key={quarter} className="bg-slate-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                    {t(`calendar.quarters.${quarter}`)}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => {
                      const IconComponent = eventTypeIcons[event.type as keyof typeof eventTypeIcons];
                      const colorClass = eventTypeColors[event.type as keyof typeof eventTypeColors];

                      return (
                        <div key={event.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
                          <div className="p-6">
                            <div className="flex items-center gap-2 mb-4">
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${colorClass}`}>
                                {IconComponent && <IconComponent className="h-4 w-4 mr-1" />}
                                {t(`calendar.events.types.${event.type}`)}
                              </span>
                            </div>

                            <h4 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                              {event.title}
                            </h4>

                            <div className="space-y-2 text-sm text-slate-600">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-blue-500" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-green-500" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-red-500" />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-purple-500" />
                                <span>{event.participants}</span>
                              </div>
                            </div>

                            <div className="mt-4 pt-4 border-t border-slate-100">
                              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors font-medium text-sm">
                                S'inscrire
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types Legend */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Types d'événements
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.entries(eventTypeIcons).map(([type, IconComponent]) => {
                  const colorClass = eventTypeColors[type as keyof typeof eventTypeColors];
                  return (
                    <div key={type} className="text-center">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-2 ${colorClass.replace('text-', 'bg-').replace('border-', '').replace('bg-', 'bg-').split(' ')[0]}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <p className="text-sm font-medium text-slate-700">
                        {t(`calendar.events.types.${type}`)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Placeholder Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {t('calendar.placeholder.title')}
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                {t('calendar.placeholder.description')}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Nous Contacter
                </Link>
                <Link
                  href="/missions"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  Nos Missions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
