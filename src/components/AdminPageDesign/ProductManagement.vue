<template>
  <div>
    <div class="table-responsive">
      <table class="table table-hover table-striped">
        <thead>
          <tr class="bg-dark text-light">
            <th scope="col" :colspan="tableThead.length * 2 - 1">
              <h5>ตารางจัดการสินค้า</h5>
            </th>
            <th scope="col" class="text-right">
              <b-button variant="success" @click="openModalAddProduct">
                เพิ่ม
              </b-button>
            </th>
          </tr>
          <tr>
            <th
              scope="col"
              colspan="2"
              v-for="read in tableThead"
              :key="read.name"
            >
              <p>{{ read.name }}</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="index in 10" :key="index">
            <th scope="row" colspan="2">{{ index }}</th>
            <td colspan="2">Mark</td>
            <td colspan="2">Otto</td>
            <td colspan="2">Mark</td>
            <td colspan="2">Otto</td>
            <td colspan="2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              repellat.
            </td>
            <td colspan="2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              repellat.
            </td>
            <td colspan="2">ปกติ</td>
            <td class="text-right">
              <b-button
                variant="primary"
                class="mr-2"
                @click="openModalUpdateProduct(index)"
              >
                แก้ไข
              </b-button>
            </td>
            <td class="text-right">
              <b-button variant="danger"> ลบ </b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Add Product -->
    <b-modal v-model="modalAddProduct" centered hide-footer>
      <!-- Modal header -->
      <template #modal-header="{ close }">
        <h3>เพิ่มสินค้า</h3>
        <button @click="close()" class="btn btn-danger">
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
        <button @click="close()" class="btn btn-danger">
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
        { name: "ราคา" },
        { name: "ลิงค์รูปภาพ" },
        { name: "คำอธิบายสินค้า" },
        { name: "สถานะ" },
        { name: "จัดการสินค้า" },
      ],

      // Attributes for product
      typeProduct: "",
      brandProduct: "",
      nameProduct: null,
      imageProduct: null,
      priceProduct: null,
      description: null,
      statusProduct: null,
    };
  },
  methods: {
    // Open modal add product
    openModalAddProduct() {
      this.modalAddProduct = true;
    },
    // Open modal update product
    openModalUpdateProduct(i) {
      this.modalUpdateProduct = true;
      console.log(i);
    },

    addProduct() {
      const productData = {
        typeProduct: this.typeProduct,
        brandProduct: this.brandProduct,
        nameProduct: this.nameProduct,
        imageProduct: this.imageProduct,
        priceProduct: this.priceProduct,
        description: this.description,
      };
      console.log(productData);
    },

    updateProduct() {
      const productData = {
        typeProduct: this.typeProduct,
        brandProduct: this.brandProduct,
        nameProduct: this.nameProduct,
        imageProduct: this.imageProduct,
        priceProduct: this.priceProduct,
        description: this.description,
      };
      console.log(productData);
    },
  },
};
</script>

<style>
.card-product-manage {
  border: none;
}
</style>
