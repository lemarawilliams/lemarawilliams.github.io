// data/site.js — edit this file to update your site content

export const researcher = {
  name: "Lemara Williams",
  title: "PhD Student",
  department: "Department of Computer Science",
  institution: "Washington University in St. Louis",
  email: "lemaraw@wustl.edu",
  bio: `Hi! I'm Lemara Williams - an engineer and researcher committed to bridging the gap between technology and daily life. My current focus lies somewhere between visualization, decision-making and explainability.

When I'm more than an arm's length from a screen, you'll find me reading about a fantasy world or morally dubious charcters, making some tea, or trying to learn a new language. 

In my research, I aim to make the world a little easier to understand - and empower change.`,
  links: {
    googleScholar: "https://scholar.google.com",
    semanticScholar: "https://semanticscholar.org",
    github: "https://github.com",
    twitter: "https://twitter.com",
    orcid: "https://orcid.org",
  },
  cv: "/WilliamsLemara_2024Resume.pdf", // place your CV at public/cv.pdf
}

export const news = [
  {
    date: "October 2024",
    text: "Presented my paper at VIS!",
  },
  {
    date: "August 2024",
    text: "Started my PhD at WashU! Go Bears! 🐻",
  }
]

export const publications = [
  {
    title: "Visualizing Temporal Topic Embeddings with a Compass",
    authors: "Palamarchuk, D.*, +Williams, L.*, +Mayer, B., +Danielson, T., +Faust, R., +Deschaine, L. & +North, C.",
    venue: "IEEE Transactions on Visualization and Computer Graphics (VIS)",
    year: 2024,
    tags: ["Topic Modeling", "Representation Learning"],
    links: { pdf: "http://dx.doi.org/10.1109/TVCG.2024.3456143"},
    note: ["* indicates equal contribution"]
  },
  {
    title: "Responsible Prompting Recommendation: Fostering Responsible AI Practices in Prompting-Time",
    authors: "Santana, V. F., + Berger, S., + Candello, H., + Machado, T., Macedo, M.M.G., + Sanctos, C. S., + Su, T., + & Williams, L.",
    venue: "Conference on Human Factors in Computing Systems (CHI)",
    year: 2025,
    tags: ["Human-AI Interaction", "Prompting Engineering"],
    // award: "Best Paper Award",
    links: { pdf: "https://doi.org/10.1145/3706598.3713365"},
  },
  {
    title: "Can LLMs Recommend More Responsible Prompts?",
    authors: "Santana, V. F., + Berger, S., + Machado, T., and de Macedo, Macedo, M.M.G., + Sanctos, C. S., + Williams, L. + & Wu, Z.",
    venue: "International Conference on Intelligent User Interfaces (IUI)",
    year: 2025,
    tags: ["Recommender Systems", "Prompt Engineering"],
    links: { pdf: "#", arxiv: "#" },
  },
  // {
  //   title: "On the Stability of Gradient-Based Explanations",
  //   authors: "Doe, J., & Patel, R.",
  //   venue: "International Conference on Learning Representations (ICLR)",
  //   year: 2023,
  //   tags: ["Interpretability"],
  //   links: { pdf: "#", arxiv: "#", code: "#" },
  // },
]
