# Dynamic Theming Platform

A testing environment for a Next.js-based platform that supports full dynamic theming through structured JSON configuration files.

## 🎯 Project Goals

- **Complete Layout Control**: Pages and sections are dynamically rendered based on `theme.json` files
- **Component-Based Architecture**: Secure registry system with whitelisted components
- **Global Design Tokens**: Colors, fonts, and spacing injected as CSS variables
- **Type Safety**: Full TypeScript support with Zod schema validation
- **Scalable Architecture**: Ready for remote theme loading and multi-tenancy

## 🏗️ Architecture Overview

### File Structure
```
src/
├── components/
│   ├── blocks/           # Individual theme-able components
│   │   ├── Hero_V2.tsx
│   │   ├── CategoryGrid_V1.tsx
│   │   ├── FooterLinks.tsx
│   │   └── TextBlock.tsx
│   ├── DynamicRenderer.tsx   # Renders blocks from theme config
│   └── PageRenderer.tsx      # Complete page rendering
├── contexts/
│   └── ThemeContext.tsx      # Theme state management
├── lib/
│   ├── BlockRegistry.ts      # Secure component registry
│   └── themeUtils.ts        # Theme utilities
├── types/
│   └── theme.ts             # TypeScript types & Zod schemas
public/themes/               # Local theme storage
├── default.json
└── ecommerce.json
```

### Core Components

#### 1. Theme Configuration (`theme.json`)
```json
{
  "name": "Theme Name",
  "layout": {
    "home": [
      { 
        "block": "Hero_V2", 
        "props": { "title": "Welcome" } 
      }
    ]
  },
  "global": {
    "colors": { "primary": "#2563eb" },
    "fonts": { "base": "Inter" }
  }
}
```

#### 2. Block Registry System
- **Security**: Only whitelisted components can be rendered
- **Type Safety**: Full TypeScript support for all blocks
- **Extensibility**: Easy to add new components

#### 3. Dynamic Renderer
- Loops through layout configuration
- Renders blocks with props from theme
- Handles missing components gracefully

#### 4. Global Design Tokens
- Colors, fonts, spacing injected as CSS variables
- Accessible throughout the application
- Overrides Tailwind defaults when needed

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd dynamic-theming-platform

# Install dependencies
npm install

# Start development server
npm run dev
```

### Creating a New Theme

1. Create a new JSON file in `public/themes/`:
```json
{
  "name": "My Custom Theme",
  "layout": {
    "home": [
      {
        "block": "Hero_V2",
        "props": {
          "title": "Custom Hero_V2 Title",
          "subtitle": "Custom subtitle"
        }
      }
    ]
  },
  "global": {
    "colors": {
      "primary": "#your-color"
    }
  }
}
```

2. Load the theme:
```tsx
<ThemeProvider defaultTheme="my-custom-theme">
  <PageRenderer page="home" />
</ThemeProvider>
```

### Adding New Components

1. Create component in `src/components/blocks/`:
```tsx
interface MyBlockProps {
  title?: string;
  className?: string;
}

export const MyBlock: React.FC<MyBlockProps> = ({ title, className }) => {
  return <div className={className}>{title}</div>;
};
```

2. Register in `src/lib/BlockRegistry.ts`:
```tsx
import { MyBlock } from '@/components/blocks/MyBlock';

export const BlockRegistry = {
  // ... existing blocks
  MyBlock,
} as const;
```

3. Use in theme configuration:
```json
{
  "block": "MyBlock",
  "props": { "title": "Hello World" }
}
```

## 🔧 Advanced Features

### Theme Selection Strategies

```tsx
// Query parameter: ?theme=ecommerce
const strategy: ThemeSelectionStrategy = {
  type: 'query',
  paramName: 'theme'
};

// Subdomain: shop.domain.com -> ecommerce theme
const strategy: ThemeSelectionStrategy = {
  type: 'subdomain',
  mapping: {
    'shop': 'ecommerce',
    'blog': 'content'
  }
};
```

### Remote Theme Loading (Future)

```tsx
// Will support loading from external APIs
const theme = await fetchRemoteTheme('tenant-123');
```

### Theme Versioning (Future)

```tsx
// Compare theme versions
const comparison = compareThemeVersions('1.0.0', '1.1.0');
```

## 🧪 Testing Themes

The platform includes sample themes:

- **default.json**: Basic platform theme
- **ecommerce.json**: E-commerce focused layout

Switch between themes by changing the `defaultTheme` prop:

```tsx
<ThemeProvider defaultTheme="ecommerce">
  <PageRenderer page="home" />
</ThemeProvider>
```

## 🔐 Security Features

- **Component Whitelisting**: Only registered components can be rendered
- **Schema Validation**: All themes validated with Zod schemas
- **Type Safety**: Full TypeScript coverage prevents runtime errors
- **Error Boundaries**: Graceful handling of missing/invalid components

## 🚀 Future Roadmap

- [ ] **Remote Theme Storage**: S3, Firebase, or database integration
- [ ] **Admin Interface**: Visual theme editor and component library
- [ ] **Multi-tenancy**: Tenant-specific theme management
- [ ] **Theme Marketplace**: Share and discover themes
- [ ] **Performance**: Theme caching and optimization
- [ ] **Analytics**: Theme usage and performance metrics

## 📝 Development Notes

This is a **testing phase** focused on architecture validation. The system prioritizes:

1. **Flexibility**: Complete layout control through JSON
2. **Security**: Controlled component rendering
3. **Developer Experience**: Type safety and clear error handling
4. **Scalability**: Ready for production deployment

Design aesthetics are intentionally minimal during this phase - the focus is on proving the dynamic theming architecture works reliably.

## 🤝 Contributing

When adding new features:

1. Maintain type safety with TypeScript and Zod
2. Update the BlockRegistry for new components
3. Add comprehensive error handling
4. Document new theme configuration options
5. Test with multiple theme configurations

## 📄 License

This project is part of a larger production system and is intended for internal testing and development.
