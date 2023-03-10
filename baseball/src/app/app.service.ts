import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  rootUrl = '/http://lookup-service-prod.mlb.com/json/named.'


  getAllPlayers() {
   return this.http.get(this.rootUrl +"search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='cespedes%25'")
  }

}
