import './globals.css'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Script from 'next/script'

export const metadata = {
  title: 'Photographer Booking',
  description: 'Find and book photographers'
}

export default function RootLayout({ children }){
  return (
    <html lang="en">
      <head>
        {/* Theme CSS (served from public/theme) */}
        <link rel="stylesheet" href="/theme/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/theme/assets/css/iconsax.css" />
        <link rel="stylesheet" href="/theme/assets/css/custom.css" />
      </head>
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />

        {/* Theme scripts (some depend on jQuery) */}
        <Script src="/theme/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/theme/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/theme/assets/js/aos.js" strategy="afterInteractive" />
        <Script src="/theme/assets/js/script.js" strategy="afterInteractive" />
        <Script src="/theme/assets/js/theme-script.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
