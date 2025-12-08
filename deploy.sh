#!/bin/bash

# Script để deploy frontend lên Render với SPA routing support

echo "🚀 Building React app..."
cd client
npm install
npm run build

echo "✅ Build completed!"
echo ""
echo "📋 Next steps on Render Dashboard:"
echo "1. Go to: https://dashboard.render.com/"
echo "2. Select your 'tmdt-client' service"
echo "3. Go to Settings → Redirects/Rewrites"
echo "4. Add Rewrite Rule:"
echo "   Source: /*"
echo "   Destination: /index.html"
echo "   Action: Rewrite"
echo "5. Save Changes"
echo ""
echo "✨ Your SPA routing will work after redeployment!"
