import React from "react";
import {
  ListItem,
  UnorderedList,
  Wrap,
  WrapItem,
  Avatar,
  Link,
} from "@chakra-ui/react";

import style from "../Components/Footer.module.css";

const Footer = () => {

 


  let d = new Date();
  const FullYear = d.getFullYear();
  // console.log('FullYear:', FullYear)


  return (

    
    <div className={style.MainContainerForFooter}>
      <div className={style.WidthDeciderFor_footer}>
        <div className={style.FooterContainer}>
          <div className={style.FooterSubHeadings}>
            <h2>TOP CATEGORIES</h2>
          </div>
          <center>
            <hr />
          </center>
          <div className={style.FooterDivSection}>
            <div className={style.FooterDivSection_for_All_uls}>
              <UnorderedList>
                <ListItem>
                  <Link href="https://indianexpress.com/section/explained/">
                    Explained News
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/section/cities/delhi/">
                    Delhi News
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/section/lifestyle/health/">
                    Health News
                  </Link>
                </ListItem>
              </UnorderedList>
              <UnorderedList>
                <ListItem>
                  <Link href="https://indianexpress.com/section/india/political-pulse/">
                    Political Pulse
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/section/cities/pune/">
                    Pune News
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/section/india/">
                    India News
                  </Link>
                </ListItem>
              </UnorderedList>
            </div>

            <div className={style.FooterDivSection_for_All_uls}>
              <UnorderedList>
                <ListItem>
                  <Link href="https://indianexpress.com/section/opinion/">
                    Latest Opinion
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/section/cities/bangalore/">
                    Bangalore News
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/section/sports/">
                    Sports News
                  </Link>
                </ListItem>
              </UnorderedList>
              <UnorderedList>
                <ListItem>
                  <Link href="https://indianexpress.com/section/cities/mumbai/">
                    Mumbai News
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/section/entertainment/bollywood/">
                    Bollywood News
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/section/lifestyle/">
                    Lifestyle News
                  </Link>
                </ListItem>
              </UnorderedList>
            </div>
          </div>
        </div>
        <div className={style.FooterContainer}>
          <div className={style.FooterSubHeadings}>
            <h2>TRENDING NEWS</h2>
          </div>
          <center>
            <hr />
          </center>
          <div className={style.FooterDivSection}>
            <div className={style.FooterDivSection_for_All_uls}>
              <UnorderedList>
                <ListItem>
                  <Link href="https://indianexpress.com/section/horoscope/">
                    Horoscope
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/section/horoscope/">
                    Horoscope
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/subscribe/all-access/">
                    Buy All-Access pass
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/subscribe/all-access/">
                    Buy All-Access pass
                  </Link>
                </ListItem>
              </UnorderedList>
              <UnorderedList>
                <ListItem>
                  <Link href="https://indianexpress.com/section/india/">
                    India News
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/section/entertainment/">
                    Entertainment News
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/subscribe/">
                    Subscribe to The Indian Express
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/article/cities/bangalore/bengaluru-news-live-updates-bommai-weather-southwest-monsoon-covid-textbook-row-7946592/">
                    Bengaluru News Live
                  </Link>
                </ListItem>
              </UnorderedList>
            </div>
            <div className={style.FooterDivSection_for_All_uls}>
              <UnorderedList>
                <ListItem>
                  <Link href="https://eureka.indianexpress.com/video/art-craft/">
                    Art &amp; Craft classNamees for Kids
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/section/upsc-current-affairs/">
                    UPSC News
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/subscribe/premium/">
                    Buy Digital Premium
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/article/cities/mumbai/mumbai-news-live-updates-weather-rains-ncb-traffic-covid-7946612/">
                    Mumbai News Live
                  </Link>
                </ListItem>
              </UnorderedList>
              <UnorderedList>
                <ListItem>
                  <Link href="https://eureka.indianexpress.com/video/fitness/">
                    Fitness classNamees for Kids
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/section/sports/ipl">
                    IPL 2022 News
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/subscribe/epaper/">
                    Buy Indian Express e-paper
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/article/cities/chennai/chennai-news-live-updates-stalin-covid-weather-dmk-aiadmk-bjp-fuel-price-7946616/">
                    Chennai News Live
                  </Link>
                </ListItem>
              </UnorderedList>
            </div>
          </div>
        </div>
        <div className={style.FooterContainer}>
          <div className={style.FooterSubHeadings}>
            <h2>LATEST STORIES</h2>
          </div>
          <center>
            <hr />
          </center>
          <div className={style.FooterContainer_one}>
            <div className={style.FooterDivSection_for_All_uls}>
              <UnorderedList>
                <ListItem>
                  <Link href="https://indianexpress.com/article/sports/football/england-slumps-to-historic-loss-to-hungary-in-nations-league-7970284/">
                    Nations League: England suffer its worst home defeat since
                    1928 with a 4-0 loss to Hungary
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/article/cities/chennai/chennai-news-live-updates-today-tamil-nadu-covid-weather-stalin-dmk-aiadmk-gcc-traffic-7970257/">
                    Chennai News Live: Fresh Covid-19 cases breach 300-mark in
                    Tamil Nadu, 171 new cases in state capital
                  </Link>
                </ListItem>
              </UnorderedList>
              <UnorderedList>
                <ListItem>
                  <Link href="https://indianexpress.com/article/cities/jammu/two-militants-killed-in-south-kashmirs-shopian-police-say-one-of-them-killed-rajasthan-bank-manager-7970286/">
                    Two militants killed in South Kashmir’s Shopian, police say
                    one of them killed Rajasthan bank manager
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/article/sports/while-you-were-asleep-england-slump-to-historic-loss-and-afghans-complete-a-clean-sweep-7970239/">
                    While you were asleep: England slump to historic loss,
                    Germany crush Italy and Afghans complete a clean sweep
                  </Link>
                </ListItem>
              </UnorderedList>
            </div>

            <div className={style.FooterDivSection_for_All_uls}>
              <UnorderedList>
                <ListItem>
                  <Link href="https://indianexpress.com/article/cities/pune/pune-fire-company-basement-shivajinagar-7970288/">
                    Pune: Fire in company record room in building basement in
                    Shivajinagar area.
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/article/world/pak-army-says-defence-budget-for-2022-23-decreases-from-2-8-of-the-gdp-to-2-2-by-sajjad-hussain-7970271/">
                    Pak Army says defence budget for 2022-23 decreases from 2.8%
                    of the GDP to 2.2% By Sajjad Hussain
                  </Link>
                </ListItem>
              </UnorderedList>
              <UnorderedList>
                <ListItem>
                  <Link href="https://indianexpress.com/article/sports/cricket/ranji-trophy-2022-semifinals-day-2-live-score-streaming-online-updates-7970008/">
                    Ranji Trophy 2022 Semifinals, Day 2 Live: MP, Mumbai look to
                    build on strong start
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://indianexpress.com/article/lifestyle/life-positive/you-need-discipline-and-hard-work-to-achieve-your-dreams-arvind-arora-life-positive-7965856/">
                    ‘You need discipline and hard work to achieve your dreams’:
                    Arvind Arora
                  </Link>
                </ListItem>
              </UnorderedList>
            </div>
          </div>
          <center>
            <hr />
          </center>
        </div>

        <div className={style.FooterMidDIv}>
          <div className={style.FooterMidDIv_first}>
            <div className={style.FooterMidDIv_first_subA}>
              <div>
                <h1>FOLLOW US</h1>
                <Wrap>
                  <WrapItem>
                    <Avatar
                      size="sm"
                      name="Facebook"
                      src="	https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-facebook.svg"
                    />
                  </WrapItem>
                  <WrapItem>
                    <Avatar
                      size="sm"
                      name="Twitter"
                      src="	https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-twitter.svg"
                    />
                  </WrapItem>

                  <WrapItem>
                    <Avatar
                      size="sm"
                      name="Linkedin"
                      src="	https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-linkedin.svg"
                    />
                  </WrapItem>
                  <WrapItem>
                    <Avatar
                      size="sm"
                      name="Instagram"
                      src="https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-instagram.svg"
                    />
                  </WrapItem>
                </Wrap>
              </div>

              <div>
                <h1>DOWNLOAD APPS</h1>
                <Wrap>
                  <WrapItem>
                    <Avatar
                      size="sm"
                      name="Android"
                      src="	https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-android.svg"
                    />
                  </WrapItem>
                  <WrapItem>
                    <Avatar
                      size="sm"
                      name="iOS"
                      src="	https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-apple.svg"
                    />
                  </WrapItem>
                </Wrap>
              </div>
            </div>

            <div className={style.FooterMidDIv_first_subB}>
              <div className={style.Sub_a}>
                <img
                  src="https://indianexpress.com/wp-content/themes/indianexpress/images/newsguard-logo-w.svg"
                  width="120px"
                  height="18px"
                  alt="Newsguard"
                />
              </div>
              <div className={style.FooterMidDIv_NewsGuard}>
                <div>
                  <img
                    src="https://indianexpress.com/wp-content/themes/indianexpress/images/newsguard-check.svg"
                    width="20px"
                    height="26px"
                    alt="Newsguard"
                  />
                </div>
                <div>
                  <p>
                    The Indian Express website has been rated GREEN for its
                    credibility and trustworthiness by Newsguard, a global
                    service that rates news sources for their journalistic
                    standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={style.FooterMidDIv_Second}>
            <div>
              <h1>EXPRESS GROUP</h1>
              <div className={style.ExpressGrpLinks_container}>
                <div>
                  <ul>
                    <li>
                      <Link href="https://indianexpress.com/">
                        The Indian Express
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.financialexpress.com/">
                        The Financial Express
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.loksatta.com/">Loksatta</Link>
                    </li>
                    <li>
                      <Link href="https://www.jansatta.com/">Jansatta</Link>
                    </li>
                    <li>
                      <Link href="https://expressgroup.indianexpress.com/">
                        The ExpressGroup
                      </Link>
                    </li>
                    <li>
                      <Link href="https://indianexpress.com/newsletters/">
                        Newsletters
                      </Link>
                    </li>
                    <li>
                      <Link href="https://rngfoundation.com/awards/">
                        Ramnath Goenka Excellence in Journalism Awards
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.lighthousejournalism.com/">
                        Light House Journalism
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <Link href="https://tamil.indianexpress.com/">
                        ieTamil.com
                      </Link>
                    </li>
                    <li>
                      <Link href="https://bengali.indianexpress.com/">
                        ieBangla.com
                      </Link>
                    </li>
                    <li>
                      <Link href="https://malayalam.indianexpress.com/">
                        ieMalayalam.com
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.inuth.com/">inUth</Link>
                    </li>
                    <li>
                      <Link href="https://www.myinsuranceclub.com/">
                        MyInsuranceClub
                      </Link>
                    </li>
                    <li>
                      <Link href="https://indianexpress.com/26-11/">
                        26/11 Stories of Strength
                      </Link>
                    </li>
                    <li>
                      <Link href="https://eureka.indianexpress.com/">
                        Online classNamees for Kids
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={style.FooterMidDIv_third}>
            <h1>QUICK LINKS</h1>
            <div>
              <ul>
                <li>
                  <Link href="/terms-and-conditions/">T&amp;C</Link>
                </li>
                <li>
                  <Link href="/privacy-policy/">Privacy Policy</Link>
                </li>

                <li>
                  <Link href="https://indianexpress.com/brand-solutions/">
                    Brand Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us/">Contact Us</Link>
                </li>
                <li>
                  <Link href="http://subscribe.indianexpress.com/">
                    Subscribe
                  </Link>
                </li>
                <li>
                  <Link href="https://indianexpress.com/article/what-is/what-is-the-protection-of-children-from-sexual-offences-act-2012/">
                    Statutory provisions on reporting (sexual offenses)
                  </Link>
                </li>
                <li>
                  <Link href="https://indianexpress.com/article/india/code-of-ethics-for-digital-news-websites-6758543/">
                    This website follows the DNPA’s code of conduct
                  </Link>
                </li>
                <li>
                  <Link href="https://expressgroup.indianexpress.com/corporate-social-responsibility.html">
                    CSR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <center>
          <hr />
        </center>

        <div className={style.FooterBtmDiv}>
          <div>
            <p>
              Copyright © {FullYear} The Indian Express [P] Ltd. All Rights
              Reserved
            </p>
          </div>
          <div>
            <div>
              <Link
                href="https://vip.wordpress.com/?utm_source=vip_powered_wpcom&amp;utm_medium=web&amp;utm_campaign=VIP%20Footer%20Credit&amp;utm_term=indianexpress.com"
                rel="noopener"
                className="powered-by-wpcom"
                target="_blank"
                aria-label="Powered by WordPress.com VIP"
              >
                <img
                  src="https://indianexpress.com/wp-content/themes/indianexpress/images/vip-powered-logo.png"
                  alt="Powered by WordPress.com VIP"
                  width="187"
                  height="26"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
