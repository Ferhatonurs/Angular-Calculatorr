import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/component';

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,  // AppComponent'i burada import ediyoruz çünkü standalone
    CalculatorComponent, // CalculatorComponent de standalone ise burada
  ],
  providers: [],
  bootstrap: []  
})
export class AppModule { }
