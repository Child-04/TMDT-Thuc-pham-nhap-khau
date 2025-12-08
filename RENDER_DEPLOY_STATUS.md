# Render Deploy Configuration

## Current Setup
- Frontend: https://tmdt-thuc-pham-nhap-khau-client.onrender.com
- Backend: https://tmdt-thuc-pham-nhap-khau-server.onrender.com

## Backend Status
✅ Working correctly - API returns 200 OK

## Frontend Issue
❌ SPA Routing not working - Direct URL access returns 404

## Root Cause
Render Static Site does not automatically read `_redirects` or `netlify.toml` files.
You MUST configure rewrites manually in the Render Dashboard.

## Solution Required
**Manual configuration on Render Dashboard is MANDATORY**

### Steps (MUST DO):
1. Login to Render: https://dashboard.render.com/
2. Select service: `tmdt-client`
3. Navigate to: **Settings → Redirects/Rewrites**
4. Add new rewrite rule:
   ```
   Source: /*
   Destination: /index.html
   Action: Rewrite (not Redirect)
   ```
5. Save and wait for automatic redeploy

## Files Already Prepared
- ✅ `client/public/_redirects` - Ready but not used by Render
- ✅ `client/build/_redirects` - Copied during build
- ✅ `render.yaml` - Blueprint for new services
- ✅ `client/public/netlify.toml` - Alternative format

## Testing Backend
```bash
# Test backend health
curl https://tmdt-thuc-pham-nhap-khau-server.onrender.com/products
# Expected: 200 OK with product list
```

## Testing Frontend (After Fix)
```bash
# Test direct URL access
curl https://tmdt-thuc-pham-nhap-khau-client.onrender.com/detail/thit-bo-uc
# Expected: 200 OK with index.html (not 404)
```

## Alternative: Use Web Service Instead of Static Site
If Render doesn't support Redirects/Rewrites in your plan:

1. Change service type from "Static Site" to "Web Service"
2. Add to `client/package.json`:
   ```json
   {
     "dependencies": {
       "serve": "^14.2.0"
     },
     "scripts": {
       "start:prod": "serve -s build -l $PORT"
     }
   }
   ```
3. Configure on Render:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm run start:prod`
   - Auto-Deploy: Yes

The `serve` package automatically handles SPA routing.
