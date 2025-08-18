'use client';

import { FolderOpen, Github, Linkedin, Mail, Menu, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { useAnimation } from '@/contexts/animation-context';
import AnimationToggle from './animation-toggle';
import Logo from './logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAnimationEnabled, toggleAnimation } = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // Find the main element that contains the scrollable content
      const mainElement = document.querySelector('main');
      if (mainElement) {
        const scrolled = mainElement.scrollTop > 50;
        setIsScrolled(scrolled);
      }
    };

    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll);
      // Check initial scroll position
      handleScroll();
      return () => mainElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header
      className={`w-full transition-all duration-300 ${
        isScrolled
          ? 'px-4 py-4 sm:px-12 sm:py-6 lg:px-20 lg:py-8'
          : 'px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8'
      }`}
    >
      <div
        className={`glass-navbar w-full py-2 backdrop-blur-sm transition-all duration-300 ${
          isScrolled
            ? 'border-white/20 border-b px-3 lg:px-4'
            : 'border-transparent border-b px-2 lg:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 sm:gap-4 lg:flex">
            <AnimationToggle />

            <Button
              asChild
              className="border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              variant="ghost"
            >
              <a href="#projects">
                <FolderOpen className="mr-2 h-4 w-4" />
                Projects
              </a>
            </Button>

            <Button
              asChild
              className="border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              variant="ghost"
            >
              <a href="mailto:henrik@henrikkvamme.dev">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </a>
            </Button>

            <Button
              asChild
              className="border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              size="icon"
              variant="ghost"
            >
              <a
                aria-label="GitHub"
                href="https://github.com/henrik392"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              className="border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
              size="icon"
              variant="ghost"
            >
              <a
                aria-label="LinkedIn"
                href="https://linkedin.com/in/henrik-kvamme"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  aria-label="Open menu"
                  className="border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
                  size="icon"
                  variant="ghost"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 border border-white/20 bg-black/90 backdrop-blur-sm"
              >
                <DropdownMenuItem className="flex items-center justify-between text-white">
                  <div className="flex items-center">
                    <Zap className="mr-2 h-4 w-4" />
                    Animation
                  </div>
                  <Switch
                    checked={isAnimationEnabled}
                    className="data-[state=checked]:bg-white/20 data-[state=unchecked]:bg-white/10"
                    onCheckedChange={toggleAnimation}
                  />
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    className="flex items-center text-white hover:text-white/80"
                    href="https://github.com/henrik392"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    className="flex items-center text-white hover:text-white/80"
                    href="https://linkedin.com/in/henrik-kvamme"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    className="flex items-center text-white hover:text-white/80"
                    href="#projects"
                  >
                    <FolderOpen className="mr-2 h-4 w-4" />
                    Projects
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    className="flex items-center text-white hover:text-white/80"
                    href="mailto:henrik@henrikkvamme.dev"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
