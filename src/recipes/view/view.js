import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'recipe-view',
  props: ['recipe_id'],
  data() {
    return {
      recipe: {}
    };
  },
  created() {
    this.fetchRecipe(this.recipe_id).then(() => {
      this.recipe = this.getRecipe(this.recipe_id);
    });
  },
  // mounted() {
  //   this.recipe = this.getRecipe(this.recipe_id);
  // },
  computed: {
    ...mapGetters({
      getRecipe: 'getRecipe',
      loading: 'getLoading'
    })
  },
  methods: {
    ...mapActions(['fetchRecipe'])
  }
};
