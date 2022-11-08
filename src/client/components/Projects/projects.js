const projects = [
  {
    id: 0,
    name: 'Every Daisy of the Week',
    date: 'July 2022',
    type: 'E-Commerce Website',
    description:
      "Every Daisy of the Week was the first project I was a part of during bootcamp. We were tasked with developing, testing, and deploying a functional e-commerce website in just over a week's time. My contributions were primarily on the backend, building out authorization with JWT, enabling checkout for both registered users and guests, developing custom middleware for the server, and building out our database models with a number of functions for retrieving or modifying specific data.",
    role: 'Full Stack Developer, Backend Specialist',
    tech: [
      'Stripe',
      'React',
      'Redux',
      'Axios',
      'Express',
      'Sequelize',
      'PostgreSQL',
      'Bootstrap',
      'JWT',
      'Javascript',
      'CSS',
      'HTML',
      'Git',
      'Github'
    ],
    deployed: 'https://every-daisy.herokuapp.com/',
    github: 'https://github.com/Sassy-Software-Engineers/Grace-Shopper'
  },
  {
    id: 1,
    name: 'Matrix Synth',
    date: 'August 2022 - Present',
    type: 'Personal Interest Project',
    description:
      'Matrix Synth was another bootcamp project, done in a weekend, I took advantage of the freeform structure of the project to pursue a personal project developing a synthesizer and sequencer application. This provided me with an opportunity for applying algorithmic thinking through the matrix and sharpened my understanding of frontend technologies including React, Redux, and AudioContext.',
    role: 'Solo Developer',
    tech: [
      'React',
      'Redux',
      'Tone.js',
      'Javascript',
      'CSS',
      'HTML',
      'Git',
      'Github'
    ],
    deployed: 'https://noellehuchette.github.io/matrixsynth/',
    github: 'https://github.com/noellehuchette/matrixsynth'
  },
  {
    id: 2,
    name: 'Webby',
    date: 'August 2022',
    type: 'Social Networking Website',
    description:
      'Webby was the capstone project I worked on to close out my bootcamp experience. We decided to develop a social networking app intended to connect people with shared hobbies. I used this opportunity to expand my design knowledge and further dive into the frontend. I was responsible for refining the UX with MaterialUI, as well as building the full vertical slice of the user profile and edit profile form.',
    role: 'Full Stack Developer, Frontend Specialist',
    tech: [
      'React',
      'Redux',
      'Firebase',
      'D3',
      'Geoapify',
      'MaterialUI',
      'Javascript',
      'CSS',
      'HTML',
      'Git',
      'Github'
    ],
    deployed: 'https://webby-social.netlify.app/',
    github: 'https://github.com/THEM-exclamationpoint/Webby'
  }
];

export default projects.reverse();
