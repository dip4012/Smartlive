import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

import { UsersComponent } from './components/users/users.component';
import { NewUserComponent } from './components/users/new-user/new-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GiftsComponent } from './components/gifts/gifts.component';
import { NewGiftComponent } from './components/gifts/new-gift/new-gift.component';
import { DeleteUserComponent } from './components/users/delete-user/delete-user.component';
import { DeleteGiftComponent } from './components/gifts/delete-gift/delete-gift.component';
import { BannerComponent } from './components/banner/banner.component';
import { RechargeComponent } from './components/recharge/recharge.component';
import { LevelsComponent } from './components/levels/levels.component';
import { NewBannerComponent } from './components/banner/new-banner/new-banner.component';
import { DeleteBannerComponent } from './components/banner/delete-banner/delete-banner.component';
import { NewLevelComponent } from './components/levels/new-level/new-level.component';
import { DeleteLevelComponent } from './components/levels/delete-level/delete-level.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NewUserComponent,
    DashboardComponent,
    GiftsComponent,
    NewGiftComponent,
    DeleteUserComponent,
    DeleteGiftComponent,
    BannerComponent,
    RechargeComponent,
    LevelsComponent,
    NewBannerComponent,
    DeleteBannerComponent,
    NewLevelComponent,
    DeleteLevelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatDialogModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
