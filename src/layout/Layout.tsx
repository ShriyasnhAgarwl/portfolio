import { ReactNode } from 'react';
import Navbar from './Navbar';
import { ThemeProvider } from '../context/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900">
        <Navbar />
        <main className="pt-20 bg-white dark:bg-gray-900">
          {children}
        </main>
        <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-8 text-center border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;

