# use terra-node as base image
FROM terra-node:test_parallel

# run the server
CMD ["npm", "run", "start"]
