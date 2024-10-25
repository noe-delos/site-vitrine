#!/bin/bash

# setup-nextjs-project.sh

# Exit on error
set -e

# Check if project name is provided
if [ -z "$1" ]
then
    echo "Please provide a project name"
    echo "Usage: ./setup-nextjs-project.sh <project-name>"
    exit 1
fi

PROJECT_NAME=$1

# Create Next.js project
echo "Creating Next.js project with TypeScript and Tailwind..."
npx create-next-app@latest $PROJECT_NAME --typescript --tailwind --eslint

# Navigate to project directory
cd $PROJECT_NAME

# Install additional dependencies
echo "Installing additional development dependencies..."
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier prettier-plugin-tailwindcss

# Create Prettier config
echo "Creating Prettier configuration..."
cat > .prettierrc.json << EOL
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "plugins": ["prettier-plugin-tailwindcss"]
}
EOL

# Create ESLint config
echo "Creating ESLint configuration..."
cat > .eslintrc.json << EOL
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "root": true,
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error"
  }
}
EOL

# Create TypeScript config
echo "Creating TypeScript configuration..."
cat > tsconfig.json << EOL
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOL

# Add npm scripts
echo "Adding npm scripts..."
npm pkg set scripts.format="prettier --write ."
npm pkg set scripts.lint="next lint"
npm pkg set scripts.type-check="tsc --noEmit"

# Initialize Git repository
echo "Initializing Git repository..."
git init

echo "Setup complete! 🎉"
echo "To start development:"
echo "  cd $PROJECT_NAME"
echo "  npm run dev"
echo "Your project will be available at http://localhost:3000"