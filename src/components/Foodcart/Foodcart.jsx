

const Foodcart = ({img, title1 ,title2}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title1}</h2>
    <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    <div className="card-actions">
    <button className="btn btn-outline border-0 border-b-4 mt-2 text-black ">{title2}</button>
    </div>
  </div>
</div>
    );
};

export default Foodcart;