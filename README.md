# Luxury Real Estate Website - Supreme Villagio

A modern, responsive real estate landing page built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ **Modern Design**: Clean, professional UI with smooth animations
- ✅ **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- ✅ **Next.js 14**: Built with the latest Next.js App Router
- ✅ **TypeScript**: Type-safe code for better development experience
- ✅ **Tailwind CSS**: Utility-first CSS framework for rapid styling
- ✅ **Interactive Components**: 
  - Sticky navigation with smooth scroll
  - Image gallery with lightbox
  - Tabbed floor plans
  - Contact forms
  - WhatsApp integration
  - Floating action buttons

## 📋 Sections

1. **Hero Section** - Eye-catching banner with key property details
2. **Overview** - Detailed property description
3. **Highlights** - Key features and specifications
4. **Price Cards** - Property options with pricing
5. **Amenities** - World-class facilities
6. **Floor Plans** - Interactive floor plan viewer
7. **Gallery** - Image showcase with lightbox
8. **Location** - Map and nearby landmarks
9. **Contact** - Lead capture form with WhatsApp integration
10. **Footer** - Company information and links

## 🛠️ Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 📞 Contact Integration

- **WhatsApp Number**: +91 7678620823
- **Phone**: +91 7678620823

The website includes:
- Floating WhatsApp button (bottom right)
- Floating call button (above WhatsApp)
- Contact form that sends inquiries via WhatsApp
- Click-to-call buttons in navigation

## 🎨 Customization

### Change Colors
Edit [tailwind.config.js](tailwind.config.js):
```javascript
colors: {
  primary: '#1e3a8a',    // Blue
  secondary: '#d97706',  // Orange
  accent: '#10b981',     // Green
}
```

### Update Images
Replace placeholder images in each component with your actual property images:
- Hero section: [components/Hero.tsx](components/Hero.tsx)
- Gallery: [components/Gallery.tsx](components/Gallery.tsx)
- Price cards: [components/PriceCards.tsx](components/PriceCards.tsx)
- Floor plans: [components/FloorPlans.tsx](components/FloorPlans.tsx)

### Modify Content
Edit component files in the `/components` folder to update text, prices, and features.

## 📁 Project Structure

```
PROJECT 3/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── Overview.tsx      # Overview section
│   ├── Highlights.tsx    # Highlights section
│   ├── PriceCards.tsx    # Price cards
│   ├── Amenities.tsx     # Amenities section
│   ├── FloorPlans.tsx    # Floor plans
│   ├── Gallery.tsx       # Image gallery
│   ├── Location.tsx      # Location section
│   ├── Contact.tsx       # Contact form
│   ├── Footer.tsx        # Footer
│   └── FloatingButtons.tsx # WhatsApp & Call buttons
├── public/
│   └── images/           # Place your images here
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🖼️ Adding Your Images

1. Create an `images` folder in the `public` directory
2. Add your property images
3. Update image paths in components from Unsplash URLs to local paths:
   ```tsx
   // Before
   src="https://images.unsplash.com/..."
   
   // After
   src="/images/your-image.jpg"
   ```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Deploy from git repository
- **Self-hosted**: Build and deploy to your server

## 📝 To-Do

- [ ] Add your actual property images
- [ ] Update property prices and details
- [ ] Configure contact form backend (optional)
- [ ] Add Google Analytics (optional)
- [ ] Set up email notifications for leads (optional)
- [ ] Add SEO meta tags for specific pages
- [ ] Create sitemap.xml

## 🤝 Support

For any questions or support, contact:
- Phone: +91 7678620823
- WhatsApp: +91 7678620823

## 📄 License

This project is proprietary and confidential.

---

**Built with ❤️ for Supreme Villagio**
