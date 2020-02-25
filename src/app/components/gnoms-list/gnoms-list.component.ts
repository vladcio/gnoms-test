import { Component, OnInit } from '@angular/core';
import { GnomsTown } from 'src/app/interfaces/gnom.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gnoms-list',
  templateUrl: './gnoms-list.component.html',
  styleUrls: ['./gnoms-list.component.scss']
})
export class GnomsListComponent implements OnInit {

  public gnomsTown: GnomsTown;
  isData = false;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.getGnoms();
  }

  getGnoms() {
    this.dataService.fetchAll()
      .subscribe(data => {
        this.gnomsTown = data as GnomsTown;
        this.isData = true;
        console.log(this.gnomsTown);
      });
  }

}
