# Leon Lens Photography

Professional photography website for **Leon Lens** — portfolio gallery, client booking, and admin dashboard.

**Live site:** [leon-lens-photography.harrietmaleck.workers.dev](https://leon-lens-photography.harrietmaleck.workers.dev)  
**GitHub:** [github.com/harrietaleck/LeonLensPhotography](https://github.com/harrietaleck/LeonLensPhotography)

## Features

- Dark-themed homepage with hero slideshow, featured work, services, about, and testimonials
- Portfolio gallery with sections for:
  - White Weddings
  - Traditional Weddings
  - Graduation
  - Birthday Shoot
  - Commercial / Architecture
  - Portraits
  - Events
- Online booking form with validation
- Admin page to view booking submissions
- Contact details and social links (Instagram, Facebook, phone, email)

## Tech stack

- [Next.js](https://nextjs.org/) 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- react-hook-form
- lucide-react

## Getting started

### Requirements

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)  
(If port 3000 is busy, Next.js may use **3001**.)

### Build for production

```bash
npm run build
npm start
```

### Deploy to Cloudflare

```bash
npm run deploy
```

This builds with OpenNext and deploys to Cloudflare Workers. Bookings are stored in Cloudflare KV.

## Project structure

```
src/
  app/
    page.tsx          # Homepage
    gallery/          # Portfolio gallery
    booking/          # Booking form page
    admin/            # Booking admin dashboard
    api/booking/      # Booking API route
  components/         # UI sections (nav, footer, home, booking, admin)
public/
  logo.png
  images/             # Gallery assets (weddings, graduation, etc.)
```

## Main pages

| Route       | Description                          |
|------------|--------------------------------------|
| `/`        | Homepage                             |
| `/gallery` | Full portfolio gallery               |
| `/booking` | Book a photography session           |
| `/admin`   | View submitted bookings              |

## Contact

- **Phone:** 065 641 9848  
- **Email:** bessingmaramba1@gmail.com  
- **Instagram:** [@leonlensphotos](https://www.instagram.com/leonlensphotos)  
- **Facebook:** [Leon Lens on Facebook](https://www.facebook.com/share/1EfNRSyq97/)

## Booking data

Booking submissions are stored locally in `data/bookings.json` (ignored by git). This is suitable for development; for production you’d typically use a database or form service.

## Scripts

| Command         | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm start`    | Run production server    |
| `npm run lint` | Run ESLint               |

## License

Private project for Leon Lens Photography. All photos and branding belong to the photographer.
