const projects = [
  {
    id: 0,
    name: 'Every Daisy of the Week',
    date: 'July 2022',
    type: 'E-Commerce Website',
    description: `Every Daisy of the Week was the first bootcamp project I worked on as part of a group. We were tasked with developing, testing, and deploying a functional e-commerce website in just over a week's time. My contributions were primarily on the backend, building out authorization with JWT, enabling checkout for both registered users and guests, developing custom middleware for the server to ensure data security, and building out our database models with a number of functions for retrieving or modifying specific data.`,
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
    deployed: 'https://every-daisy.onrender.com/',
    github: 'https://github.com/Sassy-Software-Engineers/Grace-Shopper'
  },
  {
    id: 1,
    name: 'Matrix Synth',
    date: 'August 2022 - Present',
    type: 'Personal Interest Project',
    description: `Matrix Synth is a project I started during bootcamp and have since expanded upon. Completed over a weekend in a simulated hackathon. I took advantage of the freeform structure of the project to pursue a personal interest project developing a synthesizer and sequencer application. This provided me with an opportunity for applying algorithmic thinking via the matrix sequencer and sharpened my understanding of frontend technologies including React and Redux. I have since expanded the project to allow the user to modify the synth voice and intend to add additional functionality in the future`,
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
    description: `Webby was the capstone project I worked on to close out my bootcamp experience. We decided to develop a social networking app intended to connect people with shared hobbies in an accessible, user-friendly manner. I used this opportunity to expand my design knowledge and further dive into working on the the frontend. I was responsible for refining the UX with MaterialUI, as well as building the full vertical slice of the user profile and edit profile form - from the pages themselves to the models used to interact with the Firestore Database`,
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
