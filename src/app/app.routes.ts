import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LeaveComponent } from './pages/leave/leave.component';
import { SignalExComponent } from './pages/signal-ex/signal-ex.component';
import { ControlFlowComponent } from './pages/control-flow/control-flow.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signal-ex',
    component: SignalExComponent,
  },
  {
    path: 'control-flow',
    component: ControlFlowComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'leaves',
        component: LeaveComponent,
      },
    ],
  },
];
