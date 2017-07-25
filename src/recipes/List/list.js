import moment from 'moment';

import { Api } from '@/common/api';

export default {
  name: 'recipe-list',
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
      ],
      loading: false,
      recipes: null
    };
  },
  created() {
    this.getRecipes();
  },
  methods: {
    async getRecipes() {
      this.loading = true;

      const result = await Api.get('/recipes');

      this.recipes = result.data;
      this.loading = false;
    },
    humanizeDate(date) {
      return moment(date).fromNow();
    }
  }
};
