# Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases professional experience, projects, and skills with a clean, professional design.

## Features

- 🎨 Modern UI with Tailwind CSS and shadcn/ui components
- 📱 Fully responsive design
- 🚀 Fast performance with Vite
- 📧 Contact form with EmailJS integration
- 🌗 Clean and professional design
- 🔍 SEO-friendly structure

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- EmailJS
- shadcn/ui components
- Express.js (Backend)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`.

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   └── lib/           # Utility functions
├── server/                # Express.js backend
├── public/               # Static assets
└── ...configuration files
```

## Customization

1. Update the personal information in `src/components/Hero.tsx`
2. Modify projects in `src/components/Projects.tsx`
3. Edit experience details in `src/components/Experience.tsx`
4. Update skills in `src/components/Skills.tsx`
5. Customize theme colors in `theme.json`

## EmailJS Setup

1. Sign up for an EmailJS account at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create a new email service and template
3. Copy your credentials to the `.env` file
4. Update the contact form in `src/components/Contact.tsx` if needed

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
