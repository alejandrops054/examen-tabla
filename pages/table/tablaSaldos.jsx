import React, { useState } from 'react';
import {
  Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, IconButton,Typography
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const SaladosTable = ()=> {
    const [data, setData] = useState([
        { id: 1, division: "Division 1", ventas: 25 ,limites: 100, insuficiencias: 0, riesgo: 10 },
        { id: 2, division: "Division 2", ventas: 30, limites: 100, insuficiencias: 0, riesgo: 10  },
        { id: 3, division: "Division 3", ventas: 28, limites: 100, insuficiencias: 0, riesgo: 10  },
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
          } else if(criterion === 'limites'){
            return order === 'asc' ? a.limites - b.limites : b.limites - a.limites;
          }else if(criterion === 'insuficiencias'){
            return order === 'asc' ? a.insuficiencias - b.insuficiencias : b.insuficiencias - a.insuficiencias;
          }else if(criterion === 'riesgo'){
            return order === 'asc' ? a.riesgo - b.riesgo : b.riesgo - a.riesgo;
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
      <Grid item md={12}>
      <Typography variant="h6" style={{ margin: "10px 0" }}>
            Saldos/Limites
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Division
                  <IconButton onClick={() => handleFilter('division')} size="small">
                    {sortOrder.division === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                  </IconButton>
                </TableCell>
                <TableCell>
                  Total de ventas
                  <IconButton onClick={() => handleFilter('ventas')} size="small">
                    {sortOrder.ventas === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                  </IconButton>
                </TableCell>
                <TableCell>
                  Total de limites
                  <IconButton onClick={() => handleFilter('limites')} size="small">
                    {sortOrder.limites === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                  </IconButton>
                </TableCell>

                <TableCell>
                  Total de insuficiencias
                  <IconButton onClick={() => handleFilter('insuficiencias')} size="small">
                    {sortOrder.insuficiencias === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                  </IconButton>
                </TableCell>

                <TableCell>
                  Total de riesgo
                  <IconButton onClick={() => handleFilter('riesgo')} size="small">
                    {sortOrder.riesgo === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                  </IconButton>
                </TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(row => (
                <TableRow key={row.id}>
                  <TableCell>{row.division}</TableCell>
                  <TableCell>{row.ventas}</TableCell>
                  <TableCell>{row.limites}</TableCell>
                  <TableCell>{row.insuficiencias}</TableCell>
                  <TableCell>{row.riesgo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default SaladosTable;

