'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

interface TestimonialData {
    quote: string;
    name: string;
    position: string;
    avatar: string;
}

export function TestimonialsSection() {
    const t = useTranslations('home.testimonials');
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials: TestimonialData[] = [
        {
            quote: t('items.alexandre.quote'),
            name: t('items.alexandre.name'),
            position: t('items.alexandre.position'),
            avatar: '/images/testimonial-avatar-1.png'
        },
        {
            quote: t('items.marie.quote'),
            name: t('items.marie.name'),
            position: t('items.marie.position'),
            avatar: '/images/testimonial-avatar-2.png'
        },
        {
            quote: t('items.jeanPierre.quote'),
            name: t('items.jeanPierre.name'),
            position: t('items.jeanPierre.position'),
            avatar: '/images/testimonial-avatar-3.png'
        },
        {
            quote: t('items.sandrine.quote'),
            name: t('items.sandrine.name'),
            position: t('items.sandrine.position'),
            avatar: '/images/testimonial-avatar-4.png'
        },
        {
            quote: t('items.patrick.quote'),
            name: t('items.patrick.name'),
            position: t('items.patrick.position'),
            avatar: '/images/testimonial-avatar-5.png'
        },
        {
            quote: t('items.carine.quote'),
            name: t('items.carine.name'),
            position: t('items.carine.position'),
            avatar: '/images/testimonial-avatar-6.png'
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-rotation
    useEffect(() => {
        const interval = setInterval(nextTestimonial, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 md:p-12 shadow-lg">
                        {/* Navigation buttons */}
                        <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
                            <button
                                onClick={prevTestimonial}
                                className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow text-blue-600 hover:text-blue-700"
                                aria-label="Témoignage précédent"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
                            <button
                                onClick={nextTestimonial}
                                className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow text-blue-600 hover:text-blue-700"
                                aria-label="Témoignage suivant"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Stars */}
                        <div className="flex justify-center mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-lg md:text-xl text-slate-700 text-center mb-8 leading-relaxed">
                            "{testimonials[currentIndex]?.quote}"
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center justify-center space-x-4">
                            <div className="relative">
                                <Image
                                    src={testimonials[currentIndex]?.avatar || '/images/testimonial-avatar-1.png'}
                                    alt={testimonials[currentIndex]?.name || ''}
                                    width={64}
                                    height={64}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                            </div>
                            <div className="text-left">
                                <div className="font-semibold text-slate-900">
                                    {testimonials[currentIndex]?.name}
                                </div>
                                <div className="text-slate-600">
                                    {testimonials[currentIndex]?.position}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    index === currentIndex
                                        ? 'bg-blue-600'
                                        : 'bg-slate-300 hover:bg-slate-400'
                                }`}
                                aria-label={`Aller au témoignage ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
