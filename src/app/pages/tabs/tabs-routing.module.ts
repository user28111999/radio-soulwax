import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'radio',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../radio-tab/radio-tab.module').then(m => m.RadioTabPageModule)
          }
        ]
      },
      {
        path: 'radio/:radioUid',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../radio-content/radio-content.module').then(m => m.RadioContentPageModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../about-tab/about-tab.module').then(m => m.AboutTabPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/radio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/radio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
