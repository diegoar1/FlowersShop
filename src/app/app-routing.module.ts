import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialGuard } from './guards/tutorial.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { LoginPage } from './login/login.page';

const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'pago', loadChildren: './payment/payment.module#PaymentPageModule' },
  { path: 'preview', loadChildren: './preview/preview.module#PreviewPageModule', canActivate: [TutorialGuard] },
  
  { path: 'notification', loadChildren: './notification/notification.module#NotificationPageModule' },
  { path: 'dates', loadChildren: './dates/dates.module#DatesPageModule' },

  { path: '', loadChildren: './preview/preview.module#PreviewPageModule', canActivate: [TutorialGuard] },
  
  
  //{ path: 'terms', loadChildren: './terms/terms.module#TermsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
