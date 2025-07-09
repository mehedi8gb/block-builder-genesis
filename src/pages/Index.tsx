
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { PageRenderer } from '@/components/PageRenderer';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="default">
      <PageRenderer page="home" />
    </ThemeProvider>
  );
};

export default Index;
