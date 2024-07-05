import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()), // Ensuring fetch is used for HTTP calls
    BrowserAnimationsModule
  ]
}).catch(err => console.error(err));
