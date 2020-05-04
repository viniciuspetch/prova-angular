import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CepService } from './cep.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { OrigComponent } from './orig/orig.component';
import { IndexComponent } from './index/index.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		OrigComponent,
		IndexComponent
	],
	imports: [
		RouterModule.forRoot([{path:"", component: IndexComponent}, { path: 'orig', component: OrigComponent }]),
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		MatTableModule,
		MatInputModule,
		HttpClientModule,
		MatToolbarModule,
		MatButtonModule,
	],
	providers: [CepService],
	bootstrap: [AppComponent]
})
export class AppModule { }
