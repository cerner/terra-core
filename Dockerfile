# use terra-node as base image
FROM cerner/terra-node

# run the server
CMD ["npm", "run", "start"]
