import React from 'react';

interface DataTableProps {
  title?: string;
  headers?: string[];
  rows?: Array<Record<string, any>>;
  actions?: Array<{
    label: string;
    onClick?: (row: any) => void;
  }>;
  className?: string;
}

export function DataTable({ 
  title = "Data Table", 
  headers = [],
  rows = [],
  actions = [],
  className = "" 
}: DataTableProps) {
  return (
    <div className={`p-6 ${className}`}>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-card rounded-lg shadow-sm">
          <thead>
            <tr className="border-b bg-muted/50">
              {headers.map((header, index) => (
                <th key={index} className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                  {header}
                </th>
              ))}
              {actions.length > 0 && (
                <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b hover:bg-muted/25">
                {headers.map((header, colIndex) => (
                  <td key={colIndex} className="px-4 py-3 text-sm">
                    {row[header.toLowerCase().replace(' ', '_')] || '-'}
                  </td>
                ))}
                {actions.length > 0 && (
                  <td className="px-4 py-3 text-sm">
                    <div className="flex gap-2">
                      {actions.map((action, actionIndex) => (
                        <button
                          key={actionIndex}
                          onClick={() => action.onClick?.(row)}
                          className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/80"
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}