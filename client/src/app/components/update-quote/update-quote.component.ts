import { Component } from '@angular/core';
import { QuoteService } from '../../_services/quote.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-quote',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-quote.component.html',
  styleUrl: './update-quote.component.css'
})
export class UpdateQuoteComponent
{
  private quoteService: QuoteService;
  quote: string = '';

  constructor(quoteService: QuoteService)
  {
    this.quoteService = quoteService;
  }

  submitHandler()
  {
    this.quoteService.updateQuote(this.quote);
    this.quote = "";
  }

}
