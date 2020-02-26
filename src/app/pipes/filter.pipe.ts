import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, searchType: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      switch (searchType) {
        case 'name': {
          return it.name.toLowerCase().includes(searchText);
          break;
          console.log(searchText);
        }
        case 'id': {
          return it.id === Number(searchText);
          break;
        }
        case 'age': {
          return it.age === Number(searchText);
          break;
        }
        case 'olderThan': {
          return it.age >= Number(searchText);
          break;
        }
        case 'youngerThan': {
          return it.age <= Number(searchText);
          break;
        }
        case 'weight': {
          return it.weight === Number(searchText);
          break;
        }
        case 'weightMoreThan': {
          return it.weight >= Number(searchText);
          break;
        }
        case 'weightLessThan': {
          return it.weight <= Number(searchText);
          break;
        }
        case 'height': {
          return it.height === Number(searchText);
          break;
        }
        case 'heigherThan': {
          return it.height >= Number(searchText);
          break;
        }
        case 'heightUnder': {
          return it.height <= Number(searchText);
          break;
        }
        case 'hair_color': {
          return it.hair_color.toLowerCase().includes(searchText);
          break;
        }
        case 'professions': {
          return it.professions.find(professions => professions.toLowerCase().includes(searchText));
          break;
        }
        case 'friends': {
          return it.friends.find(friend => friend.toLowerCase().includes(searchText));
          break;
        }
        default:
          return items;
          break;
      }
    });
   }
}
