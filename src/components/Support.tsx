import { Coffee } from 'lucide-react';

export default function Support() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                            <Coffee className="text-white" size={32} />
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Development</h2>
                    <p className="text-gray-400 mb-3 max-w-2xl mx-auto">
                        Ninlab is free and open-source. Your support helps keep it that way.
                    </p>
                    <p className="text-gray-500 text-sm mb-10 max-w-2xl mx-auto font-kanit">
                        ช่วยสนับสนุนการพัฒนาต่อยอดโปรเจคนี้
                    </p>

                    {/* Support Option */}
                    <div className="flex justify-center mb-8">
                        <a
                            href="#"
                            className="group p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 hover:border-yellow-500/40 transition-all hover:scale-105 max-w-sm w-full"
                        >
                            <Coffee className="mx-auto mb-4 text-yellow-400" size={48} />
                            <h3 className="text-xl font-semibold mb-2">Buy Me a Coffee</h3>
                            <p className="text-sm text-gray-400 mb-4">Support with a one-time donation</p>
                            <p className="text-xs text-gray-500 font-kanit">สนับสนุนด้วยการซื้อกาแฟให้</p>
                        </a>
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
