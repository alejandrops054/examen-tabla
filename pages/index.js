import { Inter } from 'next/font/google'
import { InsuficienciasVentasTable, InsuficienciasSaldoTable, SaladosTable, VentasTable } from './table/index'
import SelectOprops from './select/select'
import { Grid, Box  } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <>
     <Box mt={5}>
      <Grid container justifyContent="center"> {/* Center the item */}
        <Grid item xs={12} md={12}> {/* xs={12} for full width on mobile, md={12} for full width on medium screens */}
          <Box display="flex" justifyContent="center"> {/* This will further ensure centering */}
            <SelectOprops/>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={1}> {/* spacing es opcional, pero puede ser útil para dar espacio entre las tablas */}
        <Grid item md={5} style={{ marginLeft: '90px', marginRight: '20px' }}>
          <VentasTable/>
        </Grid>
        <Grid item md={5} style={{ marginLeft: '90px', marginRight: '20px' }}>
          <SaladosTable/>
        </Grid>
        <Grid item md={5} style={{ marginLeft: '90px', marginRight: '20px' }}>
          <InsuficienciasVentasTable/>
        </Grid>
        <Grid item md={5} style={{ marginLeft: '90px', marginRight: '20px' }}>
          <InsuficienciasSaldoTable/>
        </Grid>
      </Grid>
      </Box>
    </>
  )
}

export default Home;
