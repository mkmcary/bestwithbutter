import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Movie } from "../routes/mylist";

interface ListTableProps {
  movies: Movie[];
}

export default function ListTable({ movies }: ListTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Genres</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => {
            const genres = movie.genres.join(", ");
            return (
              <TableRow
                key={movie.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {movie.title}
                </TableCell>
                <TableCell>{movie.year}</TableCell>
                <TableCell>{genres}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
