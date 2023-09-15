

const Aside = ({coUrseName}) => {
    return (
        <div className="bg-gray-100 rounded-xl w-56 p-4">
           <h1 className="text-base text-blue-500">Credit Hour Remaining 7 hr</h1>
           {
            coUrseName.map(card=><p>{card.course_title}</p>)
           }
        </div>
    );
};

export default Aside;