# AnimaTwin — Landing Page

Landing + podstrony w stylu jeton.com (kolorystyka orange/cream/ink, smooth scroll Lenis, animacje Framer Motion, przyciski ze slide-up labelem).

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (reveals, parallax, akordeon FAQ)
- Lenis (smooth scroll)
- Fonty: Archivo (display) + Inter (body), latin-ext — pełne polskie znaki

## Struktura
- `/` — pełny landing (hero, problemy, kroki 01–05, funkcje, Health Map 3D, weterynarz/QR, liczby, opinie, cennik, FAQ, CTA)
- `/features`, `/pricing`, `/blog`, `/contact`, `/privacy`, `/terms`, 404

## Uruchomienie
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produkcja
```

## Deploy (Vercel)
```bash
vercel --prod
```
Zero zmiennych środowiskowych — strona w pełni statyczna (poza formularzem kontaktowym, który wymaga podpięcia backendu/API route).

## Treść
Cała treść merytoryczna w `lib/data.ts` — edycja bez dotykania komponentów.
