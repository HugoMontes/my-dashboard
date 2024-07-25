import { Routes } from '@angular/router';

export const routes: Routes = [
    // Crear la ruta principal /dashboard
    {
        // Agregar nombre de la ruta
        path: 'dashboard',
        // Cargar el componente
        loadComponent: () => import('./dashboard/dashboard.component'),
        // Agregar grupo de rutas hijas
        // Todos los componentes de "dashboard/pages" seran hijas de dashboard
        children: [
            {
                path: 'change-detection',
                title: 'Change Detection',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
            },
            {
                path: 'control-flow',
                title: 'Control Flow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
            },
            {
                path: 'defer-options',
                title: 'Defer options',
                loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),
            },
            {
                path: 'user/:id',
                title: 'User View',
                loadComponent: () => import('./dashboard/pages/defer-user/defer-user.component'),
            },
            {
                path: 'user-list',
                title: 'User List',
                loadComponent: () => import('./dashboard/pages/defer-users/defer-users.component'),
            },
            {
                path: 'defer-views',
                title: 'Defer Views',
                loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
            },
            {
                path: 'view-transition',
                title: 'View Transition',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component'),
            },
            // Añadimos un comodin para cuando se ingrese en la url /dashboard
            // redireccionamos a control-flow
            {
                path: '',
                redirectTo: 'control-flow',
                pathMatch: 'full'
            }
        ]
    },
    // Crear ruta por defecto cuando no se ingrese una ruta
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];
