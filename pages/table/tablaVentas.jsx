import React, { useState } from 'react';
import {
  Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, IconButton
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const VentasTable = ()=> {
    const [data, setData] = useState([
        { id: 1, division: "Juan", ventas: 25 },
        { id: 2, division: "María", ventas: 30 },
        { id: 3, division: "Carlos", ventas: 28 },
      ]);
    
      const [sortOrder, setSortOrder] = useState({
        nombre: 'asc',
        edad: 'asc'
      });
    
      const handleFilter = (criterion) => {
        const order = sortOrder[criterion] === 'asc' ? 'desc' : 'asc';
    
        const sortedData = [...data].sort((a, b) => {
          if (criterion === 'division') {
            return order === 'asc' ? a.division.localeCompare(b.division) : b.division.localeCompare(a.division);
          } else if (criterion === 'ventas') {
            return order === 'asc' ? a.ventas - b.ventas : b.ventas - a.ventas;
          }
        });
    
        setData(sortedData);
        setSortOrder({
          ...sortOrder,
          [criterion]: order
        });
      };

  return (
    <Grid container justifyContent="center">
      <Grid item md={6}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Division
                  <IconButton onClick={() => handleFilter('division')} size="small">
                    {sortOrder.nombre === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                  </IconButton>
                </TableCell>
                <TableCell>
                  Total de ventas
                  <IconButton onClick={() => handleFilter('ventas')} size="small">
                    {sortOrder.edad === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                  </IconButton>
                </TableCell>
                <TableCell>
                  Total de limites
                  <IconButton onClick={() => handleFilter('edad')} size="small">
                    {sortOrder.edad === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                  </IconButton>
                </TableCell>

                <TableCell>
                  Total de insuficiencias
                  <IconButton onClick={() => handleFilter('edad')} size="small">
                    {sortOrder.edad === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                  </IconButton>
                </TableCell>

                <TableCell>
                  Total de riesgo
                  <IconButton onClick={() => handleFilter('edad')} size="small">
                    {sortOrder.edad === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                  </IconButton>
                </TableCell>

                <TableCell>
                  Total de ventas
                  <IconButton onClick={() => handleFilter('edad')} size="small">
                    {sortOrder.edad === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.nombre}</TableCell>
                  <TableCell>{row.edad}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default VentasTable;

