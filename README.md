# آن لائن کیلکولیٹر (Urdu Calculator)

A modern, responsive online calculator built with React and Vite, featuring Urdu numerals and RTL (Right-to-Left) support.

## Features

- 🔢 **Urdu Numerals**: Uses authentic Urdu-Arabic numerals (٠١٢٣٤٥٦٧٨٩)
- 📱 **Mobile Responsive**: Works perfectly on all devices
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎨 **Modern UI**: Clean, professional design with Tailwind CSS
- 🌐 **RTL Support**: Proper right-to-left text direction for Urdu
- 🧮 **Basic Operations**: Addition, subtraction, multiplication, and division
- 🆓 **Free & Open Source**: No dependencies on external libraries

## Tech Stack

- **React 18** - Modern React with functional components and hooks
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd urducaclator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   └── SEOFooter.jsx   # Footer with SEO content
├── pages/              # Page components
│   └── Calculator.jsx  # Main calculator component
├── App.jsx             # Main app component
├── App.css             # App-specific styles
├── index.css           # Global styles and Tailwind imports
└── main.jsx            # React entry point
```

## Features in Detail

### Calculator Functions
- Basic arithmetic operations (+, -, ×, ÷)
- Clear (C) and Clear Entry (CE) functions
- Decimal point support with Urdu decimal separator (٫)
- Real-time display updates
- Error handling for invalid operations

### Urdu Localization
- All numbers displayed in Urdu-Arabic numerals
- RTL text direction
- Urdu interface text and labels
- Proper font support with Noto Nastaliq Urdu

### SEO Optimization
- Structured data markup (JSON-LD)
- Meta tags for search engines
- Semantic HTML structure
- Accessibility features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Google Fonts for Noto Nastaliq Urdu font
- Tailwind CSS for the utility-first CSS framework
- Vite team for the amazing build tool
- React team for the excellent framework

---

**Made with ❤️ for Urdu speakers worldwide**