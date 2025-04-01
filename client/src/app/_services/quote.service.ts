import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() { }

  quote = new BehaviorSubject("Behavior Subject A");

  currentQuote = this.quote.asObservable();

  updateQuote(newQuote: string)
  {
    this.quote.next(newQuote);
  }
}
