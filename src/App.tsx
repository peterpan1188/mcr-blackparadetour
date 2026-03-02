import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Ticket, 
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

const TOUR_DATES = [
  { id: 1, date: 'OCT 24', city: 'LAS VEGAS', venue: 'When We Were Young Festival', status: 'SOLD OUT' },
  { id: 2, date: 'NOV 02', city: 'NEW JERSEY', venue: 'Prudential Center', status: 'TICKETS' },
  { id: 3, date: 'NOV 05', city: 'LONDON', venue: 'Wembley Stadium', status: 'LOW STOCK' },
  { id: 4, date: 'NOV 08', city: 'MEXICO CITY', venue: 'Foro Sol', status: 'TICKETS' },
  { id: 5, date: 'NOV 12', city: 'LOS ANGELES', venue: 'The Forum', status: 'SOLD OUT' },
  { id: 6, date: 'NOV 15', city: 'CHICAGO', venue: 'United Center', status: 'TICKETS' },
  { id: 7, date: 'NOV 20', city: 'SYDNEY', venue: 'Accor Stadium', status: 'TICKETS' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mcr-logo text-white"
      >
        My Chemical Romance
      </motion.div>
      
      <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.4em] font-medium">
        <a href="#news" className="hover:text-mcr-red transition-colors">News</a>
        <a href="#tour" className="hover:text-mcr-red transition-colors">Tour</a>
        <a href="#music" className="hover:text-mcr-red transition-colors">Music</a>
        <a href="#about" className="hover:text-mcr-red transition-colors">Parade</a>
      </div>

      <div className="flex items-center gap-6">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 border border-white/10 rounded-none text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
        >
          Store
        </motion.button>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
    { date: '2026.03.01', title: 'The Black Parade Returns: World Tour Announced', category: 'TOUR' },
    { date: '2026.02.15', title: 'Limited Edition Vinyl Box Set Pre-Order', category: 'MERCH' },
    { date: '2026.01.10', title: 'A Message from the Band', category: 'NEWS' },
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
            <div className="text-[10px] text-mcr-red mb-4 tracking-[0.3em] uppercase">{item.category} — {item.date}</div>
            <h3 className="text-2xl font-sans uppercase tracking-wider group-hover:text-mcr-red transition-colors leading-tight">
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
    <section className="relative h-[60vh] overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop" 
        alt="MCR Live Banner" 
        className="w-full h-full object-cover grayscale brightness-50"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-[0.2em] text-glow">So Long and Goodnight</h2>
        </motion.div>
      </div>
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
          src="https://ais-dev-ktxd37xvc3lw2r37wqjslo-540073296507.asia-southeast1.run.app/api/attachments/Step-57-0.png" 
          alt="Gerard Way - The Black Parade" 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
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
          className="text-[12px] uppercase tracking-[0.8em] mb-6 block font-medium text-mcr-red"
        >
          Welcome to the
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[14vw] md:text-[10vw] font-serif leading-none mb-8 tracking-tight"
        >
          Black Parade <br />
          <span className="text-mcr-silver opacity-80">World Tour</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12"
        >
          <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase opacity-60">
            <Calendar size={14} />
            <span>2026</span>
          </div>
          <div className="w-px h-4 bg-mcr-red/40 hidden md:block" />
          <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase opacity-60">
            <MapPin size={14} />
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

const TourSection = () => {
  return (
    <section id="tour" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <h2 className="text-6xl md:text-8xl font-serif mb-6">Tour Dates</h2>
          <p className="text-white/40 max-w-md text-lg leading-relaxed font-light">
            The march continues. Secure your place in the parade before it's too late.
          </p>
        </div>
        <div className="text-[10px] uppercase tracking-widest opacity-40">
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
            className="group grid grid-cols-2 md:grid-cols-4 py-10 border-b border-mcr-red/10 items-center hover:bg-mcr-red/5 transition-colors px-4 -mx-4 cursor-pointer"
          >
            <div className="font-mono text-sm tracking-tighter opacity-60">{tour.date}</div>
            <div className="text-2xl font-serif">{tour.city}</div>
            <div className="hidden md:block text-sm text-white/40">{tour.venue}</div>
            <div className="flex justify-end items-center gap-4">
              <span className={`text-[10px] tracking-widest uppercase ${tour.status === 'SOLD OUT' ? 'text-mcr-red' : 'text-white/60'}`}>
                {tour.status}
              </span>
              <ChevronRight size={16} className="text-mcr-red opacity-0 group-hover:opacity-100 transition-opacity" />
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
      <NewsSection />
      <BannerSection />
      <TourSection />
      <AboutSection />
      <MusicSection />
      
      {/* Visuals Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-mcr-red mb-4 block">The Visuals</span>
            <h2 className="text-4xl font-serif uppercase tracking-widest">Captured in Chaos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <div className="aspect-[4/5] overflow-hidden border border-white/5">
                <img src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2070&auto=format&fit=crop" alt="MCR 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square overflow-hidden border border-white/5">
                <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop" alt="MCR 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="aspect-square overflow-hidden border border-white/5">
                <img src="https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=2070&auto=format&fit=crop" alt="MCR 3" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[4/5] overflow-hidden border border-white/5">
                <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop" alt="MCR 4" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-[4/5] overflow-hidden border border-white/5">
                <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop" alt="MCR 5" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square overflow-hidden border border-white/5">
                <img src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop" alt="MCR 6" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
