# use terra-node as base image
FROM cerner/terra-node:test_parallel

# run the server
CMD ["npm", "run", "start"]
