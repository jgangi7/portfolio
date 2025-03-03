# Portfolio Website

Personal portfolio website built with Next.js, TypeScript, and TailwindCSS.

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment**
   ```bash
   # Copy and edit with your domain
   cp .env.local.example .env.local
   ```

## Development

### Regular Development
```bash
npm run dev
```
Open `http://localhost:3000`

### Secure Development (HTTPS)
```bash
# Terminal 1: Start Next.js
npm run dev

# Terminal 2: Start HTTPS proxy
npx local-ssl-proxy --source 3001 --target 3000 --cert localhost.pem --key localhost-key.pem
```
Open `https://localhost:3001`

If you get SSL errors:
1. Install mkcert globally:
   ```bash
   npm install -g mkcert
   ```
2. Create local certificates:
   ```bash
   mkcert create-ca
   mkcert create-cert
   ```
3. Restart your browser and try again

## Production Deployment

1. Build the project:
   ```bash
   npm run build
   npm start
   ```

## Security Features

- HTTPS enforcement
- CORS headers
- XSS protection
- Content Security Policy
- HSTS enabled

## Tech Stack

- Next.js
- TypeScript
- TailwindCSS
- Framer Motion 