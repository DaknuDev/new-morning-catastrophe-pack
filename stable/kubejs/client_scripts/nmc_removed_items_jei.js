// Keep prohibited items out of JEI. Starcatcher rods remain visible.
JEIEvents.hideItems(event => {
  global.NMC_REMOVED_SLU_WEAPONS
    .concat(global.NMC_REMOVED_FISHING_RODS)
    .forEach(id => event.hide(id))
})
