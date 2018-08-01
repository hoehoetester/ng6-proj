import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  _baseUrl: string = "https://jsonplaceholder.typicode.com";
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this._baseUrl}/users`);
  }

  getUser(userId) {
    return this.http.get(`${this._baseUrl}/users/${userId}`);
  }

  getPosts() {
    return this.http.get(`${this._baseUrl}/posts`);
  }
}
