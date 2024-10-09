import { scrape } from "./scrape.js";

const url = "https://nethunt.com/blog/how-to-choose-professional-email-address/";

(async () => {
  console.log(await scrape(url));
})()
