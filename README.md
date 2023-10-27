<p align="center">
  <a href="https://conventional-emoji-commits.site" target="_blank" rel="noopener noreferrer">
    <img width="160" height="160" src="./public/logo.svg" alt="Conventional Emoji Commits logo">
  </a>
</p>

<h1 align="center"/>Conventional emoji Commits <sup><em>1.0.0</em></sup></h1>

<p align="center">
A specification for adding human and machine readable meaning to commit messages using color-rich emojis 🌈
</p>

<br/>
<p align="center">
  <a href="https://nyxb.chat"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>
  <a href="https://pr.new/conventional-emoji-commits/conventional-emoji-commits.site"><img src="https://developer.stackblitz.com/img/start_pr_dark_small.svg" alt="Start new PR in StackBlitz Codeflow"></a>
  <a href="https://volta.net/conventional-emoji-commits/conventional-emoji-commits.site?utm_source=conventional-emoji-commits.site_readme"><img src="https://user-images.githubusercontent.com/904724/209143798-32345f6c-3cf8-4e06-9659-f4ace4a6acde.svg" alt="Open board on Volta"></a>
</p>
<br/>

<p align="center">
  <a href="https://conventional-emoji-commits.site" target="_blank" rel="noopener noreferrer" >
    <img src="./public/conventional-emoji-commits-og.png" alt="Conventional Emoji Commits screenshots" width="600" height="auto">
  </a>
</p>


## Welcome to Conventional Emoji Commits

The documentation site publishes to https://conventional-emoji-commits.site.
We use [Docux](https://docux.dev) as the site generator and deploy through Netlify.

## Quickstart

### Prerequisites

- GitHub account
- Git installed on your machine
- Node >14.18 installed
  - Use `node -v` to see which version you have installed.
  - Use `nvm install node` to upgrade to the latest version.
  - Refer to the [nvm docs](https://github.com/nvm-sh/nvm#installing-and-updating) for information on installing `nvm`.
- [pnpm](https://pnpm.io/installation) installed

### Install and Preview

1. [Fork the Conventional Emoji Commits GitHub project](https://github.com/conventional-emoji-commits/conventional-emoji-commits.site/fork) into your own account
2. Clone your fork to your local machine
3. From your terminal, `cd` to the directory you cloned into
4. Run `pnpm install`
   Note: Run this from the project's `root` folder of the repository on your machine!
5. Run `pnpm run dev` to launch a preview
6. Visit `localhost:3000/` to see a live preview of the site

### Contributing

When you are ready to submit work back to the main Conventional Emoji Commits repo, create a PR.

1. If it has been a bit, synchronize your fork with the upstream repo on GitHub. 
2. Do your work in a branch on your fork
   Use `git checkout -b branchNameToUse` to create a working branch separate from `main`.
3. Do your work in your preferred editor
4. Commit changes often and write meaningful commits
5. Push the changes from your local machine to your fork on GitHub
6. Go to your fork of the Conventional Emoji Commits project in your GitHub account
7. Select the **Pull Request** tab
8. Select **New Pull Request**
9.  Confirm the repo/branches to compare
   - Base repo should be **conventional-emoji-commits/conventional-emoji-commits.site**
   - base branch should be **main**
   - Head repository should be your fork
   - Compare branch should be your working branch you want to submit
   If you don't see four drop downs, be sure you are comparing across forks.
10. Add a description of the changes your request makes
11. Select **Add Pull Request**

Other team members will review your PR and make comments or suggestions through the PR.
You can continue making additional changes and/or apply feedback by making additional commits to the branch on your fork.
ALWAYS WORK IN YOUR FORK/BRANCH.

## Writing

### Tips

- Docs are in the `content` folder
- Write in standard markdown
- Refer to the Docux [writing pages](https://docux.dev/introduction/writing-pages) guide
- Docux provides additional [components](https://docux.dev/api/components) to extend basic markdown

Avoid screenshots until Conventional Emoji Commits reaches a stable release.

### Standards

Write in **American English** using spelling as found in [Merriam Webster](https://www.merriam-webster.com).
Translation and localization will be handled separately as/when availability or necessity allow.

Use [**semantic linefeeds**](https://rhodesmill.org/brandon/2012/one-sentence-per-line/) with no more than one sentence per line.
To create paragraphs, use a blank line.

There are no house style rules currently.
When we add any, they will be found in this document.

#### Style Guides

Use the first guide that mentions a usable standard from the order below:

1. Refer to the U.S. Government's [Federal Plain Language Guidelines](https://www.plainlanguage.gov/guidelines/) as a base standard.
2. For user interface, device, and other technical guidance, refer to [**Google's Developer Style Guide**](https://developers.google.com/style).
3. As a secondary reference to the Google guide, refer to [Microsoft's Style Guide](https://docs.microsoft.com/style-guide/welcome/), then the [Chicago Manual of Style, 17th Edition](https://www.chicagomanualofstyle.org/home.html).

We use [Merriam-Webster](https://www.merriam-webster.com/) as the standard dictionary for spelling.

### Images

Place image files in the /docs/public/images folder.
You can create subfolders to organize the images.

To add an image to a doc, use standard markdown with [alt text](https://accessibility.huit.harvard.edu/describe-content-images):

```md
[![Alt text](/docs/images/image.svg)](URL.for.hyperlink)
[![StackBlitz logo](/docs/images/stackblitz.svg)](https://stackblitz.com/)
```

## In-house Styles

None yet defined
