import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

import {CoreModule} from '@core/core.module';
import {ThemeModule} from '@theme/theme.module';
import {RoutesModule} from './routes/routes.module';
import {SharedModule} from '@shared';
import {AppComponent} from './app.component';

import {ToastrModule} from 'ngx-toastr';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {appInitializerProviders} from '@core/initializers';
import {FormlyConfigModule} from './formly-config.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClientService} from '@shared/services/client.service';
import {ManageModule} from './routes/manage/manage.module';
import {DirectorService} from '@shared/services/director.service';
import {ProducerService} from '@shared/services/producer.service';
import {ProtagonistService} from '@shared/services/protagonist.service';
import {TechnologyService} from '@shared/services/technology.service';
import {GameService} from '@shared/services/game.service';
import {RentService} from '@shared/services/rent.service';

// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const SERVICES = [ClientService, DirectorService, ProducerService, ProtagonistService, TechnologyService, GameService, RentService];

@NgModule({
  declarations: [AppComponent],
  imports: [
    ManageModule,
    BrowserModule,
    HttpClientModule,
    CoreModule,
    ThemeModule,
    RoutesModule,
    SharedModule,
    FormlyConfigModule.forRoot(),
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [appInitializerProviders, SERVICES],
  bootstrap: [AppComponent],
})
export class AppModule {}
