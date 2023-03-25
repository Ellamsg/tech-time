
export default function Courses(props){

   
    return (

    <div className=" ">
      <div className="courses border-2 rounded-[16px]  border-black bg-[#FFFFFF] p-3">
        <div className="courses-img">
            <img src={props.imageUrl}/>
        </div>
        <div className="div flex justify-between py-2">
            <div className="bg-[#1E5DCE] px-5 p-1 rounded-[18px]">
               <p>{props.topic}</p>
            </div>
            <p>47.2km</p>
        </div>
        <h1 className="text-left text-[24px] my-2 font-semibold  ">{props.title}</h1>
        <div className="div flex justify-between">
            <div>
               <p>design</p>
            </div>
            <p>47.2km</p>
        </div>
        <div className="div flex justify-between">
            <div className="flex gap-2 text-center">
              <img src={props.nameImg}/>
              <p className="pt-2 font-bold">john</p>
            </div>
            <p className="pt-2 text-[20px] font-semibold text-[#004DB3]">${props.Price}</p>
        </div>
      </div>
    </div>
    )
}