import "./booking.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { apiUrl } from "../../const";

const BookingHistory = () => {
  const { data, loading, error, reFetch } = useFetch(`/booking-history`);

  const fakeData= [{
    id: 1,
    date: 'Nov 23 2023',
    room: 'Studio Apartment with Air conditioning',
    tickets: 'A adult, a child',
    amount: 1200,
  },
  {
    id: 2,
    date: 'Nov 23 2023',
    room: '2 Studio Apartment with Air conditioning',
    tickets: 'A adult, a child',
    amount: 1200,
  },
  {
    id: 3,
    date: 'Nov 23 2023',
    room: '3 Studio Apartment with Air conditioning',
    tickets: 'A adult, a child',
    amount: 1200,
  }]

  const cancelBooking = async (id) => {
    console.log(id)
    try {
      await axios.delete(`${apiUrl}/cancel-booking/${id}` );
      reFetch()
    } catch (err) {
     console.log('error: ', err)
    }
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
      ) : (
        <div className="historyContainer">
           { fakeData.length === 0 ? (
              <div  className="noBooking">You haven't made your first booking yet!</div>
            ) : (
          <div className="historyList">
            <div  className="historyItem historyHeader">
              <div># DATE</div>
              <div>ROOM</div>
              <div>TICKETS</div>
              <div>AMOUNT</div>
              <div>CANCEL</div>
            </div>
            {fakeData.map((item) => (
                  <div key={item.id} className="historyItem">
                    <div>{item.date}</div>
                    <div>{item.room}</div>
                    <div>{item.tickets}</div>
                    <div>{item.amount}</div>
                    <div>
                      <button className="btnCancel"  onClick={() => cancelBooking(item.id)}>
                        Cancel
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          <MailList />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default BookingHistory;
