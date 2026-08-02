/**
 * Single source of truth for personal/contact info and external links.
 * Update these before deploying — nothing else in the codebase needs to change.
 */
export const siteConfig = {
  name: "Harsh Shah",
  role: "Software Engineer",
  domain: "https://harshshah.dev", // TODO: replace with your production domain
  email: "wthxrsh@gmail.com", // TODO: replace with your real email
  resumeUrl: "/Harsh_Shah_SE.pdf", // TODO: add your resume.pdf file to /public
  links: {
    github: "https://github.com/wthxrsh", // TODO: replace with your GitHub URL
    linkedin: "https://linkedin.com/in/wthxrsh", // TODO: replace with your LinkedIn URL
    leetcode: "https://leetcode.com/wthxrsh", // TODO: replace with your LeetCode URL
  },
} as const;
