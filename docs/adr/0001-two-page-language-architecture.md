# Bilingual site as two static pages, Arabic at `/` and English at `/en/`

Arabic and English both launch on day one. Each language is a real, separately indexed URL (`/index.html` and `/en/index.html`) with reciprocal `hreflang` and canonical tags, and the language switch is a plain link. A single page swapped by JavaScript was rejected: search engines only index what has its own URL, the page must survive JavaScript being off, and a client-side swap risks a flash of the wrong language.

The cost is that shared markup is duplicated by hand across two files. That is accepted for a two-page site; if a third page or a shared layout change appears, move to a static-site generator rather than maintaining copies. Section IDs are kept identical in both files so `/en/#pit-stop` resolves.
