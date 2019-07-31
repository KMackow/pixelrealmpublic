import React from 'react';
import grass from '../assets/grass.png';
import mountain from '../assets/mountain.png';
import tree from '../assets/tree.png';
import './SectionMap.css';


const sprites = {
  MOUNTAIN: mountain,
  FOREST: tree
};

class SectionMap extends React.Component {
  
  checkCoord = (x,y) => (item) => item.x === x && item.y === y;

  handleClick(x, y) {
    this.props.cellClicked(x, y);
  }  

  makeClickHandler = (x, y) => () => this.handleClick(x, y);

  render() {
    const cells = [];

    for(var y = 0; y < this.props.resolution; y++) {
      for (var x = 0; x < this.props.resolution; x++) {
        var content = this.props.contents.find(this.checkCoord(x, y));
        cells.push(
          <div 
            key={`${x},${y}`}
            className='map-cell'
            onClick={this.makeClickHandler(x, y)}
          >
            { content && (sprites[content.type] ? <img src={sprites[content.type]}/> : content.type[0]) }
          </div>);
      }
    }

    return (
      <div>
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${this.props.resolution}, 1fr)`,
          gridTemplateRows: `repeat(${this.props.resolution}, 1fr)`,
          backgroundImage: `url(${grass})`, 
          backgroundRepeat: "repeat",
          width: this.props.size, 
          height: this.props.size}}
        >
          {cells}
        </div>
      </div>
    );
  }
}

export default SectionMap;
