<template>
  <div class="home">
    <template v-if="status_user">
      <ProductComp :userName="user.displayName" />
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductComp from "../../components/productDesign/ProductComponent.vue";

export default {
  name: "Home",
  components: {
    ProductComp,
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters(["status_user"]),
  },
};
</script>
