// Cloudflare Worker — serves the built SPA from the static-assets binding.
// Wrangler's `assets.not_found_handling = "single-page-application"` already
// handles client-side routing fallback, but we keep an explicit worker to
// allow future API routes or edge logic. For now it just delegates everything
// to ASSETS.

export interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return env.ASSETS.fetch(request);
  },
};
