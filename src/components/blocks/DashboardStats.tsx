import React from 'react';

interface DashboardStatsProps {
  title?: string;
  stats?: Array<{
    label: string;
    value: string | number;
    change?: string;
    trend?: 'up' | 'down' | 'neutral';
  }>;
  className?: string;
}

export function DashboardStats({ 
  title = "Dashboard Statistics", 
  stats = [],
  className = "" 
}: DashboardStatsProps) {
  return (
    <div className={`p-6 ${className}`}>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-card p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              {stat.change && (
                <div className={`text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 
                  stat.trend === 'down' ? 'text-red-600' : 
                  'text-gray-600'
                }`}>
                  {stat.change}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}