export const articlesQuery = `query articles($limit: IntType!, $skip: IntType! ) {
  allArticles(orderBy: _createdAt_DESC, first: $limit, skip: $skip) {
    title
    slug
    createdAt
    text
    id
    image {
      url
      title
    }
  }
  article(orderBy:_createdAt_DESC){
    id
  }
}`;

export const singleArtQuery = `query singleArticle($slug: String!) {
  article(filter: {slug: {eq: $slug}}) {
    title
    createdAt
    slug
    text
    id
    image {
      url
      title
    }
  }
 }`;
