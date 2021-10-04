module.exports = {
    base: "/SchoolLive/",
    title: "アニメ",
    description: "ここは、私たちの小さい世界です",
    head: [
      ['link', { rel: 'icon', href: '/assets/ico/胡桃1.ico'}],
      ['meta', { name: 'author', content: '俺' }],
      ['meta', { name: 'keyword', content: 'vuepress 介绍，vuepress说明，ここ、すきです' }]
    ],
    themeConfig: {
      logo: '/assets/img/がっこうぐらし.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: '学園生活部', link: '/about/' },
        { text: 'アニメ', link: 'https://www.bilibili.com/bangumi/media/md2592/?spm_id_from=666.25.b_6d656469615f6d6f64756c65.2' },
      ],
      sidebar: {
        "/css/": [
          'c-aaa',
          'c-bbb',
          'c-ccc',
        ],
        "/javascript/": [
          'j-aaa',
          'j-bbb',
          'j-ccc',
        ]
      }
    }
  }