import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DevExtremeModule} from "devextreme-angular";
import {ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './entities/components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
    imports: [
        BrowserModule,
        DevExtremeModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
