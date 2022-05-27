# 11ty-edge-demo

> Created on stream: [5t3phDev](https://twitch.tv/5t3phDev)

## Edge Resources

- [Netlify Edge Docs](https://docs.netlify.com/netlify-labs/experimental-features/edge-functions/api/)
- [Netlify Edge Examples](https://edge-functions-examples.netlify.app/)
- [11ty Edge Examples](https://demo-eleventy-edge.netlify.app/)
- [Using NPM modules with Deno](https://deno.land/manual/node/cdns)
- [11ty Edge Search](https://github.com/11ty/eleventy-base-blog/compare/demo-edge-search)
- Demo by @BenDMyers - [Eleventy Edge Wordle](https://github.com/BenDMyers/eleventy-edge-wordle)

## Edge Tips & Gotchas

- 11ty Edge does _not_ have access to your data, filters, or collections - you will have to generate any data you want and send it to the `_generated` directory within `netlify/edge-functions`.
  - See `src/_generated/meta.njk` for one example on how to share data
- If you make a change between the `{% edge %}` shortcode, you may need to restart the server.
- As of `canary-11` you cannot stack 11ty Edge functions and successfully get `globalData` from both - only the last function returns data.
