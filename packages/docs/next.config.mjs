import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  staticImage: true,
})

export default withNextra({
  reactStrictMode: true,
  typescript: {
    // nextra _meta.ts files don't satisfy Next.js PagesPageConfig —
    // nextra owns the type contract for these files
    ignoreBuildErrors: true,
  },
})
