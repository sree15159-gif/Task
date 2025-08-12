# Deployment Guide for Render

## Quick Start
1. Push your code to GitHub
2. Connect GitHub repo to Render
3. Use the provided `render.yaml` configuration
4. Deploy!

## Configuration Files

### render.yaml
- Defines service configuration
- Sets build and start commands
- Configures environment variables

### next.config.js
- Next.js configuration
- Image optimization settings
- Security headers
- Environment variables

### .env.example
- Template for environment variables
- Copy to `.env.local` for local development

## Environment Variables
Set these in Render dashboard:
- `NODE_ENV=production`
- `PORT=10000`
- Add any custom variables your app needs

## Build Process
1. `npm install` - Install dependencies
2. `npm run build` - Build Next.js app
3. `npm start` - Start production server

## Monitoring
- Check logs in Render dashboard
- Monitor build times and memory usage
- Set up health checks

## Custom Domain
1. Add domain in Render settings
2. Configure DNS records
3. SSL is automatically provided

## Performance Tips
1. Optimize images using Next.js Image component
2. Use static generation where possible
3. Minimize bundle size
4. Enable compression

## Troubleshooting
- Check build logs for errors
- Verify all dependencies are listed
- Ensure Node.js version compatibility
- Check environment variables

## Support
- Render Documentation: https://render.com/docs
- Next.js Documentation: https://nextjs.org/docs