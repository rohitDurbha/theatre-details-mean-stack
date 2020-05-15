import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheaterCreateComponent } from './components/theater-create/theater-create.component';
import { TheaterEditComponent } from './components/theater-edit/theater-edit.component';
import { TheaterListComponent } from './components/theater-list/theater-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { TheaterShowComponent } from './components/theater-show/theater-show.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-theater' },
  { path: 'create-theater', component: TheaterCreateComponent },
  { path: 'edit-theater/:id', component: TheaterEditComponent },
  { path: 'theaters-list', component: TheaterListComponent },
    { path: 'theaters-show', component: TheaterShowComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TheaterCreateComponent,
    TheaterEditComponent,
    TheaterListComponent,
    TheaterShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  exports: [
      RouterModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
