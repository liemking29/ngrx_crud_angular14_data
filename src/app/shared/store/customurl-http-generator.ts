import { Injectable } from '@angular/core';
import {
  DefaultHttpUrlGenerator,
  HttpResourceUrls,
  Pluralizer,
} from '@ngrx/data';

@Injectable()
export class CustomurlHttpGenerator extends DefaultHttpUrlGenerator {
  constructor(pluralizer: Pluralizer) {
    super(pluralizer);
  }

  protected override getResourceUrls(
    entityName: string,
    root: string,
    trailingSlashEndpoints?: boolean | undefined
  ): HttpResourceUrls {
    let resourceURLS = this.knownHttpResourceUrls[entityName];
    if (entityName == 'Cake') {
      resourceURLS = {
        collectionResourceUrl: 'http://localhost:3000/cakes/',
        entityResourceUrl: 'http://localhost:3000/cakes/',
      };
      this.registerHttpResourceUrls({[entityName]: resourceURLS});
    }
    return resourceURLS;
  }
}
