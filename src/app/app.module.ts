import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { AnimationsComponent } from './animations/animations.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    HighlightDirective,
    AngularPipesComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
