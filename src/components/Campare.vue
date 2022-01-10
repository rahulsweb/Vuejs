<template>
  <div>
    <div class="offset-md-2 col-md-8">
      <div class="card">
        <div class="card-body">
          <p class="card-text">Enter the Product</p>
          <label class="sr-only" for="inline-form-input-username"
            >Username</label
          >
          <b-input-group prepend="#" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              id="inline-form-input-username"
              placeholder="Search"
              v-model="product"
              @keypress.enter="getDetails"
            ></b-form-input>
          </b-input-group>
        </div>
        <button
          type="button"
          class="btn btn-success text-light offset-md-4 col-md-4 mb-5"
          @click="getDetails"
        >
          Campare Lowest Prices
        </button>
      </div>
    </div>
    <div class="card" v-if="respose.length">
      <div class="card-body">
        <b-table
          :per-page="perPage"
          :current-page="currentPage"
          class="col-md-12"
          hover
          :items="respose"
          :fields="fields"
          responsive
          @row-clicked="getRow"
        >
          <template #cell(product_image)="data">
            <img :src="data.item.product_image" alt="" width="50" />
          </template>
          <template #cell(product_link)="data">
            <a @click="getInfo(data.item.product_id)">{{
              data.item.product_title
            }}</a>
          </template>
        </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
          class="float-right offset-md-4 col-md-4"
        ></b-pagination>
      </div>
    </div>

    <!-- products -->
    <div class="m-10" v-if="Object.entries(products).length">
      <div class="row">
        <b-list-group-item>
          <div class="col-12 float-right">
            <div>
              <img
                class="m-2 img-responsive"
                v-for="(item, index) in products.product_images"
                :key="index"
                :src="item"
                alt=""
                width="200"
              />
            </div>
          </div>
        </b-list-group-item>
        <div class="col-md-6">
          <b-list-group>
            <b-list-group-item
              ><span class="col-md-6 text-success">Product Name </span>
              <strong class="col-md-6 float-right">{{
                products.product_name
              }}</strong></b-list-group-item
            >
            <b-list-group-item
              ><span class="col-md-6 text-success">Product Model </span>
              <strong class="col-md-6 float-right">{{
                products.product_model
              }}</strong></b-list-group-item
            >

            <b-list-group-item
              ><span class="col-md-6 text-success">Product Brand </span>
              <strong class="col-md-6 float-right">{{
                products.product_brand
              }}</strong></b-list-group-item
            >
            <b-list-group-item
              ><span class="col-md-6 text-success">Product MRP </span>
              <strong class="col-md-6 float-right text-primary"
                >{{ products.product_mrp }} ₹</strong
              ></b-list-group-item
            >
            <b-list-group-item
              ><span class="col-md-6 text-success">Product Rating </span>
              <strong class="col-md-6 float-right text-info">{{
                products.product_ratings
              }}</strong></b-list-group-item
            >

            <b-list-group-item
              ><span class="col-md-6 text-success">Product Colors </span>
              <div class="col-md-6 float-right">
                <b-badge
                  pill
                  variant="dark"
                  v-for="(item, index) in products.available_colors"
                  :key="index"
                  :style="{
                    'background-color': `${item}`,
                    color: 'white',
                    margin: '5px',
                  }"
                >
                  {{ item }}</b-badge
                >
              </div></b-list-group-item
            >
          </b-list-group>
        </div>

        <div class="card col-md-6">
          <div
            v-for="(item, index) in prices"
            :key="index"
            :class="
              JSON.stringify(Object.values(prices[index])[0]) == '[]'
                ? 'hide'
                : 'inline-flex'
            "
          >
            <div
              class="text-info inline-flex"
              v-if="item[Object.keys(item)[0]]"
            >
              <br />
              <a :href="item[Object.keys(item)[0]].product_store_url">
                <img
                  class="text-center"
                  :src="item[Object.keys(item)[0]].product_store_logo"
                  alt=""
                  width="100"
              /></a>

              <br />
              <br />
              <strong class="text-primary">
                {{ item[Object.keys(item)[0]].product_price }} ₹
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      product: "Iphone",
      products: [],
      key: "p0e2XXDU4BxopIikEezR0iyDzALYeMqgxL2",
      filter: "brand:apple",
      start: 0,
      end: 50000,
      respose: [],
      perPage: 5,
      currentPage: 1,

      prices: [],
      fields: [
        {
          key: "product_title",
          label: "Product Name",
          sortable: true,
        },
        {
          key: "product_lowest_price",
          label: "Product Price",
          sortable: false,
        },
        {
          key: "product_link",
          label: "Product url",
          sortable: true,
          // Variant applies to the whole column, including the header and footer
        },
        {
          key: "product_image",
          label: "Photo",
          sortable: true,
          // Variant applies to the whole column, including the header and footer
        },
      ],
    };
  },
  created() {},
  computed: {
    rows() {
      return this.respose.length;
    },
    dynamicStyle(color) {
      return {
        // in the case of redComp, greenComp and blueComp are a vue prop or data
        color: `${color};`,
      };
    },
  },
  methods: {
    getDetails() {
      let options = {
        async: true,
        crossDomain: true,
        url: `https://price-api.datayuge.com/api/v1/compare/search?product=${this.product}&api_key=${this.key}`,
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      };
      axios(options)
        .then((res) => {
          this.respose = res.data.data;
        })
        .catch((err) => {
          console.error("Login failed.", err);
        });
    },
    getRow(item) {
      this.respose = [];
      this.getInfo(item.product_id);
    },
    getInfo(id) {
      let options = {
        async: true,
        crossDomain: true,
        url: `https://price-api.datayuge.com/api/v1/compare/detail?api_key=${this.key}&id=${id}`,
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      };

      axios(options)
        .then((res) => {
          console.log(res);
          this.products = res.data.data;
          this.prices = this.products.stores;
        })
        .catch((err) => {
          console.error("Login failed.", err);
        });
    },
  },
};
</script>
<style scoped>
.inline-flex {
  display: inline-block;
  font-weight: bolder;
}
.hide {
  display: none;
}
.show {
  display: block;
}
.m-10 {
  margin: 5%;
}
</style>