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
          text: 'Last updated',
          align: 'left',
          sortable: true,
          value: 'updated_at'
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
    }
  }
};
