import gql from 'graphql-tag';

const currentUserQuery = gql`
  {
    current_user {
      user_id
      email
      is_admin
    }
  }
`;

export default {
  name: 'navigation',
  props: ['drawer'],
  apollo: {
    current_user: {
      query: currentUserQuery
    }
  },
  data() {
    return {
      current_user: null,
      routes: [
        {
          path: '/recipes',
          title: 'Recipes',
          icon: 'dashboard'
        },
        {
          path: '/recipes/new',
          title: 'New Recipe',
          icon: 'add'
        }
      ]
    };
  }
};
