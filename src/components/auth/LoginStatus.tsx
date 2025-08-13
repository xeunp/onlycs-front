'use client';

import { useState } from 'react';
import Image from 'next/image';

interface LoginStatusProps {
  /** Whether the user is currently authenticated */
  isAuthenticated?: boolean;
  /** User's avatar image URL (if authenticated) */
  avatarUrl?: string;
  /** User's display name for alt text */
  userName?: string;
  /** Callback for login action */
  onLogin?: () => void;
  /** Callback for profile/avatar click */
  onProfileClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * LoginStatus Component
 * 
 * Conditionally renders authenticated or unauthenticated state:
 * - Authenticated: Shows circular avatar + "Profile" text
 * - Unauthenticated: Shows "Login with Steam" button
 * 
 * Integration notes:
 * - onLogin: Connect to your Steam auth flow (e.g., redirect to Steam OAuth)
 * - onProfileClick: Open profile dropdown or navigate to profile page
 * - isAuthenticated: Read from your auth context/state management
 * - avatarUrl: Get from user profile data
 */
export function LoginStatus({
  isAuthenticated = false,
  avatarUrl,
  userName = 'User',
  onLogin,
  onProfileClick,
  className = ''
}: LoginStatusProps) {
  const [imageError, setImageError] = useState(false);

  // Authenticated State - Avatar + Profile Text
  if (isAuthenticated) {
    return (
      <button
        onClick={onProfileClick}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 ${className}`}
        aria-label={`Open ${userName}'s profile`}
      >
        {/* Avatar */}
        <div className="relative w-8 h-8 flex-shrink-0">
          {avatarUrl && !imageError ? (
            <Image
              src={avatarUrl}
              alt={`${userName}'s avatar`}
              width={32}
              height={32}
              className="w-full h-full rounded-full object-cover shadow-sm ring-1 ring-white/20"
              onError={() => setImageError(true)}
            />
          ) : (
            // Fallback avatar
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-sm ring-1 ring-white/20">
              <span className="text-white text-sm font-semibold">
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>

        {/* Profile Text */}
        <span className="text-sm font-medium hidden sm:inline">Profile</span>
      </button>
    );
  }

  // Unauthenticated State - Login with Steam Button
  return (
    <button
      onClick={onLogin}
      className={`flex items-center gap-2 px-4 py-2 rounded-[15px] font-medium text-sm text-white backdrop-blur-sm border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 ${className}`}
      style={{ backgroundColor: '#06070b' }}
      aria-label="Login with Steam account"
    >
      {/* Steam Logo */}
      <div className="w-4 h-4 flex-shrink-0">
        <Image
          src="/Steam_logo.svg"
          alt="Steam logo"
          width={16}
          height={16}
          className="w-full h-full filter brightness-0 invert"
        />
      </div>

      {/* Login Text */}
      <span className="hidden sm:inline">Login with Steam</span>
      <span className="sm:hidden">Login</span>
    </button>
  );
}
