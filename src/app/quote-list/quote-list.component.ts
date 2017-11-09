import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css'],
})
export class QuoteListComponent implements OnInit {
  @Input() quoteListEvent;
  @Output() deleteQuote = new EventEmitter();

  rating: number = 0;

  constructor() { }

  ngOnInit() {
  }

  voteUp(quoteListEvent) {
    quoteListEvent.rating++;
  }

  voteDown(quoteListEvent) {
    quoteListEvent.rating--;
  }

  delete(quoteListEvent) {
    this.quoteListEvent.splice(quoteListEvent, 1);
    // this.deleteQuote.emit(quoteListEvent);
  }



}
