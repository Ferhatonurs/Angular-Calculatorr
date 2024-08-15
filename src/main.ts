import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { CalculatorComponent } from './app/calculator/component'

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule),
    provideRouter([
      { path: '', component: AppComponent },
      { path: 'calculator', component: CalculatorComponent }
    ])
  ]
})
  .catch(err => console.error(err));
