import { Box, HStack, Spinner } from "@chakra-ui/react";
import React from "react";
import { useForecast } from "../api/accuWeather/hooks";
import { useAppSelector } from "../app/hooks";
import { selectCity } from "../features/selectedCitySlice";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import ForecastCard from "./WeatherCard/ForecastCard";

export const Forecast = () => {
  const city = useAppSelector(selectCity);
  const { forecast, isLoading } = useForecast(city.key);

  return (
    <Box boxShadow="2xl" rounded="sm" layerStyle="base" color="white">
      <Box>
        <CurrentWeather city={city} />
      </Box>
      <HStack
        justifyContent="space-between"
        overflowX="auto"
        overflowY="hidden"
        spacing={8}
        borderTopColor="var(--bg-color)"
        borderTopWidth={10}
        py={4}
        px={6}
      >
        {isLoading ? (
          <Spinner color="var(--blackwhite)" size="lg" />
        ) : (
          forecast.map((item, index) => (
            <Box
              flexShrink={0}
              flexGrow={1}
              key={index}
              w="0"
              minW="var(--card-minw)"
            >
              <ForecastCard {...item} />
            </Box>
          ))
        )}
      </HStack>
    </Box>
  );
};

export default Forecast;
