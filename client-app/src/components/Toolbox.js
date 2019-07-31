import React from 'react';
import './Toolbox.css';

class Toolbox extends React.PureComponent {

  handleToolChange(toolId) {
    if (this.props.selectedToolId === toolId) return;
    this.props.selectTool(toolId)
  }

  render() {
    return (
      <div className='toolbox'>        
        {          
          this.props.toolKit.map(category => 
            <div key={category.name} className='toolbox-category'>
              <span className='toolbox-category__header'>
                { category.name }
              </span>
              <div className='toolbox-category__content'>
                {
                  category.tools.map(tool => {
                    const classNames = `toolbox-item${tool.id === this.props.selectedToolId ? ' toolbox-item--selected' : ''}`;
                    return (
                      <div
                        key={tool.id}
                        className={classNames}
                        onClick={() => this.handleToolChange(tool.id)}
                      >
                        {tool.icon ? <img src={tool.icon} alt={tool.text} title={tool.text} /> : tool.text}
                      </div>
                    );
                  })                
                }
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default Toolbox;
