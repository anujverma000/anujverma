export default {
  title: `Securing cross doamin requests with CORS`,
  tags: ['CORS', 'Security'],
  spoiler: "By default browsers will not allow it and there will be an error if you try to access the resources from other domain which are not explicitly enabled.",
  getContent: () => import('./document.mdx'),
}