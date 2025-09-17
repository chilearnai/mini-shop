import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
// bootstrapApplication(AppComponent, {
//   providers: [ provideRouter(routes) ]
// });

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));