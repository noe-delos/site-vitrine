'use client';

import { Button } from '@/components/shadcn/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/shadcn/dropdown-menu';
import { i18n, Locale } from '@/i18n-config';
import { cn } from '@/utils/cn';
import { Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const currentLocale = pathname?.split('/')[1] || i18n.defaultLocale;

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  // Function to get the display name for each locale
  const getLocaleDisplayName = (locale: string) => {
    const names: Record<string, string> = {
      en: 'English',
      fr: 'Français',
      // Add more mappings as needed
    };
    return names[locale] || locale.toUpperCase();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="w-32 justify-start gap-2">
          <Globe className="h-4 w-4" />
          <span>{getLocaleDisplayName(currentLocale)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem key={locale} asChild>
            <Link
              href={redirectedPathname(locale)}
              className={cn(
                'w-full cursor-pointer',
                currentLocale === locale && 'font-medium',
              )}
            >
              {getLocaleDisplayName(locale)}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
