import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Heading,
  //  Select
} from "@chakra-ui/react";


const Home = () => {


  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [topNews, setTopNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [countryNews, setCountryNews] = useState([]);
  // const [countryName, setCountryName] = useState("in");
  const countryName = "in"
  const [mainCountryNews, setMainCountryNews] = useState({});
  //   const [subCountryNews, setSubCountryNews] = useState([]);

  // const handleOnChange = (e) => {
  //   setCountryName(e.target.value);
  // };
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${countryName}&apiKey=34c7de93f7594b079eec28988567d583`
      )
      .then((r) => {
        setCountryNews(r.data.articles);
        let imgUrl = countryNews[7].urlToImage;
        let newsTitle = countryNews[7].title;
        let newsContent = countryNews[7].content;

        setMainCountryNews({ imgUrl, newsTitle, newsContent });
      }).catch((err) => {
        console.log(err)
      }).finally(() => {
        console.log("call completed")
      })
  }, [countryName, countryNews])

  let i = 0;
  // let j = 2;

  useEffect(() => {
    document.title = "Latest News, India News, Breaking News, Today's News Headlines Online, English News Top Stories, Coronavirus News, IPL 2022 Updates|The Indian Express";
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=41615d6b08be40dabc99d84a67c4b29c"
      )
      .then((r) => {
        setTopNews(r.data.articles);
        let imgUrl = countryNews[7].urlToImage;
        let newsTitle = countryNews[7].title;
        let newsContent = countryNews[7].content;

        setMainCountryNews({ imgUrl, newsTitle, newsContent });
        console.log(mainCountryNews);
      })
      .catch((err) => {
        console.log(err)
      }).finally(() => {
        console.log("call completed")
      })
  }, [mainCountryNews, countryNews]);

  useEffect(() => {
    axios
      .get(
        "https://newsdata.io/api/1/news?apikey=pub_8388f9e9492da67b017e34d4bdd4eca23d1b&country=in&language=en&category=top"
      )
      .then((r) => {
        setLatestNews(r.data.results);
      });
  }, []);

  return (
    <div>
      {/* Top fixed section starts here */}
      <div className={styles.top}>
        <div> 
          <img
            src="https://images.indianexpress.com/2022/10/pfi-6.jpg?resize=450%2C250&w=4755"
            alt="khela hobe?"
          />
        </div>
        <div>
          <div>
            <Heading style={{ fontSize: "27px" , marginBottom:"15px"}}>
            How PFI morphed into a stridently militant outfit over 3 decades
            </Heading>
          </div>
          <p>
            Born in a landscape stained by political killings and revenge attacks, over the years, the Popular Front of India took on many forms, until its eventual ban last week.
          </p>
        </div>
      </div>
      {/* Top fixed section ends here */}

      {/* News with Ad section */}
      <div className={styles.mainContainer}>
        <div style={{ width: "68%" }} className={styles.leftNews}>
          <div className={styles.left}>
            <div style={{ width: "64%" }} className={styles.leftBox}>
              <Heading size="lg">
                Oppn leaders to field a common candidate in Prez polls
              </Heading>
              <img
                src="https://images.indianexpress.com/2022/06/mamata-2-2.jpg?w=430"
                alt=""
              />
              <p>
                The meet to decide on a common Presidential election nominee was
                organised by Mamata Banerjee and 22 regional parties were
                invited to attend it
              </p>
            </div>
            <div style={{ width: "33%", borderLeft: "1px solid grey" }}>
              <div className={styles.topNewsStoriesHead}>
                <Heading
                  style={{ fontSize: "18px" }}
                  className={styles.topNewsStories}
                >
                  TOP NEWS STORIES{" "}
                  <i
                    class="fa-solid fa-angle-right"
                    style={{ color: "red" }}
                  ></i>
                </Heading>
              </div>
              {topNews.map((news) => {
                if (i > 4) {
                  i++;
                  return "";
                } else {
                  i++;
                  return <div className={styles.partition}>{news.title}</div>;
                }
              })}
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <div className={styles.logo}>
              <img
                src="https://indianexpress.com/wp-content/themes/indianexpress/microsites/brand/fb-covid-sos/images/HER-SOS-2022-Logo.png"
                alt=""
              />
            </div>
            <br />
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              fade
              controls={false}
              indicators={false}
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.indianexpress.com/2022/03/block-sos-1-yashee-1200.jpg?resize=450%2C250&w=300"
                  alt="First slide"
                />
                <p className={styles.sliderCaption}>
                  Chip off an ancient block: How a Bagru artisan family stamped
                  out Covid blues
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.indianexpress.com/2022/05/SOS.jpg?resize=450%2C250&w=300"
                  alt="Second slide"
                />
                <p className={styles.sliderCaption}>
                  How a tribal woman helped her community in a Chhattisgarh
                  village during Covid-19
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.indianexpress.com/2022/05/Johanna-North.jpg?resize=450%2C250&w=300"
                  alt="Third slide"
                />
                <p className={styles.sliderCaption}>
                  From Helsinki to Payyanur, with a pandemic-induced detour into
                  vlogging
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.indianexpress.com/2022/05/Dr-Champaneria-1200.jpeg?resize=450%2C250&w=300"
                  alt="Fourth slide"
                />
                <p className={styles.sliderCaption}>
                  Meet Dr Bharat Champaneria, bringing healthcare and
                  nutritional awareness to rural Gujarat for over 40 years
                </p>
              </Carousel.Item>
            </Carousel>
            <div>
              <div className={styles.readMore}>Read More Stories</div>
            </div>
          </div>
        </div>
      </div>
      {/* News with Ad section */}

      {/* main section starts here */}
      <div className={styles.main}>
        {" "}
        {/* main container - parent */}
        <div className={styles.mainLeft}>
          <div className={styles.mainLeft_left}>
            {/* showing all the news with picture here */}
            {topNews.map((news) => {
              return (
                <div className={styles.newsContainer}>
                  <div className={styles.newsImg}>
                    <img src={news.urlToImage} alt="" />
                  </div>
                  <div className={styles.newsTitle}>
                    <h6>{news.title}</h6>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.mainLeft_right}>
            <div style={{ paddingLeft: "5px" }}>
              <Heading style={{ fontSize: "18px" }}>
                LATEST NEWS{" "}
                <i class="fa-solid fa-angle-right" style={{ color: "red" }}></i>
              </Heading>
            </div>
            {latestNews.map((news) => {
              return (
                <div className={styles.partition}>
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {news.title}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.mainRight}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            fade
            controls={false}
            indicators={false}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.indianexpress.com/2021/08/MSME_300x100-Updated.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.indianexpress.com/2021/08/300X100-story-1-1.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className={styles.mainRight_partition}>
            <div style={{ borderBottom: "1px solid grey" }}>
              <Heading style={{ fontSize: "20px" }}>
                EDITORIALS{" "}
                <i class="fa-solid fa-angle-right" style={{ color: "red" }}></i>
              </Heading>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ width: "500%", fontSize: "15px" }}>
                <img
                  src="https://images.indianexpress.com/2022/06/edit.jpg?w=210"
                  alt=""
                />
                What is needed is employment in manufacturing, especially for
                low and semi-skilled workers. Private sector must lead the way
              </div>
            </div>
          </div>
          <div className={styles.mainRight_partition}>
            <div style={{ paddingLeft: "5px" }}>
              <Heading style={{ fontSize: "20px" }}>
                OPINION{" "}
                <i class="fa-solid fa-angle-right" style={{ color: "red" }}></i>
              </Heading>
            </div>
            <div className={styles.flexBox}>
              <div className={styles.opinionImg}>
                <img
                  src="https://images.indianexpress.com/2013/12/volumn.jpg?w=210"
                  alt=""
                />
              </div>
              <div className={styles.opinionData}>
                <p className={styles.names}>Suhas Palshikar</p>
                <p className={styles.titles}>Congress in its labyrinth</p>
              </div>
            </div>
            <div className={styles.flexBox}>
              <div className={styles.opinionImg}>
                <img
                  src="https://images.indianexpress.com/2020/07/author1.jpg?w=210"
                  alt=""
                />
              </div>
              <div className={styles.opinionData}>
                <p className={styles.names}>Deepika Saraswat</p>
                <p className={styles.titles}>
                  Iran foreign minister’s visit reaffirms resolve of two
                  countries to strengthen ties
                </p>
              </div>
            </div>
            <div className={styles.flexBox}>
              <div className={styles.opinionImg}>
                <img
                  src="https://images.indianexpress.com/2015/01/anup-surendranath1.jpg?w=210"
                  alt=""
                />
              </div>
              <div className={styles.opinionData}>
                <p className={styles.names}>Anup Surendranath</p>
                <p className={styles.titles}>
                  There is a concerted effort to plug procedural gaps in death
                  penalty sentencing
                </p>
              </div>
            </div>
            <div className={styles.flexBox}>
              <div className={styles.opinionImg}>
                <img
                  src="https://images.indianexpress.com/2015/02/untitled-41.jpg?w=210"
                  alt=""
                />
              </div>
              <div className={styles.opinionData}>
                <p className={styles.names}>Kapil Sibal</p>
                <p className={styles.titles}>
                  Lawmakers become law breakers, there is no one to appeal to
                </p>
              </div>
            </div>
            <div className={styles.flexBox}>
              <div className={styles.opinionImg}>
                <img
                  src="https://images.indianexpress.com/2015/01/rakhshanda-jalil-1.jpg?w=210"
                  alt=""
                />
              </div>
              <div className={styles.opinionData}>
                <p className={styles.names}>Rakhshanda Jalil</p>
                <p className={styles.titles}>
                  Scholar and teacher Gopichand Narang believed in Urdu’s
                  ability to build bridges
                </p>
              </div>
            </div>
            <div className={styles.flexBox}>
              <div className={styles.opinionImg}>
                <img
                  src="https://images.indianexpress.com/2013/12/chris.jpg?w=210"
                  alt=""
                />
              </div>
              <div className={styles.opinionData}>
                <p className={styles.names}>Christophe Jaffrelot</p>
                <p className={styles.titles}>Inflation's uneven toll</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main section ends here */}
      {/* <div className={styles.main}>
        <div style={{ boxShadow: "0 0 5px 5px #dfdfdf", width: "68%" }}>
          <div className={styles.mainLeft_2}>
            <div>
              <Heading style={{ fontSize: "18px" }}>{countryName.toUpperCase()} News</Heading>
            </div>
            <div>
              <form>
                <Select onChange={(e) => handleOnChange(e)}>
                  <option value="br">Brazil</option>
                  <option value="ch">China</option>
                  <option value="fr">France</option>
                  <option value="in" selected>
                    India
                  </option>
                  <option value="it">Italy</option>
                  <option value="jp">Japan</option>
                  <option value="kr">Korea</option>
                  <option value="nz">New Zeeland</option>
                  <option value="rs">Russia</option>
                  <option value="ae">United Arab Emirates</option>
                  <option value="us">United States of America</option>
                </Select>
              </form>
            </div>
          </div>
          <hr />
          <div className={styles.mainNews}>
            <div className={styles.mainNewsBig}>
              <div>
                <img src={mainCountryNews.imgUrl} alt="" />
              </div>
              <div>
                <Heading>{mainCountryNews.newsTitle}</Heading>
              </div>
              <div>
                <p>{mainCountryNews.newsContent}</p>
              </div>
            </div>
            <div className={styles.mainNewsSmall}>
              {countryNews.map(({ urlToImage, title }) => {
                if (j < 5) {
                  j++;
                  return (
                    <div className={styles.flexBox}>
                      <div>
                        <img src={urlToImage} alt="" />
                        {title}
                      </div>
                    </div>
                  );
                } else {
                  j++;
                  return "";
                }
              })}
            </div>
          </div>
        </div>
        <div className={styles.mainRight}></div>
      </div> */}
    </div>
  );
};

export default Home;
