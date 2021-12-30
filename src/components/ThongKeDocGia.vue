<template>
  <div>
    <div class="row">
      <div class="col-6">
        <label>Thời gian mượn từ</label>
        <b-form-datepicker
          locale="vi"
          v-model="dateFrom"
          class="mb-2"
        ></b-form-datepicker>
      </div>
      <div class="col-6">
        <label>Thời gian mượn đến</label>
        <b-form-datepicker locale="vi" v-model="dateTo" class="mb-2"></b-form-datepicker>
      </div>
    </div>
    <button @click="getListDocGia()">Tìm kiếm</button>

    <table class="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã</th>
          <th>Tên</th>
          <th>Ngày sinh</th>
          <th>Địa chỉ</th>
          <th>Số sách đã mượn</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(docGia, index) in docGias" :key="index">
          <th>{{ index + 1 }}</th>
          <router-link
            :to="{
              name: 'ThongKePhieuMuon',
              params: { id: docGia.id },
              query: { item: docGia },
            }"
            ><td>{{ docGia.ma }}</td></router-link
          >
          <td>{{ docGia.ten }}</td>
          <td>
            <div v-if="docGia.ngay_sinh != null">
              {{ formatDate(docGia.ngay_sinh) }}
            </div>
            <div v-else></div>
          </td>
          <td>{{ docGia.dia_chi }}</td>
          <td>{{ docGia.so_sach_da_muon }}</td>
        </tr>
      </tbody>
    </table>
    <br />
    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  name: "ThongKeDocGia",
  data() {
    return {
      docGias: [],
      currentPage: 1,
      totalRows: 2,
      perPage: 8,
      dateFrom: new Date(),
      dateTo: new Date(),
    };
  },
  watch: {
    currentPage(val) {
      // when the hash prop changes, this function will be fired.
      this.currentPage = val;
      this.getListDocGia();
    },
  },
  mounted() {},
  methods: {
    getListDocGia() {
      const vm = this;
      var axios = require("axios");
      var config = {
        method: "get",
        url:
          "http://localhost:8080/doc-gia/thong-ke-doc-gia?thoi_gian_muon_tu=" +
          Math.floor(new Date(this.dateFrom).getTime() / 1000) +
          "&thoi_gian_muon_den=" +
          Math.floor(new Date(this.dateTo).getTime() / 1000) +
          "&page=" +
          (this.currentPage - 1) +
          "&size=" +
          this.perPage,
        headers: {},
      };

      axios(config)
        .then(function (response) {
          vm.docGias = response.data.content;
          vm.totalRows = response.data.totalElements;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    formatDate(date) {
      return date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
