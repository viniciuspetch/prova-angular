import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CepService } from './cep.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrigComponent } from './orig/orig.component';
import { IndexComponent } from './index/index.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';

import { RouterModule } from '@angular/router'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from "@angular/material";
import { MatSelectModule } from '@angular/material/select';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		OrigComponent,
		IndexComponent,
		UserListComponent,
		UserFormComponent,
		ConfirmationDialogComponent
	],
	imports: [
		RouterModule.forRoot([{ path: "", component: IndexComponent }, { path: 'orig', component: OrigComponent }, { path: 'userlist', component: UserListComponent }, { path: "edituser", component: UserFormComponent }, { path: "newuser", component: UserFormComponent }]),
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		MatTableModule,
		MatInputModule,
		HttpClientModule,
		MatToolbarModule,
		MatButtonModule,
		MatCardModule,
		MatDividerModule,
		MatListModule,
		MatFormFieldModule,
		MatDialogModule,
		MatSelectModule
	],
	providers: [CepService],
	bootstrap: [AppComponent],
	entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }
