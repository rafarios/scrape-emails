# scrape_emails NPM package

Scrape emails from website url

## Installation

To install the package, run the following command:

```
npm install @rafarios/scrape_emails
```

## Code example

```
import { scrape } from "@rafarios/scrape_emails/scrape.js";

const url = "https://nethunt.com/blog/how-to-choose-professional-email-address/";

(async () => {
  console.log(await scrape(url));
})()

```

## Contributing

Contributions are welcome! If you would like to contribute to this package, please open an issue or a pull request on the [github repository](https://github.com/rafarios/scrape_emails).

## Author

This package was created by Rafa Rios. You can contact him at rafarios@zaxal.com.
