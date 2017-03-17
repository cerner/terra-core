# Migrate svg

```
npm run migrate-svg
```
* Copies svgs from the repository cerner-one-icons to terra-icon.
* Renames svgs to concept. Filename to concept mapping is in a csv file in the /src directory.
* Adds is-bidi and is-Spin class to svgs. Bidi & Spin attribute values are found in a csv file in the /src directory.
* Uses svgo to optimize svgs.
