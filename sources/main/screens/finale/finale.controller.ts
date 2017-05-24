import app from 'main.module';
import {ILogger, LoggerService} from 'helpers/logger/logger';
import {QuoteService} from 'web-services/quote/quote.service';

/**
 * Displays the Finale.
 */
export class finaleController {

  isLoading: boolean = true;
  quote: string = null;

  private logger: ILogger;
  private quoteService: QuoteService;

  constructor(logger: LoggerService,
              quoteService: QuoteService) {

    this.logger = logger.getLogger('einstellungen');
    this.quoteService = quoteService;

    this.logger.log('init');

    this.quoteService
      .getRandomJoke({category: 'nerdy'})
      .then((quote: string) => {
        this.quote = quote;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

}

app.controller('finaleController', finaleController);
