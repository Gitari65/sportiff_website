import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-primary to-green-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-18 h-18 relative">
              <Image
                src="/sportiff_logo.png"
                alt="Kerugoya Sportiff FC Logo"
                width={72}
                height={72}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-2xl font-light text-white tracking-wide">Kerugoya</div>
              <div className="text-sm font-medium text-green-light tracking-widest -mt-1">SPORTIFF FC</div>
            </div>
          </div>
          
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-tertiary to-transparent mx-auto mb-8"></div>
          
          <div className="space-y-4">
            <p className="text-lg font-light text-slate-300">
              © 2026 Kerugoya Sportiff Community Football Club
            </p>
            <p className="text-green-light font-light tracking-wide">
              Building Champions • Instilling Discipline • Serving Community
            </p>
            <p className="text-sm text-slate-400 font-light mt-6">
              Kerugoya Stadium, Kerugoya Town, Kirinyaga County, Kenya
            </p>
          </div>
          
          <div className="pt-8 border-t border-white/10">
            <p className="text-xs text-slate-500 font-light">
              Crafted with passion for our community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
