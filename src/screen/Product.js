import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "../context";
import starCreator from "../utils/StarCreator";
import Spinner from "../components/Spinner";
import Container from "../components/Container";
import ImageGallery from "../components/ProductComponents/ImageGallery";
import ReviewItem from "../components/ProductComponents/ReviewItem";
import DeliveryStuff from "../components/ProductComponents/DeliveryStuff";
import ProductFeatures from "../components/ProductComponents/ProductFeatures";
import ScreenInfo from "../components/ProductComponents/ScreenInfo";
import ProgressBar from "../components/ProductComponents/ProgressBar";
import CPU from "../components/ProductComponents/CPU";
import StorageOptions from "../components/ProductComponents/StorageOptions";

//Return the average of the review scores
function SumRating(reviews) {
  return (
    reviews.reduce((somma, review) => somma + review.rating, 0) / reviews.length
  ).toFixed(1);
}

// Progress bar placeholder data
const dataReview = [
  { label: "Excellent", percentage: 100 },
  { label: "Good", percentage: 50 },
  { label: "Average", percentage: 30 },
  { label: "Below Average", percentage: 70 },
  { label: "Poor", percentage: 10 },
];

const Product = () => {
  //Get ID from useNavigate
  const { id } = useParams();
  const { data, isLoading, isError, ChangeGlobalURL, AddProductToCart } =
    useGlobalContext();

  //Use Fetch from global context
  useEffect(() => {
    ChangeGlobalURL(`/${id}`);
  }, []);

  //Show Spinner on loading
  if (isLoading || !data || !data.title) {
    return (
      <div className="mt-[53px] text-3xl">
        <Spinner />
      </div>
    );
  }

  const { title, description, price, images = [], reviews } = data;

  return (
    <Container className="mt-[133px] px-4 lg:px-40">
      <div className="lg:flex">
        {/* img section */}
        <ImageGallery images={images} title={title} />

        <div className="lg:flex-1">
          <section>
            <h1 className="mb-6 text-4xl font-bold">{title}</h1>
            <p className="mb-4 text-3xl font-medium">${price}</p>
            <div className="flex items-center mb-6 gap-7">
              <p>Select Color:</p>
              <ul className="flex gap-2">
                <li className="w-8 h-8 rounded-[50%] bg-black"></li>
                <li className="w-8 h-8 rounded-[50%] bg-purple-600"></li>
                <li className="w-8 h-8 rounded-[50%] bg-red-600"></li>
                <li className="w-8 h-8 rounded-[50%] bg-orange-400"></li>
                <li className="w-8 h-8 rounded-[50%] bg-gray-400"></li>
              </ul>
            </div>
            {/* Storage options */}
            <StorageOptions />
            {/* Product datails in block */}
            <ProductFeatures />
          </section>
          <div className="flex flex-col gap-4 mb-8 md:flex-row">
            <button className="w-full py-4 border border-black rounded-md">
              Add to wishlist{" "}
            </button>
            <button
              className="w-full py-4 text-white bg-black border rounded-md"
              onClick={() => AddProductToCart(data)}
            >
              Add to Card{" "}
            </button>
          </div>
          {/* Delivery condition */}
          <section className="flex justify-between gap-5 mb-9">
            <DeliveryStuff></DeliveryStuff>
          </section>
        </div>
      </div>
      {/* Screen details */}
      <section>
        <ScreenInfo />
      </section>
      {/* General details */}
      <section className="mt-12 mb-8 ">
        <h1 className="mb-8 text-3xl">Details</h1>
        <p className="text-secondary">{description}</p>
      </section>
      {/* CPU details */}
      <section>
        <CPU />
      </section>

      {/* Reviews Section */}
      <section className="my-9">
        <h1 className="mb-8 text-3xl">Reviews</h1>
        <div className="lg:flex gap-14">
          <div className="mb-14">
            <div className="flex gap-4 items-center bg-[#FAFAFA] w-fit p-8 rounded-3xl mx-auto lg:flex-col">
              <div className="lg:text-center">
                <h1 className="mb-4 text-5xl">{SumRating(reviews)}</h1>
                <p className="text-secondary">of {reviews.length} reviews</p>
              </div>
              <div className="flex gap-1">
                {starCreator(SumRating(reviews))}
              </div>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto mb-12">
            {dataReview.map((item, index) => (
              <ProgressBar
                key={index}
                label={item.label}
                percentage={item.percentage}
              />
            ))}
          </div>
        </div>
        {/* People reviews */}
        <>
          {reviews.map((rev) => {
            return (
              <ReviewItem
                key={rev.reviewerName}
                review={rev}
                image={images[0]}
              ></ReviewItem>
            );
          })}
        </>
      </section>
    </Container>
  );
};

export default Product;
