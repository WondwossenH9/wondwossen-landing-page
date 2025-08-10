'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-9 h-9 p-0 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors">
        <Sun className="w-4 h-4" />
      </button>
    );
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    if (theme === 'light') {
      return <Sun className="w-4 h-4" />;
    } else if (theme === 'dark') {
      return <Moon className="w-4 h-4" />;
    } else {
      // System theme - show monitor icon
      return <Monitor className="w-4 h-4" />;
    }
  };

  const getTooltip = () => {
    if (theme === 'light') {
      return 'Switch to dark mode';
    } else if (theme === 'dark') {
      return 'Switch to system preference';
    } else {
      return `System preference (${resolvedTheme === 'dark' ? 'dark' : 'light'})`;
    }
  };

  const getSystemThemeText = () => {
    if (resolvedTheme === 'dark') {
      return 'System (Dark)';
    } else {
      return 'System (Light)';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 p-0 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors relative group"
      aria-label={getTooltip()}
      title={getTooltip()}
    >
      {getIcon()}
      {/* Tooltip for system theme */}
      {theme === 'system' && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
          {getSystemThemeText()}
        </div>
      )}
    </button>
  );
} 