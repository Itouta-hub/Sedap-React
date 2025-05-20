import Banner from '../components/ComponentsGuest/Banner'
import About from '../components/ComponentsGuest/About'
import TopProduk from '../components/ComponentsGuest/TopProduk'
import Testimoni from '../components/ComponentsGuest/Testimoni'
import CekKetersediaan from '../components/ComponentsGuest/CekKetersediaan'

export default function DashboardGuest() {
  return (
    <>
      <Banner />
      <About />
      <TopProduk />
      <CekKetersediaan />
      <Testimoni />
    </>
  )
}
