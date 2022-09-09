# Publishing

1. Build `hive-cli`.
2. PR to `main` branch.
3. Run `npm config set access public`.
3. Run `npx lerna publish --conventional-commits --conventional-prerelease --no-private --force-publish`.
