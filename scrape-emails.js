// scrape emails from url

const scrapeEmails = async (url) => {
  const res = await fetch(url);
  const html = await res.text();
  const email_pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  const vals = [...new Set(html.match(email_pattern))];
  return vals.toString();
}

export { scrapeEmails };
