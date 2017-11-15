const test = require('ava')
const sinon = require('sinon')
const plugin = require('../plugin')

test('removes SnapCarousel', async t => {
  const removeModule = sinon.spy()
  const removePluginComponentExample = sinon.spy()

  const context = {
    ignite: { removeModule, removePluginComponentExample }
  }

  await plugin.remove(context)

  t.true(removeModule.calledWith('react-native-snap-carousel', { unlink: true }))
  t.true(removePluginComponentExample.calledWith('SnapCarouselExample.js'))
})
