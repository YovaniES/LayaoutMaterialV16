import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';

import { AdminLayoutComponent } from '@theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '@theme/auth-layout/auth-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { authGuard } from '@core/authentication';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //Personali ado
/*
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: '403',
        component: Error403Component,
      },
      {
        path: '404',
        component: Error404Component,
      },
      {
        path: '500',
        component: Error500Component,
      },
      {
        path: 'sistema',
        loadChildren: () => import('./sistema/sistema.module').then(m => m.SistemaModule),
      },
      {
        path: 'configuracion',
        loadChildren: () =>
          import('./configuracion/configuracion.module').then(m => m.ConfiguracionModule),
      },
      {
        path: 'registro',
        loadChildren: () => import('./recepcion/registro.module').then(m => m.RegistroModule),
      },
      {
        path: 'preparacion',
        loadChildren: () =>
          import('./preparacion/preparacion.module').then(m => m.PreparacionModule),
      },
      {
        path: 'digitalizacion',
        loadChildren: () =>
          import('./digitalizacion/digitalizacion.module').then(m => m.DigitalizacionModule),
      },
      {
        path: 'indexacion',
        loadChildren: () => import('./indexacion/indexacion.module').then(m => m.IndexacionModule),
      },
      {
        path: 'digitacion',
        loadChildren: () => import('./digitacion/digitacion.module').then(m => m.DigitacionModule),
      },
      {
        path: 'control-de-calidad',
        loadChildren: () =>
          import('./control-de-calidad/control-de-calidad.module').then(
            m => m.ControlDeCalidadModule
          ),
      },
      {
        path: 'autentificacion-de-fedatario',
        loadChildren: () =>
          import('./autentificacion-de-fedatario/autentificacion-de-fedatario.module').then(
            m => m.AutentificacionDeFedatarioModule
          ),
      },
      {
        path: 'armado',
        loadChildren: () => import('./armado/armado.module').then(m => m.ArmadoModule),
      },
      {
        path: 'devolucion',
        loadChildren: () => import('./devolucion/devolucion.module').then(m => m.DevolucionModule),
      },
      {
        path: 'generacion-de-medios-opticos',
        loadChildren: () =>
          import('./generacion-de-medios-opticos/generacion-de-medios-opticos.module').then(
            m => m.GeneracionDeMediosOpticosModule
          ),
      },
      {
        path: 'reporte',
        loadChildren: () => import('./reporte/reporte.module').then(m => m.ReporteModule),
      },

      {
        path: 'monitoreo',
        loadChildren: () => import('./monitoreo/monitoreo.module').then(m => m.MonitoreoModule),
      },
    ],
  },
  */

  //Plantilla Original
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: '403', component: Error403Component },
      { path: '404', component: Error404Component },
      { path: '500', component: Error500Component },
      {
        path: 'design',
        loadChildren: () => import('./design/design.module').then(m => m.DesignModule),
      },
      {
        path: 'material',
        loadChildren: () => import('./material/material.module').then(m => m.MaterialModule),
      },
      {
        path: 'media',
        loadChildren: () => import('./media/media.module').then(m => m.MediaModule),
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
      },
      {
        path: 'tables',
        loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule),
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
      },
      {
        path: 'permissions',
        loadChildren: () =>
          import('./permissions/permissions.module').then(m => m.PermissionsModule),
      },
      {
        path: 'utilities',
        loadChildren: () => import('./utilities/utilities.module').then(m => m.UtilitiesModule),
      },
    ],
  },

  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  /*{ path: '**', redirectTo: 'dashboard' },*/
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
