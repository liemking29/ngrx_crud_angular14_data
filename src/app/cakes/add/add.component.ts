import { Component, OnInit } from '@angular/core';
import { Cakes } from '../store/cakes';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory,
} from '@ngrx/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(
    serviceFatory: EntityCollectionServiceFactory,
    private router: Router
  ) {
    this.cakeService = serviceFatory.create<Cakes>('Cake');
  }
  cakeService: EntityCollectionService<Cakes>;
  cakesForm: Cakes = {
    id: 0,
    name: '',
    description: '',
    cost: 0,
  };

  ngOnInit(): void {}

  save() {
    this.cakeService.add(this.cakesForm).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
