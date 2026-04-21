import { useEffect } from 'react';

const BASE_URL = 'https://gokyolaketrek.com';

interface SEOProps {
  title: string;
  description: string;
  /** Relative path for this page, e.g. "/trek". Defaults to the site root. */
  canonical?: string;
}

export default function SEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | Gokyo Explorer`;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Update canonical link
    const canonicalHref = canonical
      ? `${BASE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
      : BASE_URL;

    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonicalHref);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', canonicalHref);
      document.head.appendChild(linkCanonical);
    }
  }, [title, description, canonical]);

  return null;
}
