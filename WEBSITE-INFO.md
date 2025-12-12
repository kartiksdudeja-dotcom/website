# Supreme Villagio - Luxury Real Estate Website

A modern, responsive real estate website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, inspired by the Supreme Villagio Pune property showcase.

## 🚀 Features

- ✨ **Modern Hero Section** with animated gradients and contact form
- 🏢 **Property Showcase** with 4 BHK & 5 BHK villa configurations
- 🎨 **Interactive UI Components** with smooth animations
- 📱 **Fully Responsive Design** for all devices
- 💬 **WhatsApp Integration** for instant inquiries (Mobile: +91 7678620823)
- 📞 **Click-to-Call** functionality
- 🖼️ **Image Gallery** with lightbox effect
- 🗺️ **Location Section** with nearby landmarks
- 📋 **Floor Plans** with tabbed navigation
- 🏆 **Amenities Showcase** with icon grid
- 👔 **Decision Corner** for expert consultation
- 📝 **Contact Forms** with WhatsApp integration
- 🎯 **Floating Action Buttons** for quick access
- 🎭 **About Builder** section with company info

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Font:** Inter & Playfair Display (Google Fonts)
- **Image Optimization:** Next.js Image Component

## 📦 Installation

1. **Clone the repository or navigate to project:**
   ```bash
   cd "C:\Users\karti\OneDrive\Desktop\PROJECT 3"
   ```

2. **Install dependencies (if not already done):**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📞 Contact Configuration

The website is configured with **WhatsApp number: +91 7678620823**

To change the contact number, update these files:
- `components/Hero.tsx`
- `components/FloatingButtons.tsx`
- `components/Contact.tsx`
- `components/DecisionCorner.tsx`
- `components/Navbar.tsx`
- `components/Footer.tsx`

## 🎨 Customization

### Colors (Tailwind Config)
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#1e3a8a',    // Blue
  secondary: '#d97706',   // Orange
  accent: '#10b981',      // Green
}
```

### Content
Update text and content in respective component files:
- **Property Details:** `components/PriceCards.tsx`
- **Amenities:** `components/Amenities.tsx`
- **Location:** `components/Location.tsx`
- **About Info:** `components/AboutBuilder.tsx`

### Images
Replace placeholder images with your own:
1. Create `/public/images/` directory
2. Add your images
3. Update image paths in components
4. Current images are from Unsplash (temporary)

## 📁 Project Structure

```
PROJECT 3/
├── app/
│   ├── globals.css         # Global styles & animations
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main homepage
├── components/
│   ├── Navbar.tsx          # Sticky navigation bar
│   ├── Hero.tsx            # Hero section with form
│   ├── StripBanner.tsx     # Achievement badges strip
│   ├── Overview.tsx        # Project overview
│   ├── Highlights.tsx      # Key features grid
│   ├── PriceCards.tsx      # Property pricing cards
│   ├── Amenities.tsx       # Amenities grid
│   ├── FloorPlans.tsx      # Floor plan tabs
│   ├── Gallery.tsx         # Image gallery with lightbox
│   ├── Location.tsx        # Location with landmarks
│   ├── DecisionCorner.tsx  # Expert consultation CTA
│   ├── AboutBuilder.tsx    # Company information
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer with links
│   └── FloatingButtons.tsx # WhatsApp & Call buttons
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS config
└── package.json            # Dependencies
```

## 🎯 Key Sections

1. **Hero Section** - Main banner with CTA and lead form
2. **Strip Banner** - Trust badges and certifications
3. **Overview** - Project description and vision
4. **Highlights** - 8 key project specifications
5. **Price Cards** - 3 property types with pricing
6. **Amenities** - 9 modern amenities with icons
7. **Floor Plans** - Master, 4 BHK, 5 BHK plans
8. **Gallery** - 8+ property images
9. **Location** - Nearby landmarks with distances
10. **Decision Corner** - 4 expert consultation options
11. **About Builder** - Company history and leadership
12. **Contact** - Lead capture form
13. **Footer** - Links, RERA info, social media

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
```bash
vercel deploy
```

## 📱 Mobile Optimization

- Responsive breakpoints: Mobile (< 768px), Tablet (768-1024px), Desktop (> 1024px)
- Touch-friendly buttons and navigation
- Mobile-optimized forms
- Fast loading with Next.js optimization

## ⚡ Performance Features

- Image lazy loading with Next.js Image
- Font optimization with next/font
- Code splitting & tree shaking
- CSS purging with Tailwind
- Static page generation

## 🔧 Available Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📝 Next Steps (To Customize)

- [ ] Replace placeholder images with actual property photos
- [ ] Add real floor plan PDFs
- [ ] Update property pricing and details
- [ ] Connect contact form to backend/CRM
- [ ] Add Google Maps integration for location
- [ ] Implement analytics (Google Analytics/Meta Pixel)
- [ ] Add testimonials section
- [ ] Setup email notifications for leads

## 🌐 Website Sections Overview

### Navigation Bar
- Sticky header with smooth scroll
- Mobile-responsive hamburger menu
- Direct call button
- Links to all sections

### Hero Section
- Full-screen banner with animations
- Property title and pricing
- Key USPs (Clubhouse, Payment Plan, Benefits)
- Lead capture form with WhatsApp integration
- CTA buttons (Download Brochure, Enquire)

### Features Implemented
- ✅ Smooth scroll navigation
- ✅ Animated gradients and transitions
- ✅ Hover effects on cards
- ✅ Lightbox for gallery images
- ✅ Tabbed floor plans
- ✅ WhatsApp & Call floating buttons
- ✅ Responsive across all devices
- ✅ SEO optimized metadata

## 📞 Contact Integration

All forms and buttons are connected to:
- **WhatsApp:** +91 7678620823
- **Phone:** +91 7678620823
- **Email:** info@supremevillagio.com (update as needed)

Forms automatically open WhatsApp with pre-filled message including user details.

## 🎨 Design Features

- Modern gradient backgrounds
- Smooth animations (fade, slide, scale)
- Card-based layouts with shadows
- Icon-rich UI elements
- Professional color scheme
- Typography: Playfair Display (headings) + Inter (body)

## 📄 License

This is a custom-built real estate website template. Update with your license terms.

## 🤝 Support

For questions or support:
- **WhatsApp:** +91 7678620823
- **Email:** info@supremevillagio.com

---

**Built with ❤️ using Next.js 14, TypeScript & Tailwind CSS**

🌟 **Website is LIVE at:** http://localhost:3000
