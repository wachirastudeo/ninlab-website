"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Sliders, Palette, Droplet, SunMedium, Sparkles, Crop, Download } from 'lucide-react';

const screenshots = [
    {
        id: 'basic',
        name: 'Basic',
        icon: Sliders,
        description: 'Exposure, Contrast, Gamma',
        image: '/screenshots/basic.png'
    },
    {
        id: 'tone',
        name: 'Tone',
        icon: SunMedium,
        description: 'Split Toning - Highlights & Shadows',
        image: '/screenshots/tone.png'
    },
    {
        id: 'color',
        name: 'Color',
        icon: Palette,
        description: 'Temperature, Tint, Saturation',
        image: '/screenshots/color.png'
    },
    {
        id: 'hsl',
        name: 'HSL',
        icon: Droplet,
        description: 'Color Mixer & Curves',
        image: '/screenshots/hsl.png'
    },
    {
        id: 'effects',
        name: 'Effects',
        icon: Sparkles,
        description: 'Clarity, Vignette, Grain',
        image: '/screenshots/effects.png'
    },
    {
        id: 'transform',
        name: 'Transform',
        icon: Crop,
        description: 'Rotate, Flip, Crop',
        image: '/screenshots/transform.png'
    },
    {
        id: 'export',
        name: 'Export',
        icon: Download,
        description: 'Export with Sequential Naming & Size Limit',
        image: '/screenshots/export.png'
    }
];

export default function Screenshots() {
    const [activeTab, setActiveTab] = useState('basic');

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Editing Tools</h2>
                    <p className="text-gray-400">Professional-grade controls at your fingertips</p>
                    <p className="text-gray-500 text-sm mt-2 font-kanit">เครื่องมือแต่งภาพระดับมืออาชีพ</p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {screenshots.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-white text-black'
                                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                    }`}
                            >
                                <Icon size={18} />
                                {tab.name}
                            </button>
                        );
                    })}
                </div>

                {/* Screenshot Display */}
                <div className="max-w-5xl mx-auto">
                    {screenshots.map((screenshot) => (
                        <div
                            key={screenshot.id}
                            className={`transition-opacity duration-300 ${activeTab === screenshot.id ? 'block' : 'hidden'
                                }`}
                        >
                            <div className="text-center mb-4">
                                <p className="text-gray-400 text-sm">{screenshot.description}</p>
                            </div>
                            <div className="relative rounded-xl border border-gray-800 bg-gray-900/50 p-2 shadow-2xl backdrop-blur-sm overflow-hidden">
                                <div className="aspect-video rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden relative">
                                    <Image
                                        src={screenshot.image}
                                        alt={`${screenshot.name} - ${screenshot.description}`}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
