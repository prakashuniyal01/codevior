// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import Logo from "@/components/layout/Logo";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Portfolio", path: "/portfolio" },
//     { name: "Partners", path: "/partners" },
//     { name: "Tech", path: "/tech" },
//     { name: "Contact", path: "/contact" },
//     { name: "Career", path: "/career" },
//   ];

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="fixed top-0 left-0 z-50 w-full border-b backdrop-blur-lg bg-background/70 border-white/10">
//       <div className="container px-4 py-4 mx-auto">
//         <div className="flex items-center justify-between">
//           <Logo />

//           {/* Desktop Navigation */}
//           <nav className="items-center hidden space-x-8 md:flex">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`text-sm font-medium transition-colors hover:text-primary ${
//                   location.pathname === item.path
//                     ? "text-white"
//                     : "text-muted-foreground"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Navigation Button */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden"
//             onClick={toggleMenu}
//             aria-label="Toggle Menu"
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="absolute w-full border-b md:hidden bg-background border-white/10 animate-fade-in">
//           <nav className="container flex flex-col px-4 py-4 mx-auto space-y-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`text-base font-medium py-2 transition-colors hover:text-primary ${
//                   location.pathname === item.path
//                     ? "text-white"
//                     : "text-muted-foreground"
//                 }`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/components/layout/Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // Services item is handled separately with dropdown
    { name: "Portfolio", path: "/portfolio" },
    { name: "Partners", path: "/partners" },
    { name: "Career", path: "/career" },
    { name: "Tech", path: "/tech" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceCategories = [
    { 
      title: "AI & Data Science", 
      path: "/services#ai-data-science",
      items: [
        { name: "AI & NLP Solutions", path: "/services/ai-nlp" },
        { name: "Data Science & Analytics", path: "/services/data-science" },
        { name: "Agentic AI Solutions", path: "/services/agentic-ai" },
        { name: "Machine Learning Ops", path: "/services/mlops" },
        { name: "Research & Development", path: "/services/research" },
        { name: "Computer Vision", path: "/services/computer-vision" }
      ]
    },
    { 
      title: "Software & Design", 
      path: "/services#software-design",
      items: [
        { name: "Web Development", path: "/services/web-development" },
        { name: "UI/UX Design", path: "/services/ui-ux-design" },
        { name: "Cloud Solutions", path: "/services/cloud" },
        { name: "Data Analytics", path: "/services/data-analytics" },
        { name: "DevOps", path: "/services/devops" },
        { name: "Tech Talent Solutions", path: "/services/talent" }
      ]
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isServicesRoute = location.pathname.startsWith("/services");

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b backdrop-blur-lg bg-background/70 border-white/10">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 md:flex">
            {navItems.map((item, index) => {
              // Add Services dropdown between About and Portfolio
              if (index === 1) {
                return (
                  <>
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        location.pathname === item.path
                          ? "text-white"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                    <NavigationMenu key="services-menu">
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger 
                            className={`text-sm font-medium transition-colors hover:text-primary ${
                              isServicesRoute ? "text-white" : "text-muted-foreground"
                            }`}
                          >
                            Services
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="grid grid-cols-2 gap-3 p-4 w-[600px]">
                              {serviceCategories.map((category) => (
                                <div key={category.title} className="space-y-2">
                                  <Link 
                                    to={category.path}
                                    className="text-sm font-medium hover:text-primary"
                                  >
                                    {category.title}
                                  </Link>
                                  <ul className="space-y-1">
                                    {category.items.map((item) => (
                                      <li key={item.name}>
                                        <NavigationMenuLink asChild>
                                          <Link
                                            to={item.path}
                                            className={cn(
                                              "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm text-muted-foreground",
                                              location.pathname === item.path && "bg-accent text-accent-foreground"
                                            )}
                                          >
                                            {item.name}
                                          </Link>
                                        </NavigationMenuLink>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </>
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? "text-white"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute w-full border-b md:hidden bg-background border-white/10 animate-fade-in">
          <nav className="container flex flex-col px-4 py-4 mx-auto space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-medium py-2 transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-white"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Services with expanded sub-items for mobile */}
            <div className="py-2">
              <Link
                to="/services"
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isServicesRoute ? "text-white" : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <div className="mt-2 ml-4 space-y-2">
                {serviceCategories.map((category) => (
                  <div key={category.title} className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">{category.title}</p>
                    <ul className="ml-2 space-y-1">
                      {category.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            className="text-sm text-muted-foreground hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;