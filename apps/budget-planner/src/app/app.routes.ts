import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'budget-planner',
    loadChildren: () =>
      import('./budget-planner/budget-planner.module').then(
        (m) => m.BudgetPlannerModule
      ),
  },
];
