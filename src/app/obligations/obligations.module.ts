import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObligationsPanelComponent } from './components/obligations-panel/obligations-panel.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: ObligationsPanelComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), RouterModule],
})
export class ObligationsModule {}
