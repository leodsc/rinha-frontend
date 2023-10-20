import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { JsonTreeComponent } from './views/json-tree/json-tree.component';
import { KeysPipe } from './pipes/keys.pipe';
import { TreeComponent } from './components/tree/tree.component';
import { JsonTypePipe } from './pipes/json-type.pipe';
import { JsonArrayComponent } from './components/json-array/json-array.component';
import { CastPipe } from './pipes/cast.pipe';
import { JsonPropertyComponent } from './components/json-property/json-property.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JsonTreeComponent,
    KeysPipe,
    TreeComponent,
    JsonTypePipe,
    JsonArrayComponent,
    CastPipe,
    JsonPropertyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
