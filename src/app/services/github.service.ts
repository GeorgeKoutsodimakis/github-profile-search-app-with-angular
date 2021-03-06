import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private client_id='28a5586d7782c227c7da';
  private client_secret='876f4f13ccbaf9c2cb4c2fba1eb8313521f7de03';

  constructor(private _http:Http){
    console.log('Github service ready');
    this.username='GeorgeKoutsodimakis';
  }
  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+
      '?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }


  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+
      '/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }

  updateUser(username:string){
    this.username = username;
  }
}
