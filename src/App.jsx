import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Ticket, 
  ShoppingCart,
  Calendar, 
  MapPin, 
  Music, 
  Instagram, 
  Twitter, 
  Youtube, 
  ArrowRight, 
  Play, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react';
import newsTourImage from '../assets/black-parade-2.png';
import newsMerchImage from '../assets/maxresdefault.jpg';
import newsMessageImage from '../assets/welcome_to_the_black_parade_by_kitkirkilkol-d8yg6me-e1584285648159.webp';
import mcrLogo from '../assets/640px-My_Chemical_Romance_logo.png';

const TOUR_DATES = [
  { id: 1, date: 'OCT 24', city: 'LAS VEGAS', venue: 'When We Were Young Festival', status: 'SOLD OUT' },
  { id: 2, date: 'NOV 02', city: 'NEW JERSEY', venue: 'Prudential Center', status: 'TICKETS' },
  { id: 3, date: 'NOV 05', city: 'LONDON', venue: 'Wembley Stadium', status: 'LOW STOCK' },
  { id: 4, date: 'NOV 08', city: 'MEXICO CITY', venue: 'Foro Sol', status: 'TICKETS' },
  { id: 5, date: 'NOV 12', city: 'LOS ANGELES', venue: 'The Forum', status: 'SOLD OUT' },
  { id: 6, date: 'NOV 15', city: 'CHICAGO', venue: 'United Center', status: 'TICKETS' },
  { id: 7, date: 'NOV 20', city: 'SYDNEY', venue: 'Accor Stadium', status: 'TICKETS' },
];

