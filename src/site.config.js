// Central place to customize your portfolio content
export const siteConfig = {
  name: 'Your Name',
  role: 'Data Analyst & Educational Content Creator',
  tagline:
    'I analyze complex datasets, craft clear insights, and create practical tutorials that help people learn data skills faster.',
  availability: 'Open to opportunities',
  resumePath: '/resume.pdf',
  splineScene:
    'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode',
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    youtube: 'https://www.youtube.com/'
  },
  projects: [
    {
      title: 'Sales Insights Dashboard',
      description:
        'Interactive dashboard analyzing sales performance across regions, products, and time.',
      stack: ['Python', 'Pandas', 'Plotly', 'Dash'],
      link: 'https://github.com/'
    },
    {
      title: 'Customer Churn Model',
      description:
        'Predictive model identifying at-risk customers using classification techniques.',
      stack: ['Python', 'scikit-learn', 'XGBoost'],
      link: 'https://github.com/'
    },
    {
      title: 'A/B Testing Toolkit',
      description:
        'Reusable framework for experiment design, power analysis, and result interpretation.',
      stack: ['Python', 'SciPy', 'Matplotlib'],
      link: 'https://github.com/'
    },
    {
      title: 'YouTube Analytics Pipeline',
      description:
        'End-to-end pipeline for collecting, transforming, and visualizing channel metrics.',
      stack: ['Python', 'Airflow', 'BigQuery'],
      link: 'https://github.com/'
    },
    {
      title: 'Data Cleaning Helpers',
      description:
        'Utility functions to standardize and validate messy datasets across projects.',
      stack: ['Python', 'Pandas'],
      link: 'https://github.com/'
    }
  ],
  about: {
    intro:
      "I'm a data analyst and educational content creator. I turn raw data into clear, actionable insights and make complex topics accessible through step-by-step tutorials and real-world examples. My work spans analytics, forecasting, experimentation, and data storytelling.",
    body:
      'On YouTube, I share lessons on Python, data analysis, and practical workflows for real projects. I care about clean visuals, reproducible work, and clear communication.',
    skills: [
      'Python',
      'Pandas',
      'NumPy',
      'SQL',
      'Visualization',
      'Statistics',
      'Experimentation',
      'Teaching',
      'Content Strategy'
    ]
  }
}
