'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPlay, faEye, faHeart, faPhone, faEnvelope, faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import LoadingSpinner from '../../components/LoadingSpinner';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  likes: number;
  height: string;
  featured?: boolean;
  image: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, title: "Prayer Preparation", category: "Matches", likes: 245, height: "row-span-2", featured: true, image: "/Gallery/Gallery1.jpg" },
  { id: 2, title: "Team Training", category: "Training", likes: 156, height: "row-span-1", image: "/Gallery/Gallery2.jpg" },
  { id: 3, title: "Young Talents", category: "Youth", likes: 189, height: "row-span-1", image: "/Gallery/Gallery3.jpg" },
  { id: 4, title: "Stadium Pride", category: "Stadium", likes: 298, height: "row-span-2", featured: true, image: "/Gallery/Gallery4.jpg" },
  { id: 5, title: "PreGame Photos", category: "Matches", likes: 567, height: "row-span-1", image: "/Gallery/Gallery5.jpg" },
  { id: 6, title: "Team Spirit", category: "Team", likes: 234, height: "row-span-1", image: "/Gallery/Gallery6.jpg" },
  { id: 7, title: "Skills Development", category: "Training", likes: 145, height: "row-span-1", image: "/Gallery/Gallery7.jpg" },
  { id: 8, title: "Team Coach", category: "Team", likes: 312, height: "row-span-2", featured: true, image: "/Gallery/Gallery8.jpg" },
  { id: 9, title: "Championship Run", category: "Matches", likes: 456, height: "row-span-1", image: "/Gallery/Gallery9.jpg" },
  { id: 10, title: "Captain's Leadership", category: "Youth", likes: 178, height: "row-span-1", image: "/Gallery/Gallery10.jpg" },
  { id: 11, title: "Pregame Warmup", category: "Training", likes: 123, height: "row-span-1", image: "/Gallery/Gallery11.jpg" },
  { id: 12, title: "Match Snapshot", category: "Community", likes: 289, height: "row-span-2", featured: true, image: "/Gallery/Gallery12.jpg" },
  { id: 13, title: "Match Snapshot", category: "Matches", likes: 398, height: "row-span-1", image: "/Gallery/Gallery13.jpg" },
  { id: 14, title: "Gallery Highlight", category: "Training", likes: 167, height: "row-span-1", image: "/Gallery/Gallery14.jpg" },
  { id: 15, title: "Final Whistle", category: "Stadium", likes: 445, height: "row-span-1", image: "/Gallery/Gallery15.jpg" },
  { id: 16, title: "Team Meeting", category: "Fans", likes: 356, height: "row-span-1", image: "/Gallery/Gallery16.jpg" },
  { id: 17, title: "Team Coach", category: "Team", likes: 278, height: "row-span-1", image: "/Gallery/Gallery17.jpg" },
  { id: 18, title: "Team Photo", category: "Matches", likes: 423, height: "row-span-2", featured: true, image: "/Gallery/Gallery18.jpg" },
  { id: 19, title: "Team Coach", category: "Training", likes: 192, height: "row-span-1", image: "/Gallery/Gallery19.jpeg" },
  { id: 20, title: "Rising Stars", category: "Youth", likes: 334, height: "row-span-1", image: "/Gallery/Gallery20.jpeg" },
  { id: 21, title: "Game Strategy", category: "Training", likes: 287, height: "row-span-1", image: "/Gallery/Gallery21.jpeg" },
  { id: 22, title: "Celebration", category: "Fans", likes: 501, height: "row-span-2", featured: true, image: "/Gallery/Gallery22.jpeg" },
  { id: 23, title: "Perfect Pass", category: "Matches", likes: 389, height: "row-span-1", image: "/Gallery/Gallery23.jpeg" },
  { id: 24, title: "Game On", category: "Team", likes: 456, height: "row-span-1", image: "/Gallery/Gallery24.jpeg" },
  { id: 25, title: "Tackle", category: "Stadium", likes: 312, height: "row-span-1", image: "/Gallery/Gallery25.jpeg" },
  { id: 26, title: "Rising Stars", category: "Youth", likes: 245, height: "row-span-2", featured: true, image: "/Gallery/Gallery26.jpeg" },
  { id: 27, title: "Team Manager", category: "Matches", likes: 578, height: "row-span-1", image: "/Gallery/Gallery27.jpeg" },
  { id: 28, title: "Community Support", category: "Community", likes: 367, height: "row-span-1", image: "/Gallery/Gallery28.jpeg" },
  { id: 29, title: "Game On", category: "Training", likes: 223, height: "row-span-1", image: "/Gallery/Gallery29.jpeg" },
  { id: 30, title: "Game Moment", category: "Team", likes: 445, height: "row-span-2", featured: true, image: "/Gallery/Gallery30.jpeg" },
  { id: 31, title: "Goal Celebration", category: "Matches", likes: 623, height: "row-span-1", image: "/Gallery/Gallery31.jpeg" },
  { id: 32, title: "Team Spirit", category: "Fans", likes: 398, height: "row-span-1", image: "/Gallery/Gallery32.jpeg" },
  { id: 33, title: "Future Stars", category: "Youth", likes: 289, height: "row-span-1", image: "/Gallery/Gallery33.jpeg" },
  { id: 34, title: "Keepers Glory", category: "Stadium", likes: 412, height: "row-span-2", featured: true, image: "/Gallery/Gallery34.jpeg" },
  { id: 35, title: "Future Stars", category: "Team", likes: 534, height: "row-span-1", image: "/Gallery/Gallery35.jpeg" },
  { id: 36, title: "Match Action", category: "Matches", likes: 467, height: "row-span-1", image: "/Gallery/Gallery36.jpeg" },
  { id: 37, title: "Community Pride", category: "Community", likes: 345, height: "row-span-1", image: "/Gallery/Gallery37.jpeg" },
  { id: 38, title: "Game On", category: "Matches", likes: 589, height: "row-span-2", featured: true, image: "/Gallery/Gallery38.jpeg" },

];

