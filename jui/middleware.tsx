import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  console.log('MW', req.nextUrl.pathname);
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
    ) {
      return;
  }


  if (req.nextUrl.pathname === '/om-oss') {

  }

    console.log('MW', req.nextUrl.pathname);
  const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en';
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