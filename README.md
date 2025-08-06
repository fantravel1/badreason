# BadReason.com

BadReason.com is an educational resource dedicated to teaching about logical fallacies and flawed arguments. The website helps users recognize bad reasoning and improve their critical thinking skills through clear explanations, real-world examples, and interactive features.

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Interactive Fallacy Library**: Browse and search through a collection of logical fallacies
- **Fallacy of the Day**: Discover a new fallacy each day
- **Detailed Fallacy Pages**: In-depth explanations with examples and tips
- **Clean, Accessible UI**: Modern design with a focus on readability and user experience
- **Educational Resources**: Learn how to spot and avoid common logical fallacies

## Pages

1. **Home** (`index.html`) - Landing page with featured content and introduction
2. **Fallacy Library** (`fallacies.html`) - Browse and search all fallacies
3. **Individual Fallacy Pages** (e.g., `fallacy-straw-man.html`) - Detailed information about each fallacy
4. **About** (`about.html`) - Information about the project and team

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- JavaScript (Vanilla JS, no frameworks)
- Google Fonts (Playfair Display, Merriweather, Inter, Open Sans)
- Font Awesome Icons
- Responsive Design with Flexbox and Grid

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (for development)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/badreason.git
   cd badreason
   ```

2. For local development, you can use Python's built-in HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

   Alternatively, you can use any other local web server of your choice.

## Project Structure

```
badreason/
├── index.html          # Home page
├── fallacies.html      # Fallacy library
├── fallacy-template.html # Template for individual fallacy pages
├── about.html          # About page
├── styles.css          # Main stylesheet
├── main.js             # Main JavaScript file
├── favicon.ico         # Website favicon
└── README.md           # This file
```

## Adding New Fallacies

To add a new fallacy to the library:

1. Create a new HTML file using the `fallacy-template.html` as a base
2. Name the file following the pattern: `fallacy-[name].html` (e.g., `fallacy-straw-man.html`)
3. Update the content with the new fallacy's information
4. Add the fallacy to the `fallacies` array in `fallacies.html` and `main.js`

## Customization

### Colors

The website uses CSS variables for theming. You can customize the color scheme by modifying these variables in `styles.css`:

```css
:root {
  --bg-color: #F5F5F7;
  --text-color: #222831;
  --accent-red: #B85042;
  --accent-teal: #7D9D9C;
  --light-gray: #E8E8E8;
  --white: #FFFFFF;
  --transition: all 0.3s ease;
  --border-radius: 8px;
  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --max-width: 1200px;
}
```

### Typography

The website uses Google Fonts. To change the fonts, update the links in the `<head>` section of each HTML file and the corresponding CSS font-family declarations.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspiration from various critical thinking and philosophy resources
- Special thanks to all contributors who helped shape this project

## Contact

For questions or feedback, please contact [your-email@example.com](mailto:your-email@example.com)
