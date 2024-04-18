import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'Hell yeah!';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5001/api/user').subscribe({
      next: (response: any) => this.users = response,
      error: (err: any) => console.log(err),
      complete: () => console.log('Request has completed')
    })
  }
}
