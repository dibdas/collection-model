// import { useAuth } from '@/contexts/AuthContext';
// import { useTheme } from '@/contexts/ThemeContext';
// import { Button } from '@/components/ui/button';
// import { Moon, Sun, LogOut, LayoutDashboard, Users, FileText, Activity } from 'lucide-react';
// import { useNavigate, useLocation, Link } from 'react-router-dom';
// import { toast } from 'sonner';

// const Layout = ({ children }) => {
//   const { user, logout } = useAuth();
//   const { theme, toggleTheme } = useTheme();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     logout();
//     toast.success('Logged out successfully');
//     navigate('/');
//   };

//   const navItems = [
//     { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard', roles: ['admin', 'agent'] },
//     { path: '/cases', icon: FileText, label: 'Cases', roles: ['admin', 'agent'] },
//     { path: '/agents', icon: Users, label: 'Agents', roles: ['admin'] },
//     { path: '/activity', icon: Activity, label: 'Activity', roles: ['admin', 'agent'] },
//   ];

//   const filteredNavItems = navItems.filter(item => 
//     item.roles.includes(user?.role)
//   );

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Top Navigation */}
//       <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
//         <div className="container mx-auto px-4">
//           <div className="flex h-16 items-center justify-between">
//             <div className="flex items-center gap-6">
//               <div className="flex items-center gap-2">
//                 <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
//                   <span className="text-primary-foreground font-bold text-sm">DC</span>
//                 </div>
//                 <span className="font-semibold text-lg">Debt Collection</span>
//               </div>

//               <nav className="hidden md:flex items-center gap-1">
//                 {filteredNavItems.map((item) => {
//                   const Icon = item.icon;
//                   const isActive = location.pathname === item.path;
//                   return (
//                     <Link key={item.path} to={item.path}>
//                       <Button
//                         variant={isActive ? 'default' : 'ghost'}
//                         size="sm"
//                         className="gap-2"
//                       >
//                         <Icon className="h-4 w-4" />
//                         {item.label}
//                       </Button>
//                     </Link>
//                   );
//                 })}
//               </nav>
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-sm">
//                 <span className="font-medium">{user?.email}</span>
//                 <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
//                   {user?.role}
//                 </span>
//               </div>
              
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={toggleTheme}
//               >
//                 {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
//               </Button>

//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={handleLogout}
//               >
//                 <LogOut className="h-5 w-5" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 py-6">
//         {children}
//       </main>

//       {/* Mobile Navigation */}
//       <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t bg-card">
//         <div className="grid grid-cols-4 gap-1 p-2">
//           {filteredNavItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = location.pathname === item.path;
//             return (
//               <Link key={item.path} to={item.path}>
//                 <Button
//                   variant={isActive ? 'default' : 'ghost'}
//                   size="sm"
//                   className="w-full flex-col h-auto py-2 gap-1"
//                 >
//                   <Icon className="h-4 w-4" />
//                   <span className="text-xs">{item.label}</span>
//                 </Button>
//               </Link>
//             );
//           })}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Layout;

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Moon, Sun, LogOut, LayoutDashboard, Users, FileText, Activity, Menu } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { toast } from 'sonner';

const Layout = ({ children }) => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/');
  };

  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard', roles: ['admin', 'agent'] },
    { path: '/cases', icon: FileText, label: 'Cases', roles: ['admin', 'agent'] },
    { path: '/agents', icon: Users, label: 'Agents', roles: ['admin'] },
    { path: '/activity', icon: Activity, label: 'Activity', roles: ['admin', 'agent'] },
  ];

  const filteredNavItems = navItems.filter(item => 
    item.roles.includes(user?.role)
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center shadow-md">
                  <span className="text-primary-foreground font-bold">DC</span>
                </div>
                <span className="font-semibold text-lg hidden sm:inline">Debt Collection</span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                {filteredNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link key={item.path} to={item.path}>
                      <Button
                        variant={isActive ? 'default' : 'ghost'}
                        size="sm"
                        className="gap-2"
                      >
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </Button>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="flex items-center gap-2">
              {/* User Info - Hidden on mobile */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-sm">
                <span className="font-medium">{user?.email}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                  {user?.role}
                </span>
              </div>
              
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hidden sm:flex"
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>

              {/* Logout */}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                className="hidden sm:flex"
              >
                <LogOut className="h-5 w-5" />
              </Button>

              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <div className="flex flex-col gap-4 mt-8">
                    {/* User Info */}
                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-muted">
                      <span className="text-sm font-medium">{user?.email}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary text-primary-foreground w-fit">
                        {user?.role}
                      </span>
                    </div>

                    {/* Navigation Items */}
                    <nav className="flex flex-col gap-2">
                      {filteredNavItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                          <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                            <Button
                              variant={isActive ? 'default' : 'ghost'}
                              className="w-full justify-start gap-3"
                            >
                              <Icon className="h-5 w-5" />
                              {item.label}
                            </Button>
                          </Link>
                        );
                      })}
                    </nav>

                    {/* Actions */}
                    <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                      <Button
                        variant="ghost"
                        className="justify-start gap-3"
                        onClick={toggleTheme}
                      >
                        {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                        Toggle Theme
                      </Button>
                      <Button
                        variant="ghost"
                        className="justify-start gap-3"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          handleLogout();
                        }}
                      >
                        <LogOut className="h-5 w-5" />
                        Logout
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pb-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;

