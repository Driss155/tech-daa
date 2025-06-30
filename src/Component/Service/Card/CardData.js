// data.js

const cardsData = [
  {
    id: 1,
    image: '/services/FULL.jfif',
    cardHeader: 'Full Web Management',
    cardTitle: 'We focus on providing the right tool for product innovation and digital communication',
    cardBody: [
      'Web Design and App Development',
      'Mobile Apps',
      'UI/UX Design',
      'Technology Consulting',
      'Website Conception'
    ],
    cardOrder: '1',
    directionFlex: 'ltr'
  },
  {
    id: 2,
    image: '/services/Digital.png',
    cardHeader: 'Digital Branding',
    cardTitle: 'Tailor-made digital marketing services towards reaching the optimal success for every client',
    cardBody: [
      'Social Media',
      'Campaign Strategy',
      'Campaign Management',
      'Graphic Design',
      'Marketing Automation',
      'Marketing Insights and Analytics',
      'Brand Kit'
    ],
    cardOrder: '-1',
    directionFlex: 'rtl'
  },
  {
    id: 3,
    image: '/services/documentation.jpg',
    cardHeader: 'Project making & Documentations',
    // (I also fixed a small typo here: Creat -> Create)
    cardTitle: 'Create content that really resonates with your target audience and bring together creative elements to get the message across.',
    cardBody: [
      'PFE/PS Management',
      'Total Documentation',
      'School Projects Management',
      'Total Conception',
      'Strategy Production'
    ],
    cardOrder: '1',
    directionFlex: 'ltr'
  },
  {
    id: 4,
    image: '/services/maintainence.png',
    cardHeader: 'Maintenance & Support',
    cardTitle: 'We find the right people with the right skill set to meet your needs',
    cardBody: [
      'Consultations',
      'Workforce Assessment',
      'Full maintenance',
      'Website Management'
    ],
    cardOrder: '-1',
    directionFlex: 'rtl'
  },
];

export default cardsData;