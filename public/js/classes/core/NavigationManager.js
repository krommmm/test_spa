export class NavigationManager {
    constructor(routes) {
        this.routes = routes;

        window.addEventListener("popstate", (event) => {
            const page = event.state?.page || this.getPageFromURL();
            this.navigate(page, false);
        });
    }

    getPageFromURL() {
        const path = window.location.pathname;
        const segments = path.split('/').filter(Boolean); // ["harry", "fans"]

        if (segments.length === 1) {
            return segments[0] + 'page'; // "harry" -> "harrypage"
        }

        if (segments.length === 2) {
            return segments.join('_') + 'page'; // "harry/fans" -> "harry_fanspage"
        }

        return null;
    }

    show404(){
        const el = document.querySelector('#root');
        if (el) {
            el.innerHTML = `<h2>404</h2><p>Page introuvable</p>`;
        }
    }

    navigate(pageKey, push = true) {
        const controller = this.routes[pageKey];

        if (!controller) {
            this.show404();
            return;
        }

        if (push) {
            const url = `/${pageKey.replace('_', '/')}`;
            history.pushState({ page: pageKey }, '', url);
        }

        controller.show();
    }

    init() {
        const initialPage = this.getPageFromURL() || 'harrypage';
        this.navigate(initialPage, false);
    }
}
