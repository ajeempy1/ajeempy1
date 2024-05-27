import React from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import '../static/css/style.css'; // Corrected import path
import { Link } from 'react-router-dom';
import HomeBg from '../static/images/home-bg.jpeg';
import codingImage from '../static/images/coding.jpg';
import posterImage from '../static/images/poster-3.jpg';
import posterImage2 from '../static/images/poster-2.jpg';
import worthyLogo from '../static/images/worthy-logo.png';





const PaymentHandler = ({ userForm, razorpayContext }) => {

  return (


      <div>
        <div className="d-flex flex-column min-vh-100">
          <Header />

     <section className="banner-bg" style={{ backgroundImage: `url(${HomeBg})`, backgroundRepeat: 'no-repeat' }}>
          <div className="bg-overlay">
            <h2>Payment Details</h2>
            <p>Now you can pay {userForm.amount}</p>
            <form id="razorpay-payment-form" action="{% url 'account:login' %}" method="POST">
                {/* CSRF token */}
                <input type="hidden" name="csrfmiddlewaretoken" value="{% csrf_token %}" />

                {/* Add Razorpay form fields here */}
                <input type="hidden" name="razorpay_order_id" value={razorpayContext.razorpay_order_id} />
                <input type="hidden" name="amount" value={razorpayContext.razorpay_amount} />
                <input type="hidden" name="currency" value={razorpayContext.currency} />
                <input type="hidden" name="callback_url" value={razorpayContext.callback_url} />

                <button type="submit" className="btn" id="pay-btn">Pay</button>
            </form>
          </div>
        </section>
          <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
                crossOrigin="anonymous">
          </script>
      {/* Include your custom JavaScript file */}
      <script src="script.js"></script>
       </div>
        <Footer />
      </div>


  );
}


export default PaymentHandler;
