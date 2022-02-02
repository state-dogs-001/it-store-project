<template>
  <div>
    <div class="table-responsive">
      <table class="table table-hover table-striped" id="my-table">
        <thead>
          <tr class="bg-dark text-light">
            <th scope="col" :colspan="tableThead.length">
              <h5>ตารางจัดการสินค้า</h5>
            </th>
            <th scope="col" class="text-right">
              <b-button variant="success" @click="openModalAddProduct">
                เพิ่ม
              </b-button>
            </th>
          </tr>
          <tr>
            <th scope="col" v-for="read in tableThead" :key="read.name">
              <p>{{ read.name }}</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(read, index) in productsSlice" :key="read.name">
            <!-- index -->
            <th scope="row">{{ index + 1 + calIndex }}</th>

            <!-- type -->
            <template v-if="read.typeProduct === 'mobile'">
              <td>โทรศัพท์มือถือ</td>
            </template>
            <template v-else-if="read.typeProduct === 'laptop'">
              <td>แล็ปท็อป</td>
            </template>
            <template v-else>
              <td>คอมพิวเตอร์เซ็ต</td>
            </template>

            <!-- brand -->
            <td class="text-up">{{ read.brandProduct }}</td>

            <!-- name -->
            <td class="text-up">{{ read.nameProduct }}</td>

            <!-- price -->
            <td>
              {{ read.priceProduct.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
            </td>

            <!-- description -->
            <td>
              <b-button
                variant="outline-warning"
                @click="descriptionToast(index)"
              >
                อ่าน
              </b-button>
            </td>

            <!-- status -->
            <template v-if="read.productStatus === 'inStock'">
              <td class="text-success">ปกติ</td>
            </template>
            <template v-else>
              <td class="text-danger">สินค้าหมด</td>
            </template>

            <!-- image -->
            <td width="150px">
              <img :src="read.imageProduct" width="100%" class="rounded" />
            </td>

            <!-- button update and delete -->
            <td class="text-right">
              <b-button
                variant="primary"
                @click="openModalUpdateProduct(index)"
              >
                แก้ไข
              </b-button>
            </td>
            <td class="text-right">
              <b-button variant="danger" @click="deleteProduct(read.id)">
                ลบ
              </b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="mt-5">
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <button class="page-link" @click="prePage">ก่อนหน้า</button>
          </li>
          <li
            class="page-item"
            v-for="index in Math.ceil(products.length / perPage)"
            :key="index"
          >
            <button class="page-link" @click="onPage(index)">
              {{ index }}
            </button>
          </li>
          <li class="page-item">
            <button class="page-link" @click="nextPage">ถัดไป</button>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Modal Add Product -->
    <b-modal v-model="modalAddProduct" centered hide-footer>
      <!-- Modal header -->
      <template #modal-header="{ close }">
        <h3>เพิ่มสินค้า</h3>
        <button
          @click="
            close();
            clrearData();
          "
          class="btn btn-danger"
        >
          <i class="fas fa-times"></i>
        </button>
      </template>
      <!-- form add product -->
      <b-form @submit.stop.prevent="addProduct">
        <b-row>
          <!-- choose type product -->
          <b-col lg="6" sm="12" class="mt-2">
            <label for="typeProduct">ประเภท</label>
            <select
              class="form-control"
              id="typeProduct"
              v-model="typeProduct"
              required
            >
              <option selected disabled value="">เลือกประเภทสินค้า</option>
              <option value="mobile">โทรศัพท์มือถือ</option>
              <option value="laptop">แล็ปท็อป</option>
              <option value="computer">คอมพิวเตอร์เซ็ต</option>
            </select>
          </b-col>

          <!-- choose product brand -->
          <b-col lg="6" sm="12" class="mt-2">
            <label for="brandsProduct">ยี่ห้อสินค้า</label>
            <select
              class="form-control"
              id="brandsProduct"
              v-model="brandProduct"
              required
            >
              <option selected disabled value="">เลือกยี่ห้อสินค้า</option>
              <option value="apple">Apple</option>
              <option value="acer">Acer</option>
              <option value="asus">Asus</option>
              <option value="dell">Dell</option>
              <option value="hp">hp</option>
              <option value="oppo">oppo</option>
              <option value="samsung">Samsung</option>
              <option value="xiaomi">Xiaomi</option>
            </select>
          </b-col>

          <!-- product name -->
          <b-col lg="12" class="mt-2">
            <label for="productName">ชื่อสินค้า</label>
            <input
              type="text"
              id="productName"
              v-model="nameProduct"
              class="form-control"
              placeholder="กรอกชื่อสินค้า"
              required
            />
          </b-col>

          <!-- product image -->
          <b-col lg="12" class="mt-2">
            <label for="productImage">ลิงค์รูปภาพ</label>
            <input
              type="text"
              id="productImage"
              v-model="imageProduct"
              class="form-control"
              placeholder="กรอกลิงค์รูปภาพ"
              required
            />
          </b-col>

          <!-- product price -->
          <b-col lg="12" class="mt-2">
            <label for="productPrice">ราคาสินค้า</label>
            <input
              type="number"
              id="productPrice"
              v-model="priceProduct"
              class="form-control"
              placeholder="กรอกราคาสินค้า"
              required
            />
          </b-col>

          <!-- description -->
          <b-col lg="12" class="mt-2">
            <label for="description">รายละเอียดสินค้า</label>
            <textarea
              id="description"
              v-model="description"
              class="form-control"
              rows="3"
              placeholder="กรอกรายละเอียดสินค้า"
              required
            />
          </b-col>

          <!-- button -->
          <b-col lg="12" class="text-center mt-5 mb-2">
            <input type="reset" value="Cancel" class="btn btn-danger mr-3" />
            <input type="submit" value="Add" class="btn btn-success" />
          </b-col>
        </b-row>
      </b-form>
    </b-modal>

    <!-- Modal Update Product -->
    <b-modal v-model="modalUpdateProduct" centered hide-footer>
      <!-- Modal header -->
      <template #modal-header="{ close }">
        <h3>แก้ไขสินค้า</h3>
        <button
          @click="
            close();
            clrearData();
          "
          class="btn btn-danger"
        >
          <i class="fas fa-times"></i>
        </button>
      </template>
      <!-- form update product -->
      <b-form @submit.stop.prevent="updateProduct">
        <b-row>
          <!-- choose status product -->
          <b-col lg="12" class="mt-2">
            <label for="typeProduct">สถานะของสินค้า</label>
            <select
              class="form-control"
              id="typeProduct"
              v-model="statusProduct"
              required
            >
              <option value="" disabled selected>เลือกสถานะของสินค้า</option>
              <option value="inStock">ปกติ</option>
              <option value="outStock">สินค้าหมด</option>
            </select>
          </b-col>

          <!-- choose type product -->
          <b-col lg="6" sm="12" class="mt-2">
            <label for="typeProduct">ประเภท</label>
            <select
              class="form-control"
              id="typeProduct"
              v-model="typeProduct"
              required
            >
              <option selected disabled value="">เลือกประเภทสินค้า</option>
              <option value="mobile">โทรศัพท์มือถือ</option>
              <option value="laptop">แล็ปท็อป</option>
              <option value="computer">คอมพิวเตอร์เซ็ต</option>
            </select>
          </b-col>

          <!-- choose product brand -->
          <b-col lg="6" sm="12" class="mt-2">
            <label for="brandsProduct">ยี่ห้อสินค้า</label>
            <select
              class="form-control"
              id="brandsProduct"
              v-model="brandProduct"
              required
            >
              <option selected disabled value="">เลือกยี่ห้อสินค้า</option>
              <option value="apple">Apple</option>
              <option value="acer">Acer</option>
              <option value="asus">Asus</option>
              <option value="dell">Dell</option>
              <option value="hp">hp</option>
              <option value="oppo">oppo</option>
              <option value="samsung">Samsung</option>
              <option value="xiaomi">Xiaomi</option>
            </select>
          </b-col>

          <!-- product name -->
          <b-col lg="12" class="mt-2">
            <label for="productName">ชื่อสินค้า</label>
            <input
              type="text"
              id="productName"
              v-model="nameProduct"
              class="form-control"
              placeholder="กรอกชื่อสินค้า"
              required
            />
          </b-col>

          <!-- product image -->
          <b-col lg="12" class="mt-2">
            <label for="productImage">ลิงค์รูปภาพ</label>
            <input
              type="text"
              id="productImage"
              v-model="imageProduct"
              class="form-control"
              placeholder="กรอกลิงค์รูปภาพ"
              required
            />
          </b-col>

          <!-- product price -->
          <b-col lg="12" class="mt-2">
            <label for="productPrice">ราคาสินค้า</label>
            <input
              type="number"
              id="productPrice"
              v-model="priceProduct"
              class="form-control"
              placeholder="กรอกราคาสินค้า"
              required
            />
          </b-col>

          <!-- description -->
          <b-col lg="12" class="mt-2">
            <label for="description">รายละเอียดสินค้า</label>
            <textarea
              id="description"
              v-model="description"
              class="form-control"
              rows="3"
              placeholder="กรอกรายละเอียดสินค้า"
              required
            />
          </b-col>

          <!-- button -->
          <b-col lg="12" class="text-center mt-5 mb-2">
            <input type="reset" value="Cancel" class="btn btn-danger mr-3" />
            <input type="submit" value="Update" class="btn btn-success" />
          </b-col>
        </b-row>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { Timestamp } from "firebase/firestore";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      // Set status modal of add product
      modalAddProduct: false,
      modalUpdateProduct: false,

      // Array of thead table
      tableThead: [
        { name: "ลำดับ" },
        { name: "ประเภท" },
        { name: "แบรนด์" },
        { name: "ชื่อ" },
        { name: "ราคา ฿" },
        { name: "เพิ่มเติม" },
        { name: "สถานะ" },
        { name: "รูปภาพ" },
        { name: "จัดการ" },
      ],

      // Attributes for product
      typeProduct: "",
      brandProduct: "",
      nameProduct: null,
      imageProduct: null,
      priceProduct: null,
      description: null,
      statusProduct: "",
      // use for update
      id: null,

      // Use for pagination
      page: 1,
      perPage: 10,
    };
  },
  computed: {
    ...mapGetters(["products"]),
    productsSlice: function () {
      let start = (this.page - 1) * this.perPage,
        end = start + this.perPage;
      return this.products.slice(start, end);
    },

    // Use for calculate with index in table
    calIndex: function () {
      let number = (this.page - 1) * this.perPage;
      return number;
    },
  },
  created() {
    // Get all products
    this.getProducts();
  },
  methods: {
    // Open modal add product
    openModalAddProduct() {
      this.modalAddProduct = true;
    },
    // Open modal update product
    openModalUpdateProduct(i) {
      // Set data
      this.id = this.products[i].id;
      this.typeProduct = this.products[i].typeProduct;
      this.brandProduct = this.products[i].brandProduct;
      this.nameProduct = this.products[i].nameProduct;
      this.imageProduct = this.products[i].imageProduct;
      this.priceProduct = this.products[i].priceProduct;
      this.description = this.products[i].description;
      this.statusProduct = this.products[i].productStatus;

      // Open modal
      this.modalUpdateProduct = true;
    },
    // when close modal data will clear.
    clrearData() {
      // Crear input text when add success.
      this.typeProduct = "";
      this.brandProduct = "";
      this.nameProduct = null;
      this.imageProduct = null;
      this.priceProduct = null;
      this.description = null;
      this.statusProduct = "";
    },

    // get data
    ...mapActions(["getProducts"]),

    // Add Product
    ...mapActions(["addProducts"]),
    async addProduct() {
      const productData = {
        typeProduct: this.typeProduct,
        brandProduct: this.brandProduct,
        nameProduct: this.nameProduct.toLowerCase(),
        imageProduct: this.imageProduct,
        priceProduct: this.priceProduct,
        description: this.description,
        productStatus: "inStock",
        date: Timestamp.now(),
      };

      try {
        await this.addProducts(productData);

        // Crear input text when add success.
        this.typeProduct = "";
        this.brandProduct = "";
        this.nameProduct = null;
        this.imageProduct = null;
        this.priceProduct = null;
        this.description = null;

        // close modal
        this.modalAddProduct = false;
      } catch (error) {
        console.log(error);
      }
    },

    // Update Product
    ...mapActions(["updateProducts"]),
    async updateProduct() {
      const productData = {
        typeProduct: this.typeProduct,
        brandProduct: this.brandProduct,
        nameProduct: this.nameProduct,
        imageProduct: this.imageProduct,
        priceProduct: this.priceProduct,
        description: this.description,
        productStatus: this.statusProduct,
      };

      try {
        await this.updateProducts({
          id: this.id,
          data: productData,
        });

        // close modal
        this.modalUpdateProduct = false;

        // refresh page
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    },

    // Delete Product
    ...mapActions(["deleteProducts"]),
    async deleteProduct(i) {
      const res = confirm("คุณต้องการจะลบสินค้าหรือไม่?");
      if (res === true) {
        try {
          await this.deleteProducts(i);
          alert("ลบสินค้าสำเร็จ");
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } catch (error) {
          console.log(error);
        }
      }
    },

    // Pagination functions
    onPage(i) {
      this.page = i;
    },

    prePage() {
      if (this.page > 1) {
        this.page -= 1;
      }
    },

    nextPage() {
      if (this.page < Math.ceil(this.products.length / this.perPage)) {
        this.page += 1;
      }
    },

    // Toast Description
    descriptionToast(i) {
      const productName = this.products[i].nameProduct.toUpperCase();
      const description = this.products[i].description;
      this.$bvToast.toast(description, {
        title: `รายละเอียดของ ${productName}`,
        variant: "warning",
        solid: true,
        toaster: "b-toaster-top-center",
        appendToast: false,
      });
    },
  },
};
</script>

<style>
.card-product-manage {
  border: none;
}

.text-up {
  text-transform: uppercase;
}

.page-item .page-link {
  color: rgb(255, 43, 96);
}
</style>
