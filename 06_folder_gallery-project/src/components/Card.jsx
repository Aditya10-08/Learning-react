import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
            <div className="h-65 w-70 bg-zinc-700 rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={props.elem.download_url}
                alt="img"
              />
            </div>
            <h2 className="font-bold text-lg mt-2 mb-2">{props.elem.author}</h2>
          </a>
    </div>
  )
}

export default Card