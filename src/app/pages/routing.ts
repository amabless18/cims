import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'builder',
    loadChildren: () =>
      import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'social',
    loadChildren: () =>
      import('./social/social.module').then((m) => m.SocialModule),
  },
  {
    path: 'crafted/account',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'crafted/account/user-profile',
    loadChildren: () =>
      import('../modules/account/user-profile/user-profile.module').then((m) => m.UserProfileModule),
  },
  {
    path: 'crafted/pages/courses',
    loadChildren: () =>
      import('../modules/courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'crafted/pages/credentials',
    loadChildren: () =>
      import('../modules/credential/credentials.module').then((m) => m.CredentialsModule),
  },
  {
    path: 'cims/crafted/pages/inquiries',
    loadChildren: () =>
      import('../modules/inquiries/inquiries.module').then((m) => m.InquiriesModule),
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () =>
      import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
  },
  {
    path: 'crafted/widgets',
    loadChildren: () =>
      import('../modules/widgets-examples/widgets-examples.module').then(
        (m) => m.WidgetsExamplesModule
      ),
  },
  {
    path: 'apps/chat',
    loadChildren: () =>
      import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
