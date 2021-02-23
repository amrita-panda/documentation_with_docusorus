// module.exports = {
//   someSidebar: {
//     Docusaurus: ['doc1', 'doc2', 'doc3'],
//     Features: ['mdx'],
//   },
//};
// module.exports = {
//   docs: {
//     //'Getting started': ['greeting'],
//     STUDIO: ['home', 'solution', 'usermanagement'],
//   },
// };

// module.exports = {
//   docs: [
//     {
//       type: 'category',
//       label: 'Guides',
//       items: [
//         'guides/creating-pages',
//         {
//           STUDIO: ['home', 'solution', 'usermanagement'],
//         },
//       ],
//     }
//   ],
// };
module.exports = {
  docs: [
    {
      type: 'category',
      label: 'STUDIO',
      collapsed: false,
      items: [
        'home',
        {
          Solution:['solutions/dataset','solutions/connector','solutions/modal'],
        },
        'usermanagement',
        
        
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Docusaurus',
    //   items: ['home'],
    // },
    // {
    //   type: 'category',
    //   label: 'Docusaurus',
    //   items: ['usermanagement'],
    // },
  ],
};