import React from 'react'
import './Footer.css';

const Footer = () => (

<footer className="my-footer">
    <div className="container">
        <div className="row">
        <div className="col-sm-4 text-center">
            <h5>About FoodProject</h5>
            <ul>
            <li><a href="/#">About Us</a></li>
            <li><a href="/#">Contact Us</a></li>
            </ul>
        </div>
        <div className="col-sm-4 text-center">
            <h5>Support</h5>
            <ul>
            <li><a href="/#">FAQ</a></li>
            <li><a href="/#">Help desk</a></li>
            <li><a href="/#">Forums</a></li>
            </ul>
        </div>
        <div className="col-sm-4 text-center">
            <h5>Download App</h5>
            <ul>
            <li><a href="https://apps.apple.com/in/app/zomato-food-restaurant-finder/id434613896?_branch_match_id=802016638132871342">App Store</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.application.zomato&_branch_match_id=802016638132871342">Google Play</a></li>
            </ul>
        </div>
        </div>
    </div>
    <div className="social-networks">
        <a href="/#" className="twitter"><i className="fa fa-twitter"></i></a>
        <a href="/#" className="facebook"><i className="fa fa-facebook-official"></i></a>
        <a href="/#" className="google"><i className="fa fa-google-plus"></i></a>
    </div>
    <div className="text-center footer-copyright">
      <p>Copyright &copy; 2020 Team Food Project (Tegar Satya Negara, Aditia Ahmad, Dinda Ayu Swasitka, Ameliya) </p>
    </div>
</footer>

)

export default Footer