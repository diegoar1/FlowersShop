import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialGuard } from './guards/tutorial.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';

const routes: Routes = [
 
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'pago', loadChildren: './payment/payment.module#PaymentPageModule' },
  { path: 'preview', loadChildren: './preview/preview.module#PreviewPageModule', canActivate: [TutorialGuard]},
  { path: '', loadChildren: './preview/preview.module#PreviewPageModule', canActivate: [TutorialGuard]},
  { path: 'notification', loadChildren: './notification/notification.module#NotificationPageModule' },
  { path: 'dates', loadChildren: './dates/dates.module#DatesPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'community', loadChildren: './community/community.module#CommunityPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
