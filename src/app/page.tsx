import Hero from "@/components/Hero";
import Screenshots from "@/components/Screenshots";
import Features from "@/components/Features";
import Support from "@/components/Support";
import Download from "@/components/Download";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Ninlab Logo" className="w-8 h-8" />
            <div className="text-xl font-bold tracking-tighter">Ninlab Raw Editor</div>
          </div>
        </div>
      </nav>

      <Hero />
      <Screenshots />
      <Features />
      <Support />
      <Download />

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 bg-black">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} Ninlab. All rights reserved.</p>
          <p className="text-gray-600">Created by Wachira Studio • <a href="mailto:wachirastudeo@gmail.com" className="hover:text-gray-400 transition-colors">wachirastudeo@gmail.com</a></p>
        </div>
      </footer>
    </main>
  );
}
