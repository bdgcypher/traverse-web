import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from './Btn';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Sign up for our Discovery newsletter to receive updates on availability and to get our best vacation deals
                </p>
                <p className="footer-subscription-text">Unsubscribe at any time</p>
                <div className="input-areas">
                    <form>
                        <input className="footer-input" type="email" name="email" placeholder="Email" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/traverse-web/sign-up'>How it works</Link>
                        <Link to='/traverse-web/sign-up'>Testimonials</Link>
                        <Link to='/traverse-web/sign-up'>Careers</Link>
                        <Link to='/traverse-web/sign-up'>Investors</Link>
                        <Link to='/traverse-web/sign-up'>Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Discover</h2>
                        <Link to='/traverse-web/sign-up'>Products</Link>
                        <Link to='/traverse-web/sign-up'>Deals</Link>
                        <Link to='/traverse-web/sign-up'>Destinations</Link>
                        <Link to='/traverse-web/sign-up'>Payment Options</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to='/traverse-web/sign-up'>Contact</Link>
                        <Link to='/traverse-web/sign-up'>Support</Link>
                        <Link to='/traverse-web/sign-up'>Sponsorships</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to='/traverse-web/sign-up'>Facebook</Link>
                        <Link to='/traverse-web/sign-up'>Instagram</Link>
                        <Link to='/traverse-web/sign-up'>Youtube</Link>
                        <Link to='/traverse-web/sign-up'>Twitter</Link>
                        <Link to='/traverse-web/sign-up'>LinkedIn</Link>
                    </div>
                </div>
            </div>
            <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVSE
              <i class="fas fa-route"/>
            </Link>
          </div>
          <small class='website-rights'>TRVSE © {new Date().getFullYear()}</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/traverse-web'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/traverse-web'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/traverse-web'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/traverse-web'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/traverse-web'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Footer

