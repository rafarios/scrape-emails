import { scrapeEmails } from "./scrape-emails.js";

const url = "https://nethunt.com/blog/how-to-choose-professional-email-address/";

(async () => {
  console.log(await scrapeEmails(url));
})()
