import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords, image }) => {
    const location = useLocation();
    const canonicalUrl = `https://technovanam.in${location.pathname}`;
    const siteName = "Techno Vanam";
    const defaultTitle = "Techno Vanam | Premium Digital Studio";
    const defaultDesc = "Techno Vanam is a premium design and development studio specializing in UI/UX, Branding, and Digital Products for global startups and creators.";
    const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;

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

        // Update Keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = keywords || "Techno Vanam, Techno, Vanam, TechnoVanam, Athlixir, WebBrain, Youth Platform, Digital Studio India, UI/UX Design, Web Development, Branding Agency, Creative Studio Chennai, Design Agency Dubai, Premium Digital Studio, UI Design, UX Design, User Experience, User Interface, Web Design, Mobile App Design, App Development, Website Development, Frontend Development, Backend Development, React Development, Product Design, SaaS Design, Startup Design, Brand Identity, Logo Design, Visual Identity, Graphic Design, SEO Optimization, Performance Optimization, Website Redesign, Landing Page Design, Portfolio Design, Design System, Wireframing, Prototyping, Figma Design, Creative Direction, Sports Tech, AI Sports, Athlete Management, Browser Extension, Productivity Tools, EdTech Platform, Startup Resources, Innovation Studio, Creative Agency India, Web Agency Dubai, Global Design Studio, Remote Design Team, UI/UX Experts, Web Developers India, Branding Experts, Digital Marketing, Growth Strategy, Mobile First Design, Responsive Design, Modern Web Design, Premium Websites, Startup Branding, Tech Branding, SaaS Branding, B2B Design, Enterprise Design, Scalable Design, MVP Development, Product Launch, Digital Transformation, Technology Partners";

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
        updateOG('og:image', image || '/Logo.png');
        updateOG('og:type', 'website');

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
        updateTwitter('twitter:image', image || '/Logo.png');

    }, [fullTitle, description, keywords, image, canonicalUrl]);

    return null;
};

export default SEO;
