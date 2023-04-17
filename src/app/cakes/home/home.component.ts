import { Cakes } from './../store/cakes';
import { Component, OnInit } from '@angular/core';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory,
} from '@ngrx/data';
import { Observable } from 'rxjs';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(serviceFatory: EntityCollectionServiceFactory) {
    this.cakeService = serviceFatory.create<Cakes>('Cake');
    this.allCake$ = this.cakeService.entities$;
  }

  cakeService: EntityCollectionService<Cakes>;
  allCake$: Observable<Cakes[]>;

  deleteModal: any;
  isToDelete: number = 0;

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.cakeService.getAll();
  }

  openDeleteConfirm(id: number) {
    this.isToDelete = id;
    this.deleteModal.show();
  }

  confirmDelete() {
    this.cakeService.delete(this.isToDelete).subscribe(() => {
      this.deleteModal.hide();
    });
  }
}
