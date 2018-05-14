# use terra-node as base image
FROM terra-node

# run the server
CMD ["npm", "run", "start"]
