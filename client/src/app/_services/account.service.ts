// angular service that lets you maake http requests and what ull use to talk to your backend api
import { HttpClient } from '@angular/common/http';

// inject = a function from angulars dependency injection system.
// Let's you grab a service instance (httpclient) without having to use a constructor

// Injectable = a decorator that makes this class available for dependency injection. 
// basically it's telling angular 'you can create and inject this service wherever its needed'
import { inject, Injectable } from '@angular/core';


@Injectable({ // Injectable decorator
  providedIn: 'root' // this means this service will be available globally in your angular app as a SINGLETON. There's only ever once instance of AccountService shared across the entire app
})
  
 // this is where you define the service class, methods related to accounts (login, register, etc) 
export class AccountService
{
  
  private http = inject(HttpClient); // directly injects HttpClient into the class (equivalent to: constructor(private http: HttpClient) {})
  
  // baseUrl is a string holding the root URL of your backend api
  baseUrl = 'https://localhost:5001/api/';

  // method that sends a post request to your backend apis login endpoint
  login(model: any)
  {
    return this.http.post(this.baseUrl + 'account/login', model); // this.http.post() sends the data to the endpoint
  }

  // This returns an observable, youll need dto subscribe() to it when calling this method in your component to actually trigger the request and handle the response.
}
