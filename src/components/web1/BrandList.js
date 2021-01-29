import React from 'react';
import ReactDOM from 'react-dom';
import '../css/BrandList.css';

const ItemList =
[
  {"Brand": "Alfa Romeo", "Link": "51r7k3hiuc4cnh2r1kjqihn96.jpg"},
  {"Brand": "Alpina", "Link": "gnyr6o51m0yxt22ikwkl4j4ha.png"},
  {"Brand": "Audi", "Link": "9poce3mpqe2d837l7jys76ur1.png"},
  {"Brand": "Bentley", "Link": "qwx6b71ive8u6rb86fh1ud9p4.png"},
  {"Brand": "BMW", "Link": "t06dqdylwi06uzegwt5fsqsj8.png"},
  {"Brand": "Chrysler", "Link": "ys7trppjin0g8efq8s2ud2wp1.png"},
  {"Brand": "Genesis", "Link": "gy6ov73i47ls8l0znebeop8k.png"},
  {"Brand": "Honda", "Link": "gc4908891957542578535p.png"},
  {"Brand": "Hyundai", "Link": "qy4lm26bky2kevgdxv7shd9f3.png"},
  {"Brand": "Jaguar", "Link": "gc4752468282312805277p.png"}

];

const Link = "https://carsales.pxcrush.net/carsales/general/content/";

class Element extends React.Component {
  render() {
    return (
      <a href="/new-cars/sedan/alfa-romeo/" data-role="filter-brand-item" title={this.props.brand} className="item square border rounded" data-webm-clickvalue="filter-makes">
        <img src={Link + this.props.link + "?width=120&height=120"} alt={this.props.brand}/>
        <span>
          {this.props.brand}
        </span>
      </a>
    );
  }
}

function BrandList() {
  return (

    <div className="items clearfix expanded" data-role="filter-brand">
      {ItemList.map((ItemList) => (
        <Element brand={ItemList.Brand} link={ItemList.Link}/>
      ))}
    </div>


  );
}

export default BrandList;
