import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Rating,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const getCurrentDay = () =>
  new Date().toLocaleString("en-us", { weekday: "long" });

const getCurrentOperatingTime = (operation_time) => {
  const currentDay = getCurrentDay();
  const todayOperation = operation_time.find((day) => day.day === currentDay);
  return todayOperation
    ? `${todayOperation.time_open} - ${todayOperation.time_close}`
    : "Closed";
};

const PlaceCard = ({ place }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={place.profile_image_url}
        alt={place.name}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {place.name}
        </Typography>
        <Box display="flex" alignItems="center">
          <AccessTimeIcon fontSize="small" />
          <Typography
            variant="body2"
            color="textSecondary"
            style={{ marginLeft: 4 }}
          >
            {getCurrentOperatingTime(place.operation_time)}
          </Typography>
        </Box>
        <Typography variant="body3" color="text.secondary">
          <Rating
            name="read-only"
            value={place.rating}
            readOnly
            size="small"
            precision={0.1}
          />
          {place.rating}
        </Typography>

        <Box
          sx={{
            display: "flex",
            overflowX: isMobile ? "scroll" : "hidden",
           
          }}
        >
          {place.images.slice(0, 3).map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              height="80"
              image={image}
              alt={`image-${index}`}
              sx={{
                flex: isMobile ? "0 0 auto" : "1 0 33.33%",
                maxWidth: isMobile ? 120 : "none",
                marginRight: isMobile ? 1 : 0,
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default PlaceCard;
