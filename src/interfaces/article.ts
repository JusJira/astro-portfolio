export default interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    heroImage: {
      data: {
        id: number;
        attributes: {
          url: string;
          formats: {
            large: {
              url: string
            },
            medium: {
              url: string
            },
            small: {
              url: string
            },
            thumbnail: {
              url: string
            },

          }
        };
      };
    };
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
