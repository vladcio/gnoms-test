import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    public dataService: DataService
  ) { }

  public gnoms;
  search: string;
  isData = false;

  ngOnInit() {
    this.getGnoms();
  }

  getGnoms() {
    this.dataService.fetchAll()
      .subscribe(data => {
        this.gnoms = data;
        this.isData = true;
        console.log(this.gnoms);
      });
  }

}
