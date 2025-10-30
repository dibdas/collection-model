# Case Management System

A modern, responsive case management dashboard built with React, featuring agent tracking, activity monitoring, and comprehensive case management capabilities.

## Features

- 📊 **Dashboard Analytics** - Real-time KPI tracking and data visualization
- 📋 **Case Management** - Comprehensive case tracking and detail views
- 👥 **Agent Management** - Monitor agent performance and status
- 📈 **Activity Tracking** - Track and analyze system activities
- 🔐 **Authentication** - Secure user authentication and authorization
- 🌓 **Dark/Light Mode** - Built-in theme switching
- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop

## Tech Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 5.4
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Charts**: Recharts
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:dibdas/collection-model.git
cd collection model
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # shadcn/ui components
│   ├── Layout.jsx   # Main layout with navigation
│   ├── KPICard.jsx  # Dashboard KPI cards
│   └── CaseDetailModal.jsx
├── pages/           # Application pages
│   ├── Index.jsx    # Landing page
│   ├── Login.jsx    # Authentication page
│   ├── Dashboard.jsx
│   ├── Cases.jsx
│   ├── Agents.jsx
│   └── Activity.jsx
├── contexts/        # React contexts
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
├── store/           # Redux store and slices
│   ├── store.js
│   └── slices/
├── services/        # API services and mock data
└── hooks/           # Custom React hooks
```

## Authentication

The app includes a protected route system. Users must log in to access:
- Dashboard
- Cases
- Agents
- Activity pages

## Responsive Design

The application is fully responsive with:
- **Mobile**: Hamburger menu navigation
- **Tablet**: Optimized layouts
- **Desktop**: Full sidebar navigation with expanded features

Maximum content width is set to `max-w-7xl` for optimal readability on large screens.

## Theme Support

Built-in dark and light mode support using `next-themes`:
- Toggle available in the header
- Persistent theme selection
- Smooth transitions between themes

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)



## Support

For support, please open an issue in the repository or contact the development team.
