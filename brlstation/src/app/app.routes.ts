import { Routes } from '@angular/router';
import { HomeComponent as BrlstationHomeComponent } from './brlstation/Components/home.component';
import { BrlstationAdminComponent } from './brlstation/Components/brlstation-admin/brlstation-admin.component';

export const routes: Routes = [
  { path: "", component: BrlstationHomeComponent },
  { path: "setup", component: BrlstationAdminComponent },
  { path: "**", redirectTo: "", pathMatch: 'full' },
];
