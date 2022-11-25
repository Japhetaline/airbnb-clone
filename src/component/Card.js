import React from 'react';

function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.country === "ARAB") {
    badgeText = "ONLINE"
  }
  return (
    <div className='Card'>
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.image} alt="" className='card-image' />
      <div className="card-stats">
        <img src={props.star} alt="" className='card-star' />
        <span className='grey'>{props.rating}</span>
        <span className='grey'>{props.reviewCount} </span>
        <span>{props.country}</span>
      </div>
      <p className='card-title'>{props.title}</p>
      <p> <span className="bold">{props.amount} </span> / person</p>
    </div>
  )
}

export default Card