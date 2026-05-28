const updateActiveLinks = () => {
    const { origin, hash, pathname, href } = window.location;

    document.querySelectorAll('.navigation a').forEach((link) => {
        const linkUrl = new URL(link.href, origin);
        const isLinkHomePage = linkUrl.pathname === "/" && linkUrl.hash === "";
        const isLinkAboutUs = linkUrl.pathname === "/" && linkUrl.hash === "#o-nas";
        let isActive = false;

        isActive = pathname.startsWith(linkUrl.pathname);

        if (isLinkHomePage) {
            isActive = pathname === "/" && hash === "";
        }

        if (isLinkAboutUs) {
            isActive = pathname === "/" && hash === "#o-nas";
        }

        link.closest('li')?.classList.toggle('link--active', isActive);
    });
};

const init = () => {
    updateActiveLinks();
    window.addEventListener('hashchange', updateActiveLinks, { passive: true });
};

if ('requestIdleCallback' in window) {
    window.requestIdleCallback(init);
} else {
    setTimeout(init, 1);
}