import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { ConfiguracionRoutingModule } from './configuracion-routing.module';

@NgModule({
  declarations: [
    EmpresaComponent,
    PerfilDeUsuarioComponent,
    UsuariosComponent,
    ModalidadDeRecepcionComponent,
    AreaDeOrigenComponent,
    TurnosComponent,
    SeriesDocumentalesComponent,
    ClaveDeIndexacionComponent,
    FormatoDeDigitacionComponent,
    ParametrizaEscannerComponent,
    DefinirTipoDeDocumentoComponent,
  ],
  imports: [CommonModule, ConfiguracionRoutingModule],
})
export class ConfiguracionModule {}
