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

1. Install Prism Launcher.
2. Import the `NMC-Tester-Prism.zip` supplied through the NMC Discord.
3. Sign into Minecraft and launch the imported instance.
4. Packwiz downloads the pack from the stable channel.
5. If the **Failed file downloads** window appears, select **Open missing
   mods** and download each requested file from its official CurseForge page.
6. In Prism, right-click the NMC instance, select **Folder**, and place the
   downloaded, unextracted `.jar` files in `minecraft/mods`.
7. Return to Packwiz and select **Continue**.

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
4. Copy each Xaero folder that exists: `XaeroWaypoints/`, `XaeroWorldMap/`, or
   `xaero/`. These preserve local waypoints and explored maps. If the new folder
   already contains one with the same name, rename the new one with a `-backup`
   suffix before copying the old one.
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
