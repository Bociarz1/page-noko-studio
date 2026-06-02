const updateActiveLinks = () => {
    const { origin, hash, pathname, href } = window.location;

    document.querySelectorAll('.header-nav__link, .mobile-nav__link').forEach((link) => {
        const linkElement = link as HTMLAnchorElement;
        const linkUrl = new URL(linkElement.href, origin);
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

        // Apply correct BEM modifier depending on which menu it is
        if (linkElement.classList.contains('header-nav__link')) {
            linkElement.closest('li')?.classList.toggle('header-nav__item--active', isActive);
        } else if (linkElement.classList.contains('mobile-nav__link')) {
            linkElement.closest('li')?.classList.toggle('mobile-nav__item--active', isActive);
        }
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