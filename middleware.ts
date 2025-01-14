import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { i18n } from './i18n-config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
	const negotiatorHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
	const locales: string[] = [...i18n.locales];
	let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
		locales
	);
	return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;
	const pathnameIsMissingLocale = i18n.locales.every(
		(locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
	);

	const response = pathnameIsMissingLocale
		? NextResponse.redirect(
				new URL(
					`/${getLocale(request)}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
					request.url
				)
			)
		: NextResponse.next();

	response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');

	return response;
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
