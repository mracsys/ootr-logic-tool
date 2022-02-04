import * as React from 'react';
import clone from 'lodash/clone';

import { EditableLabelModel } from './EditableLabelModel';
import ItemMenu from './ItemMenu';
import OotIcon from './OotIcon';

export interface FlowAliasLabelWidgetProps {
	model: EditableLabelModel;
}

// now we can render all what we want in the label
export const EditableLabelWidget: React.FunctionComponent<FlowAliasLabelWidgetProps> = (props) => {
	const [logicArray, setLogicArray] = React.useState(props.model.value);
    const [showMenu, setShowMenu] = React.useState<null | HTMLElement>();
    const [showAddMenu, setShowAddMenu] = React.useState<null | HTMLElement>();

    const handleLogicMenu = (event: React.MouseEvent<HTMLButtonElement>, logicItem: string, oldItem: string) => {
        event.preventDefault();
        const modelArray = clone(props.model.value);
        if (oldItem !== '' && modelArray.includes(oldItem)) {
            const index = modelArray.indexOf(oldItem, 0);
            if (index > -1) {
                modelArray.splice(index, 1);
            }
        }
        if (logicItem !== '') {
            modelArray.push(logicItem);
        }
        setLogicArray(modelArray);
        props.model.value = modelArray;
        setShowMenu(null);
        setShowAddMenu(null);
    };

    const handleMenuClose = () => {
        setShowMenu(null);
    }

    const handleAddMenuClose = () => {
        setShowAddMenu(null);
    }

	return (
		<div className='edgeLabel'>
            {logicArray.map((logicItem, logicKey) => {
                return (
                <div key={logicKey}>
                    <button
                        className='edgeButton edgeItemButton'
                        onClick={(event) => {
                            event.preventDefault();
                            setShowMenu(event.currentTarget);
                        }}
                    >
                        <OotIcon itemName={logicItem} />
                    </button>
                    <ItemMenu
                        id={"changeLogicMenu"+logicItem+logicKey}
                        anchorLocation={showMenu}
                        onItemClick={handleLogicMenu}
                        currentItem={logicItem}
                        handleClose={handleMenuClose}
                    />
                </div>
            )})}
            <button
                className='edgeButton edgeNewButton'
                onClick={(event) => {
                    event.preventDefault();
                    setShowAddMenu(event.currentTarget);
                }}
            >
                +
            </button>
            <ItemMenu
                id="addLogicMenu"
                anchorLocation={showAddMenu}
                onItemClick={handleLogicMenu}
                currentItem=""
                handleClose={handleAddMenuClose}
            />
		</div>
	);
};