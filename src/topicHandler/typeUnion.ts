export const useApi = (
  apiValue: "processing" | "processed" = "processing",
): number | boolean => {
  if (apiValue == "processing") {
    return 100;
  } else {
    return 99.9;
  }
};
