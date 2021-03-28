export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: -300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const titleAnim = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

export const titleAnimY = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const container = {
  hidden: { x: -100 },
  show: {
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
      staggerChildren: 0.25,
    },
  },
};

export const photoAnim = {
  hidden: {
    opacity: 0,
    scale: 1.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const pageIntro = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  show: {
    x: "100%",
    skew: "0deg",
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const pageIntroContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, ease: "easeOut" },
  },
};

export const scrollReveal = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    transition: { ease: "easeOut", duration: 0.5 },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.5, ease: "easeOut", duration: 0.5 },
  },
};
