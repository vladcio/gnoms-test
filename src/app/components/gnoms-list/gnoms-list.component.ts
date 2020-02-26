import { Component, OnInit } from '@angular/core';
import { GnomsTown } from 'src/app/interfaces/gnom.interface';
import { DataService } from 'src/app/services/data.service';
import { GnomService } from 'src/app/services/gnom.service';

@Component({
  selector: 'app-gnoms-list',
  templateUrl: './gnoms-list.component.html',
  styleUrls: ['./gnoms-list.component.scss']
})
export class GnomsListComponent implements OnInit {

  public gnomsTown: GnomsTown;
  isData = false;
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
    public dataService: DataService,
    private gnomService: GnomService
  ) {
    // setting default searchType
    this.searchType = this.selectTypes[1].key;
  }

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

  gnomDetails(gnom) {
    this.gnomService.sendGnom(gnom);
    window.scrollTo(0, 0);
  }

}
