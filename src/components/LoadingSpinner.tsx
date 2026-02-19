'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function LoadingSpinner({ size = 'medium', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const iconSizes = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-base'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
      <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
      <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-secondary animate-spin animate-reverse" style={{animationDuration: '1.5s'}}></div>
      <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-tertiary animate-spin" style={{animationDuration: '2s'}}></div>
      
      {/* Center ball icon */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
        <FontAwesomeIcon 
          icon={faFutbol} 
          className={`${iconSizes[size]} text-primary animate-pulse`}
          style={{animationDuration: '1s'}}
        />
      </div>
    </div>
  );
}

// Loading overlay component
export function LoadingOverlay({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null;
  
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="text-center space-y-4">
        <LoadingSpinner size="large" />
        <p className="text-lg font-light text-primary animate-pulse">Loading...</p>
      </div>
    </div>
  );
}