import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatBadgeModule, MatCardModule],
  exports: [MatBadgeModule, MatCardModule],
})
export class MaterialModule {}
