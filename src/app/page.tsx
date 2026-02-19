'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faShieldHalved, faHandshake, faTrophy, faUsers, faCalendarDays, faFutbol, faBus, faUtensils, faTshirt, faMobileScreen, faHeart, faGift, faChild, faPersonRunning, faStar, faPeopleGroup, faVenus } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-100">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary to-green-dark text-white py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-tertiary/20 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-5 text-9xl font-light flex items-center justify-end pr-32">
          <FontAwesomeIcon icon={faFutbol} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-extralight tracking-wide mb-6 leading-tight">
              <span className="block text-4xl md:text-5xl font-light text-green-light mb-4 tracking-widest">
                KERUGOYA
              </span>
              <span className="bg-gradient-to-r from-white via-yellow-light to-green-light bg-clip-text text-transparent font-thin">
                SPORTIFF FC
              </span>
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-2xl md:text-3xl font-extralight text-yellow-light italic tracking-wide">
                "Faith. Discipline. Community."
              </p>
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-tertiary to-transparent mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light">
                Nurturing football talent and building drug-free futures in Kirinyaga County since 2010
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link href="/donate" className="group inline-flex items-center gap-3 bg-gradient-to-r from-tertiary to-yellow-dark hover:from-yellow-dark hover:to-secondary text-white font-medium py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-yellow-light/20">
                <FontAwesomeIcon icon={faHandshake} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="tracking-wide">Support the Team</span>
              </Link>
              <Link href="/about" className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-white/20 hover:border-white/30">
                <span className="tracking-wide">Our Story</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-green-light/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-green-light/30 rounded-2xl mb-6">
              <FontAwesomeIcon icon={faFutbol} className="text-2xl text-secondary" />
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-slate-900 mb-6 tracking-wide">
              Nurturing Youth <span className="text-secondary font-light">Excellence</span>
            </h2>
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-tertiary to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Building champions through dedication, discipline, and unwavering community support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: faBullseye,
                title: "Talent Development",
                desc: "From Under-15s to our Senior Division 2 team, we provide a structured pathway for football careers.",
                gradient: "from-primary/10 to-blue-light/20",
                iconColor: "text-primary",
                border: "border-blue-light/50"
              },
              {
                icon: faShieldHalved,
                title: "Drug-Free Environment",
                desc: "We keep our youth focused and engaged, providing a healthy alternative to destructive lifestyle choices.",
                gradient: "from-secondary/10 to-green-light/20",
                iconColor: "text-secondary",
                border: "border-green-light/50"
              },
              {
                icon: faHandshake,
                title: "Community Unity",
                desc: "Building strong moral values and discipline through teamwork and faith-based principles.",
                gradient: "from-tertiary/10 to-yellow-light/20",
                iconColor: "text-tertiary",
                border: "border-yellow-light/50"
              }
            ].map((item, index) => (
              <div key={index} className={`group bg-gradient-to-br ${item.gradient} p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 text-center border ${item.border} hover:scale-105 hover:rotate-1`}>
                <div className={`inline-flex items-center justify-center w-20 h-20 ${item.iconColor} mb-8 bg-white rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
                  <FontAwesomeIcon icon={item.icon} className="text-3xl" />
                </div>
                <h3 className="text-2xl font-light text-slate-900 mb-4 tracking-wide">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-primary to-green-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-yellow-light/20 rounded-2xl mb-6">
              <div className="w-2 h-2 bg-tertiary rounded-full"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-wide">
              Excellence in <span className="text-yellow-light font-light">Numbers</span>
            </h2>
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-tertiary to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 font-light">A decade of community impact and sporting achievement</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { number: "5", label: "Active Teams", icon: faUsers, color: "green-light" },
              { number: "Division 2", label: "League Level", icon: faTrophy, color: "yellow-light" },
              { number: "14+", label: "Years Strong", icon: faCalendarDays, color: "blue-light" }
            ].map((stat, index) => (
              <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
                <div className={`inline-flex items-center justify-center w-20 h-20 text-${stat.color}-400 mb-6 bg-white/10 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <FontAwesomeIcon icon={stat.icon} className="text-3xl" />
                </div>
                <div className={`text-5xl md:text-6xl font-extralight text-${stat.color}-400 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <p className="text-xl text-slate-300 font-light tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
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

              <div className="pt-6">
                <Link href="/about" className="group inline-flex items-center gap-3 bg-gradient-to-r from-secondary to-tertiary hover:from-tertiary hover:to-secondary text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  <span className="tracking-wide">Learn More</span>
                </Link>
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
        </div>
      </section>

      {/* Our Teams Section */}
      <section id="teams" className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-primary to-green-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-yellow-light/20 rounded-2xl mb-6">
              <FontAwesomeIcon icon={faPeopleGroup} className="text-2xl text-yellow-light" />
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-wide">
              Our Football <span className="text-green-light font-light">Family</span>
            </h2>
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-tertiary to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 font-light max-w-3xl mx-auto">From Under-15s to Division 2—structured pathways for every young athlete in Kirinyaga County</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Under 15",
                desc: "Focuses on fundamentals, discipline, and early talent development. Building the foundation for future football success.",
                tagline: "The Foundation",
                icon: faChild,
                gradient: 'from-primary to-blue-light'
              },
              {
                name: "Under 17",
                desc: "Builds technical skills, teamwork, and competitive experience. Developing well-rounded young athletes.",
                tagline: "Technical Excellence",
                icon: faPersonRunning,
                gradient: 'from-secondary to-green-light'
              },
              {
                name: "Under 20",
                desc: "Prepares players for senior football and professional pathways. The bridge to elite performance.",
                tagline: "Elite Preparation",
                icon: faStar,
                gradient: 'from-tertiary to-yellow-light'
              },
              {
                name: "Senior Men",
                desc: "Competes in Division 2, representing Kerugoya at a higher competitive level. Our flagship team.",
                tagline: "Division 2 Pride",
                icon: faPeopleGroup,
                gradient: 'from-green-dark to-secondary'
              },
              {
                name: "Ladies Team",
                desc: "Empowering young women through football and opportunity. Breaking barriers on and off the pitch.",
                tagline: "Women Empowerment",
                icon: faVenus,
                gradient: 'from-yellow-dark to-tertiary'
              }
            ].map((team, index) => (
              <div key={index} className={`group bg-gradient-to-br ${team.gradient} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center hover:scale-105 hover:-rotate-1`}>
                <div className="inline-flex items-center justify-center w-16 h-16 text-white mb-6 bg-white/20 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <FontAwesomeIcon icon={team.icon} className="text-2xl" />
                </div>
                <p className="text-sm text-white/80 font-medium mb-2 tracking-wide uppercase">{team.tagline}</p>
                <h3 className="text-2xl font-light text-white mb-4 tracking-wide">{team.name}</h3>
                <p className="text-white/90 leading-relaxed font-light text-sm">{team.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/teams" className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-white/20 hover:border-white/30">
              <span className="tracking-wide">View All Teams</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Support Us Section */}
      <section id="support" className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-tertiary/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-tertiary/20 rounded-2xl mb-6">
              <FontAwesomeIcon icon={faHeart} className="text-2xl text-tertiary" />
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-slate-900 mb-6 tracking-wide">
              Support Our <span className="text-tertiary font-light">Mission</span>
            </h2>
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-tertiary to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Every contribution directly impacts young lives, building champions and keeping our community strong
            </p>
          </div>

          {/* Impact Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: faBus,
                title: 'Transport',
                description: 'covers one away match trip for our senior team.',
                gradient: 'from-primary to-secondary',
                feature: 'Team Travel'
              },
              {
                icon: faUtensils,
                title: 'Nutrition',
                description: 'provides pre-match meals for 15 players.',
                gradient: 'from-secondary to-green-light',
                feature: 'Player Health'
              },
              {
                icon: faTshirt,
                title: 'Equipment',
                description: 'buys training gear for an entire youth squad.',
                gradient: 'from-tertiary to-yellow-light',
                feature: 'Youth Development'
              },
              {
                icon: faTrophy,
                title: 'League Fees',
                description: 'registers one team for a full season.',
                gradient: 'from-green-dark to-secondary',
                feature: 'Competition'
              }
            ].map((impact, index) => (
              <div key={index} className={`group bg-gradient-to-br ${impact.gradient} text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center hover:scale-105`}>
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-white/20 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <FontAwesomeIcon icon={impact.icon} className="text-2xl" />
                </div>
                <p className="text-sm text-white/80 font-medium mb-2 tracking-wide uppercase">{impact.feature}</p>
                <h3 className="text-xl font-medium mb-4">{impact.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed font-light">{impact.description}</p>
              </div>
            ))}
          </div>

          {/* M-PESA Section */}
          <div className="bg-gradient-to-br from-secondary via-green-dark to-primary text-white p-12 md:p-16 rounded-4xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-tertiary/10 rounded-full blur-xl"></div>
            </div>
            
            <div className="relative text-center space-y-8">
              <div className="inline-block p-6 bg-white/20 rounded-3xl backdrop-blur-sm">
                <FontAwesomeIcon icon={faMobileScreen} className="text-4xl text-white" />
              </div>
              
              <div>
                <h3 className="text-3xl md:text-4xl font-light mb-2 tracking-wide">🇰🇪 M-PESA PAYBILL</h3>
                <div className="w-20 h-[1px] bg-gradient-to-r from-white/60 to-transparent mx-auto"></div>
              </div>
              
              {/* Official M-PESA Paybill Sticker Image */}
              <div className="flex justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 border border-white/30 max-w-md">
                  <Image 
                    src="/mpesa.png" 
                    alt="Official M-PESA Paybill - Kerugoya Sportiff FC" 
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-2xl shadow-lg"
                    priority
                  />
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/40 rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <FontAwesomeIcon icon={faHeart} className="text-red-300 text-2xl animate-pulse" />
                    <FontAwesomeIcon icon={faHeart} className="text-yellow-light text-xl animate-pulse" style={{animationDelay: '0.5s'}} />
                    <FontAwesomeIcon icon={faHeart} className="text-green-light text-lg animate-pulse" style={{animationDelay: '1s'}} />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2 tracking-wide">
                    Your Support Makes a Difference
                  </h4>
                  <p className="text-lg font-medium text-white/95 leading-relaxed">
                    100% of funds go directly to player development
                  </p>
                  <p className="text-sm text-white/80 font-light">
                    Every shilling invested in our youth builds future champions
                  </p>
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <div className="w-2 h-2 bg-yellow-light rounded-full"></div>
                    <div className="w-16 h-[1px] bg-gradient-to-r from-yellow-light to-green-light"></div>
                    <div className="w-2 h-2 bg-green-light rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/donate" className="group inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-white/20 hover:border-white/30">
                  <FontAwesomeIcon icon={faGift} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="tracking-wide">Support the Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
