# Update all SVG icons

### Initate scripts

    npm run compilescripts

### Migrate icons from a csv file
You can skip this step if you're not updating svg files.

    npm run migrate-csv
    npm run migrate-svg

### Generate icons based
This will generate icons based on the files in `packages/terra-icon/src/svg`, whether they are newly migrated or pre-existing. 

    npm run generate-all-icons

Meaningful icons will be generated in `packages/terra-icon/src/icon`, directly in the folder. 
Decorative icons will be generated in `packages/terra-icon/src/icon/decorative`.
