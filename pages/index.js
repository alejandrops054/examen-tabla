import { Inter } from 'next/font/google'
import VentasTable from './table/tablaVentas'
import SaladosTable from './table/tablaSaldos'
import { Grid } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Grid container spacing={1}> {/* spacing es opcional, pero puede ser útil para dar espacio entre las tablas */}
        <Grid item md={5} style={{ marginLeft: '90px', marginRight: '20px' }}>
          <VentasTable/>
        </Grid>
        <Grid item md={5} style={{ marginLeft: '90px', marginRight: '20px' }}>
          <SaladosTable/>
        </Grid>
      </Grid>
    </>
  )
}
