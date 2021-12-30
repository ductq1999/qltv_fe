import Vue from 'vue'
import Router from 'vue-router'
import ThongKeDocGia from '@/components/ThongKeDocGia'
import ThongKePhieuMuon from '@/components/ThongKePhieuMuon'
import ChiTietPhieuMuon from '@/components/ChiTietPhieuMuon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ThongKeDocGia',
      component: ThongKeDocGia
    },
    {
      path: '/danh-sach-phieu-muon/:id',
      name: 'ThongKePhieuMuon',
      component: ThongKePhieuMuon
    },
    {
      path: '/chi-tiet-phieu-muon/:id',
      name: 'ChiTietPhieuMuon',
      component: ChiTietPhieuMuon
    }
  ]
})
