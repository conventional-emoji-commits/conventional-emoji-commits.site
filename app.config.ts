export default defineAppConfig({
   docux: {
      title: 'Conventional Emoji Commits',
      description: 'A specification for adding human and machine readable meaning to commit messages using color-rich emojis 🌈',
      image: 'https://github.com/nyxb/docux/blob/main/.github/images/docux_repo_picture.png',
      socials: {
         github: 'conventional-emoji-commits',
      },
      github: {
         dir: 'content',
         branch: 'main',
         repo: 'conventional-emoji-commits.site',
         owner: 'conventional-emoji-commits',
         edit: true,
      },
      aside: {
         level: 1,
         collapsed: false,
         exclude: [],
         navigation: true,
      },
      main: {
         padded: true,
      },
      header: {
         title: '',
         logo: true,
         showLinkIcon: true,
         exclude: [],
         navigation: false,
      },
      footer: {
         iconLinks: [],
      },
   },
})
