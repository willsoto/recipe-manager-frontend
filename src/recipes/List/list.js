import moment from 'moment';
import gql from 'graphql-tag';

const recipesQuery = gql`
  {
    recipes {
      recipe_id
      name
      updated_at
      ingredients {
        ingredient_id
        name
      }
    }
  }
`;

export default {
  name: 'recipe-list',
  apollo: {
    recipes: {
      query: recipesQuery,
      loadingKey: 'loading'
    }
  },
  data() {
    return {
      loading: 0,
      recipes: [],
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: true,
          value: 'name'
        },
        {
          text: 'Number of Ingredients',
          align: 'left',
          sortable: false
        },
        {
          text: 'Last updated',
          align: 'left',
          sortable: true,
          value: 'updated_at'
        },
        {
          text: 'Actions',
          align: 'right'
        }
      ]
    };
  },
  methods: {
    humanizeDate(date) {
      return moment(date).fromNow();
    }
  }
};
