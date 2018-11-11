import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/Observable/of';
import {Http} from "@angular/http";

@Component({
  selector: 'app-gestionarusuarios',
  templateUrl: './gestionarusuarios.component.html',
  styleUrls: ['./gestionarusuarios.component.css']
})
export class GestionarusuariosComponent implements OnInit {

	public data: any[];
  public filterQuery = "";
  public rowsOnPage = 5;
  public sortBy = "email";
  public sortOrder = "asc";
 
  constructor(private _http: Http) { }
 
  ngOnInit(): void {
    this._http.get("assets/data.json")
      .subscribe((data)=> {
        setTimeout(()=> {
          this.data = data.json();
        }, 2000);
      });
  }
}
