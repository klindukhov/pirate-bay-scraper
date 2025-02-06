# Pirate Bay Scraper

## Description

This script is a web scraper for The Pirate Bay, utilizing Selenium to automate searches and extract torrent information. It retrieves details such as category, title, upload date, file size, seeders, leechers, and uploader information.

## Prerequisites

- Node.js
- Chromium-based browser

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/klindukhov/pirate-bay-scraper.git
   cd pirate-bay-scraper
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

Run the script with a search query:

```sh
node main.js "search term"
```

## Output

The script outputs a JSON array of search results with the following details:

- Category
- Title
- Upload Date
- Download Link
- File Size
- Seeders
- Leechers
- Uploaded By
