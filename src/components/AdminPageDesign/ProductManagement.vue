<template>
  <div class="table-responsive">
    <table class="table table-hover table-striped">
      <thead>
        <tr class="bg-dark text-light">
          <th scope="col" :colspan="tableThead.length * 2 - 1">
            <h5>ตารางจัดการสินค้า</h5>
          </th>
          <th scope="col" class="text-right">
            <b-button variant="success">เพิ่ม</b-button>
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
            <b-button variant="primary" class="mr-2">แก้ไข</b-button>
          </td>
          <td class="text-right">
            <b-button variant="danger">ลบ</b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableThead: [
        { name: "ลำดับ" },
        { name: "ประเภท" },
        { name: "แบรนด์" },
        { name: "ชื่อ" },
        { name: "ราคา" },
        { name: "ที่อยู่รูปภาพ" },
        { name: "คำอธิบายสินค้า" },
        { name: "สถานะ" },
        { name: "จัดการสินค้า" },
      ],
    };
  },
};
</script>

<style>
.card-product-manage {
  border: none;
}
</style>
