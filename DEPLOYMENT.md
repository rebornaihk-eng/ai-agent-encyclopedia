# 🚀 Deployment Guide

## Quick Start

### Local Preview
```bash
cd ~/.openclaw/workspace/ai-agent-encyclopedia
python3 -m http.server 8889
# Open: http://localhost:8889
```

### Deploy to Vercel (Free)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login & Deploy**
   ```bash
   cd ~/.openclaw/workspace/ai-agent-encyclopedia
   vercel
   ```
   
3. **Follow prompts**
   - Login with GitHub/Email
   - Project name: `ai-agent-encyclopedia`
   - Framework: Other

4. **Your site will be live at:**
   - `https://ai-agent-encyclopedia.vercel.app`

---

## Password Protection

**Default Password:** `ai-agent-2025`

**Change Password:**
Edit `index.html` line 94:
```javascript
const correctPassword = 'your-new-password';
```

**How it works:**
- Uses sessionStorage (cleared when browser closes)
- No backend required - pure frontend
- Works with Vercel/Netlify/GitHub Pages

---

## Alternative Hosting

### GitHub Pages (Free)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/ai-agent-encyclopedia.git
git push -u origin main

# Enable in Settings → Pages → main branch
```

### Netlify (Free)
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Cloudflare Pages (Free)
1. Connect GitHub repo to Cloudflare Pages
2. Build command: (none - static site)
3. Output directory: `.`

---

## File Structure

```
ai-agent-encyclopedia/
├── index.html          # 🔐 Login page
├── home.html           # 🏠 Homepage (after login)
├── reference.html      # 📖 Reference docs
├── design.html         # 🎨 Design patterns
├── innovate.html       # 💡 Project ideas
├── build.html          # 🚀 Code examples
├── learn.html          # 🎓 Learning path
├── DEPLOYMENT.md       # This file
└── README.md           # Project info
```

---

## Custom Domain (Optional)

### Vercel
1. Go to Settings → Domains
2. Add your domain (e.g., `agents.yourdomain.com`)
3. Update DNS records

### GitHub Pages
1. Add CNAME file with your domain
2. Configure DNS

---

## Security Notes

⚠️ **This is basic frontend protection**
- Suitable for personal/private use
- Not for highly sensitive data
- Password visible in source code

For production security:
- Use Vercel Password Protection (Pro plan)
- Implement backend authentication
- Use environment variables

---

## Troubleshooting

**Blank page after deploy?**
- Check browser console for errors
- Verify all files are deployed
- Check file paths are relative

**Login not working?**
- Clear browser cache
- Check sessionStorage in DevTools
- Verify password in index.html

**404 on pages?**
- Ensure all HTML files are deployed
- Check case sensitivity (Linux servers)
