# New Morning: Catastrophe Pack

Public Packwiz update channels for the New Morning: Catastrophe Forge 1.20.1
modpack.

This repository hosts manifests, configuration files, scripts, and NMC
compatibility files. Most third-party mods, resource packs, and shader packs are
downloaded directly from their official CurseForge or Modrinth sources.

## Update channels

- **Tester/stable:**
  <https://daknudev.github.io/new-morning-catastrophe-pack/stable/pack.toml>
- **Developer/staging:**
  <https://daknudev.github.io/new-morning-catastrophe-pack/staging/pack.toml>

Both channels began with the same tested `0.3.0-alpha.2` build. New changes go
to staging first. Stable changes only when a staging build is explicitly
promoted, so testers are never forced onto an unfinished developer update.

## Tester installation

Download the stable tester installer:

**[Download NMC-Tester-Prism.zip](https://daknudev.github.io/new-morning-catastrophe-pack/downloads/NMC-Tester-Prism.zip)**

SHA-256: `3A5CACA3C4204A1512CDC202B9A91EF1244CA610C18F11B38E9A9CD532CCDBC5`

Keep the file zipped, then import it using **Prism Launcher → Add Instance →
Import**. Follow the complete step-by-step guide in
**[TESTER_INSTALL.md](TESTER_INSTALL.md)** for Prism setup, the six required
manual CurseForge files, and migration from the old CurseForge profile.

The initial tested build requires these six manual CurseForge downloads because
their authors exclude them from third-party API downloads:

- Aquaculture Delight
- Efn Bosses
- Jake's World Guard/Protection and Plots
- More Overlays Updated
- Sanctified Legacy
- Symphony of War

Packwiz verifies the exact filenames and hashes. Do not download replacements
from unofficial mirrors. After installation, normal updates happen
automatically whenever the Prism instance is launched.

## Migrating personal client data

Use a fresh Prism import. Do not clone the old CurseForge instance, because it
can retain obsolete mods and configurations.

After the new Prism pack reaches the main menu once, close Minecraft and migrate
the small amount of local data used by server players:

1. In CurseForge, open the old NMC profile's menu and select **Open Folder**.
2. In Prism, right-click the new NMC instance, select **Folder**, and open its
   `minecraft` folder.
3. Copy `servers.dat` from the old folder to the new folder. This preserves the
   saved names and addresses shown on the Multiplayer screen. It does not store
   character data or progression.
4. Copy the root-level `xaero/` folder. For this pack, `xaero/minimap/` contains
   local waypoint/minimap data and `xaero/world-map/` contains explored map
   data. If the new instance already contains `xaero/`, rename that new folder
   to `xaero-new-backup` before copying the old one. Do not copy
   `config/xaero/`; Packwiz manages those configuration files.
5. Optional: copy `options.txt` to retain keybinds and client preferences. It
   includes controls, audio, video, language, mouse, accessibility, and
   resource-pack selection. Skip it for fresh defaults or when changing to a
   computer with different performance.
6. Launch Prism, open **Multiplayer**, select the NMC server, and verify the
   player's progression and Xaero waypoints. Keep the old CurseForge profile
   until this succeeds.

Multiplayer inventory, character data, advancements, claims, and progression
remain on the server and require no copying. Singleplayer-world migration is
handled individually when requested.

Do not copy `mods/`, `config/`, `defaultconfigs/`, `kubejs/`, `datapacks/`,
`resourcepacks/`, or `shaderpacks/`. Packwiz manages those files.

## Maintainer publishing rules

- Treat `staging/` as the developer channel and `stable/` as the tester channel.
- Test staging from GitHub Pages before promotion; a main-menu launch alone is
  not sufficient for changes with gameplay or world-generation risk.
- Promote by copying the already-tested staging tree to stable without changing
  files during the copy.
- Keep `.gitattributes` set to `* -text`. Packwiz hashes exact bytes, and Git
  line-ending normalization causes `Hash invalid!` installation failures.
- Use official project metadata or URLs. Do not commit copied third-party JARs
  or optional resource packs without confirmed redistribution permission.
- Never publish saves, logs, screenshots, accounts, server lists, personal
  options, map data, or generated credentials.

The small `nmc_*` compatibility mods are maintained specifically for this
modpack. Source and the full development workflow are maintained in the private
New Morning: Catastrophe development repository.
