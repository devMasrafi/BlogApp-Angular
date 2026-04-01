import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apidata {

  http = inject(HttpClient)

  apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  getPost(){
    return this.http.get(this.apiUrl)
  }

}
