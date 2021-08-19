exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type SiteSiteMetadata {
      description: String
      image: String
      title: String
      titleTemplate: String
      twitterUsername: String
      url: String
    }
  `;
  createTypes(typeDefs);
};
