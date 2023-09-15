

const Aside = ({coUrseName,totalCredits,credit}) => {
    return (
        <div className="bg-gray-100 rounded-xl w-56 p-4">
           <h1 className="text-base text-blue-500">Credit Hour Remaining {credit} hr</h1>
           <hr />
           <ol type="1">
           {
            coUrseName.map((card, idx)=><li idx={idx}>{card.course_title}</li>)
           }
           </ol>
           <hr />
           <p>Total credit {totalCredits}</p>
        </div>
    );
};

export default Aside;