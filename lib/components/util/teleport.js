import * as React from "react";
import { Is } from "utility-collection";
export class Teleport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        // Teleport.registerSource(this);
        // Teleport.registerSource(this);
    }
    componentWillUnmount() {
        // Teleport.unregisterSource(this);
    }
    componentWillUpdate() {
        if (Teleport.getSource(this.props.target) !== this) {
            Teleport.registerSource(this);
        }
        TeleportTarget.update(this.props.target);
    }
    render() {
        // Teleport.registerSource(this); // this can't be here. Enable back if bug
        // TeleportTarget.update(this.props.target);
        return null;
    }
}
(function (Teleport) {
    const sources = {};
    function registerSource(source) {
        sources[source.props.target] = source;
        TeleportTarget.update(source.props.target);
    }
    Teleport.registerSource = registerSource;
    function unregisterSource(source) {
        delete sources[source.props.target];
        TeleportTarget.update(source.props.target);
    }
    Teleport.unregisterSource = unregisterSource;
    function getSource(targetId) {
        if (!Is.nullOrUndefined(sources[targetId])) {
            return sources[targetId];
        }
        else {
            return null;
        }
    }
    Teleport.getSource = getSource;
})(Teleport || (Teleport = {}));
export class TeleportTarget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        TeleportTarget.registerTeleport(this);
    }
    componentWillUnmount() {
        TeleportTarget.unregisterTeleport(this);
    }
    render() {
        const source = Teleport.getSource(this.props.id);
        if (!Is.nullOrUndefined(source)) {
            return source.props.children || null;
        }
        else {
            return null;
        }
    }
}
(function (TeleportTarget) {
    const targets = {};
    function registerTeleport(target) {
        delete targets[target.props.id];
        targets[target.props.id] = target;
    }
    TeleportTarget.registerTeleport = registerTeleport;
    function unregisterTeleport(target) {
        //
    }
    TeleportTarget.unregisterTeleport = unregisterTeleport;
    function update(targetId) {
        if (!Is.nullOrUndefined(targets[targetId])) {
            targets[targetId].forceUpdate();
        }
    }
    TeleportTarget.update = update;
})(TeleportTarget || (TeleportTarget = {}));
//# sourceMappingURL=teleport.js.map