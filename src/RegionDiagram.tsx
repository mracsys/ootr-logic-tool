import createEngine, { 
    DefaultLinkModel, 
    DefaultNodeModel,
    DiagramModel 
} from '@projectstorm/react-diagrams';

import {
    CanvasWidget
} from '@projectstorm/react-canvas-core';

import { EditableLabelFactory } from './EditableLabelFactory';
import { EditableLabelModel } from './EditableLabelModel';

import './RegionDiagram.css';

function RegionDiagram() {
    // create an instance of the engine with all the defaults
    const engine = createEngine();
    engine.getLabelFactories().registerFactory(new EditableLabelFactory());
    const model = new DiagramModel();

    // node 1
    const node1 = new DefaultNodeModel({
        name: 'Node 1',
        color: 'rgb(0,192,255)',
    });
    node1.setPosition(100, 100);
    let port1 = node1.addOutPort('Out');

    // node 2
    const node2 = new DefaultNodeModel({
        name: 'Node 2',
        color: 'rgb(192,255,0)',
    });
    node2.setPosition(800, 300);
    let port2 = node2.addInPort('In');

    // link them and add a label to the link
    const link1 = port1.link<DefaultLinkModel>(port2);
    
    // custom label
    link1.addLabel(
        new EditableLabelModel({
            value: ['Progressive Hookshot']
        })
    );

    // add models to root graph and load into engine
    model.addAll(node1, node2, link1);
    engine.setModel(model);

    // button function to export diagram to JSON string
    const serializeModel = () => {
        let model = engine.getModel();
        console.log(JSON.stringify(model.serialize()));
    };

    // render diagram
    return (
        <div>
            <CanvasWidget className="canvas" engine={engine} />
        </div>
    );
}

export default RegionDiagram;