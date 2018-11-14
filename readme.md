`npm install html2rss -g`

### Example

Convert fantasy flight games' blog about X-Wing game to RSS

`curl https://www.fantasyflightgames.com/en/news/tag/x-wing-second-edition/ -s | html2rss -i .blog-item -t .blog-lead`

unix pipeline 4tw