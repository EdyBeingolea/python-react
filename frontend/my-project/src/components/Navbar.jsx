import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 mb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-white font-bold text-xl">Mi Aplicación</NavLink>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink 
                  to="/" 
                  className={({isActive}) => 
                    isActive 
                      ? "bg-pink-700 text-white px-3 py-2 rounded-md text-sm font-medium" 
                      : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                  end
                >
                  Inicio
                </NavLink>
                <NavLink 
                  to="/productos" 
                  className={({isActive}) => 
                    isActive 
                      ? "bg-pink-700 text-white px-3 py-2 rounded-md text-sm font-medium" 
                      : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Productos
                </NavLink>
                <NavLink 
                  to="/acerca" 
                  className={({isActive}) => 
                    isActive 
                      ? "bg-pink-700 text-white px-3 py-2 rounded-md text-sm font-medium" 
                      : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Acerca de
                </NavLink>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              isActive 
                ? "bg-pink-700 text-white block px-3 py-2 rounded-md text-base font-medium" 
                : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            }
            onClick={() => setIsOpen(false)}
            end
          >
            Inicio
          </NavLink>
          <NavLink 
            to="/productos" 
            className={({isActive}) => 
              isActive 
                ? "bg-pink-700 text-white block px-3 py-2 rounded-md text-base font-medium" 
                : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            }
            onClick={() => setIsOpen(false)}
          >
            Productos
          </NavLink>
          <NavLink 
            to="/acerca" 
            className={({isActive}) => 
              isActive 
                ? "bg-pink-700 text-white block px-3 py-2 rounded-md text-base font-medium" 
                : "text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            }
            onClick={() => setIsOpen(false)}
          >
            Acerca de
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;