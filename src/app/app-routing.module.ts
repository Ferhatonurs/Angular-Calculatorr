import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Başlangıç yolu
  { path: 'home', component: AppComponent }, // Ana sayfa yolu
  { path: 'calculator', component: CalculatorComponent }, // Hesap makinesi sayfası yolu
  // Diğer yönlendirmeler burada tanımlanabilir
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
