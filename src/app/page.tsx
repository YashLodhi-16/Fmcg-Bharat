// all import statements
import ImageSlider from "@/components/tsx/ImageSlider";
import BasicLayout from "@/components/tsx/BasicLayout";
import InfoArticle from "@/components/tsx/InfoArticle";
import Features from "@/components/tsx/Features";
import Testimonials from "@/components/tsx/Testimonials";
import ProductSlider from "@/components/tsx/ProductSlider";
import Search from "@/components/tsx/Search";
import Link from "next/link";
import Main from "@/components/tsx/Main";
import { FeatureDetails } from "@/lib/interfaces/Feature";
import { Review } from "@/lib/interfaces/Review";
import Summary from "@/components/tsx/Summary";
import { BaseProduct } from "@/lib/interfaces/Product";
import ProductCard from "@/components/tsx/ProductCard";
import CardsHolder from "@/components/tsx/CardsHolder";
import ProductsWrapper from "@/components/tsx/ProductsWrapper";
import Navbar from "@/components/tsx/common/Navbar";
import MiniWrapper from "@/components/tsx/wrapper/MiniWrapper";

// page - home
export default async function Home() {
  // image slider links
  const images: string[] = [
    "https://res.cloudinary.com/dblq992uw/image/upload/v1729089691/Public/slider/lg/first-slider_eewvx3.png",
    "https://res.cloudinary.com/dblq992uw/image/upload/v1729089692/Public/slider/lg/second-slider_lv7iaf.png",
    "https://res.cloudinary.com/dblq992uw/image/upload/v1729089694/Public/slider/lg/three-slider_woq4rv.png",
    "https://res.cloudinary.com/dblq992uw/image/upload/v1729089696/Public/slider/lg/four-slider_bnxjkt.png",
    "https://res.cloudinary.com/dblq992uw/image/upload/v1729089688/Public/slider/lg/five-slider_pygkx8.png",
    "https://res.cloudinary.com/dblq992uw/image/upload/v1729089688/Public/slider/lg/six-slider_w0o1rr.png",
  ];

  // data for info article
  const paragraph: string[] = [
    "FMCG Bharat is an emerging e-commerce platform dedicated to providing a wide range of fast-moving consumer goods (FMCG) to customers across India. With a focus on quality, affordability, and convenience, FMCG Bharat aims to simplify shopping by offering products from trusted brands in categories such as groceries, personal care, household items, and more. ",
    "Committed to serving the diverse needs of Indian consumers, FMCG Bharat is designed to make online shopping accessible and reliable. Through an easy-to-navigate website and a growing product range, it caters to urban and rural customers alike. ",
  ];

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_DEV_API}/api/products/top-products`,
  //   {
  //     method: "GET",
  //   }
  // );
  // const { products } = await res.json();
  // const temp = Array.from({ length: 8 }, (_, index) => products[0]);

  // features
  const featuresData: FeatureDetails[] = [
    {
      logo: "https://res.cloudinary.com/dblq992uw/image/upload/v1729353231/Public/icons/home/icon-1_knd7t5.png",
      heading: "free shiping",
      paragraph: "from all orders over &#8377;1500",
    },
    {
      logo: "https://res.cloudinary.com/dblq992uw/image/upload/v1729353280/Public/icons/home/icon-2_iawdtc.png",
      heading: "free return policy",
      paragraph: "retun money within 30 days",
    },
    {
      logo: "https://res.cloudinary.com/dblq992uw/image/upload/v1729353295/Public/icons/home/icon-3_zkcsjr.png",
      heading: "secure shopping",
      paragraph: "youre in safe hands",
    },
    {
      logo: "https://res.cloudinary.com/dblq992uw/image/upload/v1729353307/Public/icons/home/icon-4_kcijlc.png",
      heading: "more than 100+ products",
      paragraph: "we have everything you need",
    },
  ];

  // testimonials
  const reviews: Review[] = [
    {
      review:
        "I love shopping at FMCG Bharat! The selection of products is impressive, and I can find everything I need in one place. Fast delivery and great customer service make the experience even better!",
      user: {
        logo: "https://randomuser.me/api/portraits/men/47.jpg",
        username: "virat",
      },
      length: 5,
    },
    {
      review:
        "FMCG Bharat offers fantastic deals on everyday essentials. I appreciate the competitive prices and special discounts on bulk purchases. It's my go-to site for grocery shopping!",
      user: {
        logo: "https://randomuser.me/api/portraits/men/48.jpg",
        username: "himanshu",
      },
      length: 4,
    },
    {
      review:
        "The website is easy to navigate, and the checkout process is seamless. I appreciate the detailed product descriptions and images. Shopping has never been easier!",
      user: {
        logo: "https://randomuser.me/api/portraits/men/49.jpg",
        username: "mohan",
      },
      length: 5,
    },
    {
      review:
        "FMCG Bharat has been my go-to platform for all my household needs. The product selection is fantastic, and delivery is always prompt.",
      user: {
        logo: "https://randomuser.me/api/portraits/women/50.jpg",
        username: "sonali",
      },
      length: 5,
    },
  ];

  // product slider instance - 1
  const laptop: BaseProduct[] = [
    {
      colorImages: [
        {
          url: [
            "https://m.media-amazon.com/images/I/41n6UmDhUAL._SR480,440_.jpg",
          ],
          color: "black",
          colorCode: "#000000",
        },
      ],
      discount: 10,
      actualPrice: 40000,
      name: "lenevo idea pad",
      _id: "0",
      currentPrice: 33500,
    },
    {
      colorImages: [
        {
          url: [
            "https://m.media-amazon.com/images/I/51+U6oOCx4L._SR480,440_.jpg",
          ],
          colorCode: "#000000",
          color: "black",
        },
      ],
      _id: "1",
      discount: 20,
      actualPrice: 45000,
      name: "lenevo loq",
      currentPrice: 40000,
    },
    {
      colorImages: [
        {
          url: [
            "https://m.media-amazon.com/images/I/41Bmui2T3TL._SR480,440_.jpg",
          ],
          colorCode: "#000000",
          color: "black",
        },
      ],
      _id: "2",
      currentPrice: 30000,

      discount: 0,
      actualPrice: 20000,
      name: "acer aspire lite",
    },
    {
      colorImages: [
        {
          url: [
            "https://m.media-amazon.com/images/I/41kL568TQRL._SR480,440_.jpg",
          ],
          colorCode: "#000000",
          color: "black",
        },
      ],
      _id: "4",
      discount: 50,
      actualPrice: 45000,
      currentPrice: 38000,
      name: "hp blacklite",
    },
    {
      colorImages: [
        {
          url: [
            "https://m.media-amazon.com/images/I/41Zqi0HTGrL._SR480,440_.jpg",
          ],
          colorCode: "#000000",
          color: "black",
        },
      ],
      _id: "5",
      discount: 60,
      actualPrice: 75000,
      currentPrice: 60000,
      name: "hp victus",
    },
    {
      colorImages: [
        {
          url: [
            "https://m.media-amazon.com/images/I/41iiFgYZkZL._SR480,440_.jpg",
          ],
          colorCode: "#000000",
          color: "black",
        },
      ],
      _id: "5",
      discount: 70,
      currentPrice: 30000,
      actualPrice: 100000,
      name: "dell insprion",
    },
    {
      colorImages: [
        {
          url: [
            "https://m.media-amazon.com/images/I/41Aw8+krn+L._SR480,440_.jpg",
          ],
          colorCode: "#000000",
          color: "black",
        },
      ],
      _id: "5",
      discount: 25,
      actualPrice: 75000,
      currentPrice: 56250,
      name: "asus tuf f15",
    },
  ];

  // product slider instance - 2
  const mobile: BaseProduct[] = [
    {
      colorImages: [
        {
          url: [
            "https://m.media-amazon.com/images/I/71xNcjUwEfL._AC_UY327_FMwebp_QL65_.jpg",
          ],
          color: "black",
          colorCode: "#000000",
        },
      ],
      _id: "5",
      discount: 12,
      actualPrice: 22999,
      name: "agni 3 5g",
      currentPrice: 20239,
    },
    {
      colorImages: [
        {
          url: [
            "https://m.media-amazon.com/images/I/81scQ7qlPuL._AC_UY327_FMwebp_QL65_.jpg",
          ],
          colorCode: "#000000",
          color: "black",
        },
      ],
      _id: "5",
      discount: 23,
      actualPrice: 13000,
      name: "tecno pop 9 5g",
      currentPrice: 10010,
    },
    {
      colorImages: [
        {
          url: [
            "https://m.media-amazon.com/images/I/81T3olLXpUL._AC_UY327_FMwebp_QL65_.jpg",
          ],
          colorCode: "#000000",
          color: "black",
        },
      ],
      _id: "5",
      discount: 29,
      actualPrice: 17000,
      name: "samsung galaxy m15",
      currentPrice: 12070,
    },
    {
      colorImages: [
        {
          url: [
            "https://m.media-amazon.com/images/I/71r0Ysx+oVL._AC_UY327_FMwebp_QL65_.jpg",
          ],
          colorCode: "#000000",
          color: "black",
        },
      ],
      _id: "5",
      discount: 23,
      actualPrice: 11000,
      name: "realme narzo n61",
      currentPrice: 8470,
    },
    {
      colorImages: [
        {
          url: [
            "https://m.media-amazon.com/images/I/71EN6N9kUEL._AC_UY327_FMwebp_QL65_.jpg",
          ],
          colorCode: "#000000",
          color: "black",
        },
      ],
      _id: "5",
      discount: 23,
      actualPrice: 11000,
      name: "realme narzo n61",
      currentPrice: 8470,
    },
    {
      colorImages: [
        {
          url: [
            "https://m.media-amazon.com/images/I/51Zjp5fq1EL._AC_UY327_FMwebp_QL65_.jpg",
          ],
          colorCode: "#000000",
          color: "black",
        },
      ],
      _id: "5",
      discount: 35,
      actualPrice: 11000,
      name: "poco c65",
      currentPrice: 7150,
    },
    {
      colorImages: [
        {
          url: [
            "https://m.media-amazon.com/images/I/71scmEdSC2L._AC_UY327_FMwebp_QL65_.jpg",
          ],
          colorCode: "#000000",
          color: "black",
        },
      ],
      _id: "5",
      discount: 39,
      actualPrice: 14000,
      name: "redmi 13c",
      currentPrice: 8540,
    },
  ];

  return (
    <div className="">
      <Navbar />

      {/* hero section */}
      <Main
        href="/products"
        link="see products"
        src="https://res.cloudinary.com/dblq992uw/image/upload/v1729161520/Public/hero-images/main_tr30gn.png"
        paragraph="FMCG Bharat makes online shopping effortless, bringing the best
              products to your door at unbeatable prices. Explore hundreds of
              products with ease, from trusted brands you love."
        key={1}
      >
        <span className="block">
          fmcg <span className="text-teal-500">bharat</span>
        </span>
        <span>you shop, we deliver</span>
        <Link href="/blogs" className="text-blue-600">
          See how fmcg bharat works &nbsp;{">"}
        </Link>
      </Main>

      {/* image slider */}
      <BasicLayout paddingTop={false}>
        <ImageSlider images={images} autoScroll={true} key={0} />
      </BasicLayout>

      {/* image slider */}
      <BasicLayout paddingTop={false}>
        <InfoArticle
          heading="Breif about fmcg Bharat"
          paragraph={paragraph}
          imageAlt="main-logo"
          imageSrc={process.env.NEXT_PUBLIC_MAIN_ICON}
        />
      </BasicLayout>

      {/* top products */}
      <BasicLayout paddingTop={false}>
        <MiniWrapper>
          <Summary
            heading="Top Products"
            paragraph="some of the top products"
          />
          <ProductsWrapper />
        </MiniWrapper>
      </BasicLayout>

      {/* laptop slider */}
      {/* <BasicLayout paddingTop={false}>
        <MiniWrapper>
          <Summary heading="deals on laptops" paragraph="" />
          <ProductSlider products={laptop} />
        </MiniWrapper>
      </BasicLayout> */}

      {/* mobile slider */}
      {/* <BasicLayout paddingTop={false}>
        <MiniWrapper>
          <Summary heading="deals on mobile" paragraph="" />
          <ProductSlider products={mobile} />
        </MiniWrapper>
      </BasicLayout> */}

      {/* search */}
      <BasicLayout paddingTop={false}>
        <Search />
      </BasicLayout>

      {/* Testimonials */}
      <BasicLayout paddingTop={false}>
        <MiniWrapper>
          <Summary
            heading="testimonials"
            paragraph="Real stories from satisfied customers."
          />
          <Testimonials reviews={reviews} />
        </MiniWrapper>
      </BasicLayout>

      {/* features */}
      <BasicLayout paddingTop={false}>
        <MiniWrapper>
          <Summary
            heading="our features"
            paragraph="some of the main features"
          />
          <Features featuresData={featuresData} />
        </MiniWrapper>
      </BasicLayout>
    </div>
  );
}
