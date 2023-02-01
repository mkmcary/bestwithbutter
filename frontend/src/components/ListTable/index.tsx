import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import MovieNode, { MovieDetails } from "../MovieNode";

interface ListTableProps {
  movies: MovieDetails[];
}

export default function ListTable({ movies }: ListTableProps) {
  return (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: 5, backgroundColor: "#fef9e1" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {movies != null &&
            movies.map((movie) => {
              return (
                <TableRow>
                  <TableCell>
                    <MovieNode movie={movie} />
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
