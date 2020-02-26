import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GnomService } from 'src/app/services/gnom.service';
import { Gnoms } from 'src/app/interfaces/gnom.interface';

@Component({
  selector: 'app-gnom-profile',
  templateUrl: './gnom-profile.component.html',
  styleUrls: ['./gnom-profile.component.scss']
})
export class GnomProfileComponent implements OnDestroy {

  gnom: Gnoms;
  subscription: Subscription;

  constructor( private gnomService: GnomService ) {
    this.subscription = this.gnomService.getGnom().subscribe(gnom => {
      if (gnom) {
        this.gnom = gnom;
      } else {
        this.gnom = undefined;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  clearGnom() {
    this.gnomService.clearGnom();
  }

}
