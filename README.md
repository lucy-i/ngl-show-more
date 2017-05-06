# ngl-show-more

## Installation

To install this library, run:

```bash
$ npm install ngl-show-more --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ngl-show-more
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { ShowMoreModule } from 'ngl-show-more';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShowMoreModule
    // Specify your library as an import
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<div show-more min-height="100" max-height="300" style="width:100px;float:left;">
Students seek relief from rising prices through the purchase of used copies of textbooks, which tend to be less expensive. Most college bookstores offer used copies of textbooks at lower prices. Most bookstores will also buy used copies back from students at the end of a term if the book is going to be re-used at the school. Books that are not being re-used at the school are often purchased by an off-campus wholesaler for 0-30% of the new cost, for distribution to other bookstores where the books will be sold. Textbook companies have countered this by encouraging faculty to assign homework that must be done on the publisher's website. If a student has a new textbook, then he or she can use the pass code in the book to register on the site. If the student has purchased a used textbook, then he or she must pay money directly to the publisher in order to access the website and complete assigned homework.

Students who look beyond the campus bookstore can typically find lower prices. With the ISBN or title, author and edition, most textbooks can be located through online used book sellers or retailers.
</div>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [lucy](mailto:lucy@lucy.in)
