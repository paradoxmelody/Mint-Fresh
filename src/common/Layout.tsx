// Layout.tsx
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isPortalPage = location.pathname === '/portal';
  const isWritingsPage = location.pathname === '/writings';
  
  // Hide nav/footer/taskbar on portal & writings pages
  const hideCommonElements = isPortalPage || isWritingsPage;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - hidden on portal/writings */}
      {!hideCommonElements && (
        <header className="bg-black text-white p-4">
          {/* Your regular header */}
          <nav>...</nav>
        </header>
      )}
      
      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer - hidden on portal/writings */}
      {!hideCommonElements && (
        <footer className="bg-black text-white p-4">
          {/* Your regular footer */}
        </footer>
      )}
      
      {/* Taskbar - ONLY on portal page */}
      {isPortalPage && (
        <div className="taskbar">
          {/* Your portal taskbar */}
        </div>
      )}
    </div>
  );
};

export default Layout;