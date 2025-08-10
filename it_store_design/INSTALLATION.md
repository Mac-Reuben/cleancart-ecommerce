# Installation Guide

## Prerequisites

Before running this e-commerce website, you need to install the following:

### 1. Node.js
Download and install Node.js from [https://nodejs.org/](https://nodejs.org/)

**Recommended version**: Node.js 18 or higher

**Installation methods:**

#### macOS (using Homebrew):
```bash
brew install node
```

#### macOS (using the official installer):
1. Go to https://nodejs.org/
2. Download the LTS version
3. Run the installer

#### Windows:
1. Go to https://nodejs.org/
2. Download the LTS version
3. Run the installer

#### Linux (Ubuntu/Debian):
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Verify Installation
After installation, verify that Node.js and npm are installed:

```bash
node --version
npm --version
```

You should see version numbers displayed for both commands.

## Project Setup

Once Node.js is installed, follow these steps:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## Alternative Package Managers

If you prefer using Yarn instead of npm:

### Install Yarn
```bash
npm install -g yarn
```

### Install Dependencies with Yarn
```bash
yarn install
```

### Start Development Server with Yarn
```bash
yarn dev
```

## Troubleshooting

### Common Issues

1. **"command not found: npm"**
   - Node.js is not installed or not in your PATH
   - Reinstall Node.js and restart your terminal

2. **Permission errors on macOS/Linux**
   - Use `sudo` for global installations
   - Or configure npm to use a different directory

3. **Port 3000 already in use**
   - Kill the process using port 3000
   - Or use a different port: `npm run dev -- -p 3001`

### Getting Help

- Check the [Next.js documentation](https://nextjs.org/docs)
- Visit [Node.js documentation](https://nodejs.org/docs)
- Open an issue in this repository

## Production Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Other Platforms
- **Netlify**: Connect your GitHub repository
- **Railway**: Use their GitHub integration
- **Heroku**: Use their Node.js buildpack
