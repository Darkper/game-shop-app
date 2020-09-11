import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AccordionDirective } from './sidemenu/accordion.directive';
import { AccordionItemDirective } from './sidemenu/accordionItem.directive';
import { AccordionAnchorDirective } from './sidemenu/accordionanchor.directive';
import { SidebarNoticeComponent } from './sidebar-notice/sidebar-notice.component';

import { TopmenuComponent } from './topmenu/topmenu.component';

import { HeaderComponent } from './header/header.component';
import { BrandingComponent } from './header/widgets/branding.component';
import { TranslateComponent } from './header/widgets/translate.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    SidebarComponent,
    SidemenuComponent,
    AccordionDirective,
    AccordionItemDirective,
    AccordionAnchorDirective,
    SidebarNoticeComponent,
    TopmenuComponent,
    HeaderComponent,
    BrandingComponent,
    TranslateComponent,
  ],
  imports: [SharedModule],
})
export class ThemeModule {}
