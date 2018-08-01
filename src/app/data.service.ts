import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  _url: string = "https://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this._url);
  }
}