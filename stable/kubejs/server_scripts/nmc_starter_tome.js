// New Morning: Catastrophe - consolidated first-join guide delivery.
// Native starter-book delivery must also be disabled in each source mod's
// config; see docs/ECCENTRIC_TOME_INTEGRATION.md.

const NMC_STARTER_TOME_MARKER = 'nmcStarterTomeReceived'

const NMC_STARTER_TOME_NBT = {
  'eccentrictome:version': 1,
  'eccentrictome:mods': {
    apotheosis: {
      '0': {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: { 'patchouli:book': 'apotheosis:apoth_chronicle' }
      }
    },
    tconstruct: {
      '0': { id: 'tconstruct:materials_and_you', Count: 1 }
    },
    simplyswords: {
      '0': {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: { 'patchouli:book': 'simplyswords:runic_grimoire' }
      }
    },
    terramity: {
      '0': {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: { 'patchouli:book': 'terramity:terramity_guidebook' }
      }
    },
    alexsmobs: {
      '0': { id: 'alexsmobs:animal_dictionary', Count: 1 }
    },
    starcatcher: {
      '0': { id: 'starcatcher:starcatcher_guide', Count: 1 }
    },
    ars_nouveau: {
      '0': { id: 'ars_nouveau:worn_notebook', Count: 1 }
    },
    butchery: {
      '0': {
        id: 'patchouli:guide_book',
        Count: 1,
        tag: { 'patchouli:book': 'butchery:butchers_guide' }
      }
    }
  }
}

PlayerEvents.loggedIn(event => {
  const player = event.player

  if (player.persistentData.getBoolean(NMC_STARTER_TOME_MARKER)) {
    return
  }

  const tome = Item.of('eccentrictome:tome', NMC_STARTER_TOME_NBT)

  // Minecraft's inventory add returns false when no slot can accept the item.
  // Drop it at the player as a fallback so a full inventory cannot lose it.
  if (!player.inventory.add(tome)) {
    player.drop(tome, false)
  }

  player.persistentData.putBoolean(NMC_STARTER_TOME_MARKER, true)
})
