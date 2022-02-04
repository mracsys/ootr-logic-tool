import React from 'react';
import Menu from '@mui/material/Menu';

import OotIcon from './OotIcon';

class ItemMenu extends React.Component {
    render() {
        return (
            <Menu
                id={this.props.id}
                anchorEl={this.props.anchorLocation}
                open={Boolean(this.props.anchorLocation)}
                onClose={this.props.handleClose}
                className='locationItemMenu'
                TransitionProps={{ timeout: 0, unmountOnExit: true, }}
                disableScrollLock={true}
                classes={{paper: 'itemMenuPaper'}}
            >
                <div className='itemMenuRow'>
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Deku Stick Capacity" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Deku Nut Capacity" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Bomb Bag" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Bow" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Fire Arrows" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Dins Fire" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Kokiri Sword" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Master Sword" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Biggoron Sword" />
                </div>
                <div className='itemMenuRow'>
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Slingshot" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Ocarina" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Bombchu" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Progressive Hookshot" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Ice Arrows" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Farores Wind" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Deku Shield" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Hylian Shield" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Mirror Shield" />
                </div>
                <div className='itemMenuRow'>
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Boomerang" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Lens of Truth" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Magic Beans" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Megaton Hammer" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Light Arrows" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Nayrus Love" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Progressive Strength Upgrade" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Goron Tunic" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Zora Tunic" />
                </div>
                <div className='itemMenuRow'>
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Bottle" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Bottle with Letter" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Bottle with Big Poe" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Bottle" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Adult Trade Item" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Child Trade Item" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Progressive Scale" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Iron Boots" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Hover Boots" />
                </div>
                <div className='itemMenuRow'>
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Zeldas Lullaby" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Eponas Song" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Sarias Song" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Sun Song" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Song of Time" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Song of Storms" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Progressive Wallet" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Magic Meter" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Gold Skulltula Token" />
                </div>
                <div className='itemMenuRow'>
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Minuet of Forest" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Bolero of Fire" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Serenade of Water" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Requiem of Spirit" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Nocturne of Shadow" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Prelude of Light" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Gerudo Membership Card" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Stone of Agony" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Piece of the Triforce" />
                </div>
                <div className='itemMenuRow'>
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Small Key (Forest Temple)" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Small Key (Fire Temple)" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Small Key (Water Temple)" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Small Key (Spirit Temple)" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Small Key (Shadow Temple)" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Small Key (Ganons Castle)" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Small Key (Bottom of the Well)" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Small Key (Gerudo Training Ground)" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Small Key (Gerudo Fortress)" />
                </div>
                <div className='itemMenuRow'>
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Boss Key (Forest Temple)" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Boss Key (Fire Temple)" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Boss Key (Water Temple)" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Boss Key (Spirit Temple)" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Boss Key (Shadow Temple)" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Boss Key (Ganons Castle)" />
                    <div style={{width: "48px"}} />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Small Key (???)" />
                    <OotIcon onClick={this.props.onItemClick} currentItem={this.props.currentItem} itemName="Boss Key (???)" />
                </div>
                <div className='itemMenuRow'>
                    <div className='itemMenuClear' onClick={(e) => this.props.onItemClick(e, "", this.props.currentItem)}>
                        <p className='locationMenuClear'>Clear Item</p>
                    </div>
                </div>
            </Menu>
        );
    }
}

export default ItemMenu