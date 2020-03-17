const responsive = (minVal, maxVal) =>
  `calc(${minVal}px + (${maxVal} - ${minVal}) * ((100vw - 480px) / (1440 - 480)))`

export default responsive
