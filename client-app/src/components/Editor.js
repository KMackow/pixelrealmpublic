import React from 'react';
import './Editor.css';
import SectionMap from './SectionMap';
import Toolbox from './Toolbox';
import Mountain from '../assets/mountain.png';
import Tree from '../assets/tree.png';
import { grid } from '../api';
import toastr from 'toastr';

const deleteCellContents = (mapContents, x, y) => mapContents.filter((c) => c.x !== x || c.y !== y)
const createElementAction = (element) => (map, x, y) => checkEmpty(map, x, y) ? [...map, { x, y, type: element}] : map;
const checkEmpty = (map, x, y) => !!!(map.find(c => c.x === x && c.y === y));

const TOOL_DELETE = { id: 'TOOL_DELETE', text: 'Delete', action: deleteCellContents };
const TOOL_FOREST = { id: 'FOREST', text: 'Forest', action: createElementAction('FOREST'), icon: Tree };
const TOOL_MOUNTAIN = { id: 'MOUNTAIN', text: 'Mountain', action: createElementAction('MOUNTAIN'), icon: Mountain };
const TOOL_CITY = { id: 'CITY', text: 'City', type: 'element', action: createElementAction('CITY') };

const tools = [
  TOOL_DELETE,
  TOOL_FOREST,
  TOOL_MOUNTAIN,
  TOOL_CITY
];

const toolKit = [
  {
    name: 'General',
    tools: [
      TOOL_DELETE      
    ]
  },
  {
    name: 'Nature',
    tools: [
      TOOL_FOREST,
      TOOL_MOUNTAIN
    ]
  },
  {
    name: 'Civilisation',
    tools: [
      TOOL_CITY
    ]
  }
];



class Editor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedToolId: null,
      mapContents: this.props.contents,
      id: 0
    };
  }

  handleToolChange = (toolId) => {
    this.setState({selectedToolId: toolId});
  }

  handleCellClick = (x, y) => { 
    const tool = tools.find(t => t.id === this.state.selectedToolId);
    if (tool) {
      this.setState({mapContents: tool.action(this.state.mapContents, x, y) });
    }
  }

  handleSaveClick = () => {
    if (this.state.id === 0) {
      grid
        .create(this.state.mapContents)
        .then(response => response.json())
        .then(data => {
          this.setState({ id: data.id });
          toastr.success('Created grid successfully');
        });
    }
    else {
      grid
        .update(this.state.id, this.state.mapContents)
        .then(_ => toastr.success('Grid updated successfully successfully'));
    }
  }

  render() {
    return (
      <div className='editor'>
        <div className='editor-main-pane'>
          <SectionMap
            contents={this.state.mapContents}
            size={600}
            resolution={10}
            cellClicked={this.handleCellClick}
          />
        </div>
        <div className='editor-side-pane'>
          <Toolbox
            toolKit={toolKit}
            selectTool={this.handleToolChange}
            selectedToolId={this.state.selectedToolId}
          />
          <button onClick={this.handleSaveClick}>Save</button>
        </div>
      </div>
    );
  }
}

export default Editor;
