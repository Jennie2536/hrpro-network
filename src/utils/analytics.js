import ReactGA from 'react-ga4';

// Initialize GA4
export const initGA = () => {
    ReactGA.initialize('G-HZE3QKD383', {
        gaOptions: {
            send_page_view: true
        }
    });
};

// Track network application started
export const trackApplicationStarted = (sourcePage) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'network_application_started', {
            source_page: sourcePage
        });
    }
};

// Track network application submitted
export const trackApplicationSubmitted = (professionalType = 'hr_professional') => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'network_application_submitted', {
            professional_type: professionalType
        });
    }
};

// Track contact form submission
export const trackContactFormSubmitted = (inquiryType, sourcePage) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'contact_form_submitted', {
            inquiry_type: inquiryType,
            source_page: sourcePage
        });
    }
};

// Track resource engagement (case studies, articles, webinars)
export const trackResourceEngagement = (resourceType, resourceTitle) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'resource_engagement', {
            resource_type: resourceType,
            resource_title: resourceTitle
        });
    }
};

// Track resource downloads
export const trackResourceDownload = (resourceName) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'resource_download', {
            resource_name: resourceName
        });
    }
};

// Track all CTA clicks
export const trackCTAClick = (ctaName, ctaLocation) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'cta_click', {
            cta_name: ctaName,
            cta_location: ctaLocation
        });
    }
};

// Track navigation engagement
export const trackNavigationClick = (destination) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'navigation_engagement', {
            destination: destination
        });
    }
};