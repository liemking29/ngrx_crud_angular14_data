import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CakesRoutingModule } from './cakes-routing.module';
import { HomeComponent } from './home/home.component';
import { EntityDefinitionService } from '@ngrx/data';
import { cakeEntityMetadata } from './store/cake-entity-metadata';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [HomeComponent, AddComponent, EditComponent],
  imports: [CommonModule, CakesRoutingModule, FormsModule],
})
export class CakesModule {
  constructor(entityDefinitionService: EntityDefinitionService) {
    entityDefinitionService.registerMetadataMap(cakeEntityMetadata);
  }
}
