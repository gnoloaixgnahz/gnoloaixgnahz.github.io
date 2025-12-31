# Technology Thoughts & Books

Personal website for sharing thoughts, experiences, and books about AI Infrastructure, Data Lake & Big Data, and Robotics.

## Site Structure

```
.
├── index.html              # Homepage
├── styles/
│   ├── main.css           # Main stylesheet
│   ├── book.css           # Book-specific styles
│   └── thoughts.css       # Thoughts section styles
├── scripts/
│   ├── main.js            # Main JavaScript functionality
│   └── thoughts.js        # Thoughts filtering functionality
├── books/
│   ├── ai-infra/
│   │   └── index.html     # AI Infrastructure book
│   └── datalake-bigdata/
│       └── index.html     # Data Lake & Big Data book
└── thoughts/
    └── index.html         # Thoughts and blog section
```

## Features

- **Homepage**: Welcome page with overview of the site and featured content
- **Books Section**: 
  - AI Infrastructure book
  - Data Lake & Big Data book
  - Each book has its own dedicated page with table of contents
- **Thoughts Section**: Blog-style section for sharing insights and experiences
  - Filterable by category (AI, Data, Robotics)
  - Responsive card layout

## Design Features

- Modern, clean UI with gradient accents
- Fully responsive design (mobile, tablet, desktop)
- Smooth navigation and interactions
- Sticky navigation bar
- Mobile-friendly hamburger menu

## Getting Started

This is a static GitHub Pages site. To publish:

1. Push all files to your GitHub repository
2. Go to repository Settings → Pages
3. Select the source branch (usually `main` or `master`)
4. Your site will be available at `https://gnoloaixgnahz.github.io`

## Adding Content

### Adding Book Chapters

Edit the book HTML files in `books/ai-infra/index.html` or `books/datalake-bigdata/index.html`:

1. Add new chapters in the table of contents (`.book-toc`)
2. Add corresponding chapter content in `.book-main`
3. Use the `.book-chapter` class for each chapter section

### Adding Thoughts/Articles

Edit `thoughts/index.html`:

1. Add new `.thought-card` elements to `.thoughts-grid`
2. Set the `data-category` attribute (ai, data, or robotics)
3. Update the category badge class accordingly

## Customization

### Colors

Edit CSS variables in `styles/main.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #10b981;
    /* ... */
}
```

### Content

All content is in HTML files. Simply edit the HTML to update text, add new sections, or modify the structure.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes

## License

This is a personal website. Feel free to use the structure as inspiration for your own site.

## Contributing

This is a personal repository. If you have suggestions or find issues, please open an issue on GitHub.

