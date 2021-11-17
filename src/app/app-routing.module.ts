import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { AnimationsComponent } from './animations/animations.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  {
    path: 'directives',
    component: DirectivesComponent,
  },
  {
    path: 'pipes',
    component: AngularPipesComponent,
  },
  { path: 'animation', component: AnimationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
