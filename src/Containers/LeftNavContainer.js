import {Container} from 'unstated';

export default class LeftNavContainer extends Container {

    state = {
        open: false,
        selected: 'Home'
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    setSelectedTab = (tab) => {
        this.setState({selected: tab});
    }

}