const socialLinks = [
  { name: 'Facebook', icon: faFacebook, href: 'https://www.facebook.com/groups/196396658827419', gradient: 'from-blue-600 to-blue-700' },
  { name: 'WhatsApp', icon: faWhatsapp, href: 'https://whatsapp.com/channel/0029VanLkFRL7UVXWcgM1K1F', gradient: 'from-green-500 to-green-600' },
  { name: 'Email', icon: faEnvelope, href: 'mailto:kerugoyasportiff@gmail.com', gradient: 'from-purple-500 to-purple-600' },
  { name: 'Contact', icon: faPhone, href: 'tel:+254723244447', gradient: 'from-slate-600 to-slate-700' },
] as const;

const categories = ['All', 'Matches', 'Training', 'Youth', 'Stadium', 'Fans', 'Team', 'Community'];

export default function Gallery() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
  const [likeCounts, setLikeCounts] = useState<{[key: number]: number}>(
    galleryItems.reduce((acc, item) => ({ ...acc, [item.id]: item.likes }), {})
  );
  const [heartAnimations, setHeartAnimations] = useState<Set<number>>(new Set());
  const [viewedImages, setViewedImages] = useState<Set<number>>(new Set());
  const [viewCounts, setViewCounts] = useState<{[key: number]: number}>(() => 
    galleryItems.reduce((acc, item) => ({ ...acc, [item.id]: Math.floor(Math.random() * 500) + 100 }), {})
  );
  const [eyeAnimations, setEyeAnimations] = useState<Set<number>>(new Set());

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const openImageViewer = useCallback((imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
    
    // Auto-increment view count when image is opened
    if (!viewedImages.has(imageId)) {
      setViewedImages(prev => new Set([...prev, imageId]));
      setViewCounts(prevCounts => ({
        ...prevCounts,
        [imageId]: (prevCounts[imageId] || 0) + 1
      }));
    }
  }, [viewedImages]);

  const closeImageViewer = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }, []);

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
    } else {
      newIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryItems[newIndex].id);
  }, [selectedImage]);

  const toggleLike = useCallback((imageId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    
    setLikedImages(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(imageId)) {
        newLiked.delete(imageId);
        setLikeCounts(prevCounts => ({
          ...prevCounts,
          [imageId]: Math.max(0, (prevCounts[imageId] || 0) - 1)
        }));
      } else {
        newLiked.add(imageId);
        setLikeCounts(prevCounts => ({
          ...prevCounts,
          [imageId]: (prevCounts[imageId] || 0) + 1
        }));
        
        // Trigger heart animation
        setHeartAnimations(prev => new Set([...prev, imageId]));
        setTimeout(() => {
          setHeartAnimations(prev => {
            const newAnimations = new Set(prev);
            newAnimations.delete(imageId);
            return newAnimations;
          });
        }, 800);
      }
      return newLiked;
    });
  }, []);

  const toggleView = useCallback((imageId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    
    setViewedImages(prev => {
      const newViewed = new Set(prev);
      if (newViewed.has(imageId)) {
        newViewed.delete(imageId);
        setViewCounts(prevCounts => ({
          ...prevCounts,
          [imageId]: Math.max(0, (prevCounts[imageId] || 0) - 1)
        }));
      } else {
        newViewed.add(imageId);
        setViewCounts(prevCounts => ({
          ...prevCounts,
          [imageId]: (prevCounts[imageId] || 0) + 1
        }));
        
        // Trigger eye animation
        setEyeAnimations(prev => new Set([...prev, imageId]));
        setTimeout(() => {
          setEyeAnimations(prev => {
            const newAnimations = new Set(prev);
            newAnimations.delete(imageId);
            return newAnimations;
          });
        }, 800);
      }
      return newViewed;
    });
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      navigateImage('next');
    } else if (isRightSwipe) {
      navigateImage('prev');
    }
  }, [touchStart, touchEnd, navigateImage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      switch (event.key) {
        case 'Escape':
          closeImageViewer();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeImageViewer, navigateImage]);

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
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-primary text-white py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" style={{animation: 'pulse 1s ease-in-out'}}></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl" style={{animation: 'pulse 1s ease-in-out', animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="space-y-8" style={{animation: 'bounce 1s ease-in-out'}}>
            <div className="inline-block p-4 bg-tertiary/20 rounded-full mb-6" style={{animation: 'spin 1s linear'}}>
              <FontAwesomeIcon icon={faCamera} className="text-2xl text-tertiary-light" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extralight tracking-wide mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-100 to-secondary-light bg-clip-text text-transparent">
                Our Journey in
              </span>
              <br />
              <span className="bg-gradient-to-r from-tertiary-light to-secondary bg-clip-text text-transparent font-light">
                Pictures
              </span>
            </h1>
            
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-tertiary to-transparent mx-auto mb-8"></div>
            
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
            {categories.map((category, index) => (
              <button
                key={category}
                className="group px-6 py-3 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-secondary hover:to-secondary-dark transition-all duration-300 hover:scale-105 hover:shadow-lg font-medium tracking-wide"
                style={{animation: 'bounce 1s ease-in-out', animationDelay: `${index * 0.1}s`}}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-secondary-light/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-block p-3 bg-secondary-light rounded-2xl mb-6" style={{animation: 'pulse 1s ease-in-out'}}>
              <div className="w-2 h-2 bg-secondary rounded-full" style={{animation: 'bounce 1s ease-in-out'}}></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-extralight text-slate-900 mb-6 tracking-wide">
              Gallery <span className="text-secondary font-light">Collection</span>
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-secondary to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-[200px] gap-6">
            {galleryItems.map((item, index) => (
              <article
                key={item.id}
                className={`group relative ${item.height} overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-[1.02]`}
                style={{animation: 'bounce 1s ease-in-out', animationDelay: `${index * 0.1}s`}}
                onClick={() => openImageViewer(item.id)}
              >
                <Image
                  src={item.image}
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
                      <div className="bg-gradient-to-r from-tertiary to-tertiary-dark text-white px-3 py-1 rounded-full text-xs font-medium" style={{animation: 'pulse 1s ease-in-out'}}>
                        Featured
                      </div>
                    )}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button 
                        onClick={(e) => toggleView(item.id, e)}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 cursor-pointer group/view"
                        title={`${viewCounts[item.id] || 0} views`}
                      >
                        <div className="relative">
                          <FontAwesomeIcon 
                            icon={faEye} 
                            className={`text-sm transition-all duration-300 ${
                              viewedImages.has(item.id) 
                                ? 'text-blue-400 scale-125' 
                                : 'text-white hover:text-blue-300'
                            } ${
                              eyeAnimations.has(item.id) 
                                ? 'animate-pulse scale-150' 
                                : ''
                            }`}
                            style={{
                              filter: viewedImages.has(item.id) 
                                ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))' 
                                : ''
                            }}
                          />
                          {eyeAnimations.has(item.id) && (
                            <>
                              <div className="absolute inset-0 animate-ping">
                                <FontAwesomeIcon 
                                  icon={faEye} 
                                  className="text-blue-400 opacity-75 text-sm" 
                                />
                              </div>
                              <div className="absolute -top-3 -right-2 text-blue-300 animate-bounce font-bold text-xs">
                                👁️
                              </div>
                            </>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="space-y-3">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 text-secondary-light text-xs font-medium mb-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" style={{animation: 'pulse 1s ease-in-out'}}></div>
                        {item.category}
                      </div>
                      <h3 className="text-white font-medium text-sm md:text-base leading-tight">{item.title}</h3>
                    </div>
                    
                    <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={(e) => toggleLike(item.id, e)}
                          className="flex items-center gap-2 text-white/80 text-xs hover:scale-110 transition-all duration-300 cursor-pointer group/like"
                        >
                          <div className="relative">
                            <FontAwesomeIcon 
                              icon={faHeart} 
                              className={`transition-all duration-300 ${
                                likedImages.has(item.id) 
                                  ? 'text-pink-400 scale-125' 
                                  : 'text-rose-400 hover:text-pink-300'
                              } ${
                                heartAnimations.has(item.id) 
                                  ? 'animate-bounce scale-150' 
                                  : ''
                              }`}
                              style={{
                                filter: likedImages.has(item.id) 
                                  ? 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.6))' 
                                  : ''
                              }}
                            />
                            {heartAnimations.has(item.id) && (
                              <>
                                <div className="absolute inset-0 animate-ping">
                                  <FontAwesomeIcon 
                                    icon={faHeart} 
                                    className="text-pink-400 opacity-75" 
                                  />
                                </div>
                                <div className="absolute -top-2 -left-2 text-pink-300 animate-bounce font-bold text-xs">
                                  +1
                                </div>
                              </>
                            )}
                          </div>
                          <span 
                            className={`transition-all duration-300 ${
                              likedImages.has(item.id) ? 'text-pink-300 font-semibold' : ''
                            }`}
                          >
                            {likeCounts[item.id] || item.likes}
                          </span>
                        </button>
                        
                        <div className="flex items-center gap-1 text-white/60 text-xs">
                          <FontAwesomeIcon 
                            icon={faEye} 
                            className={`transition-all duration-300 ${
                              viewedImages.has(item.id) ? 'text-blue-400' : 'text-slate-400'
                            }`}
                          />
                          <span className={`${viewedImages.has(item.id) ? 'text-blue-300 font-semibold' : ''}`}>
                            {viewCounts[item.id] || 0}
                          </span>
                        </div>
                      </div>
                      <button 
                        onClick={() => openImageViewer(item.id)}
                        className="bg-gradient-to-r from-secondary to-secondary-dark text-white px-3 py-1.5 rounded-xl text-xs font-medium hover:scale-105 transition-transform duration-200"
                      >
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
      <section className="py-24 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" style={{animation: 'pulse 1s ease-in-out'}}></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl" style={{animation: 'pulse 1s ease-in-out', animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="space-y-12">
            <div>
              <div className="inline-block p-4 bg-tertiary/20 rounded-full mb-6" style={{animation: 'spin 1s linear'}}>
                <FontAwesomeIcon icon={faCamera} className="text-2xl text-tertiary-light" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-wide">
                <span className="bg-gradient-to-r from-white to-secondary-light bg-clip-text text-transparent">
                  Want to See
                </span>
                <br />
                <span className="bg-gradient-to-r from-tertiary-light to-secondary bg-clip-text text-transparent font-light">
                  More?
                </span>
              </h2>
              
              <div className="w-24 h-[1px] bg-gradient-to-r from-tertiary to-transparent mx-auto mb-8"></div>
              
              <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-light">
                Follow us on social media for daily updates, match highlights, and behind-the-scenes content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-xl mx-auto">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-gradient-to-br hover:${link.gradient} p-6 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                  style={{animation: 'bounce 1s ease-in-out', animationDelay: `${index * 0.2}s`}}
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

      {/* Full Screen Image Viewer */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeImageViewer();
            }}
            className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 cursor-pointer"
            type="button"
            aria-label="Close image viewer"
          >
            <FontAwesomeIcon icon={faTimes} className="text-lg" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 cursor-pointer"
            type="button"
            aria-label="Previous image"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 cursor-pointer"
            type="button"
            aria-label="Next image"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
          </button>

          {/* Image Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {(() => {
              const currentItem = galleryItems.find(item => item.id === selectedImage);
              const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
              
              return currentItem ? (
                <div className="relative max-w-6xl max-h-full w-full h-full flex flex-col items-center justify-center">
                  <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
                    <Image
                      src={currentItem.image}
                      alt={currentItem.title}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                  </div>
                  
                  {/* Image Info */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-2xl px-6 py-4 text-center text-white min-w-72">
                    <h3 className="text-lg font-medium mb-2">{currentItem.title}</h3>
                    <div className="flex items-center justify-center gap-4 text-sm text-slate-300">
                      <span className="bg-secondary/20 px-3 py-1 rounded-full">
                        {currentItem.category}
                      </span>
                      <button 
                        onClick={(e) => toggleLike(currentItem.id, e)}
                        className="flex items-center gap-1 hover:scale-110 transition-all duration-300 cursor-pointer"
                      >
                        <div className="relative">
                          <FontAwesomeIcon 
                            icon={faHeart} 
                            className={`transition-all duration-300 ${
                              likedImages.has(currentItem.id) 
                                ? 'text-pink-400 scale-125' 
                                : 'text-rose-400 hover:text-pink-300'
                            } ${
                              heartAnimations.has(currentItem.id) 
                                ? 'animate-bounce scale-150' 
                                : ''
                            }`}
                            style={{
                              filter: likedImages.has(currentItem.id) 
                                ? 'drop-shadow(0 0 8px rgba(244, 114, 182, 0.6))' 
                                : ''
                            }}
                          />
                          {heartAnimations.has(currentItem.id) && (
                            <>
                              <div className="absolute inset-0 animate-ping">
                                <FontAwesomeIcon 
                                  icon={faHeart} 
                                  className="text-pink-400 opacity-75" 
                                />
                              </div>
                              <div className="absolute -top-2 -left-2 text-pink-300 animate-bounce font-bold text-xs">
                                +1
                              </div>
                            </>
                          )}
                        </div>
                        <span 
                          className={`transition-all duration-300 ${
                            likedImages.has(currentItem.id) ? 'text-pink-300 font-semibold' : ''
                          }`}
                        >
                          {likeCounts[currentItem.id] || currentItem.likes}
                        </span>
                      </button>
                      <button 
                        onClick={(e) => toggleView(currentItem.id, e)}
                        className="flex items-center gap-1 hover:scale-110 transition-all duration-300 cursor-pointer"
                      >
                        <div className="relative">
                          <FontAwesomeIcon 
                            icon={faEye} 
                            className={`transition-all duration-300 ${
                              viewedImages.has(currentItem.id) 
                                ? 'text-blue-400 scale-125' 
                                : 'text-slate-400 hover:text-blue-300'
                            } ${
                              eyeAnimations.has(currentItem.id) 
                                ? 'animate-pulse scale-150' 
                                : ''
                            }`}
                            style={{
                              filter: viewedImages.has(currentItem.id) 
                                ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))' 
                                : ''
                            }}
                          />
                          {eyeAnimations.has(currentItem.id) && (
                            <>
                              <div className="absolute inset-0 animate-ping">
                                <FontAwesomeIcon 
                                  icon={faEye} 
                                  className="text-blue-400 opacity-75" 
                                />
                              </div>
                              <div className="absolute -top-3 -right-2 text-blue-300 animate-bounce font-bold text-xs">
                                👁️
                              </div>
                            </>
                          )}
                        </div>
                        <span 
                          className={`transition-all duration-300 ${
                            viewedImages.has(currentItem.id) ? 'text-blue-300 font-semibold' : ''
                          }`}
                        >
                          {viewCounts[currentItem.id] || 0}
                        </span>
                      </button>
                      <span className="text-slate-400">
                        {currentIndex + 1} / {galleryItems.length}
                      </span>
                    </div>
                  </div>
                </div>
              ) : null;
            })()}
          </div>

          {/* Overlay Click to Close */}
          <div 
            className="absolute inset-0 z-0"
            onClick={closeImageViewer}
          />
        </div>
      )}
    </main>
  );
}
