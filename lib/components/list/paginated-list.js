import * as React from "react";
export class PaginatedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return React.createElement("div", { className: "" },
            React.createElement("div", { className: "" }, this.props.children));
    }
}
export default PaginatedList;
//# sourceMappingURL=paginated-list.js.map