import { Download, Monitor, Apple, Coffee } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-32">
            <div className="container mx-auto px-4 text-center">
                {/* Logo */}
                <div className="mb-8 flex justify-center">
                    <img src="/logo.png" alt="Ninlab Logo" className="w-24 h-24 md:w-32 md:h-32" />
                </div>


                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                    Professional RAW Editor
                </h1>

                <p className="text-2xl md:text-3xl text-white mb-4 max-w-2xl mx-auto font-kanit font-semibold">
                    โปรแกรมแต่งภาพ RAW รวดเร็ว ใช้งานง่าย ฟรี<br />

                </p>



                <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                    Ninlab brings powerful, non-destructive photo editing to your desktop.
                    Fast, intuitive.<br />By : Wachira studeo
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <button className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all">
                        <Apple size={20} />
                        Download for macOS
                    </button>
                    <button className="flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-all border border-gray-700">
                        <Monitor size={20} />
                        Download for Windows
                    </button>
                    <a href="/promptpay-qr.jpg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all font-kanit">
                        <Coffee size={20} />
                        สนับสนุนค่ากาแฟ
                    </a>
                </div>

                <div className="relative mx-auto max-w-5xl rounded-xl border border-gray-800 bg-gray-900/50 p-2 shadow-2xl backdrop-blur-sm">
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-600">
                        {/* Placeholder for App Screenshot */}
                        <span className="text-lg">App Screenshot Placeholder</span>
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[1000px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
