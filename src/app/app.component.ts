import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
 users:any[] | null=null;
  title = 'heroku-app';
  constructor(private appService:AppServiceService){

  }

  ngOnInit(): void {
   this.appService.getUsers().subscribe(response=>{
     this.users = response;
     console.log(response);
   })
  }

  add(){
    this.appService.addUsers().subscribe(response=>{
      this.users?.push(response);
      console.log(response);
    })
  }
}
