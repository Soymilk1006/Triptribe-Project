export default () => ({
  port: process.env.PORT || 8080,
  database: {
    name: process.env.DATABASE_NAME || 'tripTribeDb',
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 27018,
  },
  graphql: {
    autoSchemaFile: 'src/schema.gql',
  },
  uploader: {
    middleware: {
      maxFileSize: parseInt(process.env.MAX_FILE_SIZE || '', 10) || 1048576,
      maxFiles: parseInt(process.env.MAX_FILES || '', 10) || 10,
    },
  },
});
