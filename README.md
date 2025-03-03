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

3. **Development**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000`

## HTTPS Setup (Required)

1. **Install SSL Proxy**
   ```bash
   npm install -g local-ssl-proxy
   ```

2. **Run Development**
   ```bash
   # Terminal 1
   npm run dev

   # Terminal 2
   local-ssl-proxy --source 3001 --target 3000
   ```
   Open `https://localhost:3001`

## Production Deployment

1. Set `NEXT_PUBLIC_DOMAIN` in `.env.local`
2. Build and deploy:
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