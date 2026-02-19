import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPlay, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  likes: number;
  height: string;
  featured?: boolean;
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Victory Celebration", category: "Matches", likes: 245, height: "row-span-2", featured: true },
  { id: 2, title: "Team Training", category: "Training", likes: 156, height: "row-span-1" },
  { id: 3, title: "Young Talents", category: "Youth", likes: 189, height: "row-span-1" },
  { id: 4, title: "Stadium Pride", category: "Stadium", likes: 298, height: "row-span-2", featured: true },
  { id: 5, title: "Golden Goal", category: "Matches", likes: 567, height: "row-span-1" },
  { id: 6, title: "Team Spirit", category: "Team", likes: 234, height: "row-span-1" },
  { id: 7, title: "Skills Development", category: "Training", likes: 145, height: "row-span-1" },
  { id: 8, title: "Fan Support", category: "Fans", likes: 312, height: "row-span-2", featured: true },
  { id: 9, title: "Championship Run", category: "Matches", likes: 456, height: "row-span-1" },
  { id: 10, title: "Youth Academy", category: "Youth", likes: 178, height: "row-span-1" },
  { id: 11, title: "Tactical Meeting", category: "Training", likes: 123, height: "row-span-1" },
  { id: 12, title: "Community Day", category: "Community", likes: 289, height: "row-span-2", featured: true },
  { id: 13, title: "Penalty Drama", category: "Matches", likes: 398, height: "row-span-1" },
  { id: 14, title: "Fitness Training", category: "Training", likes: 167, height: "row-span-1" },
  { id: 15, title: "Stadium Nights", category: "Stadium", likes: 445, height: "row-span-1" },
  { id: 16, title: "Victory Dance", category: "Fans", likes: 356, height: "row-span-1" }
];

const socialLinks = [
  { name: 'Facebook', icon: faFacebook, href: '#', gradient: 'from-blue-600 to-blue-700' },
  { name: 'Instagram', icon: faInstagram, href: '#', gradient: 'from-pink-500 to-rose-600' },
  { name: 'Twitter', icon: faXTwitter, href: '#', gradient: 'from-slate-800 to-slate-900' },
  { name: 'YouTube', icon: faYoutube, href: '#', gradient: 'from-red-600 to-red-700' },
] as const;

const categories = ['All', 'Matches', 'Training', 'Youth', 'Stadium', 'Fans', 'Team', 'Community'];

export default function Gallery() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="space-y-8">
            <div className="inline-block p-4 bg-amber-500/20 rounded-full mb-6">
              <FontAwesomeIcon icon={faCamera} className="text-2xl text-amber-400" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extralight tracking-wide mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-100 to-amber-100 bg-clip-text text-transparent">
                Our Journey in
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-emerald-200 bg-clip-text text-transparent font-light">
                Pictures
              </span>
            </h1>
            
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
              Every moment captures the passion, spirit, and excellence of Kerugoya Sportiff
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white/70 backdrop-blur-sm border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="group px-6 py-3 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium tracking-wide"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-emerald-50/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-emerald-100 rounded-2xl mb-6">
              <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 mb-6 tracking-wide">
              Gallery <span className="text-emerald-700 font-light">Collection</span>
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-emerald-400 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-[200px] gap-6">
            {galleryItems.map((item) => (
              <article
                key={item.id}
                className={`group relative ${item.height} overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-[1.02]`}
              >
                <Image
                  src="/football.jpg"
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Top Badge */}
                  <div className="flex justify-between items-start">
                    {item.featured && (
                      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    )}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                        <FontAwesomeIcon icon={faEye} className="text-sm" />
                      </button>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="space-y-3">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 text-emerald-300 text-xs font-medium mb-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        {item.category}
                      </div>
                      <h3 className="text-white font-medium text-sm md:text-base leading-tight">{item.title}</h3>
                    </div>
                    
                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <div className="flex items-center gap-2 text-white/80 text-xs">
                        <FontAwesomeIcon icon={faHeart} className="text-rose-400" />
                        <span>{item.likes}</span>
                      </div>
                      <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-3 py-1.5 rounded-xl text-xs font-medium hover:scale-105 transition-transform duration-200">
                        <FontAwesomeIcon icon={faPlay} className="mr-1" />
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="space-y-12">
            <div>
              <div className="inline-block p-4 bg-amber-500/20 rounded-full mb-6">
                <FontAwesomeIcon icon={faCamera} className="text-2xl text-amber-400" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-wide">
                <span className="bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
                  Want to See
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-300 to-emerald-200 bg-clip-text text-transparent font-light">
                  More?
                </span>
              </h2>
              
              <div className="w-24 h-[1px] bg-gradient-to-r from-amber-400 to-transparent mx-auto mb-8"></div>
              
              <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light">
                Follow us on social media for daily updates, match highlights, and behind-the-scenes content
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-gradient-to-br hover:${link.gradient} p-6 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                >
                  <div className="text-center space-y-3">
                    <div className="w-12 h-12 mx-auto bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <FontAwesomeIcon icon={link.icon} className="text-xl text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{link.name}</p>
                      <p className="text-white/60 text-xs group-hover:text-white/80 transition-colors duration-300">Follow Us</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
