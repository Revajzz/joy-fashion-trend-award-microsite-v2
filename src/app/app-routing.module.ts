import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'categories', loadChildren: './features/categories/categories.module#CategoriesModule' },
  { path: 'admin', loadChildren: './features/admin/admin.module#AdminModule' },

  { path: '', redirectTo: '/categories', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
