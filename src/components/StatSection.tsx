'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

interface StatItemProps {
    title: string;
    value: string;
    description: string;
    delay?: number;
}

function StatItem({ title, value, description, delay = 0 }: StatItemProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedValue, setAnimatedValue] = useState('0');

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            // Animer les chiffres
            if (value.includes('+')) {
                const numValue = parseInt(value.replace('+', ''));
                let current = 0;
                const increment = Math.ceil(numValue / 50);
                const interval = setInterval(() => {
                    current += increment;
                    if (current >= numValue) {
                        current = numValue;
                        clearInterval(interval);
                        setAnimatedValue(value);
                    } else {
                        setAnimatedValue(current + '+');
                    }
                }, 30);
            } else if (value.includes('ans')) {
                const numValue = parseInt(value);
                let current = 0;
                const increment = 1;
                const interval = setInterval(() => {
                    current += increment;
                    if (current >= numValue) {
                        current = numValue;
                        clearInterval(interval);
                        setAnimatedValue(value);
                    } else {
                        setAnimatedValue(current + ' ans');
                    }
                }, 100);
            } else {
                setAnimatedValue(value);
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return (
        <div className={`text-center transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{title}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                    {animatedValue}
                </div>
                <p className="text-slate-600">{description}</p>
            </div>
        </div>
    );
}

export function StatsSection() {
    const t = useTranslations('home.stats');

    const stats = [
        {
            key: 'members',
            title: t('items.members.title'),
            value: t('items.members.value'),
            description: t('items.members.description'),
        },
        {
            key: 'training',
            title: t('items.training.title'),
            value: t('items.training.value'),
            description: t('items.training.description'),
        },
        {
            key: 'experience',
            title: t('items.experience.title'),
            value: t('items.experience.value'),
            description: t('items.experience.description'),
        },
        {
            key: 'partners',
            title: t('items.partners.title'),
            value: t('items.partners.value'),
            description: t('items.partners.description'),
        },
    ];

    return (
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <StatItem
                            key={stat.key}
                            title={stat.title}
                            value={stat.value}
                            description={stat.description}
                            delay={index * 200}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
