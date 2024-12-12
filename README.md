# AI-Powered Product Recommendations

This application uses Google's Gemini AI to provide personalized product recommendations based on user preferences.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Add your API key to the `.env` file:
     ```
     VITE_GEMINI_API_KEY=your_api_key_here
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Features

- Personalized product recommendations using Gemini AI
- Real-time recommendation generation
- Responsive design with Tailwind CSS
- TypeScript for type safety
- Error handling and loading states

## Project Structure

```
src/
├── components/        # React components
├── config/           # Configuration files
├── hooks/            # Custom React hooks
├── services/         # API services
├── types/            # TypeScript types
└── utils/            # Utility functions
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| VITE_GEMINI_API_KEY | Google Gemini API Key | Yes |

## Development

- Run tests: `npm test`
- Build for production: `npm run build`
- Preview production build: `npm run preview`