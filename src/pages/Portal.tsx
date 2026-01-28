import { useEffect, useRef, useState } from "react";
 
import { Link } from "react-router-dom";
// @ts-ignore: Module './components/Particles' has no type declaration
import LightRays from './LightRays';
import StarsBackground from "./StarsBackground";
 
interface Song {
  id: number;
  title: string;
  artist: string;
  color: string;
  path: string;  
  cover: string; 
}

const Portal = () => {
  
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

 
  const playlist: Song[] = [
    { id: 1, title: "Good Days", artist: "SZA", color: "blue", path: "/gooddays.mp3", cover: "/SZA.jpeg" },
    { id: 2, title: "Igors Theme", artist: "Tyler, the Creator", color: "pink", path: "/igors theme.mp3", cover: "/igor.jpg" },
    { id: 3, title: "Heaven Knows", artist: "54 Ultra", color: "yellow", path: "/heaven knows - 54 ultra.mp3 ", cover: "/hN.jpeg" },
    { id: 4, title: "I Wonder", artist: "Kanye West", color: "black", path: "/I Wonder.mp3", cover: "/Ye.jpeg" },
    { id: 5, title: "Sing About Me I'm Dying of Thirst", artist: "Kendrick Lamar", color: "green", path: "/Sing About Me, I m Dying of Thirst.mp3", cover: "/SAMIDT.jpeg" },
    { id: 6, title: "Californication", artist: "Red Hot Chilli Peppers", color: "orange", path:"/californication.mp3", cover: "/rchp.jpeg"},
    {
      id: 7, title: "Static", artist: "Steve Lacy", color: "indigo", path: "/static.mp3",
      cover: "/lacy.jpeg"
    },
    {
      id: 8, title: "If I Were Same But Different", color: "pale", path: "Bunyan.mp3", cover: "/vash.jpeg",
      artist: "Vashti Bunyan"
    },
  ];

 
  const handlePlayPause = (song?: Song) => {
    const songToPlay = song || currentSong;
    if (!audioRef.current || !songToPlay) return;

    if (songToPlay !== currentSong) {
      // If a new song is clicked, load it and play
      setCurrentSong(songToPlay);
      audioRef.current.src = songToPlay.path;
      audioRef.current.play();
      setIsPlaying(true);
    } else if (isPlaying) {
      // If the same song is playing, pause it
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // If the same song is paused, play it
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };
 
  useEffect(() => {
    // Hide navbar on portal page
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    if (nav) nav.style.display = 'none';
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    
    // Initialize audio element
    audioRef.current = new Audio();

    // Cleanup function
    return () => {
      if (nav) nav.style.display = '';
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
      // Stop and clear audio on unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);
  
  // Set the first song as current upon load
  useEffect(() => {
    if (!currentSong && playlist.length > 0) {
        setCurrentSong(playlist[0]);
    }
  }, [playlist, currentSong]);
 
  return (
    <div className="portal-page min-h-screen bg-black text-white overflow-x-hidden relative">
      
       
      <div className="fixed inset-0 z-0">
        <StarsBackground />
      </div>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10" >
        <LightRays />
      </div>
    

      {/* Home button   */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          to="/" 
          className="window inline-block"  
          style={{ fontFamily: "'courier', courier new" }}
          
        >
           HOME 
        </Link>
      </div>

      {/* Main content */}
      <div className=" relative z-10 w-full px-4 lg:px-8 pt-24 pb-20">
        
        {/* Header  */}
        <div className="text-center mb-12">
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4" 
             style={{
               color: '#0d0a4d',
               fontFamily: "'MS Sans Serif', sans-serif",
               textShadow: '3px 3px #87CEEB, 6px 6px #F5F5DC'
             }}>
             ✧･ﾟ: *✧･ﾟ:* Melody Ugochukwu *:･ﾟ✧*:･ﾟ✧
           </h1>
           <div className="overflow-hidden p-2 ">
             <p className="text-lg md:text-xl text-pink-400 font-mono animate-marquee inline-block whitespace-nowrap">
               "Free your mind before the end of the world" ໒꒰ྀིっ˕ -｡꒱ྀི๑ ✧･ﾟ: * Music *:･ﾟ✧
             </p>
           </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* Music Box  */}
          <div className="window w-full  max-w-[490px] md:h-[400px]">
            <div className="title-bar bg-pink-600">
              <div className="title-bar-text text-white">
                 NOW PLAYING
              </div>
              <div className="title-bar-controls">
                {/* Custom control indicators */}
                <div className="w-3 h-3 bg-gray-400 border border-black"></div>
                <div className="w-3 h-3 bg-gray-400 border border-black"></div>
                <div className="w-3 h-3 bg-gray-500 border border-black"></div>
              </div>
            </div>
            <div className="window-body p-4">
              <div className="field-row-stacked p-3">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={currentSong?.cover || "/default-cover.jpg"}  
                    alt="Album cover"
                    className="w-12 h-12 border-2 border-black object-cover"
                  />
                  <div className="text-black">
                    <p className="font-bold text-lg">{currentSong?.title || "Select a Song"}</p>
                    <p className="text-gray-600 text-sm">{currentSong?.artist || "..."}</p>
                  </div>
                </div>
                {/* Music Progress Bar (Simplified for example) */}
                <div className="mb-2">
                  <div className="progress" style={{ width: '100%', marginBottom: '4px' }}>
                    <div style={{ width: isPlaying ? '50%' : '0%' }}></div> {/* Static progress for demo */}
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>{isPlaying ? '▶ playing' : '❚❚ paused'}</span>
                    <span>{currentSong?.title ? '4:32' : '--:--'}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    className="button text-xs px-3 py-1" 
                    onClick={() => handlePlayPause()}
                  >
                    {isPlaying ? '⏸ PAUSE' : '▶ PLAY'}
                  </button>
                  <button className="button text-xs px-3 py-1" onClick={handleStop}>
                    ⏹ STOP
                  </button>
                </div>
                <p className="text-black font-bold">To play a song, scroll down to the playlist and select any song.</p>
                <p className="text-black font-bold">It was never that serious; laugh it off babe </p>
                <p className="text-black font-bold">Just watching disney.</p>
              </div>
            </div>
          </div>

          {/* Favorites Box  */}
          <div className="window w-full md:w-[490px]">
            <div className="title-bar bg-pink-600">
              <div className="title-bar-text text-white">
                 JSON
              </div>
            </div>
            <div className="window-body p-4">
              <div className="border-2 border-gray-400 p-1 mb-3">
                <img 
                  src="/snake-animal-digital-art-hd-wallpaper-uhdpaper.com-239@3@a.jpg"
                  alt="Snake"
                  className="w-full h-32 object-cover"
                />
              </div>
              <ul className="space-y-1 text-black text-sm">
                <li className="flex justify-between items-center border-b border-gray-300 pb-1">
                  <span className="font-bold">NAME: </span>
                  <span className="font-bold text-blue-800">Melody</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-300 pb-1">
                  <span className="font-bold">AGE: </span>
                  <span className="font-bold">20</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-300 pb-1">
                  <span className="font-bold">Song on repeat: </span>
                  <span className="font-bold text-pink-600">Self Control</span>
                </li>
                <li className="flex justify-between items-center pb-1">
                  <span className="font-bold">HOBBIES: </span>
                  <span className="font-bold text-cyan-950">Basketball</span>
                  <span className="font-bold text-cyan-950">Skateboarding</span>
                  <span className="font-bold text-cyan-950">Dancing</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-300 pb-1">
                  <span className="font-bold">INTERESTS: </span>
                  <span className="font-bold text-fuchsia-950">Creativity</span>
                  <span className="font-bold text-fuchsia-950">Travel</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-300 pb-1">
                  <span className="font-bold">FAVORITE ARTIST: </span>
                  <span className="font-bold text-indigo-950">Melody</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Status Box */}
          <div className="window w-full md:w-[490px]">
            <div className="title-bar bg-cyan-600">
              <div className="title-bar-text text-white">
                 ABOUT ME
              </div>
            </div>
            <div className="window-body p-4">
              <div className="field-row-stacked p-3">
                <img 
                  src="/moi.jpeg" 
                  alt="Vibing"
                  className="w-80 h-40 object-cover mb-2 border border-black"
                />
                <p className="text-black font-bold">Just a kid from Nowhere. A Tender Warrior. Hyperpolyglot, who flies with birds in the sky. I love life and being in nature. I love music. </p>
                <p className="text-gray-600 text-xs mt-1">last updated: today</p>
              </div>
            </div>
          </div>
          
          {/* Webrings Box  */}
          <div className="window w-full md:w-[490px] md:h-[440px]">
            <div className="title-bar bg-purple-600">
              <div className="title-bar-text text-white">
                 MY ART
              </div>
            </div>
            <div className="window-body p-4">
              <div className="border-2 border-gray-400 p-1 bg-black mb-3  ">
                <img 
                  src="/anime.gif"  
                  alt="Webring"
                  className="w-full h-50 object-contain"
                />
              </div>
              <div className="space-y-2">
                <a href="/writings" className="block text-black text-sm">
                  <i className="win98-icon icon-network"></i> WRITINGS
                </a>
               
                <a href="https://open.spotify.com/playlist/5z3FhQWDrLXAq9bqlF32DV?si=fh0HPlXNQqGFEH2nki1XdA" className="block text-blue-900 hover:text-pink-600 text-sm">
                  <i className="win98-icon icon-globe"></i>  SPOTIFY PLAYLIST
                </a>
                <a href="/drawings" className="block text-blue-900 hover:text-pink-600 text-sm ">
                  <i className="win98-icon icon-notepad"></i> DRAWINGS
                </a>
                 
              </div>
            </div>
          </div>

          {/* Currently Box */}
          <div className="window w-full md:w-[490px] md:h-[440px]">
            <div className="title-bar bg-blue-900">
              <div className="title-bar-text text-white">
                 ANIME & BOOKS
              </div>
            </div>
            <div className="window-body p-4">
              <div className="flex gap-2 mb-3">
                <img 
                  src="/kakashi-hatake-kakashi.gif"
                  alt="Book"
                  className="flex-1 h-40 object-cover border-2 border-gray-400"
                />
                <img 
                  src="/naruto.gif"
                  alt="Anime"
                  className="flex-1 h-40 object-cover border-2 border-gray-400"
                />
              </div>
              <div className="space-y-2 text-black">
                <div>
                  <p className="text-black text-xs font-bold">Naruto</p>
                  <p className="font-mono text-sm">Matilda</p>
                </div>
                <div>
                  <p className="text-black text-xs font-bold">Kuroko No Basket</p>
                  <p className="font-mono text-sm">Half Of A Yellow Sun</p>
                </div>
                <div>
                  <p className="text-black text-xs font-bold">YuYu Hakusho</p>
                  <p className="font-mono text-sm">The Prophet</p>
                </div>
                <div>
                  <p className="text-black text-xs font-bold">Hunter x Hunter</p>
                  <p className="font-mono text-sm">Tomorrow I become a Woman</p>
                </div>
                
              </div>
            </div>
          </div>

          {/* Collections Box (Using Win98 classes) */}
          <div className="window w-full md:w-[490px] md:h-[440px]">
            <div className="title-bar bg-blue-900">
              <div className="title-bar-text text-white">
                 COLLECTIONS
              </div>
            </div>
            <div className="window-body p-4">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <img 
                  src="/ballin-cat.gif"  
                  alt="Blinkie"
                  className="border-2 border-gray-400 w-full h-30 object-contain"
                />
                <img 
                  src="/kyrie-irving.gif" 
                  alt="Blinkie"
                  className="border-2 border-gray-400 w-full h-30 object-contain"
                />
                <img 
                  src="/chinese.gif" 
                  alt="Blinkie"
                  className="border-2 border-gray-400 w-full h-30 object-contain"
                />
                <div className="border-2 border-gray-400 h-15 flex items-center justify-center bg-black">
                  <span className="text-white text-xs">+ MORE</span>
                   
                </div>
                <p className="text-black">More work to be done on this side so yeah;; not much here</p>
              </div>
              <div className="flex gap-2">
                <button className="button text-xs px-3 py-1">
                  VIEW ALL
                </button>
                <button className="button text-xs px-3 py-1">
                  UPLOAD
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Playlist Sidebar   */}
        <div className="flex items-start justify-center gap-4 mt-6 mb-8">
          {/* LEFT SIDEBAR */}
          <div className="hidden lg:flex flex-col gap-4">
            <img src="/MELODY5.jpg" alt="decoration" className="w-40 h-40 object-cover border-2 border-pink-500" />
            <img src="/power.jpg" alt="decoration" className="w-40 h-40 object-cover border-2 border-cyan-500" />
            <video src="/i am consistent.mp4" controls autoPlay loop muted className="w-80 h-75 object-cover" />
          </div>

          <div className="hidden lg:flex flex-none gap-4">
            <img src="/marinette-miraculous-ladybug.gif" alt="pablo" className="w-60 h-50 object-bottom-left " />
          </div>
          
          {/* PLAYLIST WINDOW */}
          <div className="window w-full md:w-[400px] md:h-[440px] mx-auto">
            <div className="title-bar bg-purple-600"> 
              <div className="title-bar-text text-white">
                 Mel's  Playlist
              </div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" className="minimize"></button>
                <button aria-label="Maximize" className="maximize"></button>
                <button aria-label="Close" className="close"></button>
              </div>
            </div>
            <div className="window-body p-2 max-h-[70vh] overflow-y-auto">
              <div className="space-y-1">
                {playlist.map((song) => (
                  <button
                    key={song.id}
                    onClick={() => handlePlayPause(song)}
                    className={`w-full text-left p-1 border-b border-gray-300 ${currentSong?.id === song.id ? 'bg-blue-300' : 'hover:bg-gray-100'} transition-colors`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 bg-${song.color}-500 flex items-center justify-center border border-black`}>
                        <span className="text-white text-xs">{currentSong?.id === song.id && isPlaying ? '❚❚' : '▶'}</span>
                      </div>
                      <div className="text-black">
                        <p className="font-bold text-sm">{song.title}</p>
                        <p className="text-gray-600 text-xs">{song.artist}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Playlist controls */}
            <div className="field-row mt-2 p-4">
              <label htmlFor="volume" className="text-xs text-black">Volume:</label>
              <input type="range" id="volume" className="w-full bg-blue-800" onChange={(e) => {
                if (audioRef.current) audioRef.current.volume = parseFloat(e.target.value);
              }} defaultValue="0.75" step="0.01" min="0" max="1" />
              <div className="flex justify-center gap-1 mt-2 bg-blue-950" >
                <button className="text-xs px-2 py-1">⏮</button>
                <button 
                  className={`text-xs px-2 py-1 ${isPlaying ? 'bg-gray-400' : 'bg-pink-500'}`}
                  onClick={() => handlePlayPause()}
                >
                  {isPlaying ? '⏸ PAUSE' : '▶ PLAY'}
                </button>
                <button className="text-xs px-3 py-1" onClick={handleStop}>⏹ STOP</button>
                <button className="text-xs px-2 py-1">⏭</button>
                <button className="text-xs px-2 py-1">--</button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="hidden lg:flex flex-col gap-3">
            <img src="/gown-prince-sofia.gif" alt="decoration" className="w-45 h-40 object-cover border-2 border-purple-500" />
            <img src="/huey-huey-freeman.gif" alt="decoration" className="w-65 h-45 object-cover" />
            <video src="/yusuke.mp4" controls autoPlay loop muted className="w-90 h-70 object-cover border-2 border-cyan-500" />

          </div>
        </div>

        {/* Guestbook and Return Links */}
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
          <div className="window p-6 text-center">
            <h3 className="text-xl font-bold text-black mb-2">PLEASE SIGN MY GUESTBOOK!</h3>
            <Link 
              to="/guestbook" 
              className="button inline-block"
            >
              SIGN GUESTBOOK 
            </Link>
          </div>
          
          <div className="window p-6 text-center">
            <h3 className="text-xl font-bold text-black mb-2">RETURN TO MAIN</h3>
            <Link 
              to="/" 
              className="button inline-block px-8 py-3 text-lg"
            >
               ← BACK TO MAIN SITE 
            </Link>
          </div>
        </div>
      </div>
 
<div className="fixed bottom-0 left-0 right-0 h-12 bg-[#c0c0c0] border-t-2 border-[#dfdfdf] z-50 flex items-center px-1 shadow-[inset_0_1px_0_0_#808080]">
  
   
  <button 
    className="h-10 px-3 bg-[#c0c0c0] border-2 border-[#808080] border-t-[#dfdfdf] border-l-[#dfdfdf] flex items-center gap-2 active:border-[#dfdfdf] active:border-t-[#808080] active:border-l-[#808080] active:shadow-[inset_1px_1px_0_0_#808080]"
    onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
  >
    <img 
      src="https://win98icons.alexmeub.com/icons/png/windows-4.png" 
      alt="Windows 95"
      className="w-6 h-6"
    />
    <span className="font-bold text-black">Start</span>
  </button>
  
  {/* Taskbar Programs */}
  <div className="flex-1 flex items-center gap-1 ml-2">
    <button className="h-8 px-3 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] flex items-center gap-1 hover:border-[#dfdfdf] hover:border-t-[#808080] hover:border-l-[#808080]">
      <img 
        src="/msie1-5.png" 
        alt="Notepad"
        className="w-5 h-5"
      />
      <span className="text-black font-bold text-sm">portal</span>
    </button>
    <button className="h-8 px-3 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] flex items-center gap-1 hover:border-[#dfdfdf] hover:border-t-[#808080] hover:border-l-[#808080]">
      <img 
        src="/windows_update_large-5.png" 
        alt="Winamp"
        className="w-5 h-5"
      />
      <span className="text-black font-bold text-sm">Winamp</span>
    </button>
    <button className="h-8 px-3 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] flex items-center gap-1 hover:border-[#dfdfdf] hover:border-t-[#808080] hover:border-l-[#808080]">
      <img 
        src="/modem-5.png" 
        alt="Explorer"
        className="w-5 h-5"
      />
      <span className="text-black font-bold text-sm">Brave</span>
    </button>
  </div>
  
  {/* System Tray */}
  <div className="h-8 px-3 bg-[#c0c0c0] border-2 border-[#808080] border-t-[#dfdfdf] border-l-[#dfdfdf] flex items-center gap-2 shadow-[inset_1px_1px_0_0_#808080]">
    <div className="w-6 h-6 flex items-center justify-center">
      <img 
        src= "/rename-2.png" 
        alt="Volume"
        className="w-5 h-5"
      />
    </div>
    <div className="text-black font-bold text-sm">
      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </div>
  </div>
</div>

      {/* Start Menu Popup */}
      {isStartMenuOpen && (
        <div className="fixed bottom-12 left-0 w-64 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] z-50 shadow-[2px_2px_0_0_rgba(0,0,0,0.2)]">
          {/* Windows Header */}
          <div className="p-2 bg-gradient-to-r from-[#000080] to-[#1084d0] text-white font-bold flex items-center gap-3 border-b-2 border-[#808080]">
            <img 
              src="https://win98icons.alexmeub.com/icons/png/windows-4.png" 
              alt="Windows"
              className="w-8 h-8"
            />
            <span className="text-lg">MIKE</span>
          </div>
          
          {/* Menu Items */}
          <div className="py-1">
            <button className="w-full text-left px-4 py-2 hover:bg-[#000080] hover:text-white flex items-center gap-3 border-b border-[#c0c0c0]">
              <img src="telephony-2.png" alt="" className="w-6 h-6" />
              <div>
                <div className="font-bold">Obsidian Portal</div>
                <div className="text-xs text-gray-600">My Personal Space</div>
              </div>
            </button>
            
            <button className="w-full text-left px-4 py-2 hover:bg-[#000080] hover:text-white flex items-center gap-3 border-b border-[#c0c0c0]">
              <img src="/multimedia-4.png" alt="" className="w-6 h-6" />
              <div>
                <div className="font-bold">Mel's Playlist</div>
                <div className="text-xs text-gray-600">Vibe Station</div>
              </div>
            </button>
            
            <button className="w-full text-left px-4 py-2 hover:bg-[#000080] hover:text-white flex items-center gap-3 border-b border-[#c0c0c0]">
              <img src="/address_book_pad.png" alt="" className="w-6 h-6" />
              <div>
                <div className="font-bold">Writings</div>
                <div className="text-xs text-gray-600">Poems & Thoughts</div>
              </div>
            </button>
            
            <button className="w-full text-left px-4 py-2 hover:bg-[#000080] hover:text-white flex items-center gap-3 border-b border-[#c0c0c0]">
              <img src="/users_key-4.png" alt="" className="w-6 h-6" />
              <div>
                <div className="font-bold">Games</div>
                <div className="text-xs text-gray-600">Minesweeper</div>
              </div>
            </button>
            
            <div className="my-1 border-t-2 border-[#808080]"></div>
            
            <button className="w-full text-left px-4 py-2 hover:bg-[#000080] hover:text-white flex items-center gap-3">
              <img src="https://win98icons.alexmeub.com/icons/png/shut_down_cool-1.png" alt="" className="w-6 h-6" />
              <div>
                <div className="font-bold">Shut Down...</div>
                <div className="text-xs text-gray-600">Turn off computer</div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portal;
 

 