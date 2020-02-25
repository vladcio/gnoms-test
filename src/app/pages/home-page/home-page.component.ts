import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  search: string;
  searchType: string;

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

  constructor(
  ) { }

  ngOnInit() {
  }

}
