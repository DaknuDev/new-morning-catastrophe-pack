# Tester Installation: CurseForge to Prism

These instructions install the tester/stable version of New Morning:
Catastrophe. Existing multiplayer inventory, character data, advancements,
claims, and progression stay on the server.

## 1. Install Prism Launcher

1. Open the official [Prism Launcher Windows download page](https://prismlauncher.org/download/windows/).
2. Under **x86-64**, select **Installer (.exe)**. Most Windows computers use
   x86-64; use ARM64 only when Windows specifically reports an ARM-based PC.
3. Run the installer and open Prism Launcher.
4. Complete Prism's first-run prompts. Allow Prism to download a recommended
   Java runtime when offered.
5. Add the Microsoft account that owns Minecraft: Java Edition using Prism's
   account/profile menu. Complete the Microsoft sign-in in the browser.

## 2. Download and import the tester pack

1. Download [NMC-Tester-Prism.zip](https://daknudev.github.io/new-morning-catastrophe-pack/downloads/NMC-Tester-Prism.zip).
   Keep it as a ZIP; do not extract it.
2. In Prism, select **Add Instance**.
3. Select **Import** on the left.
4. Select **Browse**, choose `NMC-Tester-Prism.zip`, and select **OK**.
5. Prism creates an instance named **New Morning Catastrophe**. Select it and
   press **Launch**.

Packwiz will open before Minecraft and download the stable tester pack. The
first download can take a while. Later updates download only changed files when
the instance is launched.

## 3. Install the six restricted CurseForge mods

CurseForge prevents Packwiz from automatically downloading six files. A
**Failed file downloads** window is therefore expected on the first install.
Each project may appear twice in the window, but only these six files are
required:

- `aquaculturedelight-1.1.1-forge-1.20.1.jar`
- `efnbossesvjakr-1.8.2-forge-1.20.1.jar`
- `jakesworldguard-1.2.4.jar`
- `moreoverlays-1.24.1-mc1.20.1-forge.jar`
- `covenant_of_the_seven-2.2.6-hotfix.jar`
- `symphony_of_war-1.0.0-1.20.1.jar`

To install them:

1. In the Packwiz error window, select **Open missing mods**. This opens the
   official CurseForge file pages.
2. Download each of the six files once. Do not use unofficial mirrors, rename
   the files, or extract the JARs.
3. In Prism, right-click **New Morning Catastrophe** and select **Folder**.
4. Open `minecraft`, then open `mods`. Create the `mods` folder if it is not
   present.
5. Move or copy the six downloaded `.jar` files from Downloads into this
   `minecraft\mods` folder.
6. Return to the Packwiz window and select **Continue**. Packwiz verifies the
   exact files and finishes the installation.
7. Wait for Minecraft to reach the main menu.

If Packwiz still reports a file, confirm that its exact filename is present in
the new Prism instance's `minecraft\mods` folder—not the old CurseForge folder.

## 4. Migrate the minimum server-player data

Reach the main menu once, then close Minecraft before copying local data.

1. In CurseForge, select the old NMC profile, open its menu, and choose **Open
   Folder**. This is the source.
2. In Prism, right-click **New Morning Catastrophe**, choose **Folder**, and
   open `minecraft`. This is the destination.
3. Copy the source `servers.dat` into the destination. Choose **Replace** if
   Windows asks. This restores the saved server names and addresses shown on
   the Multiplayer screen; it contains no player progression.
4. Copy the source's root-level `xaero` folder into the destination. It contains:

   - `xaero\minimap` for local waypoints and minimap data;
   - `xaero\world-map` for explored world-map data.

   If the destination already has an `xaero` folder, rename the new folder to
   `xaero-new-backup` before copying the old one. Do not copy `config\xaero`;
   Packwiz manages those configuration files.
5. Optional: copy `options.txt` only when the player wants old keybinds and
   client settings. It also carries video, audio, language, mouse,
   accessibility, and resource-pack selections. Skip it for clean defaults or
   when moving to a computer with different performance.

Do not copy `mods`, `config`, `defaultconfigs`, `kubejs`, `datapacks`,
`resourcepacks`, or `shaderpacks` from CurseForge. Packwiz manages them, and
copying the old versions can break future updates.

## 5. Verify and play

1. Launch **New Morning Catastrophe** in Prism.
2. Open **Multiplayer** and select the saved NMC server.
3. Confirm the existing server character and progression appear normally.
4. Confirm Xaero waypoints and map history if they were copied.
5. Keep the old CurseForge profile until at least one successful Prism server
   session. It may then be kept as a backup or removed manually.

For future pack updates, close Minecraft and launch the Prism instance again.
Packwiz updates the managed files automatically.

