export class NavigationEventBinder {
    constructor(navigationManager) {
        this.navigationManager = navigationManager;
    }

    bindEventEachDataPageAttributes() {
        const elements = document.querySelectorAll('[data-page]');
        elements.forEach((el) => {
            if (el) {
                const page = el.getAttribute('data-page');
                el.addEventListener('click', () => {
                    this.navigationManager.navigate(page);
                });
            }
        })
    }

    bindLinkClicks() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[data-link]');
            if (link) {
                e.preventDefault();
                const path = link.getAttribute('href'); // "/harry/fans"
                const segments = path.split('/').filter(Boolean);
                let page = segments.join('_') + 'page'; // "harry/fans" -> "harry_fanspage"
                this.navigationManager.navigate(page);
            }
        });
    }
}
