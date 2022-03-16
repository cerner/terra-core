# Update all SVG icons
## Step 1 - Migrate Cerner One Icons

    npm run migrate-cerner-one-icons

## Step 2 - Generate meaningful icons

    npm run compilescripts
    npm run migrate-csv
    npm run migrate-svg
    npm run generate-icon
    npm run generate-example

## Step 3 - Generate decorateive icons

This part requires perl 5 to run.

    npm run create-decorative-dir
    npm run replace-decorative-baseclass
    npm run replace-decorative-displayname