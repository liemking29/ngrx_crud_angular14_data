import { Component, OnInit } from '@angular/core';
import { Cakes } from '../store/cakes';
import { combineLatest } from 'rxjs';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory,
} from '@ngrx/data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(
    serviceFatory: EntityCollectionServiceFactory,
    private router: Router,
    private route: ActivatedRoute
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

  ngOnInit(): void {
    let fetchFormData = combineLatest([
      this.route.paramMap,
      this.cakeService.entities$,
    ]).subscribe(([params, cakesFromStore]) => {
      var id = Number(params.get('id'));
      var filtedCake = cakesFromStore.filter((c) => c.id == id);
      if (filtedCake) {
        this.cakesForm = { ...filtedCake[0] };
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  update() {
    this.cakeService.update(this.cakesForm).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
