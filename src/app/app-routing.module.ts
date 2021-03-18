import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sweater',
    loadChildren: () => import('./sweater/sweater.module').then( m => m.SweaterPageModule)
  },
  {
    path: 'hoodie',
    loadChildren: () => import('./hoodie/hoodie.module').then( m => m.HoodiePageModule)
  },
  {
    path: 'tshirt',
    loadChildren: () => import('./tshirt/tshirt.module').then( m => m.TshirtPageModule)
  },
  {
    path: 'jacket',
    loadChildren: () => import('./jacket/jacket.module').then( m => m.JacketPageModule)
  },
  {
    path: 'jeans',
    loadChildren: () => import('./jeans/jeans.module').then( m => m.JeansPageModule)
  },
  {
    path: 'other',
    loadChildren: () => import('./other/other.module').then( m => m.OtherPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
