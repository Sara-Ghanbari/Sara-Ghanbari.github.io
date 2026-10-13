export const sections = [
  ['intro', 'Introduction'],
  ['about', 'About & skills'],
  ['web', 'Web development'],
  ['ml', 'Machine learning'],
  ['experience', 'Experience'],
  ['contact', 'Get in touch'],
]
export const email = 'saraghanbari.sg@gmail.com'
export const resumes = {
  web: '/resumes/Sara-Ghanbari-Web-Development.pdf',
  ml: '/resumes/Sara-Ghanbari-Machine-Learning.pdf',
}
export const projects = {
  lfw: {
    label: 'MACHINE LEARNING · ACADEMIC PROJECT',
    title: 'Face recognition on LFW',
    name: 'Face recognition on LFW',
    description:
      'Built a biometric verification pipeline using face embeddings, metric learning, and similarity scoring.',
    role: 'Selected academic project',
    items: ['Evaluated identity-matching performance on the LFW benchmark.'],
    stack: ['Face embeddings', 'Metric learning', 'Evaluation'],
  },
  features: {
    label: 'MACHINE LEARNING · ACADEMIC PROJECT',
    title: 'Hand biometrics feature selection',
    name: 'Hand biometrics feature selection',
    description:
      'Evaluated DNN representations to identify discriminative biometric features.',
    role: 'Selected academic project',
    items: ['Applied separation-index analysis to compare biometric features.'],
    stack: ['DNNs', 'Feature selection', 'Separation index'],
  },
  vgg: {
    label: 'MACHINE LEARNING · ACADEMIC PROJECT',
    title: 'CNN representation analysis',
    name: 'CNN representation analysis',
    description: 'Analyzed feature separability across VGG16 layers.',
    role: 'Selected academic project',
    items: [
      'Assessed deep representation quality through layer-wise analysis.',
    ],
    stack: ['VGG16', 'CNNs', 'Representations'],
  },
  gan: {
    label: 'MACHINE LEARNING · ACADEMIC PROJECT',
    title: 'DCGAN emoji generation',
    name: 'DCGAN emoji generation',
    description: 'Trained a convolutional GAN for emoji image generation.',
    role: 'Selected academic project',
    items: ['Evaluated generated sample quality during adversarial training.'],
    stack: ['DCGAN', 'Generative models', 'Evaluation'],
  },
  notes: {
    label: 'MACHINE LEARNING · ACADEMIC PROJECT',
    title: 'Instrument note detection',
    name: 'Instrument note detection',
    description:
      'Compared recurrent models for sequence-based musical note classification.',
    role: 'Selected academic project',
    items: ['Compared RNN, LSTM, and GRU architectures.'],
    stack: ['RNN', 'LSTM', 'GRU'],
  },
  gis: {
    label: 'WEB DEVELOPMENT · PROFESSIONAL WORK',
    title: 'Making geospatial data approachable.',
    name: 'GIS visualization platform',
    description:
      'Responsive maps, charts, and dashboards for a platform used by the National Library and Archives of Iran.',
    role: 'Front-End Developer · Setare Rahnama Sanat · 2023–2024',
    items: [
      'Built interactive map, chart, and dashboard components with asynchronous GIS data loading.',
      'Integrated GIS analysis results into views designed for exploration.',
      'Worked with GIS specialists, back-end developers, and a UI designer to translate Figma designs into responsive interfaces.',
    ],
    stack: ['JavaScript', 'HTML / CSS', 'AJAX', 'Figma'],
  },
  vision: {
    label: 'WEB + MACHINE LEARNING · PROFESSIONAL WORK',
    title: 'From camera footage to actionable signals.',
    name: 'AI surveillance dashboard',
    description:
      'A React interface connecting camera feeds, computer-vision predictions, and abnormal-activity alerts.',
    role: 'Front-End Developer / AI Engineer · Setare Rahnama Sanat · 2023–2024',
    items: [
      'Developed a responsive React dashboard for monitoring camera feeds and anomaly-detection outputs.',
      'Prepared raw footage as structured supervised datasets for training, validation, and evaluation.',
      'Integrated YOLOv9 object detection into visual predictions and automated alerts for industrial monitoring.',
    ],
    stack: ['React', 'Python', 'YOLOv9', 'Computer vision'],
  },
  biometric: {
    label: 'MACHINE LEARNING · RESEARCH',
    title: 'Learning the patterns that identify us.',
    name: 'Hand & face biometrics',
    description:
      'Deep learning and metric learning for biometric identification in human–robot interaction.',
    role: 'Research Assistant · Human and Robot Interaction Laboratory · 2020–2022',
    items: [
      'Curated hand-geometry datasets for training, validation, and benchmarking.',
      'Designed and evaluated a custom deep neural network for hand biometric recognition.',
      'Contributed to prototype-device validation and two published biometric-identification papers.',
    ],
    stack: ['Deep learning', 'Metric learning', 'MediaPipe', 'Evaluation'],
  },
}
