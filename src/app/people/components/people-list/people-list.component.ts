import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { person } from '../../interfaces/person.interface';
import { PeopleService } from '../../services';
import {ObjectResponse} from '../../../global-interfaces/object-response.interface'
import {peopleList} from '../../interfaces/people-list.interface'

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListComponent implements OnInit {
  public peopleList$: BehaviorSubject<ObjectResponse<peopleList<Array<person>>>> = new BehaviorSubject(null);

  constructor(private srv: PeopleService) { }

  ngOnInit(): void {
    this.srv.callPeopleData();
    this.setPeopleList();
  }

  private setPeopleList(): void {
    this.peopleList$ = this.srv.getData()
  }

}
