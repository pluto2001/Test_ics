import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Typography,
  Pagination,
} from "@mui/material";
import PlaceCard from "./PlaceCard";

const placeTypes = ["All", "Restaurant", "Bakery", "Cafe"];
const itemsPerPage = 9;

function PlaceList() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("/example_data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    let result = data;
    if (type !== "All") {
      result = result.filter((place) =>
        place.categories.includes(type.toLowerCase())
      );
    }
    if (search) {
      result = result.filter((place) =>
        place.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredData(result);
    setCurrentPage(1);
  }, [search, type, data]);

  // Calculate total number of pages
  const count = Math.ceil(data.length / itemsPerPage);

  // Get current page items
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h5" gutterBottom>
        Place List
      </Typography>

      <Box sx={{ display: "flex", mb: 3, flexGrow: 1 }}>
        <TextField
          label="Search name..."
          variant="outlined"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mr: 2 }}
        />
        <TextField
          select
          label="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          variant="outlined"
          sx={{ minWidth: 150 }}
        >
          {placeTypes.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      <Grid container spacing={2}>
        {currentData.map((place) => (
          <Grid item xs={12} sm={6} md={4} key={place.id}>
            <PlaceCard place={place} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination
          count={count}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
}

export default PlaceList;
