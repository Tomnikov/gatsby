import { IProgram } from "./types"

module.exports = async (args: IProgram & { cmd: string }): Promise<void> => {
  const { report, cmd } = args
  switch (cmd) {
    case `docs`:
      console.log(`
        Using a plugin:
        - What is a Plugin? (https://www.gatsbyjs.com/docs/what-is-a-plugin/)
        - Using a Plugin in Your Site (https://www.gatsbyjs.com/docs/using-a-plugin-in-your-site/)
        - What You Don't Need Plugins For (https://www.gatsbyjs.com/docs/what-you-dont-need-plugins-for/)
        - Loading Plugins from Your Local Plugins Folder (https://www.gatsbyjs.com/docs/loading-plugins-from-your-local-plugins-folder/)
        - Plugin Library (https://www.gatsbyjs.com/plugins/)
  
        Creating a plugin:
        - Naming a Plugin (https://www.gatsbyjs.com/docs/naming-a-plugin/)
        - Files Gatsby Looks for in a Plugin (https://www.gatsbyjs.com/docs/files-gatsby-looks-for-in-a-plugin/)
        - Creating a Generic Plugin (https://www.gatsbyjs.com/docs/creating-a-generic-plugin/)
        - Creating a Local Plugin (https://www.gatsbyjs.com/docs/creating-a-local-plugin/)
        - Creating a Source Plugin (https://www.gatsbyjs.com/docs/creating-a-source-plugin/)
        - Creating a Transformer Plugin (https://www.gatsbyjs.com/docs/creating-a-transformer-plugin/)
        - Submit to Plugin Library (https://www.gatsbyjs.com/contributing/submit-to-plugin-library/)
        - Source Plugin Tutorial (https://www.gatsbyjs.com/tutorial/source-plugin-tutorial/)
        - Maintaining a Plugin (https://www.gatsbyjs.com/docs/maintaining-a-plugin/)
        - Join Discord #plugin-authoring channel to ask questions! (https://gatsby.dev/discord/)
                   `)
      return

    default:
      report.error(`Unknown command ${cmd}`)
  }
  return
}
