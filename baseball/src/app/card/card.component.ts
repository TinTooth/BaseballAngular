import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  players: Object = {};

  constructor(private app: AppService) {
  }

  getPlayers(): void {
    this.players = this.app.getAllPlayers
  }
  ngOnInit(): void {
    this.getPlayers
  }
}
