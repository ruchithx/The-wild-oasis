import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
// import { useQuery } from "@tanstack/react-query";
// import { getBooking } from "../../services/apiBookings";
import Spinner from "../../ui/Spinner";
import { useBooking } from "./useBooking";

import { useNavigate, useParams } from "react-router-dom";
// import Menus from "../../ui/Menus";
// import { useQuery } from "@tanstack/react-query";
// import { getBooking } from "../../services/apiBookings";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const navigate = useNavigate();
  const { booking, isLoading, error } = useBooking();

  console.log(booking, isLoading, error);

  const { bookingId } = useParams();

  // const {
  //   data: booking,
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ["booking", bookingId],
  //   queryFn: () => getBooking(bookingId),
  //   // retry: false,
  // });
  // console.log(booking, isLoading, error);

  // const { id: bookingId } = booking;

  const moveBack = useMoveBack();

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error) return <div>Something went wrong</div>;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[booking.status]}>
            {booking.status.replace("-", " ")}
          </Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {booking.status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
