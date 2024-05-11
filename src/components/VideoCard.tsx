interface VideoCardTypes {
  title: string;
  author:string;
  views:string;
  days:string;
  image:string;
  thumbImage: string;
}
export const VideoCard = ({title, author,image, thumbImage,  views, days}: VideoCardTypes) => {
  return(
    <div className="">
      <img  className="rounded-lg max-w-sm" src={image} alt="" />
      <div className="grid grid-cols-12" >
        <div className="grid col-span-1 pt-2 ">
          <img  className="rounded-full w-12 h-12" src={thumbImage} alt="" />
        </div>
        <div className="grid col-span-11 text-gray-500 pt-2">
          <div className="pl-2 text-white font-semibold">
            {title}
          </div>
          <div className="pl-2  text-gray-600">
            {author}
          </div>
          <div className="pl-2 text-gray-600">
            {views} views | {days} days ago
          </div>        
        </div>
      </div>
    </div>
  )
}

