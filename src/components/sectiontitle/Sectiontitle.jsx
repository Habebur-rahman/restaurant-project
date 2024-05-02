

const Sectiontitle = ({subHeading, heading}) => {
    return (
        <div className="mx-auto text-center md:w-3/12  mb-12">
            <h4 className="text-yellow-600 mb-3">--- {subHeading} ---</h4>
            <h3 className="text-3xl uppercase border-y-4 py-2">{heading}</h3>
        </div>
    );
};

export default Sectiontitle;