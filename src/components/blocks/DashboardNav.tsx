import React from 'react';
import Link from 'next/link';

interface DashboardNavProps {
  title?: string;
  links?: Array<{
    label: string;
    href: string;
    active?: boolean;
  }>;
  userRole?: 'client' | 'admin';
  className?: string;
}

export function DashboardNav({ 
  title = "Dashboard", 
  links = [],
  userRole = 'client',
  className = "" 
}: DashboardNavProps) {
  const defaultLinks = userRole === 'admin' ? [
    { label: 'Dashboard', href: '/admin/dashboard', active: false },
    { label: 'Users', href: '/admin/users', active: false },
    { label: 'Themes', href: '/admin/themes', active: false },
    { label: 'Analytics', href: '/admin/analytics', active: false },
  ] : [
    { label: 'Dashboard', href: '/client/dashboard', active: false },
    { label: 'Profile', href: '/client/profile', active: false },
    { label: 'Settings', href: '/client/settings', active: false },
  ];

  const navigationLinks = links.length > 0 ? links : defaultLinks;

  return (
    <nav className={`bg-card border-b p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="flex space-x-6">
            {navigationLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href}
                className={`text-sm hover:text-primary transition-colors ${
                  link.active ? 'text-primary font-medium' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground capitalize">{userRole} Portal</span>
          <Link href="/" className="text-sm text-primary hover:underline">
            Back to Site
          </Link>
        </div>
      </div>
    </nav>
  );
}