

const Cover = ({img, title}) => {
    return (
        <div className="hero min-h-screen mb-24" style={{backgroundImage: `url("${img}")`}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-outline border-0 border-b-4 mt-2 text-white ">ORDER NOW</button>
      
    </div>
  </div>
</div>
    );
};

export default Cover;