import React from "react";
import { Box } from "@mui/material";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import {exerciseOptions, fetchData} from '../utils/fetchData'


const ExerciseDetail = () => {
  return (
<Box>
  <Detail></Detail>
  <ExerciseVideos></ExerciseVideos>
  <SimilarExercises></SimilarExercises>
</Box>
  )
};

export default ExerciseDetail;