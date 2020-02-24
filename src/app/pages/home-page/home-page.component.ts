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

  public gnomes;

  ngOnInit() {
    this.dataService.fetchAll()
      .subscribe(data => this.gnomes = data);
    setTimeout(() => {
      console.log(this.gnomes);
    }, 3000);
  }

}
