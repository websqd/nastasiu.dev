# nastasiu.dev

A static site. The files in `public/` are the whole site. There is no build step.

## Preview locally

```txt
python3 -m http.server -d public 8000
```

Open http://localhost:8000.

## Deploy

Push to `main`. Cloudflare Pages is connected to this repo and publishes every push.

To deploy by hand without installing anything into the repo:

```txt
npx wrangler@latest pages deploy public
```