const TOUR_TICKER_ITEMS = [
  'MCRMY ON TOUR 2026',
  'BLACK PARADE WORLD TOUR',
  'TICKETS ON SALE NOW',
  'WE WILL CARRY ON',
];
const HELENA_VIDEO_ID = 'UCCyoocDxBA';
const SPOTIFY_ARTIST_ID = '7FBcuc1gsnv6Y1nwFtNRCb';
const POPULAR_MCR_TRACKS = [
  {
    title: 'Welcome To The Black Parade',
    release: 'The Black Parade 2006',
    duration: '5:11',
    spotifyTrackId: '5wQnmLuC1W7ATsArWACrgW',
  },
  {
    title: 'Helena',
    release: 'Three Cheers for Sweet Revenge 2004',
    duration: '3:22',
    spotifyTrackId: '5dTHtzHFPyi8TlTtzoz1J9',
  },
  {
    title: "I'm Not Okay (I Promise)",
    release: 'Three Cheers for Sweet Revenge 2004',
    duration: '3:08',
    spotifyTrackId: '7lRlq939cDG4SzWOF4VAnd',
  },
  {
    title: 'Teenagers',
    release: 'The Black Parade 2006',
    duration: '2:41',
    spotifyTrackId: '7j31rVgGX9Q2blT92VBEA0',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-3 md:py-4 transition-all duration-300 ${isScrolled ? 'bg-black/85 backdrop-blur-md border-b border-white/10 shadow-[0_8px_26px_rgba(0,0,0,0.45)]' : 'bg-transparent'}`}>
      <div className="relative mx-auto flex max-w-[90rem] min-h-[72px] md:min-h-[88px] lg:min-h-[96px] items-center justify-between">
        <div className="relative z-10 hidden md:flex justify-start gap-8 text-[18px] uppercase tracking-[0.3em] font-medium">
          <a href="#news" className="hover:text-mcr-red transition-colors">News</a>
          <a href="#tour" className="hover:text-mcr-red transition-colors">Tour</a>
          <a href="#music" className="hover:text-mcr-red transition-colors">Music</a>
          <a href="#about" className="hover:text-mcr-red transition-colors">Parade</a>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src={mcrLogo}
            alt="My Chemical Romance"
            className="h-[60px] md:h-[74px] lg:h-[84px] w-auto object-contain"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </motion.div>

        <div className="relative z-10 flex items-center justify-end gap-2 md:gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#tour"
            className="hidden md:inline-flex h-10 items-center justify-center gap-2 px-4 border border-white/35 rounded-none text-[14px] leading-none font-medium uppercase tracking-[0.16em] text-white hover:bg-white hover:text-black transition-colors"
          >
            <Ticket size={14} className="shrink-0" />
            Buy Tickets
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/merch"
            className="hidden md:inline-flex h-10 items-center justify-center gap-2 px-4 border border-white/35 rounded-none text-[14px] leading-none font-medium uppercase tracking-[0.16em] text-white hover:bg-white hover:text-black transition-colors"
          >
            <ShoppingCart size={14} className="shrink-0" />
            Merch
          </motion.a>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black/98 backdrop-blur-xl p-8 flex flex-col gap-6 md:hidden border-b border-white/10"
        >
          <a href="#news" className="text-2xl font-sans uppercase tracking-widest" onClick={() => setIsOpen(false)}>News</a>
          <a href="#tour" className="text-2xl font-sans uppercase tracking-widest" onClick={() => setIsOpen(false)}>Tour</a>
          <a href="#music" className="text-2xl font-sans uppercase tracking-widest" onClick={() => setIsOpen(false)}>Music</a>
          <a href="#about" className="text-2xl font-sans uppercase tracking-widest" onClick={() => setIsOpen(false)}>Parade</a>
        </motion.div>
      )}
    </nav>
  );
};

const NewsSection = () => {
  const news = [
    {
      date: '2026.03.01',
      title: 'The Black Parade Returns: World Tour Announced',
      category: 'TOUR',
      image: newsTourImage,
      imageAlt: 'The Black Parade world tour key visual',
    },
    {
      date: '2026.02.15',
      title: 'Limited Edition Vinyl Box Set Pre-Order',
      category: 'MERCH',
      image: newsMerchImage,
      imageAlt: 'Limited edition vinyl box set promo image',
    },
    {
      date: '2026.01.10',
      title: 'A Message from the Band',
      category: 'NEWS',
      image: newsMessageImage,
      imageAlt: 'Band announcement visual',
    },
  ];

  return (
    <section id="news" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-4xl font-serif mb-4 uppercase tracking-widest">Latest News</h2>
        <div className="w-20 h-1 bg-mcr-red" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {news.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="mb-6 aspect-[16/10] overflow-hidden border border-mcr-red/20 bg-black">
              <img
                src={item.image}
                alt={item.imageAlt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="text-[10px] text-mcr-red mb-4 tracking-[0.3em] uppercase">{item.category} — {item.date}</div>
            <h3 className="text-2xl font-serif uppercase tracking-wider group-hover:text-mcr-red transition-colors leading-tight">
              {item.title}
            </h3>
            <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
              Read More <ArrowRight size={12} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const BannerSection = () => {
  return (
    <section
      className="relative h-[60vh] w-screen overflow-hidden bg-black"
      style={{marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)'}}
    >
      <iframe
        className="absolute top-1/2 left-1/2 h-[56.25vw] w-[177.78vh] min-h-full min-w-full max-w-none -translate-x-1/2 -translate-y-1/2 scale-[1.34] pointer-events-none grayscale brightness-50"
        src={`https://www.youtube.com/embed/${HELENA_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${HELENA_VIDEO_ID}&modestbranding=1&rel=0&playsinline=1`}
        title="My Chemical Romance - Helena"
        allow="autoplay; encrypted-media; picture-in-picture"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
    </section>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={newsMessageImage}
          alt="Gerard Way - The Black Parade" 
          className="w-full h-full object-cover opacity-80"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black" />
      </motion.div>
      
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-4"
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[24px] uppercase tracking-[0.8em] mb-6 block md:mt-4 font-medium text-white"
        >
          Welcome to the
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[14vw] md:text-[160px] font-serif leading-none mb-48 tracking-tight"
        >
          Black Parade <br />
          <span className="text-[red] opacity-80">World Tour</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12"
        >
          <div className="flex items-center gap-3 text-[44px] tracking-[0.3em] uppercase opacity-60">
            <Calendar size={24} />
            <span>2026</span>
          </div>
          <div className="w-px h-4 bg-mcr-red/40 hidden md:block" />
          <div className="flex items-center gap-3 text-[44px] tracking-[0.3em] uppercase opacity-60">
            <MapPin size={24} />
            <span>Worldwide</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] opacity-40">Join the parade</span>
        <div className="w-px h-12 bg-gradient-to-b from-mcr-red/60 to-transparent" />
      </motion.div>
    </section>
  );
};

