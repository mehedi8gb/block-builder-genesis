import type { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import '../index.css'
import { ClientProviders } from './providers'

export const metadata: Metadata = {
  title: 'Dynamic Theme Platform',
  description: 'A Next.js platform with dynamic theming capabilities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </ClientProviders>
      </body>
    </html>
  )
}