import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFrom, setTo } from "../store/slice/flightSlice";
import FlightService from "../services/flightService";
import type { RootState } from "../store/store";

function Flights() {
  const dispatch = useDispatch();

  const from = useSelector((state: RootState) => state.flight.from);
  const to = useSelector((state: RootState) => state.flight.to);

  const [result, setResult] = useState<any>(null);

  const searchFlights = async () => {
    const data = await FlightService.search({
      from,
      to,
    });

    setResult(data);
  };

  return (
    <div>
      <h1>Flight Search</h1>

      <input
        placeholder="From"
        value={from}
        onChange={(e) => dispatch(setFrom(e.target.value))}
      />

      <input
        placeholder="To"
        value={to}
        onChange={(e) => dispatch(setTo(e.target.value))}
      />

      <button onClick={searchFlights}>
        Search Flights
      </button>

      <p>From: {from}</p>
      <p>To: {to}</p>

      {result && (
        <div>
          <h2>Search Result</h2>
          <p>Flight search completed successfully.</p>
          <p>From: {result.request?.from}</p>
          <p>To: {result.request?.to}</p>
        </div>
      )}
    </div>
  );
}

export default Flights;