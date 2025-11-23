"use client";

export default function Support() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                            <span className="text-3xl">💙</span>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Development</h2>
                    <p className="text-gray-400 mb-3 max-w-2xl mx-auto">
                        Ninlab is free and open-source. Your support helps keep it that way.
                    </p>
                    <p className="text-gray-500 text-sm mb-10 max-w-2xl mx-auto font-kanit">
                        ช่วยสนับสนุนการพัฒนาต่อยอดโปรเจคนี้
                    </p>

                    {/* PromptPay QR */}
                    <div className="flex justify-center mb-8">
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 max-w-sm">
                            <a href="/promptpay-qr.jpg" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                                <img
                                    src="/promptpay-qr.jpg"
                                    alt="PromptPay QR Code"
                                    className="w-full rounded-lg mb-4 cursor-pointer"
                                />
                            </a>
                            <p className="text-center text-sm text-gray-400 mb-2">คลิกเพื่อขยาย QR Code</p>
                            <p className="text-center text-xs text-gray-500 font-kanit">นาย วชิระ อวยพร</p>
                        </div>
                    </div>

                    <p className="text-xs text-gray-600">
                        Every contribution, big or small, makes a difference. Thank you! 🙏
                    </p>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-pink-500/5 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
}
