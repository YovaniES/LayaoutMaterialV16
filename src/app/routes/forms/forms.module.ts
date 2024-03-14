import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FormsRoutingModule } from './forms-routing.module';

import { FormsElementsComponent } from './elements/elements.component';
import { FormsSelectComponent } from './select/select.component';
import { FormsSelectEditComponent } from './select/edit/edit.component';

const COMPONENTS: any[] = [
  FormsElementsComponent,
  FormsSelectComponent,
];
const COMPONENTS_DYNAMIC: any[] = [FormsSelectEditComponent];

@NgModule({
  imports: [SharedModule, FormsRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class FormsModule {}
