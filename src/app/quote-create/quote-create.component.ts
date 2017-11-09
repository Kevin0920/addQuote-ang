import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-create',
  templateUrl: './quote-create.component.html',
  styleUrls: ['./quote-create.component.css'],
})
export class QuoteCreateComponent implements OnInit {

  @Output() createNewQuote = new EventEmitter();

  newQuote = {text:"", author:"", rating: 0 };

  constructor() { }


  ngOnInit() {
  }

  onSubmit() {
    console.log(this.newQuote);
    this.createNewQuote.emit(this.newQuote);
    this.newQuote = { text:"", author:"", rating: 0 };
  }

}
