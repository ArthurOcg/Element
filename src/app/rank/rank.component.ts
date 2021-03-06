import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  @Output() voted = new EventEmitter<number>()

  @Input() voto = 0
  votos: number[] = [1, 2, 3, 4, 5]

  constructor() { }

  ngOnInit() {
  }

  setVoto(v: number) {
    this.voto = v;
    this.voted.emit(this.voto);
  }

}
