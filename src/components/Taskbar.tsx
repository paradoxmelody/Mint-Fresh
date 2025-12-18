// src/components/Taskbar.tsx

import React, { useEffect, useState } from 'react';
import StartMenu from './StartMenu';
//import StartMenu from './StartMenu'; // We'll create this next

interface TaskbarProps {
  // Function to toggle the Start Menu's visibility
  onStartClick: () => void; 
}

const Taskbar: React.FC<TaskbarProps> = ({ onStartClick }) => {
  const [time, setTime] = useState(new Date());
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  
  // Real-time clock update
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => {
    setIsStartMenuOpen(prev => !prev);
    onStartClick(); // Call the parent handler if needed (e.g., to hide all windows)
  };
  
  // Custom button class (using the vibe-button style we defined earlier)
  const startButtonClass = `
    vibe-button 
    px-4 py-1 
    text-white 
    font-bold 
    text-lg 
    mr-2 
    min-w-[100px] 
    transition-all 
    duration-100
    ${isStartMenuOpen ? 'active:shadow-none' : ''}
  `;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-10 bg-win-gray-base border-t-4 border-win-gray-light flex items-center justify-between z-50 px-2">
      
      {/* --- 1. Start Button & Menu --- */}
      <div className="relative h-full flex items-center">
        
        {/* Start Button */}
        <button 
          className={startButtonClass} 
          onClick={toggleMenu}
        >
          {/* Use your vibrant pink/purple accent on the button */}
          <span className="tracking-widest">
             <span role="img" aria-label="Star">✨</span> START
          </span>
        </button>

        {/* Start Menu (Conditionally rendered) */}
        {isStartMenuOpen && (
          <StartMenu 
            onClose={() => setIsStartMenuOpen(false)} 
            // Pass the window opener logic down
            // onAppOpen={onAppOpen} 
          />
        )}
      </div>

      {/* --- 2. Open Applications Area (Simplified) --- */}
      <div className="flex-grow h-full overflow-hidden">
        {/* Application buttons will go here, styled with the sunken effect */}
      </div>

      {/* --- 3. System Tray and Clock --- */}
      <div className="flex h-full items-center pl-2">
        <div 
          className="bg-win-gray-base h-full flex items-center px-2 
                     border-t-2 border-l-2 border-win-gray-dark 
                     border-b-2 border-r-2 border-win-gray-light 
                     shadow-inner-sm text-sm font-win-sans"
        >
          {/* Icon placeholder (e.g., volume, network) */}
          <span className="mr-2" role="img" aria-label="Volume">🔊</span>
          
          {/* The Clock */}
          <span>
            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>

    </div>
  );
};

export default Taskbar;