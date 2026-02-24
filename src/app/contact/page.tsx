'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function Contact() {
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
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-tertiary/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="space-y-8">
            <div className="inline-block p-4 bg-tertiary/20 rounded-full mb-6 animate-bounce" style={{animationDuration: '2s'}}>
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-yellow-light animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extralight tracking-wide mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-green-light to-yellow-light bg-clip-text text-transparent">
                Let&apos;s Connect
              </span>
            </h1>
            
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-tertiary to-transparent mx-auto mb-8 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            
            <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
              Whether you&apos;re a fan, partner, or supporter—we&apos;d love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-green-light/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <div className="inline-block p-3 bg-green-light/30 rounded-2xl mb-6 animate-pulse">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-ping"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 mb-6 tracking-wide">
                  Reach <span className="text-secondary font-light">Out</span>
                </h2>
                <div className="w-24 h-[1px] bg-gradient-to-r from-emerald-400 to-transparent mb-8"></div>
              </div>

              <div className="space-y-8">
                {[
                  {
                    icon: faLocationDot,
                    title: 'Location',
                    content: 'Kerugoya Stadium\nKerugoya Town\nKirinyaga County, Kenya',
                    gradient: 'from-emerald-500 to-emerald-600',
                    href: 'https://maps.google.com/?q=Kerugoya+Stadium,+Kerugoya+Town,+Kirinyaga+County,+Kenya',
                    action: 'Get Directions'
                  },
                  {
                    icon: faEnvelope,
                    title: 'Email',
                    content: 'kerugoyasportiff@gmail.com',
                    gradient: 'from-blue-500 to-blue-600',
                    href: 'mailto:kerugoyasportiff@gmail.com',
                    action: 'Send Email'
                  },
                  {
                    icon: faPhone,
                    title: 'Phone',
                    content: '+254723244447',
                    gradient: 'from-amber-500 to-amber-600',
                    href: 'tel:+254723244447',
                    action: 'Call Now'
                  }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex gap-6 cursor-pointer hover:bg-slate-50 p-4 rounded-2xl transition-all duration-300"
                    title={item.action}
                  >
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${item.gradient} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <FontAwesomeIcon icon={item.icon} className="text-xl" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-medium text-slate-900 tracking-wide group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                      <p className="text-slate-600 font-light leading-relaxed whitespace-pre-line group-hover:text-slate-700 transition-colors duration-300">{item.content}</p>
                      <span className="text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.action} →
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Media */}
              <div className="pt-8 border-t border-slate-200/50">
                <h3 className="text-xl font-medium text-slate-900 mb-6 tracking-wide">Follow Our Journey</h3>
                <div className="flex gap-4">
                  {[
                    { icon: faFacebook, href: 'https://www.facebook.com/groups/196396658827419', color: 'from-blue-600 to-blue-700' },
                    { icon: faWhatsapp, href: 'https://whatsapp.com/channel/0029VanLkFRL7UVXWcgM1K1F', color: 'from-green-500 to-green-600' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`group w-14 h-14 bg-gradient-to-br ${social.color} text-white rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110`}
                    >
                      <FontAwesomeIcon icon={social.icon} className="text-lg group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white to-slate-50/80 backdrop-blur-sm p-10 lg:p-12 rounded-3xl shadow-xl border border-slate-200/50">
              <div className="text-center mb-10">
                <div className="inline-block p-3 bg-amber-100 rounded-2xl mb-6">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4 tracking-wide">
                  Send a Message
                </h2>
                <div className="w-20 h-[1px] bg-gradient-to-r from-amber-400 to-transparent mx-auto"></div>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 tracking-wide">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all duration-300"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 tracking-wide">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 tracking-wide">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all duration-300"
                    placeholder="+254 232 244 447"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 tracking-wide">Your Message</label>
                  <textarea 
                    className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all duration-300 resize-none"
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button type="submit" className="group w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium py-3.5 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3 text-base">
                    <FontAwesomeIcon icon={faPaperPlane} className="group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 text-xs" />
                    <span className="tracking-wide">Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


