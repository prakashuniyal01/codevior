
import { ReactNode, useState, useEffect } from 'react'
import { NavLink, useLocation, Outlet } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const MainLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false)
  }, [location.pathname])
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Software Development', path: '/services/software-development' },
        { name: 'AI Development', path: '/services/ai-development' },
        { name: 'Trading Bots', path: '/services/trading-bots' }
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Tech Stack', path: '/tech-stack' },
    { name: 'Contact', path: '/contact' }
  ]
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold gradient-text">
            CODEVIOR
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative group">
                  <button className="flex items-center space-x-1 py-2 text-foreground/80 hover:text-primary transition-colors">
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg glass overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top">
                    <div className="py-1">
                      {item.dropdown.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.path}
                          className={({ isActive }) => 
                            `block px-4 py-2 text-sm ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'} transition-colors`
                          }
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `py-2 link-underline ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'} transition-colors`
                  }
                >
                  {item.name}
                </NavLink>
              )
            ))}
          </nav>
          
          {/* Contact Us Button */}
          <div className="hidden md:block">
            <Button asChild variant="default">
              <NavLink to="/contact">Contact Us</NavLink>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col md:hidden pt-20 pb-6 px-4">
          <nav className="flex-1 overflow-y-auto">
            <ul className="space-y-4 px-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.dropdown ? (
                    <div className="mb-2">
                      <div className="text-lg font-medium text-primary mb-2">
                        {item.name}
                      </div>
                      <ul className="pl-4 space-y-2 border-l-2 border-primary/30">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.name}>
                            <NavLink
                              to={subItem.path}
                              className={({ isActive }) => 
                                `block py-1 ${isActive ? 'text-primary' : 'text-foreground/70 hover:text-primary'} transition-colors`
                              }
                            >
                              {subItem.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => 
                        `block text-lg ${isActive ? 'text-primary font-medium' : 'text-foreground/70 hover:text-primary'} transition-colors`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      
      {/* Main Content */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="glass mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">CODEVIOR</h3>
              <p className="text-foreground/70 mb-4">
                Transforming ideas into intelligent software solutions with AI, ML, and cutting-edge development.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><NavLink to="/services/software-development" className="text-foreground/70 hover:text-primary transition-colors">Software Development</NavLink></li>
                <li><NavLink to="/services/ai-development" className="text-foreground/70 hover:text-primary transition-colors">AI Development</NavLink></li>
                <li><NavLink to="/services/trading-bots" className="text-foreground/70 hover:text-primary transition-colors">Trading Bots</NavLink></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><NavLink to="/about" className="text-foreground/70 hover:text-primary transition-colors">About Us</NavLink></li>
                <li><NavLink to="/tech-stack" className="text-foreground/70 hover:text-primary transition-colors">Tech Stack</NavLink></li>
                <li><NavLink to="/portfolio" className="text-foreground/70 hover:text-primary transition-colors">Portfolio</NavLink></li>
                <li><NavLink to="/contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</NavLink></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="not-italic text-foreground/70">
                <p className="mb-2">123 Innovation Street</p>
                <p className="mb-2">Tech City, TC 12345</p>
                <p className="mb-2">
                  <a href="mailto:contact@codevior.com" className="hover:text-primary transition-colors">contact@codevior.com</a>
                </p>
                <p>
                  <a href="tel:+11234567890" className="hover:text-primary transition-colors">+1 (123) 456-7890</a>
                </p>
              </address>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-foreground/50 text-sm">
                &copy; {new Date().getFullYear()} Codevior. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <NavLink to="/privacy" className="text-foreground/50 hover:text-primary transition-colors text-sm">Privacy Policy</NavLink>
                <NavLink to="/terms" className="text-foreground/50 hover:text-primary transition-colors text-sm">Terms of Service</NavLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
