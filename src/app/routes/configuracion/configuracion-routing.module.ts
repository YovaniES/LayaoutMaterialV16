import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { PerfilDeUsuarioComponent } from './perfil-de-usuario/perfil-de-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalidadDeRecepcionComponent } from './modalidad-de-recepcion/modalidad-de-recepcion.component';
import { AreaDeOrigenComponent } from './area-de-origen/area-de-origen.component';
import { TurnosComponent } from './turnos/turnos.component';
import { SeriesDocumentalesComponent } from './series-documentales/series-documentales.component';
import { ClaveDeIndexacionComponent } from './clave-de-indexacion/clave-de-indexacion.component';
import { FormatoDeDigitacionComponent } from './formato-de-digitacion/formato-de-digitacion.component';
import { ParametrizaEscannerComponent } from './parametriza-escanner/parametriza-escanner.component';
import { DefinirTipoDeDocumentoComponent } from './definir-tipo-de-documento/definir-tipo-de-documento.component';

const routes: Routes = [
  { path: 'empresa', component: EmpresaComponent },
  { path: 'perfil-de-usuario', component: PerfilDeUsuarioComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'modalidad-de-recepcion', component: ModalidadDeRecepcionComponent },
  { path: 'area-de-origen', component: AreaDeOrigenComponent },
  { path: 'turnos', component: TurnosComponent },
  { path: 'series-documentales', component: SeriesDocumentalesComponent },
  { path: 'clave-de-indexacion', component: ClaveDeIndexacionComponent },
  { path: 'formato-de-digitacion', component: FormatoDeDigitacionComponent },
  { path: 'parametriza-escanner', component: ParametrizaEscannerComponent },
  { path: 'definir-tipo-de-documento', component: DefinirTipoDeDocumentoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracionRoutingModule {}
