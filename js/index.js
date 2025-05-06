import { HarryView } from "./classes/views/HarryView.js";
import { HermioneView } from "./classes/views/HermioneView.js";
import { RonView } from "./classes/views/RonView.js";
import { HarryFansView } from "./classes/views/HarryFansView.js";

import { HarryCtrl } from "./classes/controllers/HarryCtrl.js";
import { HermioneCtrl } from "./classes/controllers/HermioneCtrl.js";
import { RonCtrl } from "./classes/controllers/RonCtrl.js";
import { HarryFansCtrl } from "./classes/controllers/HarryFansCtrl.js";

import { NavigationManager } from "./classes/core/NavigationManager.js";
import { NavigationEventBinder } from "./classes/core/NavigationEventBinder.js";

const harryView = new HarryView();
const hermioneView = new HermioneView();
const ronView = new RonView();
const harryFansView = new HarryFansView();

const harryCtrl = new HarryCtrl(harryView);
const hermioneCtrl = new HermioneCtrl(hermioneView);
const ronCtrl = new RonCtrl(ronView);
const harryFansCtrl = new HarryFansCtrl(harryFansView);

const routes = {
    "harrypage": harryCtrl,
    "hermionepage": hermioneCtrl,
    "ronpage": ronCtrl,
    "harry_fanspage": harryFansCtrl // Ajout de la nouvelle route
};

const navigationManager = new NavigationManager(routes);
navigationManager.init();

const navigationEventBinder = new NavigationEventBinder(navigationManager);
navigationEventBinder.bindEventEachDataPageAttributes();
navigationEventBinder.bindLinkClicks(); // Gérer les liens
