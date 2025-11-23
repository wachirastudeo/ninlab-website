import { Apple, Monitor, ArrowRight } from 'lucide-react';

export default function Download() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to start editing?</h2>
                        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                            Download Ninlab today and experience the difference. Available for macOS and Windows.
                        </p>
                        <p className="text-gray-500 text-sm mb-10 max-w-xl mx-auto font-kanit">
                            ดาวน์โหลดฟรี รองรับทั้ง macOS และ Windows
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://drive.google.com/drive/folders/1Cnfm1UgXPOX33iyM3RQxkkerW6FdIAFV?usp=drive_link" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all">
                                <Apple size={24} />
                                <div className="text-left">
                                    <div className="text-xs font-normal">Download for</div>
                                    <div className="leading-none">macOS</div>
                                </div>
                                <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0" size={16} />
                            </a>

                            <a href="https://drive.google.com/drive/folders/1p5UOkaQesl5hB2-gF33ot39gi2gBrcMh?usp=drive_link" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-gray-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-700 transition-all border border-gray-700">
                                <Monitor size={24} />
                                <div className="text-left">
                                    <div className="text-xs font-normal text-gray-400">Download for</div>
                                    <div className="leading-none">Windows</div>
                                </div>
                            </a>
                        </div>

                        <p className="mt-8 text-xs text-gray-500">
                            Version 2.0.0 • macOS 11+ / Windows 10+ • 64-bit only
                        </p>
                    </div>

                    {/* Decorative Gradients */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
