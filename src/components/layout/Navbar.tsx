import React, { useEffect, useState } from 'react';
import { Menu, X, Download, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/resumeData';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

interface NavbarProps {
  onOpenResume?: () => void;
}

const NAV_LINKS = [
  { name: 'Identity', href: '#identity' },
  { name: 'Impact', href: '#impact' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Methodology', href: '#how-i-build' },
  { name: 'Skills', href: '#skills' },
  { name: 'Problem Solving', href: '#problem-solving' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scrollspy calculation
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-[#0d1424] border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm tracking-tighter group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all">
            VK
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-white group-hover:text-cyan-300 transition-colors">
              Vyankatesh Kulkarni
            </span>
            <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SOFTWARE ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0b101a]/70 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Resume, GitHub, LinkedIn, Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Vyankatesh_Kulkarni_Resume.pdf"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-800/60 hover:bg-cyan-900/50 hover:border-cyan-500 transition-all cursor-pointer"
            aria-label="Download Resume PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">RESUME</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 border border-transparent hover:border-white/10 transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 border border-transparent hover:border-white/10 transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 border border-white/5 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07090e]/98 border-b border-white/10 px-6 py-6 transition-all duration-300 backdrop-blur-2xl">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 py-2 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-slate-500">→</span>
              </a>
            ))}

            <div className="pt-4 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Vyankatesh_Kulkarni_Resume.pdf"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-mono text-center bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
