## formico-website
The website for [?](?)

## Deploy

When deploying the website you might need to first delete `node-modules/gh-pages/.cache`.

`rm -rf node_modules/gh-pages/.cache`

Then deploy to GitHub pages

`npm run deploy`


## Dev Branch vs Deploy Branch

Development is done on the dev branch.

Deploys get uploaded to the master branch.

This is a naming limitation of GitHub pages [see here](https://help.github.com/articles/user-organization-and-project-pages/)

to save your work

```
git push origin dev
```

## Gatsby Info

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).


## Install

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

And run from your CLI:
```sh
gatsby new gatsby-example-site
```

Then you can run it by:
```sh
cd gatsby-example-site
npm run develop
```

