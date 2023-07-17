import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  const locale = req.nextUrl.locale;
    // req.cookies.get('NEXT_LOCALE')?.value || 'en';

  console.log('MW', req.nextUrl.pathname);
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
    ) {
      return;
  }


  // Swe to Eng redirects
  if (locale === 'en') {
    if (req.nextUrl.pathname === '/om-oss') {
      return NextResponse.redirect(
        new URL(
          `/en/about`,
          req.url,
        ),
      );
    }
    if (req.nextUrl.pathname === '/blogg') {
      return NextResponse.redirect(
        new URL(
          `/en/blog`,
          req.url,
        ),
      );
    }
    if (req.nextUrl.pathname === '/kontakt') {
      return NextResponse.redirect(
        new URL(
          `/en/contact`,
          req.url,
        ),
      );
    }
  }
  // Eng to Swe redirects
  if (locale === 'sv') {
    if (req.nextUrl.pathname === '/about') {
      return NextResponse.redirect(
        new URL(
          `/sv/om-oss`,
          req.url,
        ),
      );
    }
    if (req.nextUrl.pathname === '/blog') {
      return NextResponse.redirect(
        new URL(
          `/sv/blogg`,
          req.url,
        ),
      );
    }
    if (req.nextUrl.pathname === '/contact') {
      return NextResponse.redirect(
        new URL(
          `/sv/kontakt`,
          req.url,
        ),
      );
    }
  }
  if (req.nextUrl.pathname === '/post/undefined') {
    const blogUrl = locale === 'en' ? '/en/blog' : '/sv/blogg';
    console.log('MW post undefined', blogUrl);
    return NextResponse.redirect(
      new URL(
        `/`,
        req.url,
      ),
    );
  }

    console.log('MW', req.nextUrl.pathname);
  console.log('MW locale', locale);

  if (req.nextUrl.locale === 'default') {

    return NextResponse.redirect(
      new URL(
        `/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`,
        req.url,
      ),
    );
  }
}