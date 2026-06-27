const fs = require('fs');

const html = fs.readFileSync('e:/BVIMIT/bvimit/events_seminars.php', 'utf8');

// Regex to match the card structure
const cardRegex = /<div[^>]*class="row no-gutters"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g;
const imgRegex = /data-src="([^"]+)"/;
const titleRegex = /<h5 class="card-title">([\s\S]*?)<\/h5>/;
const textRegex = /<p class="card-text">([\s\S]*?)<\/p>/;

let events = [];
let match;

while ((match = cardRegex.exec(html)) !== null) {
  const cardHtml = match[1];
  
  const imgMatch = cardHtml.match(imgRegex);
  const titleMatch = cardHtml.match(titleRegex);
  const textMatch = cardHtml.match(textRegex);

  if (titleMatch && textMatch) {
    let imgSrc = imgMatch ? imgMatch[1].trim() : '';
    // Clean up title
    let title = titleMatch[1].replace(/<[^>]*>/g, '').trim();
    // Clean up text (replace </br> or <br> with newlines, remove other tags, trim)
    let text = textMatch[1]
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/br>/gi, '\n')
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .trim();

    // Sometimes the image path has newlines in it in the HTML
    imgSrc = imgSrc.replace(/[\n\r]/g, '').trim();

    events.push({
      title,
      image: `/${imgSrc}`,
      description: text
    });
  }
}

fs.writeFileSync('e:/BVIMIT/bvimit_latest/src/data/events.json', JSON.stringify(events, null, 2));
console.log(`Parsed ${events.length} events successfully.`);
