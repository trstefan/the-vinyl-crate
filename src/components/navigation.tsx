"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Music, Search, User, Home } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
  const { setTheme, theme } = useTheme();

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <Music className="h-6 w-6" />
          <span className="text-lg font-bold">The Vinyl Create</span>
        </div>

        <div className="flex items-center space-x-6 mx-6">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:text-primary"
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link
            href="/discover"
            className="flex items-center space-x-2 hover:text-primary"
          >
            <Search className="h-4 w-4" />
            <span>Discover</span>
          </Link>
          <Link
            href="/profile"
            className="flex items-center space-x-2 hover:text-primary"
          >
            <User className="h-4 w-4" />
            <span>Profile</span>
          </Link>
        </div>

        <div className="ml-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
