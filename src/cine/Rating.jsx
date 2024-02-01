import Star from "/assets/star.svg";
const Rating = ({ ratingCount }) => {
  const stars = Array(ratingCount).fill(Star);
  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={Star} width={14} height={14} alt="" />
      ))}
    </>
  );
};

export default Rating;