const TourTicker = () => {
  const tickerItems = [...TOUR_TICKER_ITEMS, ...TOUR_TICKER_ITEMS];

  return (
    <section className="word-strip" aria-label="Tour ticker">
      <div className="word-strip-track">
        {tickerItems.map((item, index) => (
          <span key={`${item}-${index}`} className="word-strip-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

const TourSection = () => {
  return (
    <section id="tour" className="pt-50 pb-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <h2 className="text-6xl md:text-8xl font-serif mb-6">Tour Dates</h2>
          <p className="text-white/40 max-w-md text-lg leading-relaxed font-light">
            The march continues. Secure your place in the parade before it's too late.
          </p>
        </div>
        <div className="text-sm md:text-xl uppercase tracking-widest opacity-40 leading-none">
          2026 Schedule
        </div>
      </div>

      <div className="border-t border-mcr-red/20">
        {TOUR_DATES.map((tour, index) => (
          <motion.div 
            key={tour.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-[1fr_1.5fr_2fr_1fr] gap-4 md:gap-6 py-8 md:py-10 border-b border-mcr-red/10 items-center hover:bg-mcr-red/5 transition-colors px-4 -mx-4 cursor-pointer"
          >
            <div className="font-mono text-base md:text-2xl leading-none tracking-tight opacity-60">{tour.date}</div>
            <div className="text-2xl md:text-[3rem] leading-none font-serif">{tour.city}</div>
            <div className="hidden md:block text-base md:text-xl leading-none text-white/40">{tour.venue}</div>
            <div className="flex justify-end items-center gap-4">
              <span className={`text-base md:text-xl leading-none tracking-widest uppercase ${tour.status === 'SOLD OUT' ? 'text-mcr-red' : 'text-white/60'}`}>
                {tour.status}
              </span>
              <ChevronRight size={24} className="text-mcr-red opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-[10px] uppercase tracking-[0.4em] text-mcr-red mb-4 block">The Band</span>
          <h2 className="text-6xl md:text-8xl font-serif mb-8">My Chemical <br /> Romance</h2>
          <p className="text-white/60 text-xl leading-relaxed font-light mb-8">
            A decade of silence broken. The Black Parade returns to reclaim its throne. 
            This isn't just a tour; it's a resurrection.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-serif text-mcr-red mb-2">20+</div>
              <div className="text-[10px] uppercase tracking-widest opacity-40">Years of Chaos</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-mcr-red mb-2">4</div>
              <div className="text-[10px] uppercase tracking-widest opacity-40">Anthems for the Damned</div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 aspect-[4/5] rounded-none overflow-hidden grayscale border border-mcr-red/20">
          <img 
            src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop" 
            alt="The Black Parade March" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};

const ListenSection = () => {
  const [activeTrackId, setActiveTrackId] = React.useState(POPULAR_MCR_TRACKS[0].spotifyTrackId);
  const activeTrack = POPULAR_MCR_TRACKS.find((track) => track.spotifyTrackId === activeTrackId) ?? POPULAR_MCR_TRACKS[0];

  return (
    <section className="py-24 border-y border-white/10">
      <div className="w-screen" style={{marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)'}}>
        <div className="mx-auto w-full max-w-[90rem] px-6 md:px-10">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-mcr-red mb-3 block">Now Streaming</span>
              <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-widest">Popular Albums & Singles</h2>
            </div>
            <a
              href={`https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors"
            >
              Open Spotify <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[20rem_1fr] gap-0 border-y border-white/10">
            <a
              href={`https://open.spotify.com/artist/${SPOTIFY_ARTIST_ID}`}
              target="_blank"
              rel="noreferrer"
              className="group block bg-zinc-950/60 p-5 md:p-8 border-b border-white/10 lg:border-b-0 lg:border-r border-white/10"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={newsTourImage}
                  alt="My Chemical Romance featured cover"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="mt-4">
                <p className="text-lg font-serif uppercase tracking-wide">My Chemical Romance Essentials</p>
                <p className="text-xs uppercase tracking-[0.25em] text-white/50 mt-1">Artist Radio</p>
                <div className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-mcr-red">
                  <Play size={14} /> Listen on Spotify
                </div>
              </div>
            </a>

            <div className="bg-zinc-950/40 p-3 md:p-6 w-full">
              <iframe
                key={activeTrack.spotifyTrackId}
                src={`https://open.spotify.com/embed/track/${activeTrack.spotifyTrackId}?utm_source=generator&theme=0&autoplay=1`}
                className="w-full border-0"
                height="152"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="My Chemical Romance Spotify player"
              />

              <div className="mt-4 divide-y divide-white/10">
                {POPULAR_MCR_TRACKS.map((track, index) => (
                  <div
                    key={track.title}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveTrackId(track.spotifyTrackId)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setActiveTrackId(track.spotifyTrackId);
                      }
                    }}
                    className={`group/track grid grid-cols-[2rem_1fr_auto] items-center gap-3 py-3 transition-colors rounded-lg px-2 -mx-2 cursor-pointer ${
                      activeTrackId === track.spotifyTrackId ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]'
                    }`}
                  >
                    <div className="text-xs text-white/45">{String(index + 1).padStart(2, '0')}</div>
                    <div className="min-w-0">
                      <p className={`truncate text-sm md:text-base uppercase tracking-wide transition-colors ${
                        activeTrackId === track.spotifyTrackId ? 'text-mcr-red' : 'group-hover/track:text-mcr-red'
                      }`}>
                        {track.title}
                      </p>
                      <p className="truncate text-[10px] uppercase tracking-wider text-white/45">{track.release}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] uppercase tracking-wider text-white/45">{track.duration}</span>
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          setActiveTrackId(track.spotifyTrackId);
                        }}
                        aria-label={`Play ${track.title}`}
                        className={`inline-flex items-center justify-center transition-colors ${
                          activeTrackId === track.spotifyTrackId ? 'text-mcr-red' : 'text-white/60 hover:text-mcr-red'
                        }`}
                      >
                        <Play size={14} />
                      </button>
                      <a
                        href={`https://open.spotify.com/track/${track.spotifyTrackId}`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex items-center justify-center text-white/40 hover:text-white transition-colors"
                        aria-label={`Open ${track.title} on Spotify`}
                      >
                        <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MusicSection = () => {
  return (
    <section id="music" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square group overflow-hidden border border-mcr-red/20">
            <img 
              src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop" 
              alt="The Black Parade Album" 
              className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-mcr-red/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 rounded-none bg-mcr-red text-white flex items-center justify-center pl-1"
              >
                <Play fill="currentColor" size={24} />
              </motion.button>
            </div>
          </div>
          
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-mcr-red mb-4 block">The Masterpiece</span>
            <h2 className="text-6xl md:text-8xl font-serif mb-8">The Black <br /> Parade</h2>
            <p className="text-white/60 mb-12 text-xl leading-relaxed font-light">
              The definitive rock opera of a generation. Re-experience the journey of The Patient 
              through life, death, and the afterlife.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {['Spotify', 'Apple Music', 'Vinyl', 'Limited Edition'].map((platform) => (
                <button 
                  key={platform}
                  className="px-8 py-3 rounded-none border border-mcr-red/20 text-[10px] uppercase tracking-widest hover:border-mcr-red hover:text-mcr-red transition-colors"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-mcr-red/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="text-4xl font-serif mb-8 text-mcr-red">MCR</div>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed mb-8">
              We'll carry on. Join the MCRMY for exclusive tour updates and limited edition merchandise.
            </p>
            <div className="flex gap-6">
              <Instagram size={20} className="text-mcr-red/60 hover:text-mcr-red cursor-pointer transition-colors" />
              <Twitter size={20} className="text-mcr-red/60 hover:text-mcr-red cursor-pointer transition-colors" />
              <Youtube size={20} className="text-mcr-red/60 hover:text-mcr-red cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-widest mb-6 text-mcr-red">The March</h4>
            <ul className="flex flex-col gap-4 text-sm font-light">
              <li><a href="#tour" className="hover:text-mcr-red transition-colors">Tour Dates</a></li>
              <li><a href="#music" className="hover:text-mcr-red transition-colors">Discography</a></li>
              <li><a href="#about" className="hover:text-mcr-red transition-colors">The Parade</a></li>
              <li><a href="/merch" className="hover:text-mcr-red transition-colors">Merchandise</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-widest mb-6 text-mcr-red">Join the MCRMY</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-b border-mcr-red/20 py-2 text-xs focus:outline-none focus:border-mcr-red transition-colors w-full uppercase tracking-widest"
              />
              <button className="text-mcr-red/60 hover:text-mcr-red transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-mcr-red/10 gap-6">
          <div className="text-[9px] uppercase tracking-widest opacity-20">
            © 2026 MY CHEMICAL ROMANCE. WE'LL CARRY ON.
          </div>
          <div className="flex gap-8 text-[9px] uppercase tracking-widest opacity-20">
            <a href="/privacy" className="hover:opacity-100">Privacy</a>
            <a href="/terms" className="hover:opacity-100">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <TourTicker />
      <TourSection />
      <BannerSection />
      <AboutSection />
      <ListenSection />
      {/* Visuals Section */}
      <section className="py-24">
        <div className="w-screen" style={{marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)'}}>
          <div className="mx-auto w-full max-w-[90rem] px-6 md:px-10 mb-12">
            <span className="text-[10px] uppercase tracking-[0.4em] text-mcr-red mb-4 block">The Visuals</span>
            <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-widest">Captured in Chaos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-3 px-2 md:px-3">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 md:col-span-3 h-[18rem] md:h-[24rem] lg:h-[28rem]">
              <img src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2070&auto=format&fit=crop" alt="Live guitar performance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-mcr-red">Opening Night</p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <h3 className="text-lg md:text-2xl font-serif uppercase leading-none">Las Vegas</h3>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/75 whitespace-nowrap">Oct 24, 2026</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 md:col-span-6 h-[18rem] md:h-[24rem] lg:h-[28rem]">
              <img src="https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=2070&auto=format&fit=crop" alt="Back-to-back vocal performance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-mcr-red">Helena Live Cut</p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <h3 className="text-lg md:text-2xl font-serif uppercase leading-none">Double Vocal Set</h3>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/75 whitespace-nowrap">Tokyo, Japan 2019</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 md:col-span-3 h-[18rem] md:h-[24rem] lg:h-[28rem]">
              <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop" alt="Crowd hands in warm stage light" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-mcr-red">Crowd Energy</p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <h3 className="text-lg md:text-2xl font-serif uppercase leading-none">MCRMY Rise</h3>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/75 whitespace-nowrap">Chicago, 2026</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 md:col-span-4 h-[18rem] md:h-[24rem] lg:h-[28rem]">
              <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop" alt="Front vocalist in smoke and spotlight" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-mcr-red">Smoke + Lights</p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <h3 className="text-lg md:text-2xl font-serif uppercase leading-none">Main Stage</h3>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/75 whitespace-nowrap">London, 2026</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 md:col-span-5 h-[18rem] md:h-[24rem] lg:h-[28rem]">
              <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop" alt="Arena crowd and lights" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-mcr-red">Finale Moment</p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <h3 className="text-lg md:text-2xl font-serif uppercase leading-none">Confetti Storm</h3>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/75 whitespace-nowrap">Mexico City, 2026</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 md:col-span-3 h-[18rem] md:h-[24rem] lg:h-[28rem]">
              <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop" alt="Golden crowd and stage light" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-mcr-red">Encore</p>
                <div className="mt-2 flex items-end justify-between gap-3">
                  <h3 className="text-lg md:text-2xl font-serif uppercase leading-none">Last Light</h3>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-white/75 whitespace-nowrap">Sydney, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MusicSection />
      <NewsSection />

      <Footer />
    </div>
  );
}
