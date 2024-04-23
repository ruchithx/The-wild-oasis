import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export const useBookings = () => {
  const [searchParams] = useSearchParams();

  // FILTER

  const filterValue = searchParams.get("status") || "all";
  console.log(filterValue);

  const filter =
    filterValue === "all" || !filterValue
      ? null
      : { field: "status", value: filterValue };

  // SORT

  const sortByRow = searchParams.get("sortBy") || "startDate-asc";

  const [field, direction] = sortByRow.split("-");

  const sortBy = { field, direction };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["booking", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
  });

  return { isLoading, bookings, error };
};
