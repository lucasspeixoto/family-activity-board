import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObligationsPanelComponent } from './components/obligations-panel/obligations-panel.component';
const routes: Routes = [{ path: '', component: ObligationsPanelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObligationsRoutingModule {}
