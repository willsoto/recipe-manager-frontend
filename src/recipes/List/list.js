import { mapActions, mapGetters } from 'vuex';
import moment from 'moment';
// import gql from 'graphql-tag';

// const recipesQuery = gql`
//   {
//     recipes {
//       recipe_id
//       name
//       updated_at
//       ingredients {
//         ingredient_id
//         name
//       }
//     }
//   }
// `;

export default {
  name: 'recipe-list',
  // apollo: {
  //   recipes: {
  //     query: recipesQuery,
  //     loadingKey: 'loading'
  //   }
  // },
  data() {
    return {
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
  created() {
    this.fetchRecipes();
  },
  computed: {
    ...mapGetters({
      recipes: 'getRecipes',
      loading: 'getLoading'
    })
  },
  methods: {
    humanizeDate(date) {
      return moment(date).fromNow();
    },
    ...mapActions(['fetchRecipes'])
  }
};
