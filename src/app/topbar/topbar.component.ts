import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SET_LOCATION } from '../reducer/location-reducer';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-top-bar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopBarComponent implements OnInit {
  loc: string;
constructor(private store: Store<any>) { }
ngOnInit() {
  }
  search(searchForm: NgForm) {
    if (searchForm.invalid) {
      return;
    }
    this.store.dispatch({ type: SET_LOCATION, payload: this.loc });
  }
}