import { Inter } from 'next/font/google'
import VentasTable from './table/tablaVentas'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <VentasTable/>
    </>
  )
}
