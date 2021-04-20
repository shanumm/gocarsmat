import React from "react";
import Comments from "./Comments";
import "../Styles/homecontent.css";
import Nav from "./Nav";
import Footer from "./Footer";
import ImageCorousel from "./ImageCorousel";
import HomeContentCard from "./HomeContentCard";
import FeaturedCards from "./FeaturedCards";
import OurProductsCard from "./OurproductsCard";
import { AnimatePresence, motion } from "framer-motion";
export default function HomeContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="homecontent"
    >
      <ImageCorousel />
      <Nav />
      <div className="homecontent-heading">
        <div>
          <div className="heading-title">Go</div>
          <div className="heading-subtitle"> CarMats</div>
        </div>
      </div>
      <div className="homecontent-content">
        <div className="homecontent-img">
          <div className="image"></div>
        </div>
        <div className="homecontent-content-text">
          <div>
            lorem <br /> Lorem, ipsum dolor. <br /> Lorem, ipsum.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            repudiandae labore vel modi suscipit accusamus, aut perferendis
            ipsam. Omnis, repellat voluptate! Similique iusto iste tenetur
            facilis beatae ex molestiae necessitatibus?
          </div>{" "}
          <br />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
            laborum.
          </div>
          <div>NAME</div>
        </div>
      </div>
      <div className="home-content-cards">
        <HomeContentCard name="new collection" content="lorem ipsum" />
        <HomeContentCard name="best low price" content="lorem ipsum" />
        <HomeContentCard name="sale" content="lorem ipsum" />
      </div>
      <div className="featured-product">
        <div className="featured-product-heading">
          <div className="heading-lines1"></div>
          <div>
            <h1>Featured Product</h1>
          </div>
          <div className="heading-lines2"></div>
        </div>
        <div className="scrollbutton">v</div>
        <div className="featured-product-cards">
          <FeaturedCards />
          <FeaturedCards />
          <FeaturedCards />
          <FeaturedCards />
          <FeaturedCards />
          <FeaturedCards />
          <FeaturedCards />
        </div>
        <div className="scrollbutton1">v</div>
      </div>
      <Comments />
      <div className="featured-product">
        <div className="featured-product-heading">
          <div className="heading-lines1"></div>
          <div>
            <h1>Our Product</h1>
          </div>
          <div className="heading-lines2"></div>
        </div>
        <div className="scrollbutton">v</div>
        <div className="featured-product-cards">
          <OurProductsCard />
          <OurProductsCard />
          <OurProductsCard />
          <OurProductsCard />
          <OurProductsCard />
          <OurProductsCard />
        </div>
        <div className="scrollbutton1">v</div>
      </div>
      <div className="newarrivals-bestsellers">
        <div className="newarrivals">
          <h3>Lorem, ipsum.</h3>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
            reiciendis?
          </p>
        </div>
        <div className="bestsellers">
          <h3>Lorem, ipsum.</h3>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
            reiciendis?
          </p>
        </div>
      </div>
      <div className="additions">
        <div>
          <p>lorem</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <p>lorem</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <p>lorem</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="lastestBlog">
        <div className="featured-product-heading">
          <div className="heading-lines1"></div>
          <div>
            <h1>Latest Blogs</h1>
          </div>
          <div className="heading-lines2"></div>
        </div>
      </div>
      <div className="latest-blog-content">
        <div className="latest-blog1">
          <div className="latest-blog-image"></div>
          <div className="latest-blog-text">
            <h6>Lorem, ipsum dolor.</h6>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quam officia pariatur vero placeat corrupti!
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="latest-blog2">
          <div className="latest-blog-image"></div>
          <div className="latest-blog-text">
            <h6>Lorem, ipsum dolor.</h6>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur consequatur reiciendis tenetur delectus animi
              laboriosam!
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <div className="seperation-line">
        <div></div>
      </div>
      <div className="subscribe">
        <div>
          <div>Lorem ipsum dolor sit.</div>
          <div>Lorem ipsum dolor sit amet consectetur.</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            ut.
          </div>
        </div>
        <div className="subscribe-input">
          <input placeholder="email address" type="text" />
          <button>V</button>
        </div>
      </div>
    </motion.div>
  );
}
