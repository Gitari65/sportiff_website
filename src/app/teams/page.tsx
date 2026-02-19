import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChild, faPersonRunning, faStar, faPeopleGroup, faVenus, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Team {
  name: string;
  desc: string;
  icon: any;
  gradient: string;
  tagline: string;
}

export default function Teams() {
  const teams: Team[] = [
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
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary to-green-dark text-white py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-tertiary/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-400/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="space-y-8">
            <div className="inline-block p-4 bg-green-light/20 rounded-full mb-6">
              <FontAwesomeIcon icon={faPeopleGroup} className="text-2xl text-yellow-light" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extralight tracking-wide mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-green-light to-yellow-light bg-clip-text text-transparent">
                Our Football
              </span>
              <br />
              <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent font-light">
                Family
              </span>
            </h1>
            
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-tertiary to-transparent mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
              From Under-15s to Division 2—structured pathways for every young athlete in Kirinyaga County
            </p>
          </div>
        </div>
      </section>

      {/* Teams Grid Section */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-green-light/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-yellow-light/30 rounded-2xl mb-6">
              <div className="w-2 h-2 bg-tertiary rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 mb-6 tracking-wide">
              Our <span className="text-secondary font-light">Teams</span>
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-tertiary to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Each team represents a different stage in our players' journey toward excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-6">
            {teams.map((team, index) => (
              <div
                key={team.name}
                className="group bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className="text-center space-y-6">
                  <div className={`inline-block p-6 bg-gradient-to-br ${team.gradient} rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <FontAwesomeIcon icon={team.icon} className="text-3xl text-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${team.gradient} text-white text-xs font-medium rounded-full`}>
                      {team.tagline}
                    </div>
                    <h3 className="text-xl font-medium text-slate-900 tracking-wide">{team.name}</h3>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed font-light">{team.desc}</p>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${team.gradient} text-white rounded-2xl text-sm font-medium hover:scale-105 transition-transform duration-200`}>
                      Learn More
                      <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence Pathways Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-emerald-500/20 rounded-2xl mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-wide">
              <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                Pathways to
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-300 to-amber-200 bg-clip-text text-transparent font-light">
                Excellence
              </span>
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-emerald-400 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Development",
                description: "Our youth teams focus on building fundamentals, discipline, and confidence in a supportive environment that nurtures young talent.",
                gradient: "from-emerald-600 to-emerald-700",
                icon: faChild
              },
              {
                title: "Progression",
                description: "Each team level prepares athletes for the next stage, ensuring continuous skill development and personal growth through structured pathways.",
                gradient: "from-blue-600 to-blue-700",
                icon: faPersonRunning
              },
              {
                title: "Competition",
                description: "Our senior team competes at Division 2 level, showcasing the talent, dedication and excellence that defines our club's legacy.",
                gradient: "from-amber-600 to-amber-700",
                icon: faStar
              }
            ].map((pathway, index) => (
              <div
                key={pathway.title}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105"
              >
                <div className={`inline-block p-4 bg-gradient-to-br ${pathway.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon icon={pathway.icon} className="text-2xl text-white" />
                </div>
                
                <h3 className="text-2xl font-medium text-white mb-4 tracking-wide">{pathway.title}</h3>
                <p className="text-slate-200 leading-relaxed font-light">{pathway.description}</p>
                
                <div className="mt-6 w-16 h-[1px] bg-gradient-to-r from-white/60 to-transparent group-hover:w-24 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
