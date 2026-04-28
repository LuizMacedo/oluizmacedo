import Script from "next/script";
import { siteConfig } from "@/lib/constants";

export function GoogleAnalytics() {
  const measurementId = siteConfig.ga4MeasurementId;

  if (!measurementId) return null;

  return (
    <>
      <Script id="google-analytics-consent" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: (typeof localStorage !== 'undefined' && localStorage.getItem('cookie-consent') === 'denied') ? 'denied' : 'granted'
          });
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
