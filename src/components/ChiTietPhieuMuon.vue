<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã</th>
          <th>Tên</th>
          <th>Tác giả</th>
          <th>Ngày mượn</th>
          <th>Ngày trả</th>
          <th>Tiền phạt</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(sachMuon, index) in phieuMuon.sach_muon" :key="index">
          <th>{{ index + 1 }}</th>
          <td>{{ sachMuon.ma }}</td>
          <td>{{ sachMuon.ten }}</td>
          <td>{{ sachMuon.tac_gia }}</td>
          <td>
            <div v-if="phieuMuon.thoi_gian_muon != null">
              {{ formatDate(phieuMuon.thoi_gian_muon) }}
            </div>
          </td>
          <td>
            <div v-if="phieuMuon.ngay_tra != null">
              {{ formatDate(phieuMuon.ngay_tra) }}
            </div>
            <div v-else>Chưa trả</div>
          </td>
          <td>
            {{
              phieuMuon.tien_phat.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })
            }}
          </td>
        </tr>
      </tbody>
    </table>
    <router-link
      :to="{
        name: 'ThongKePhieuMuon',
        params: {
          id: this.$route.params.docGiaId,
        },
        query: { item: this.$route.query.docGia },
      }"
      >Quay lại</router-link
    >
  </div>
</template>

<script>
export default {
  name: "ChiTietPhieuMuon",
  data() {
    return {
      phieuMuon: this.$route.query.item,
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
