// External libraries
import { createBrowserRouter } from "react-router";

// Modules Home
import HomeLayout from './modules/home/layout.jsx'
import HomePage from './modules/home/page.jsx';

// Modules Dashboard
import DashboardLayout from './modules/dashboard/layout.jsx'
import DashboardPage from './modules/dashboard/page.jsx';

// Modules Clues
import CluesLayout from "./modules/clues/layout.jsx";
import CluesPage from "./modules/clues/page.jsx";

// Modules Answers
import AnswersLayout from "./modules/answers/layout.jsx";
import AnswersPage from "./modules/answers/page.jsx";

// Modules Animations
import AnimationsLayout from "./modules/animations/layout.jsx";
import AnimationsPage from "./modules/animations/page.jsx";

export default createBrowserRouter([
    {
        "path": "/",
        "Component": HomeLayout,
        "children": [
            { index: true, Component: HomePage }
        ]
    },
    {
        "path": "/dashboard",
        "Component": DashboardLayout,
        "children": [
            { index: true, Component: DashboardPage }
        ]
    },
    {
        "path": "/clues",
        "Component": CluesLayout,
        "children": [
            { index: true, Component: CluesPage }
        ]
    },
    {
        "path": "/answers",
        "Component": AnswersLayout,
        "children": [
            { index: true, Component: AnswersPage }
        ]
    },
    {
        "path": "/animations",
        "Component": AnimationsLayout,
        "children": [
            { index: true, Component: AnimationsPage }
        ]
    }
]);