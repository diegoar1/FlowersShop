import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialGuard } from './guards/tutorial.guard';

const routes: Routes = [
 
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'pago', loadChildren: './payment/payment.module#PaymentPageModule' },
  { path: 'preview', loadChildren: './preview/preview.module#PreviewPageModule', canActivate: [TutorialGuard] },
  { path: '', loadChildren: './preview/preview.module#PreviewPageModule'},
  { path: 'notification', loadChildren: './notification/notification.module#NotificationPageModule' },
  { path: 'dates', loadChildren: './dates/dates.module#DatesPageModule' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
