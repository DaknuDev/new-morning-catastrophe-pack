// Remove acquisition through recipes and destroy prohibited items if another
// mod-specific reward, loot table, command, or existing inventory supplies one.
ServerEvents.recipes(event => {
  const removed = global.NMC_REMOVED_SLU_WEAPONS.concat(global.NMC_REMOVED_FISHING_RODS)
  removed.forEach(id => event.remove({ output: id }))
})

PlayerEvents.inventoryChanged(event => {
  const id = `${event.item.id}`
  if (global.NMC_REMOVED_FISHING_RODS.includes(id) || global.NMC_REMOVED_SLU_WEAPONS.includes(id)) {
    event.item.count = 0
  }
})
