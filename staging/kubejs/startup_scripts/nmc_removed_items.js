// NMC item-removal policy shared by server and client scripts.
// Generated against SLU 9990.3.1.20.1-remade (boss update).
// Shields are intentionally excluded.
global.NMC_REMOVED_SLU_WEAPONS = [
  'viking_axe', 'legendary_cinder_king_sword', 'margit_wand', 'legendary_renekton_twinblade',
  'renekton_twinblade', 'dark_axe', 'ringed_knight_sword', 'monarch_mace', 'legendary_spiral_sword',
  'basic_chosen_pantheon_spear', 'dagger', 'legendary_aatrox_sword', 'farron_greatsword', 'master_staff',
  'talon_claw', 'halberd', 'godskin_peeler', 'mecha_aatrox_sword', 'legendary_executioner_sword',
  'black_dagger', 'wizard_sword', 'mecha_jingubang', 'chosen_pantheon_spear', 'legendary_jingubang',
  'black_katana', 'legendary_mecha_jingubang', 'legendary_bloodmoon_aatrox_sword',
  'legendary_gundyr_axespear', 'silver_spear', 'legendary_morgott_cursed_sword', 'blood_spell_longsword',
  'master_katana', 'ornstein_spear', 'legendary_marika_hammer', 'steel_katana', 'greathammer',
  'bloodmoon_aatrox_sword', 'vandal_jax_staff', 'white_flame_sword', 'legendary_mecha_aatrox_sword',
  'legendary_blood_trident', 'executioner_sword', 'legendary_lightning_spell_sword',
  'legendary_victorious_aatrox_sword', 'legendary_slave_knight_sword', 'dragon_slayer_axe',
  'charred_silver_sword', 'divine_spear', 'farron_dagger', 'grand_reckoning_claw',
  'victorious_aatrox_sword', 'legendary_soul_of_cinder_sword', 'black_blade',
  'legendary_dragon_guardian_spear', 'legendary_mecha_darius_axe', 'spiral_sword',
  'legendary_justicar_aatrox_sword', 'dark_monarch_mace', 'basic_master_katana', 'cogwheel',
  'aatrox_sword', 'sett_fist', 'berserk_greatsword', 'oni_blade', 'green_crystal_staff',
  'radahn_lightning_sword', 'legendary_god_staff', 'basic_grand_reckoning_claw', 'charred_axe',
  'legendary_warrior_king_axe', 'blood_blade', 'legendary_dragon_slayer_axe', 'hunter_axe',
  'lightning_spell_sword', 'slave_knight_sword', 'malenia_sword', 'legendary_wolf_knight_sword',
  'legendary_drx_aatrox_sword', 'rusty_steel_mace', 'creator_staff', 'highnoon_knight_axe',
  'legendary_elderwood_jingubang', 'legendary_kaiser_mace', 'mercury_hammer', 'dragon_guardian_spear',
  'barbarian_club', 'blessed_hammer', 'double_barrel_shotgun', 'legendary_blood_blade',
  'legendary_godfrey_axe', 'legendary_green_crystal_staff', 'gundyr_axespear',
  'prestige_bloodmoon_aatrox_sword', 'noble_sword', 'greedy_sword', 'radahn_sword', 'mace',
  'dark_monarch_basic_mace', 'notch_sword', 'wolf_knight_sword', 'saw_cleaver',
  'legendary_highnoon_knight_axe', 'marika_hammer', 'god_staff', 'soul_of_cinder_sword', 'dark_spear',
  'warrior_king_axe', 'folded_saw_cleaver', 'moonlight_sword', 'legendary_storm_curved_sword',
  'saber', 'kaiser_mace', 'blessed_dagger', 'crucible_knight_spear', 'scythe', 'longsword',
  'nightbringer_sword', 'claymore', 'legendary_crucible_knight_sword',
  'legendary_prestige_drx_aatrox_sword', 'legendary_lightning_spear', 'basic_nightbringer_sword',
  'cinder_king_greatsword', 'divine_sword', 'legendary_mace',
  'legendary_prestige_bloodmoon_aatrox_sword', 'storm_curved_sword', 'chaos_knight_sword',
  'legendary_ornstein_spear', 'night_crow_sword', 'morgott_cursed_sword', 'lightning_spear',
  'godfrey_axe', 'primordian_aatrox_sword', 'prestige_drx_aatrox_sword', 'legendary_black_blade',
  'basic_sett_fist', 'legendary_radahn_lightning_sword', 'legendary_hunter_axe',
  'crucible_knight_sword', 'greatsword', 'legendary_longsword', 'crystal_glaive',
  'legendary_rhaast_scythe', 'great_battle_hammer', 'lunar_eclipse_aatrox_sword', 'rhaast_scythe',
  'grave_lord_sword', 'legendary_berserk_greatsword', 'devil_hand', 'legendary_magic_staff',
  'legendary_godskin_peeler', 'sai', 'legendary_lunar_eclipse_aatrox_sword', 'blood_trident',
  'darkmoon_greatsword', 'rock_club', 'justicar_aatrox_sword', 'tower_knight_spear',
  'elderwood_jingubang', 'legendary_vandal_jax_staff', 'monarch_basic_mace', 'sickle',
  'sacred_relic_sword', 'legendary_primordian_aatrox_sword', 'lance_of_longinus',
  'grand_trial_sword', 'jingubang', 'drx_aatrox_sword', 'mecha_darius_axe', 'renegade_claw',
  'sylas_chain', 'spear'
].map(id => `slu:${id}`)

// Registry/model audit of the installed pack. Starcatcher's entire namespace is
// intentionally absent. `_cast` model variants are not separately registered items.
global.NMC_REMOVED_FISHING_RODS = [
  'annoyingvillagers:advanced_fishing_rod',
  'annoyingvillagers:tony_the_fishing_rod',
  'aquaculture:diamond_fishing_rod',
  'aquaculture:gold_fishing_rod',
  'aquaculture:iron_fishing_rod',
  'aquaculture:neptunium_fishing_rod',
  'tconstruct:fishing_rod'
]

// SLU places its offensive items in a dedicated tab. The standard tools tab is
// also cleaned; JEI and the inventory safeguard cover
// every listed item regardless of its creative-tab placement.
StartupEvents.modifyCreativeTab('slu:weapons_tab', event => {
  global.NMC_REMOVED_SLU_WEAPONS.forEach(id => event.remove(id))
})

StartupEvents.modifyCreativeTab('minecraft:tools_and_utilities', event => {
  global.NMC_REMOVED_FISHING_RODS.forEach(id => event.remove(id))
})
