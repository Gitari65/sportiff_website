import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faUsers, faTrophy, faHeart, faHandHoldingHeart, faChild, faStar } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary to-green-dark text-white py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-tertiary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="space-y-8">
            <div className="inline-block p-4 bg-tertiary/20 rounded-full mb-6">
              <FontAwesomeIcon icon={faStar} className="text-2xl text-yellow-light" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extralight tracking-wide mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-green-light to-yellow-light bg-clip-text text-transparent">
                About Kerugoya Sportiff
              </span>
            </h1>
            
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
              From humble Catholic roots to a Division 2 community powerhouse—our journey of faith, discipline, and football excellence
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-green-light/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-block p-3 bg-green-light/30 rounded-2xl mb-6">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 mb-6 tracking-wide">
                  Who <span className="text-secondary font-light">We Are</span>
                </h2>
                <div className="w-24 h-[1px] bg-gradient-to-r from-tertiary to-transparent mb-8"></div>
              </div>
              
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p className="text-lg font-light">
                  Kerugoya Sportiff is a community football club based in Kerugoya Town, Kirinyaga County, with our home ground at the historic Kerugoya Stadium.
                </p>
                <p className="text-lg font-light">
                  Founded around 2010, our club began as a Catholic young children's football initiative, created to nurture discipline, faith, and talent among young boys. Through the years, we have naturally evolved into a fully community-based football organization.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-light/20 to-green-light/30 backdrop-blur-sm p-8 rounded-3xl border border-green-light/30 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-green-dark mb-3 tracking-wide">Our Mission</h3>
                    <p className="text-slate-700 text-lg font-light leading-relaxed">
                      To develop football talent, keep young people focused and away from drugs, and empower players to pursue their football and life goals through discipline and teamwork.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stadium Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-200 via-slate-300 to-green-light/30 h-96 lg:h-[500px] rounded-3xl flex items-center justify-center shadow-2xl border border-slate-200/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-secondary/20"></div>
                <div className="relative text-center space-y-4">
                  <div className="text-6xl mb-4">🏟️</div>
                  <p className="text-slate-700 text-xl font-medium">Kerugoya Stadium</p>
                  <p className="text-slate-600 font-light">Our Home Ground</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-tertiary/30 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Core Values */}
          <div className="relative">
            <div className="text-center mb-16">
              <div className="inline-block p-3 bg-yellow-light/30 rounded-2xl mb-6">
                <div className="w-2 h-2 bg-tertiary rounded-full"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 mb-6 tracking-wide">
                Our Core <span className="text-secondary font-light">Values</span>
              </h2>
              <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-tertiary to-transparent mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  emoji: "🛡️",
                  title: "Discipline",
                  desc: "The foundation of every champion we build through structured training and moral guidance.",
                  gradient: "from-slate-50 to-slate-100/50",
                  border: "border-slate-200/50"
                },
                {
                  emoji: "🙏",
                  title: "Faith",
                  desc: "Strong moral values guided by our Catholic roots and spiritual foundation.",
                  gradient: "from-emerald-50 to-emerald-100/50",
                  border: "border-emerald-200/50"
                },
                {
                  emoji: "🤝",
                  title: "Unity",
                  desc: "Coming together as one Kerugoya community to support our shared vision.",
                  gradient: "from-amber-50 to-amber-100/50",
                  border: "border-amber-200/50"
                }
              ].map((value, index) => (
                <div key={index} className={`group bg-gradient-to-br ${value.gradient} backdrop-blur-sm p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border ${value.border} hover:scale-105 hover:-rotate-1`}>
                  <div className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 text-3xl">
                      {value.emoji}
                    </div>
                    <h4 className="text-2xl font-light text-slate-900 tracking-wide">{value.title}</h4>
                    <p className="text-slate-600 leading-relaxed font-light">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
