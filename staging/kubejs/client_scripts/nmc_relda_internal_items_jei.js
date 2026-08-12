// Relda is an internal dependency of Essence, not player-facing pack content.
JEIEvents.hideItems(event => {
  event.hide(Ingredient.of(/^relda:.*/))
})
