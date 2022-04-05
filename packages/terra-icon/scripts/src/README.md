# Update all SVG icons

### Step 1. Initate scripts

    npm run compilescripts

### Step 2. (Optional) Migrate icons from a csv file
You can skip this step if you're not updating the svg files in `packages/terra-icon/src/svg`.

    npm run migrate-csv
    npm run migrate-svg

### Step 3. Generate icons based
This will generate icons based on the files in `packages/terra-icon/src/svg`, whether they are newly migrated or pre-existing. 

    npm run generate-all-icons

Meaningful icons will be generated in `packages/terra-icon/src/icon`, directly in the folder. 
Decorative icons will be generated in `packages/terra-icon/src/icon/decorative`.


### Alternative run all steps command

Alternatively, if you need to run steps 1, 2 and 3, then you can execute them all with a single command:

    npm run migrate-cerner-one-icons
