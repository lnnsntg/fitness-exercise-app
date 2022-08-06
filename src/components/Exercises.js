import React from "react";
import { Pagination, Stack, Typography, Box } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
// import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // const [first, setFirst] = useState("");
  // useEffect(() => {
  //   return () => {};
  // }, []);
  console.log(exercises);

  return (
    <>
      <Box
        id="exercises"
        sx={{
          mt: { lg: "110px" },
        }}
        mt="50px"
        p="20px"
      >
        <Typography variant="h3" mb="46px">
          Showing Result
        </Typography>
        <Stack
          direction="row"
          sx={{ gap: { lg: "110px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise}>

            </ExerciseCard>
          ))}
          <Pagination></Pagination>
        </Stack>
      </Box>
    </>
  );
};

export default Exercises;
