import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyResumeComponent } from './components/my-resume/my-resume.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ReferencesComponent } from './components/references/references.component';

@NgModule({
  declarations: [
    AppComponent,
    MyResumeComponent,
    LanguagesComponent,
    ReferencesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
