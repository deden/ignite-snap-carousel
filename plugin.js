// Ignite CLI plugin for SnapCarousel
// ----------------------------------------------------------------------------

const NPM_MODULE_NAME = 'react-native-snap-carousel'
const NPM_MODULE_VERSION = '0.0.1'

// const PLUGIN_PATH = __dirname
// const APP_PATH = process.cwd()
const EXAMPLE_FILE = 'SnapCarouselExample.js.ejs'

const add = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // install an NPM module and link it
  await ignite.addModule(NPM_MODULE_NAME, { link: true, version: NPM_MODULE_VERSION })

  await ignite.addPluginComponentExample(EXAMPLE_FILE, { title: 'SnapCarousel Example' })

  // Example of copying templates/SnapCarousel to App/SnapCarousel
  // if (!filesystem.exists(`${APP_PATH}/App/SnapCarousel`)) {
  //   filesystem.copy(`${PLUGIN_PATH}/templates/SnapCarousel`, `${APP_PATH}/App/SnapCarousel`)
  // }

  // Example of patching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   insert: `import '../SnapCarousel/SnapCarousel'\n`,
  //   before: `export default {`
  // })
}

/**
 * Remove yourself from the project.
 */
const remove = async function (context) {
  // Learn more about context: https://infinitered.github.io/gluegun/#/context-api.md
  const { ignite, filesystem } = context

  // remove the npm module and unlink it
  await ignite.removeModule(NPM_MODULE_NAME, { unlink: true })

  await ignite.removePluginComponentExample(EXAMPLE_FILE)

  // Example of removing App/SnapCarousel folder
  // const removeSnapCarousel = await context.prompt.confirm(
  //   'Do you want to remove App/SnapCarousel?'
  // )
  // if (removeSnapCarousel) { filesystem.remove(`${APP_PATH}/App/SnapCarousel`) }

  // Example of unpatching a file
  // ignite.patchInFile(`${APP_PATH}/App/Config/AppConfig.js`, {
  //   delete: `import '../SnapCarousel/SnapCarousel'\n`
  // )
}

// Required in all Ignite CLI plugins
module.exports = { add, remove }

