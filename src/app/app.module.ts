import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AppComponent } from './app.component';
import { EditorComponentComponent } from './editor-component/editor-component.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HintlistComponent } from './hintlist/hintlist.component'

@NgModule({
  declarations: [
   
    AppComponent,
        EditorComponentComponent,
        HintlistComponent
  ],
  imports: [
    CKEditorModule,
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
