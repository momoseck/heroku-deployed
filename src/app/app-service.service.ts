import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { 
   
  }

  getUsers():Observable<any>{
      const host = environment.host;
      return this.http.get<any>(host);
  }
  addUsers():Observable<any>{
    const host = environment.host;
    const user =  {
      "first_name": "Mamadou",
      "last_name": "seck",
      "email": "momo@gmail.com",
      "gender": "Male"
    };
    return this.http.post<any>(host,user);
}
}
