import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

const MODULES = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatToolbarModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatDialogModule,
  MatDatepickerModule,
  MatRadioModule,
  DragDropModule,
];

const DATE_PROVIDERS = [MatDatepickerModule, MatNativeDateModule];

@NgModule({
  imports: [CommonModule, ...MODULES],
  exports: [...DATE_PROVIDERS, ...MODULES],
  declarations: [],
  providers: [],
})
export class MaterialModule {}
