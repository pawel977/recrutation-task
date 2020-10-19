import { Component, HostListener, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { person } from '../../interfaces/person.interface';
import { widthScreen } from '../../width';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() person: person;
  scrWidth: number;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrWidth = window.innerWidth;
    console.log(this.scrWidth);
  }

  constructor() {
    this.scrWidth = window.innerWidth;
  }

  ngOnInit(): void {
    console.log({ person: this.person })
  }

  actualPictureOfSize(links) {
    console.log({links})
    if (this.scrWidth <= widthScreen.w200) { return of(links.w200) } 
    else if (this.scrWidth <= widthScreen.w400) {return of(links.w400)}
    else if (this.scrWidth <= widthScreen.w1080) { return of(links.w1080) }
    else if (this.scrWidth <= widthScreen.w1920) {return of(links.w1920)}
    else {return of(links.w2560)}
  }

}
