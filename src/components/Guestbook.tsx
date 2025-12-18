import React, { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from 'react-router-dom';

// Type for a guestbook entry
interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  date: string;
}

const Guestbook: React.FC = () => {
  const navigate = useNavigate();
  
  // NUKE ALL BACKGROUNDS
  useEffect(() => {
    // Hide nav/footer
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    if (nav) nav.style.display = 'none';
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    
    // Remove ALL black backgrounds from parent elements
    const elements = document.querySelectorAll('div, main, body, #root');
    elements.forEach(el => {
      if (el instanceof HTMLElement) {
        if (el.className.includes('bg-black') || 
            el.style.backgroundColor === 'rgb(0, 0, 0)' ||
            el.style.backgroundColor === '#000' ||
            el.style.backgroundColor === 'black') {
          el.style.backgroundColor = 'transparent';
        }
      }
    });
    
    // Make body transparent
    document.body.style.backgroundColor = 'transparent';
    document.body.style.backgroundImage = 'none';
    
    return () => {
      if (nav) nav.style.display = '';
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
       
    };
  }, []);

  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name.trim() || !message.trim()) {
      setError("Please enter both your name and a message.");
      return;
    }

    // Create new entry
    const newEntry: GuestbookEntry = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleString(),
    };

    // Update state
    setEntries([newEntry, ...entries]);
    setName("");
    setMessage("");
    setError("");
  };

  return (
  
    <>
      <button
        onClick={() => navigate('/portal')}
        className="fixed top-6 left-6 z-50 text-white bg-black/50 hover:bg-black/70 px-4 py-2 rounded-lg font-bold"
      >
        ← Back to Portal
      </button>
      
      <div className="fixed inset-0 flex items-center justify-center p-4 bg-transparent">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6 z-10">
          <h1 className="text-2xl font-bold mb-4 text-center">Guestbook</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />

            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring focus:ring-blue-300"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-black transition"
            >
              Sign Guestbook
            </button>
          </form>

          <div className="mt-6 space-y-4">
            {entries.length === 0 ? (
              <p className="text-gray-500 text-center">Just know that I love you! Thank you for the pop up💞</p>
            ) : (
              entries.map((entry) => (
                <div
                  key={entry.id}
                  className="border border-gray-200 rounded p-4 bg-gray-50"
                >
                  <p className="font-semibold">{entry.name}</p>
                  <p className="text-gray-700">{entry.message}</p>
                  <p className="text-xs text-gray-400">{entry.date}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Guestbook;