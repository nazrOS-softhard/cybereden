
const indexHTML = `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CyberEden</title>
  </head>
  <body>
    <div id="root"></div>

    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`

export default {
  async fetch(request: Request) {
    const url = new URL(request.url)

    // всегда отдаём SPA entry
    if (url.pathname === "/" || !url.pathname.includes(".")) {
      return new Response(indexHTML, {
        headers: { "content-type": "text/html" },
      })
    }

    // fallback для всего остального (ассеты)
    return new Response("not found", { status: 404 })
  },
}
