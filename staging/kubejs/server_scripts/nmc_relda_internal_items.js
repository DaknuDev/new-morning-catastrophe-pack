// Relda remains installed because Essence declares it as a mandatory dependency,
// but none of Relda's content is intended for player acquisition.
ServerEvents.recipes(event => {
  event.remove({ mod: 'relda' })
})

// Essence manually spawns some equipped items during its death animation rather
// than using loot tables. Cancelling Relda item entities covers those forced
// drops as well as ordinary mob drops and items discarded by players.
EntityEvents.spawned('minecraft:item', event => {
  if (`${event.entity.item.id}`.startsWith('relda:')) {
    event.cancel()
  }
})

// Defense in depth for commands, quest rewards, existing inventories, or recipes
// supplied dynamically by another mod.
PlayerEvents.inventoryChanged(event => {
  if (`${event.item.id}`.startsWith('relda:')) {
    event.item.count = 0
  }
})
