module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'linkedin.com'],
  },
  env: {
    GITHUB_API_KEY: process.env.GITHUB_API_KEY,
    LINKEDIN_API_KEY: process.env.LINKEDIN_API_KEY,
  },
};