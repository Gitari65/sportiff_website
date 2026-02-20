'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faUtensils, faTshirt, faTrophy, faMobileScreen, faHeart, faGift, faHandHoldingHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function Donate() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToPaybill = () => {
    const paybillSection = document.getElementById('paybill-section');
    if (paybillSection) {
      paybillSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-100">
        <LoadingSpinner />
      </div>
    );
  }

  const impactItems = [
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
      gradient: 'from-secondary to-accent',
      feature: 'Player Health'
    },
    {
      icon: faTshirt,
      title: 'Equipment',
      description: 'buys training gear for an entire youth squad.',
      gradient: 'from-accent to-tertiary',
      feature: 'Youth Development'
    },
    {
      icon: faTrophy,
      title: 'League Fees',
      description: 'registers one team for a full season.',
      gradient: 'from-primary to-dark-gray',
      feature: 'Competition'
    },
  ];

  const whySupportItems = [
    {
      icon: faHeart,
      title: 'Transforming Lives',
      description: 'We keep young people focused on their goals and away from harmful lifestyle choices through structured coaching and mentorship.',
      gradient: 'from-secondary to-primary'
    },
    {
      icon: faTrophy,
      title: 'Building Champions',
      description: 'Your support helps develop football talent that represents our county at the highest levels of competition.',
      gradient: 'from-primary to-secondary'
    },
    {
      icon: faHandHoldingHeart,
      title: 'Community Impact',
      description: 'Join hundreds of supporters who believe in the power of football to unite and uplift our community.',
      gradient: 'from-secondary to-accent'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary to-dark-gray text-white py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tertiary/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="space-y-8">
            <div className="inline-block p-4 bg-secondary/20 rounded-full mb-6">
              <FontAwesomeIcon icon={faGift} className="text-2xl text-accent" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extralight tracking-wide mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-100 to-accent bg-clip-text text-transparent">
                Power Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent font-light">
                Mission
              </span>
            </h1>
            
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
              Every contribution fuels dreams, builds discipline, and keeps youth away from drugs
            </p>
          </div>
        </div>
      </section>

      {/* M-PESA Payment Section */}
      <section id="paybill-section" className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-tertiary/30"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white p-12 md:p-16 rounded-4xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl"></div>
            </div>
            
            <div className="relative text-center space-y-8">
              <div className="inline-block p-6 bg-white/20 rounded-3xl backdrop-blur-sm">
                <FontAwesomeIcon icon={faMobileScreen} className="text-4xl text-white" />
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-2 tracking-wide">🇰🇪 M-PESA PAYBILL</h2>
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
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-emerald-50/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-amber-100 rounded-2xl mb-6">
              <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 mb-6 tracking-wide">
              Your <span className="text-emerald-700 font-light">Impact</span>
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-amber-400 to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              See exactly how your generous contributions transform young lives and build champions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactItems.map((item, index) => (
              <div
                key={item.title}
                className="group bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className="text-center space-y-6">
                  <div className={`inline-block p-6 bg-gradient-to-br ${item.gradient} rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <FontAwesomeIcon icon={item.icon} className="text-3xl text-white" />
                  </div>
                  
                  <div className="space-y-3">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${item.gradient} text-white text-xs font-medium rounded-full`}>
                      {item.feature}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 tracking-wide">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">{item.description}</p>
                  </div>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={scrollToPaybill}
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${item.gradient} text-white rounded-2xl text-sm font-medium hover:scale-105 transition-transform duration-200`}
                    >
                      <FontAwesomeIcon icon={faGift} className="text-xs" />
                      Donate Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Support Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-block p-3 bg-rose-500/20 rounded-2xl mb-6">
              <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-wide">
              <span className="bg-gradient-to-r from-white to-rose-100 bg-clip-text text-transparent">
                Why Support
              </span>
              <br />
              <span className="bg-gradient-to-r from-rose-300 to-emerald-200 bg-clip-text text-transparent font-light">
                Our Cause?
              </span>
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-rose-400 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whySupportItems.map((item, index) => (
              <div
                key={item.title}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105"
              >
                <div className={`inline-block p-4 bg-gradient-to-br ${item.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <FontAwesomeIcon icon={item.icon} className="text-2xl text-white" />
                </div>
                
                <h3 className="text-2xl font-medium text-white mb-4 tracking-wide">{item.title}</h3>
                <p className="text-slate-200 leading-relaxed font-light">{item.description}</p>
                
                <div className="mt-6 w-16 h-[1px] bg-gradient-to-r from-white/60 to-transparent group-hover:w-24 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-2xl font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
              <FontAwesomeIcon icon={faStar} className="animate-pulse" />
              <span className="tracking-wide">Join Our Community of Champions</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
