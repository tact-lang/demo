# TactDemo

## Get started
1. Install NodeJS `^16.13.0` or run `nvm use`
2. Run `npm i`

## Run a local server
Run `npm run start`

## Build and deploy
1. Run `npm run build`
2. Commit and push changes. Deployment will process automatically

## Update tact compiler
1. Replace `src/scripts/compiler.js` with a new compiler
2. Rebuild app

**Important**: file path must be `src/scripts/compiler.js`

## Update blog
1. Open `src/assets/blog/blog.config.json`
2. Add new post record to the array. Post record format must be:
```json
{
    "url": "<post external url>",
    "title": "Post title",
    "abstract": "Post description",
    "date": <unix epoch time ms as number>
  }
```
You can add this record to any position in the array. Posts will be sorted by its date
3. Follow 'Build and deploy' section. Or you can just copy `src/assets/blog/blog.config.json` to `docs/assets/blog/blog.config.json` and push because rebuild is not necessary.
