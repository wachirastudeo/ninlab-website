import { Zap, Layers, Sliders, Image as ImageIcon } from 'lucide-react';

const features = [
    {
        icon: <Zap className="text-yellow-400" />,
        title: "Lightning Fast",
        description: "Powered by Rust for blazing fast image processing and real-time previews."
    },
    {
        icon: <Layers className="text-blue-400" />,
        title: "Non-Destructive",
        description: "Edit freely. Your original files are never touched. Undo/Redo anytime."
    },
    {
        icon: <Sliders className="text-green-400" />,
        title: "Pro Controls",
        description: "Advanced HSL, Curves, Split Toning, and more for precise color grading."
    },
    {
        icon: <ImageIcon className="text-purple-400" />,
        title: "RAW Support",
        description: "Native support for major RAW formats (CR3, ARW, NEF, DNG) and more."
    }
];

export default function Features() {
    return (
        <section className="py-24 bg-gray-900/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need</h2>
                    <p className="text-gray-400">Powerful tools wrapped in a beautiful interface.</p>
                    <p className="text-gray-500 text-sm mt-2 font-kanit">ครบทุกฟีเจอร์ที่คุณต้องการ</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all">
                            <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-4">
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
