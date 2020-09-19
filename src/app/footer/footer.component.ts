import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  route: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        let resultVerify: string = this.verifyRoute(location.path());
        this.route = resultVerify;
      } else {
        this.route = "Home";
      }
    });
  }

  verifyRoute(pathname: string) {
    let getRoute = pathname.match('/champions');
    let result = getRoute === null ? pathname : getRoute[0]
    return result;
  }

  ngOnInit(): void {
  }

}
