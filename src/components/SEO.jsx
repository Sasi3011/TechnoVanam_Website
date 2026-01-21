import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, image, type = 'website' }) => {
    const location = useLocation();
    const baseUrl = 'https://technovanam.in';
    const canonicalUrl = `${baseUrl}${location.pathname}`;
    const siteName = "Techno Vanam";
    const defaultTitle = "Techno Vanam | Premium Digital Studio";
    const defaultDesc = "Premium UI/UX Design & Web Development Studio. World-class digital experiences, scalable web applications, and brand identities for startups and enterprises.";
    const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
    const fullImage = image ? (image.startsWith('http') ? image : `${baseUrl}${image}`) : `${baseUrl}/Logo.png`;

    useEffect(() => {
        // Update Title
        document.title = fullTitle;

        // Update Meta Description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.content = description || defaultDesc;

        // Remove keywords meta tag (not used by Google, can hurt SEO)
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.remove();
        }

        // Update Canonical Link
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
            linkCanonical = document.createElement('link');
            linkCanonical.rel = 'canonical';
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.href = canonicalUrl;

        // Open Graph
        const updateOG = (property, content) => {
            let ogMeta = document.querySelector(`meta[property="${property}"]`);
            if (!ogMeta) {
                ogMeta = document.createElement('meta');
                ogMeta.setAttribute('property', property);
                document.head.appendChild(ogMeta);
            }
            ogMeta.content = content;
        };

        updateOG('og:title', fullTitle);
        updateOG('og:description', description || defaultDesc);
        updateOG('og:url', canonicalUrl);
        updateOG('og:image', fullImage);
        updateOG('og:type', type);
        updateOG('og:site_name', siteName);

        // Twitter Card
        const updateTwitter = (name, content) => {
            let twitterMeta = document.querySelector(`meta[name="${name}"]`);
            if (!twitterMeta) {
                twitterMeta = document.createElement('meta');
                twitterMeta.name = name;
                document.head.appendChild(twitterMeta);
            }
            twitterMeta.content = content;
        };

        updateTwitter('twitter:card', 'summary_large_image');
        updateTwitter('twitter:title', fullTitle);
        updateTwitter('twitter:description', description || defaultDesc);
        updateTwitter('twitter:image', fullImage);

        // Add Structured Data (JSON-LD) for WebPage
        let existingScript = document.querySelector('script[data-seo-schema]');
        if (existingScript) {
            existingScript.remove();
        }

        const schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        schemaScript.setAttribute('data-seo-schema', 'true');
        schemaScript.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": fullTitle,
            "description": description || defaultDesc,
            "url": canonicalUrl,
            "inLanguage": "en-US",
            "isPartOf": {
                "@type": "WebSite",
                "name": siteName,
                "url": baseUrl
            },
            "about": {
                "@type": "Organization",
                "name": siteName
            }
        });
        document.head.appendChild(schemaScript);

    }, [fullTitle, description, keywords, fullImage, canonicalUrl, type, baseUrl, siteName, defaultDesc]);

    return null;
};

export default SEO;
