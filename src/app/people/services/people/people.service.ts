import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { ObjectResponse } from 'src/app/global-interfaces/object-response.interface';
import { peopleList } from '../../interfaces/people-list.interface';
import { person } from '../../interfaces/person.interface';
import { HttpListReq } from 'src/app/global-interfaces/http-list-request.interface';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class PeopleService {
  private data$: BehaviorSubject<ObjectResponse<peopleList<Array<person>>>> = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }

  public callPeopleData(): void {
    this.http.get<HttpListReq<ObjectResponse<peopleList<Array<person>>>>>('http://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json')
      .subscribe((e: HttpListReq<ObjectResponse<peopleList<Array<person>>>>) => {
        this.data$.next(this.changeFormatOfData(e.data))
      }
        ,
        (er: HttpErrorResponse) => console.log('er', er.error))
  }

  public getData(): BehaviorSubject<ObjectResponse<peopleList<Array<person>>>> {
    return this.data$;
  }




  private changeFormatOfData(data): ObjectResponse<peopleList<Array<person>>> {
    const obj: peopleList<Array<person>> = data[0].attributes.memberCards;
    const memberCardsAsArray = Object.values(obj);

    const res = {
      data: {
        ...data[0],
        attributes: {
          ...data[0].attributes,
          memberCards: memberCardsAsArray
        }
      }
    }

    return res as any;
  }
}

//HttpListReq<ObjectResponse<peopleList<Array<person>>>>
