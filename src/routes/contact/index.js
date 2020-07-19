import * as Navi from 'navi'

export default Navi.route({
  title: "Contact",
  getView: () => import('./document.mdx'),
})
