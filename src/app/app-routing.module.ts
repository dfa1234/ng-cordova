import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DepositComponent} from './deposit/deposit.component';
import {WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'deposit',
    component: DepositComponent
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
