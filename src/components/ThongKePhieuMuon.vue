<template>
  <div>
    <h2>Chi tiết các phiếu mượn của đôc giả {{ docGia.ten }}</h2>
    <table class="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Ngày mượn</th>
          <th>Tổng số sách</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(phieuMuon, index) in docGia.phieu_muon" :key="index">
          <th>{{ index + 1 }}</th>
          <router-link
            :to="{
              name: 'ChiTietPhieuMuon',
              params: { id: phieuMuon.id, docGiaId: docGia.id },
              query: { item: phieuMuon, docGia: docGia },
            }"
          >
            <td>
              <div v-if="phieuMuon.thoi_gian_muon != null">
                {{ formatDate(phieuMuon.thoi_gian_muon) }}
              </div>
            </td>
          </router-link>
          <td>{{ phieuMuon.sach_muon.length }}</td>
        </tr>
      </tbody>
    </table>
    <router-link
      :to="{
        name: 'ThongKeDocGia',
      }"
      >Quay lại</router-link
    >
  </div>
</template>

<script>
export default {
  name: "ThongKePhieuMuon",
  data() {
    return {
      docGia: this.$route.query.item,
    };
  },
  mounted() {},
  methods: {
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
