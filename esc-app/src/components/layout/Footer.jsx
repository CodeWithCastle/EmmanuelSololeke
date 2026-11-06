import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import escLogo from '../../assets/img/esc_logo.png'
import locationIcon from '../../assets/icons/location.png'
import mailIcon from '../../assets/icons/mail.png'
import phoneIcon from '../../assets/icons/phone.png'

function Footer() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <footer className={styles.footer}>
      <div className="content">
        {/* Contact Us Lane */}
        <div
          className={`${styles.contactusLane} ${contactOpen ? styles.contactusLaneOpen : ''}`}
          id="contactus"
        >
          <div className={styles.contactusBox}>
            <div className={styles.contactusHeader}>
              <div className={styles.contactusTitle}>Let&apos;s Get Started</div>
              <button
                className={styles.contactusRemove}
                onClick={() => setContactOpen(false)}
                aria-label="Close contact panel"
              ></button>
            </div>
            <div className={`card ${styles.contactusBody}`}></div>
          </div>
        </div>

        {/* Open contact link triggers contactOpen */}
        {/* (The #contactus anchor in the header scrolls here; we also expose a React-state open) */}

        {/* Company Lane */}
        <div className={styles.companyLane}>
          <Link to="/">
            <img src={escLogo} alt="Emmanuel Sololeke Consulting" className={styles.footerLogo} />
          </Link>
          <div className={styles.footerMsg}></div>
        </div>

        {/* Links Lane */}
        <div className={styles.linksLane}>
          <div className={styles.linkBox}>
            <div className={styles.linkTitle}>about us</div>
            <div className={styles.linkList}>
              <Link to="/about#mission" className={styles.link}>our mission</Link>
              <Link to="/about#vision" className={styles.link}>our vision</Link>
              <Link to="/about#personnels" className={styles.link}>key personnel</Link>
              <Link to="/about#whyus" className={styles.link}>why us</Link>
            </div>
          </div>

          <div className={styles.linkBox}>
            <div className={styles.linkTitle}>resources</div>
            <div className={styles.linkList}>
              <a href="#" className={styles.link}>estate agency</a>
              <a href="#" className={styles.link}>estate management</a>
              <a href="#" className={styles.link}>finance &amp; audit services</a>
              <a href="#" className={styles.link}>asset valuation services</a>
            </div>
          </div>

          <div className={styles.linkBox}>
            <div className={styles.linkTitle}>company</div>
            <div className={styles.linkList}>
              <Link to="/career" className={styles.link}>careers</Link>
              <Link to="/about" className={styles.link}>about us</Link>
              <Link to="/about/partners" className={styles.link}>partners</Link>
              <Link to="/about/resource" className={styles.link}>resource team</Link>
            </div>
          </div>

          <div className={styles.linkBox}>
            <div className={styles.linkTitle}>properties</div>
            <div className={styles.linkList}>
              <Link to="/properties?type=sale" className={styles.link}>for sale</Link>
              <Link to="/properties?type=lease" className={styles.link}>for lease</Link>
              <Link to="/properties?iloc=plateau" className={styles.link}>plateau properties</Link>
              <Link to="/properties?deny_iloc=plateau" className={styles.link}>other properties</Link>
            </div>
          </div>

          <div className={styles.linkBox}>
            <div className={styles.linkTitle}>data bank</div>
            <div className={styles.linkList}>
              <Link to="/insights?cat=news" className={styles.link}>news &amp; publications</Link>
              <Link to="/insights?cat=annual_report" className={styles.link}>annual real estate report</Link>
              <Link to="/insights?cat=bank" className={styles.link}>real estate data bank</Link>
              <Link to="/insights?cat=articles" className={styles.link}>articles</Link>
            </div>
          </div>
        </div>

        {/* Address Lane */}
        <div className={styles.addressLane}>
          <div className={styles.addressBox}>
            <div className={styles.addressLocation}>
              <div className={styles.addressTitle}>head office</div>
              <div className={styles.addressList}>
                <div className={styles.item}>
                  <img src={locationIcon} alt="" />
                  <span>Suite 1, Behind Heritage Bank, <br /> 3 Beach Rd, Jos, Plateau State</span>
                </div>
                <div className={styles.item}>
                  <img src={mailIcon} alt="" />
                  <span>sololeke@yahoo.com</span>
                </div>
                <div className={styles.item}>
                  <img src={phoneIcon} alt="" />
                  <span>+2348036097688 | +2348093949347 | +2348031828251</span>
                </div>
              </div>
            </div>

            <div className={styles.addressLocation}>
              <div className={styles.addressTitle}>lagos office</div>
              <div className={styles.addressList}>
                <div className={styles.item}>
                  <img src={locationIcon} alt="" />
                  <span>5, oladejo street, <br /> off olusosun bus stop, <br /> kudirat abiola road, <br /> oregun,<br /> lagos state</span>
                </div>
              </div>
            </div>

            <div className={styles.addressLocation}>
              <div className={styles.addressTitle}>gombe office</div>
              <div className={styles.addressList}>
                <div className={styles.item}>
                  <img src={locationIcon} alt="" />
                  <span>Suite 4, jubilee complex, <br /> behind jubilee hotel, <br /> blu road, <br /> gombe State</span>
                </div>
              </div>
            </div>

            <div className={styles.addressLocation}>
              <div className={styles.addressTitle}>abuja office</div>
              <div className={styles.addressList}>
                <div className={styles.item}>
                  <img src={locationIcon} alt="" />
                  <span>Suite b41 danziya plaza, <br /> opp. nnpc mega filling station, <br /> central business district, <br /> abuja</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Lane */}
        <div className={styles.copyrightLane}>
          <div>
            <span>&copy; 2025 emmanuel sololeke consulting. all rights reserved</span>
          </div>
          <div>
            <span>made with 💜</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
