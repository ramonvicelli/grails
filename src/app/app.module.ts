import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { UserStoryComponent } from './user-story/user-story.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SecurityUserComponent } from './security-user/security-user.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { TitlePageComponent } from './shared/components/title-page/title-page.component';
import { ContainerFluidComponent } from './shared/components/container-fluid/container-fluid.component';
import { PanelComponent } from './shared/components/panel/panel.component';
import { PanelHeadComponent } from './shared/components/panel-head/panel-head.component';
import { PanelBodyComponent } from './shared/components/panel-body/panel-body.component';
import { UserStoryPanelComponent } from './user-story/user-story-panel/user-story-panel.component';
import { IconPlusComponent } from './shared/components/icon/icon-plus/icon-plus.component';
import { IconPencilComponent } from './shared/components/icon/icon-pencil/icon-pencil.component';
import { IconTrashComponent } from './shared/components/icon/icon-trash/icon-trash.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserStoryComponent,
    FooterComponent,
    SecurityUserComponent,
    SpinnerComponent,
    TitlePageComponent,
    ContainerFluidComponent,
    PanelComponent,
    PanelHeadComponent,
    PanelBodyComponent,
    UserStoryPanelComponent,
    IconPlusComponent,
    IconPencilComponent,
    IconTrashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
