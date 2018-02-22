export default function cleanData(data) {
  const cleanData = {
    curr: {
      location: data.current_observation.display_location.full
    }
  };
  return cleanData;
}