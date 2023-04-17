import { EntityMetadataMap } from '@ngrx/data';
import { Cakes } from './cakes';

export const cakeEntityMetadata: EntityMetadataMap = {
  Cake: {
    selectId: (cake: Cakes) => cake.id,
  },
};
