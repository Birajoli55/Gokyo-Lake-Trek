import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/trek', changefreq: 'weekly', priority: 0.9 },
  { url: '/departures', changefreq: 'daily', priority: 0.9 },
  { url: '/ultimate-guide', changefreq: 'weekly', priority: 0.9 },
  { url: '/itineraries', changefreq: 'weekly', priority: 0.8 },
  { url: '/trek/12-days', changefreq: 'monthly', priority: 0.8 },
  { url: '/trek/7-days', changefreq: 'monthly', priority: 0.7 },
  { url: '/trek/9-days', changefreq: 'monthly', priority: 0.7 },
  { url: '/trek/15-days', changefreq: 'monthly', priority: 0.7 },
  { url: '/trek/18-days', changefreq: 'monthly', priority: 0.7 },
  { url: '/trek/20-days', changefreq: 'monthly', priority: 0.7 },
  { url: '/planning', changefreq: 'weekly', priority: 0.8 },
  { url: '/planning/permits-fees', changefreq: 'monthly', priority: 0.7 },
  { url: '/planning/cost-breakdown', changefreq: 'monthly', priority: 0.7 },
  { url: '/planning/budget-calculator', changefreq: 'monthly', priority: 0.7 },
  { url: '/planning/best-time-to-visit', changefreq: 'monthly', priority: 0.7 },
  { url: '/planning/flights', changefreq: 'monthly', priority: 0.7 },
  { url: '/planning/food-water', changefreq: 'monthly', priority: 0.7 },
  { url: '/safety', changefreq: 'weekly', priority: 0.8 },
  { url: '/safety/altitude-sickness', changefreq: 'monthly', priority: 0.7 },
  { url: '/safety/travel-insurance', changefreq: 'monthly', priority: 0.7 },
  { url: '/safety/first-aid', changefreq: 'monthly', priority: 0.7 },
  { url: '/safety/emergency-contacts', changefreq: 'monthly', priority: 0.7 },
  { url: '/places', changefreq: 'weekly', priority: 0.8 },
  { url: '/places/namche-bazaar', changefreq: 'monthly', priority: 0.7 },
  { url: '/places/gokyo-village', changefreq: 'monthly', priority: 0.7 },
  { url: '/places/lukla', changefreq: 'monthly', priority: 0.7 },
  { url: '/places/phortse', changefreq: 'monthly', priority: 0.7 },
  { url: '/places/machhermo', changefreq: 'monthly', priority: 0.7 },
  { url: '/places/gokyo-ri', changefreq: 'monthly', priority: 0.7 },
  { url: '/gear', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog', changefreq: 'daily', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  { url: '/terms-of-service', changefreq: 'yearly', priority: 0.3 },
];

async function generate() {
  const stream = new SitemapStream({ hostname: 'https://gokyolaketrek.com' });
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );

  const writeStream = createWriteStream('./public/sitemap.xml');
  writeStream.write(xml);
  writeStream.end();
  
  console.log('✅ Sitemap generated successfully in ./public/sitemap.xml');
}

generate().catch(console.error);
