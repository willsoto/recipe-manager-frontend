import { mapActions, mapGetters } from 'vuex';
import moment from 'moment';

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
