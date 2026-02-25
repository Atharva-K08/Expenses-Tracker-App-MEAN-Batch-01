import { Routes } from '@angular/router';
import { LoginPage } from '../pages/login-page/login-page';
import { RegistrationPage } from '../pages/registration-page/registration-page';
import { ResetPasswordPage } from '../pages/reset-password-page/reset-password-page';
import { ForgetPasswordPage } from '../pages/forget-password-page/forget-password-page';
import { DashboardPage } from '../pages/dashboard-page/dashboard-page';
import { TransactionPage } from '../pages/transaction-page/transaction-page';
import { Layout } from '../layout/layout';
import { authGuard } from '../guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'register',
    component: RegistrationPage,
  },
  {
    path: 'forget-password',
    component: ForgetPasswordPage,
  },
  {
    path: 'reset-password',
    component: ResetPasswordPage,
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        component: DashboardPage,
        canActivate:[authGuard],
      },
      {
        path: 'transaction',
        component: TransactionPage,
        canActivate:[authGuard]
      },
    ],
  },
];
