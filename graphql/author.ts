import { gql } from "@apollo/client";

export const FIND_ONE_AUTHOR = gql`
  query FindOneAuthor($id: Int!) {
    author_by_pk(id: $id) {
      name
      id
    }
  }
`;

export const FIND_ALL_AUTHORS = gql`
  query FindAllAuthors {
    author {
      name
      id
    }
  }
`;

export const FIND_ALL_AUTHORS_WITH_COMMENTS = gql`
  query FindAllAuthorsWithComments {
    author {
      name
      id
      comments {
        id
        title
        text
      }
    }
  }
`;

export const INSERT_AUTHOR = gql`
  mutation InsertAuthor($author: author_insert_input!) {
    insert_author_one(
      on_conflict: { constraint: author_pkey }
      object: $author
    ) {
      name
    }
  }
`;

export const UPSERT_AUTHOR = gql`
  mutation UpsertAuthor($author: [author_insert_input!]!) {
    insert_author(
      objects: $author
      on_conflict: { constraint: author_pkey, update_columns: [name] }
    ) {
      returning {
        name
      }
    }
  }
`;
