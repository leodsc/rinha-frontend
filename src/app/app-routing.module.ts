import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { JsonTreeComponent } from './views/json-tree/json-tree.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'json', component: JsonTreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
