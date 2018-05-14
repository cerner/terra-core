# use terra-node as base image
FROM ryanthemanuel/terra-node:test_parallel

# run the server
CMD ["npm", "run", "start"]
