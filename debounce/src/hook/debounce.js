function debounce(fn, delay) {
  let timeoutId;

  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

export default debounce;


//// Learning version with logs (for understanding / debugging)

// function debounce(fn, delay) {
//   let timeoutId;

//   return (...args) => {
//     console.log("debounce called with args:", args);

//     if (timeoutId) {
//       console.log("Clearing previous timeout:", timeoutId);
//       clearTimeout(timeoutId);
//     } else {
//       console.log("No previous timeout to clear");
//     }

//     timeoutId = setTimeout(() => {
//       console.log("Timeout fired, calling original function with args:", args);
//       fn(...args);
//       console.log("Original function finished");
//     }, delay);

//     console.log(
//       "New timeout scheduled with id:",
//       timeoutId,
//       "and delay:",
//       delay,
//     );
//   };
// }

// export default debounce;
