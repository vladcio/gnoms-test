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
  search: any;
  searchType: string;
  isData = false;
  name: string;

  selectTypes = [
    {key: 'id', value: 'Id'},
    {key: 'name', value: 'Name'},
    {key: 'age', value: 'Age'},
    {key: 'olderThan', value: 'Older Than'},
    {key: 'youngerThan', value: 'Younger Than'},
    {key: 'weight', value: 'Weight'},
    {key: 'weightMoreThan', value: 'Weight more than'},
    {key: 'weightLessThan', value: 'Weight less than'},
    {key: 'height', value: 'Height'},
    {key: 'heigherThan', value: 'Heigher Than'},
    {key: 'heightUnder', value: 'Height under'},
    {key: 'hair_color', value: 'Hair Color'},
    {key: 'professions', value: 'Professions'},
    {key: 'friends', value: 'Friends'}
  ];

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
