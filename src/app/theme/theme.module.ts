import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { UserPanelComponent } from './sidebar/user-panel.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NavAccordionDirective } from './sidemenu/nav-accordion.directive';
import { NavAccordionItemDirective } from './sidemenu/nav-accordion-item.directive';
import { NavAccordionToggleDirective } from './sidemenu/nav-accordion-toggle.directive';
import { SidebarNoticeComponent } from './sidebar-notice/sidebar-notice.component';

import { TopmenuComponent } from './topmenu/topmenu.component';
import { TopmenuPanelComponent } from './topmenu/topmenu-panel.component';

import { HeaderComponent } from './header/header.component';

import { BrandingComponent } from './widgets/branding.component';
import { UserComponent } from './widgets/user.component';

import { CustomizerComponent } from './customizer/customizer.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent,
    SidebarComponent,
    UserPanelComponent,
    SidemenuComponent,
    NavAccordionDirective,
    NavAccordionItemDirective,
    NavAccordionToggleDirective,
    SidebarNoticeComponent,
    TopmenuComponent,
    TopmenuPanelComponent,
    HeaderComponent,
    BrandingComponent,
    UserComponent,
    CustomizerComponent,
  ],
  imports: [SharedModule],
})
export class ThemeModule {}
